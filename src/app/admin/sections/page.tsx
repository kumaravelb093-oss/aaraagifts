"use client";

import React, { useState, useEffect } from 'react';
import {
    Plus,
    Settings,
    Trash2,
    Layout,
    MoveUp,
    MoveDown,
    Eye,
    EyeOff,
    Edit3,
    MoreVertical
} from 'lucide-react';
import { db } from '@/lib/firebase';
import { collection, getDocs, addDoc, deleteDoc, doc, updateDoc, serverTimestamp, query, orderBy } from 'firebase/firestore';

interface Section {
    id: string;
    title: string;
    type: string;
    isActive: boolean;
    order: number;
    imageUrl?: string;
    href?: string;
}

export default function SectionsPage() {
    const [sections, setSections] = useState<Section[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isAdding, setIsAdding] = useState(false);
    const [editingSection, setEditingSection] = useState<Section | null>(null);
    const [activeMenuId, setActiveMenuId] = useState<string | null>(null);
    const [newSection, setNewSection] = useState({ title: '', type: 'Quick Category', imageUrl: '', href: '' });

    useEffect(() => {
        fetchSections();
    }, []);

    const fetchSections = async () => {
        setIsLoading(true);
        try {
            const q = query(collection(db, 'sections'), orderBy('order', 'asc'));
            const querySnapshot = await getDocs(q);
            const items: Section[] = [];
            querySnapshot.forEach((doc) => {
                items.push({ id: doc.id, ...doc.data() } as Section);
            });
            setSections(items);
        } catch (error) {
            console.error('Error fetching sections:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleCreate = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const docRef = await addDoc(collection(db, 'sections'), {
                ...newSection,
                isActive: true,
                order: sections.length,
                createdAt: serverTimestamp(),
            });
            setSections([...sections, { id: docRef.id, ...newSection, isActive: true, order: sections.length }]);
            setIsAdding(false);
            setNewSection({ title: '', type: 'Quick Category', imageUrl: '', href: '' });
        } catch (error) {
            console.error('Error creating section:', error);
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm('Are you sure you want to delete this section?')) return;
        try {
            await deleteDoc(doc(db, 'sections', id));
            setSections(sections.filter(s => s.id !== id));
            setActiveMenuId(null);
        } catch (error) {
            console.error('Error deleting section:', error);
        }
    };

    const toggleStatus = async (id: string, current: boolean) => {
        try {
            await updateDoc(doc(db, 'sections', id), { isActive: !current });
            setSections(sections.map(s => s.id === id ? { ...s, isActive: !current } : s));
        } catch (error) {
            console.error('Error toggling status:', error);
        }
    };

    const handleUpdate = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!editingSection) return;
        try {
            const { id, ...data } = editingSection;
            await updateDoc(doc(db, 'sections', id), data);
            setSections(sections.map(s => s.id === id ? editingSection : s));
            setEditingSection(null);
        } catch (error) {
            console.error('Error updating section:', error);
        }
    };

    const moveOrder = async (index: number, direction: 'up' | 'down') => {
        if (direction === 'up' && index === 0) return;
        if (direction === 'down' && index === sections.length - 1) return;

        const newSections = [...sections];
        const swapIndex = direction === 'up' ? index - 1 : index + 1;
        
        // Swap locally
        const temp = newSections[index].order;
        newSections[index].order = newSections[swapIndex].order;
        newSections[swapIndex].order = temp;
        [newSections[index], newSections[swapIndex]] = [newSections[swapIndex], newSections[index]];

        setSections(newSections);

        // Update in Firestore
        try {
            await Promise.all([
                updateDoc(doc(db, 'sections', newSections[index].id), { order: newSections[index].order }),
                updateDoc(doc(db, 'sections', newSections[swapIndex].id), { order: newSections[swapIndex].order })
            ]);
        } catch (error) {
            console.error('Error updating order:', error);
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h2 className="text-2xl font-bold text-gray-900">Website Sections</h2>
                    <p className="text-gray-500">Manage the layout and content blocks of your homepage</p>
                </div>
                <button
                    onClick={() => setIsAdding(true)}
                    className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition-all shadow-lg shadow-green-100"
                >
                    <Plus size={20} className="mr-2" />
                    Create New Section
                </button>
            </div>

            {isAdding && (
                <div className="bg-white p-8 rounded-3xl border border-green-100 shadow-sm animate-in fade-in slide-in-from-top-4 duration-300">
                    <h3 className="text-lg font-bold text-gray-800 mb-6 flex items-center">
                        <Layout size={20} className="mr-2 text-green-500" />
                        New Website Section
                    </h3>
                    <form onSubmit={handleCreate} className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="text-sm font-bold text-gray-700 block mb-2">Section Title</label>
                                <input
                                    type="text"
                                    required
                                    placeholder="e.g. Featured Collections"
                                    className="w-full px-4 py-3 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-green-100 transition-all font-medium"
                                    value={newSection.title}
                                    onChange={(e) => setNewSection({ ...newSection, title: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className="text-sm font-bold text-gray-700 block mb-2">Section Type</label>
                                <select
                                    className="w-full px-4 py-3 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-green-100 transition-all font-medium appearance-none"
                                    value={newSection.type}
                                    onChange={(e) => setNewSection({ ...newSection, type: e.target.value })}
                                >
                                    <option>Quick Category</option>
                                    <option>Hero Banner</option>
                                    <option>Featured Grid</option>
                                </select>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="text-sm font-bold text-gray-700 block mb-2">Image URL</label>
                                <input
                                    type="text"
                                    placeholder="e.g. /assets/images/categories/new.jpg"
                                    className="w-full px-4 py-3 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-green-100 transition-all font-medium"
                                    value={newSection.imageUrl}
                                    onChange={(e) => setNewSection({ ...newSection, imageUrl: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className="text-sm font-bold text-gray-700 block mb-2">Target Link (or Category Name)</label>
                                <input
                                    type="text"
                                    placeholder="e.g. /collections/mugs or Luxury Hampers"
                                    className="w-full px-4 py-3 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-green-100 transition-all font-medium"
                                    value={newSection.href}
                                    onChange={(e) => setNewSection({ ...newSection, href: e.target.value })}
                                />
                            </div>
                        </div>
                        <div className="flex justify-end space-x-3 mt-6">
                            <button
                                type="button"
                                onClick={() => setIsAdding(false)}
                                className="px-6 py-3 text-gray-500 font-semibold hover:bg-gray-100 rounded-xl transition-all"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="px-8 py-3 bg-green-600 text-white font-bold rounded-xl hover:bg-green-700 transition-all shadow-md shadow-green-100"
                            >
                                Launch Section
                            </button>
                        </div>
                    </form>
                </div>
            )}

            {/* Sections List */}
            <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
                {isLoading ? (
                    <div className="p-20 text-center text-gray-400">Loading sections...</div>
                ) : sections.length === 0 ? (
                    <div className="p-20 text-center text-gray-400 font-medium">No sections added yet.</div>
                ) : (
                    <div className="divide-y divide-gray-50">
                        {sections.map((section, index) => (
                            <div key={section.id} className="p-6 flex items-center group hover:bg-gray-50/50 transition-colors">
                                <div className={`p-3 rounded-2xl mr-4 ${section.isActive ? 'bg-green-50 text-green-600' : 'bg-gray-50 text-gray-400'}`}>
                                    <Layout size={24} />
                                </div>

                                <div className="flex-1">
                                    <h4 className="font-bold text-gray-800">{section.title}</h4>
                                    <div className="flex items-center mt-1 space-x-3 text-xs font-semibold uppercase tracking-wider">
                                        <span className="text-gray-400">{section.type}</span>
                                        <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                                        <span className={section.isActive ? 'text-green-500' : 'text-gray-400'}>
                                            {section.isActive ? 'Live' : 'Hidden'}
                                        </span>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-3">
                                    <div className="flex flex-row space-x-1">
                                        <button 
                                            onClick={() => moveOrder(index, 'up')} 
                                            disabled={index === 0}
                                            className="p-1.5 text-gray-300 hover:text-blue-500 hover:bg-blue-50 rounded disabled:opacity-30 disabled:hover:bg-transparent"
                                            title="Move Up"
                                        >
                                            <MoveUp size={16} />
                                        </button>
                                        <button 
                                            onClick={() => moveOrder(index, 'down')} 
                                            disabled={index === sections.length - 1}
                                            className="p-1.5 text-gray-300 hover:text-blue-500 hover:bg-blue-50 rounded disabled:opacity-30 disabled:hover:bg-transparent"
                                            title="Move Down"
                                        >
                                            <MoveDown size={16} />
                                        </button>
                                    </div>

                                    <div className="relative">
                                        <button 
                                            onClick={() => setActiveMenuId(activeMenuId === section.id ? null : section.id)}
                                            className={`p-2 rounded-lg transition-all ${activeMenuId === section.id ? 'bg-green-50 text-green-600' : 'text-gray-400 hover:text-gray-900 hover:bg-gray-100'}`}
                                        >
                                            <MoreVertical size={20} />
                                        </button>
                                        
                                        {activeMenuId === section.id && (
                                            <div className="absolute right-0 mt-2 w-52 bg-white rounded-xl shadow-2xl border border-gray-100 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                                                <button 
                                                    onClick={() => {
                                                        toggleStatus(section.id, section.isActive);
                                                        setActiveMenuId(null);
                                                    }}
                                                    className={`flex items-center w-full text-left px-4 py-2.5 text-sm transition-colors group/item ${section.isActive ? 'text-gray-700 hover:bg-gray-50' : 'text-green-600 hover:bg-green-50'}`}
                                                >
                                                    {section.isActive ? (
                                                        <>
                                                            <EyeOff size={16} className="mr-3 text-gray-400 group-hover/item:text-gray-600" />
                                                            Hide Section
                                                        </>
                                                    ) : (
                                                        <>
                                                            <Eye size={16} className="mr-3 text-green-500 group-hover/item:text-green-600" />
                                                            Make Live
                                                        </>
                                                    )}
                                                </button>
                                                
                                                <button 
                                                    onClick={() => {
                                                        setEditingSection(section);
                                                        setActiveMenuId(null);
                                                    }}
                                                    className="flex items-center w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors group/item"
                                                >
                                                    <Edit3 size={16} className="mr-3 text-gray-400 group-hover/item:text-blue-600" />
                                                    Edit Content
                                                </button>

                                                <div className="h-px bg-gray-100 my-1"></div>
                                                
                                                <button 
                                                    onClick={() => handleDelete(section.id)}
                                                    className="flex items-center w-full text-left px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition-colors font-semibold group/item"
                                                >
                                                    <Trash2 size={16} className="mr-3 text-red-400 group-hover/item:text-red-600" />
                                                    Delete Section
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            {/* Edit Modal */}
            {editingSection && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                    <div className="bg-white w-full max-w-2xl p-8 rounded-3xl shadow-2xl animate-in zoom-in-95 duration-200">
                        <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                            <Edit3 size={24} className="mr-3 text-blue-500" />
                            Edit Website Section
                        </h3>
                        <form onSubmit={handleUpdate} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="text-sm font-bold text-gray-700 block mb-2">Section Title</label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-blue-100 transition-all font-medium"
                                        value={editingSection.title}
                                        onChange={(e) => setEditingSection({ ...editingSection, title: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="text-sm font-bold text-gray-700 block mb-2">Section Type</label>
                                    <select
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-blue-100 transition-all font-medium appearance-none"
                                        value={editingSection.type}
                                        onChange={(e) => setEditingSection({ ...editingSection, type: e.target.value })}
                                    >
                                        <option>Quick Category</option>
                                        <option>Hero Banner</option>
                                        <option>Featured Grid</option>
                                    </select>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="text-sm font-bold text-gray-700 block mb-2">Image URL</label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-blue-100 transition-all font-medium"
                                        value={editingSection.imageUrl || ''}
                                        onChange={(e) => setEditingSection({ ...editingSection, imageUrl: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="text-sm font-bold text-gray-700 block mb-2">Target Link</label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-blue-100 transition-all font-medium"
                                        value={editingSection.href || ''}
                                        onChange={(e) => setEditingSection({ ...editingSection, href: e.target.value })}
                                    />
                                </div>
                            </div>
                            <div className="flex justify-end space-x-4 pt-4">
                                <button
                                    type="button"
                                    onClick={() => setEditingSection(null)}
                                    className="px-6 py-3 text-gray-500 font-semibold hover:bg-gray-100 rounded-xl transition-all"
                                >
                                    Cancel Changes
                                </button>
                                <button
                                    type="submit"
                                    className="px-8 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-100"
                                >
                                    Save Updates
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

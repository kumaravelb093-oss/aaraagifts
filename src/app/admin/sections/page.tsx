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
    Edit3
} from 'lucide-react';
import { db } from '@/lib/firebase';
import { collection, getDocs, addDoc, deleteDoc, doc, updateDoc, serverTimestamp, query, orderBy } from 'firebase/firestore';

interface Section {
    id: string;
    title: string;
    type: string;
    isActive: boolean;
    order: number;
}

export default function SectionsPage() {
    const [sections, setSections] = useState<Section[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isAdding, setIsAdding] = useState(false);
    const [newSection, setNewSection] = useState({ title: '', type: 'Hero Banner' });

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
            setNewSection({ title: '', type: 'Hero Banner' });
        } catch (error) {
            console.error('Error creating section:', error);
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

    const moveOrder = async (index: number, direction: 'up' | 'down') => {
        if (direction === 'up' && index === 0) return;
        if (direction === 'down' && index === sections.length - 1) return;

        const newSections = [...sections];
        const swapIndex = direction === 'up' ? index - 1 : index + 1;
        [newSections[index], newSections[swapIndex]] = [newSections[swapIndex], newSections[index]];

        setSections(newSections);
        // Ideally update order in Firestore here too
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
                                    <option>Hero Banner</option>
                                    <option>Featured Grid</option>
                                    <option>Scrolling Carousel</option>
                                    <option>Testimonial Slider</option>
                                    <option>Newsletter Opt-in</option>
                                </select>
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
                                <div className="flex flex-col mr-6 space-y-1">
                                    <button onClick={() => moveOrder(index, 'up')} className="text-gray-300 hover:text-blue-500"><MoveUp size={16} /></button>
                                    <button onClick={() => moveOrder(index, 'down')} className="text-gray-300 hover:text-blue-500"><MoveDown size={16} /></button>
                                </div>

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

                                <div className="flex items-center space-x-3 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <button
                                        onClick={() => toggleStatus(section.id, section.isActive)}
                                        className={`p-2 rounded-lg transition-all ${section.isActive ? 'text-gray-400 hover:text-gray-600 hover:bg-gray-100' : 'text-green-500 hover:bg-green-50'}`}
                                    >
                                        {section.isActive ? <Eye size={20} /> : <EyeOff size={20} />}
                                    </button>
                                    <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all">
                                        <Edit3 size={20} />
                                    </button>
                                    <button className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all">
                                        <Trash2 size={20} />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

"use client";

import React, { useState, useEffect } from 'react';
import {
    Plus,
    Edit2,
    Trash2,
    Layers,
    ChevronRight,
    Search,
    CheckCircle2,
    AlertCircle,
    MoreVertical,
    ExternalLink,
    Eye
} from 'lucide-react';
import { db } from '@/lib/firebase';
import { collection, getDocs, addDoc, deleteDoc, doc, updateDoc, serverTimestamp, query, orderBy } from 'firebase/firestore';
import Link from 'next/link';

interface Category {
    id: string;
    name: string;
    description?: string;
    productCount: number;
}

export default function CategoriesPage() {
    const [categories, setCategories] = useState<Category[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isAdding, setIsAdding] = useState(false);
    const [newCat, setNewCat] = useState({ name: '', description: '' });
    const [editingId, setEditingId] = useState<string | null>(null);
    const [editingCategory, setEditingCategory] = useState<Category | null>(null);
    const [activeMenuId, setActiveMenuId] = useState<string | null>(null);

    useEffect(() => {
        fetchCategories();
    }, []);

    const fetchCategories = async () => {
        setIsLoading(true);
        try {
            const q = query(collection(db, 'categories'), orderBy('name', 'asc'));
            const querySnapshot = await getDocs(q);
            const items: Category[] = [];
            querySnapshot.forEach((doc) => {
                items.push({ id: doc.id, ...doc.data() } as Category);
            });
            setCategories(items);
        } catch (error) {
            console.error('Error fetching categories:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleCreate = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!newCat.name.trim()) return;

        try {
            const docRef = await addDoc(collection(db, 'categories'), {
                ...newCat,
                productCount: 0,
                createdAt: serverTimestamp(),
            });
            setCategories([...categories, { id: docRef.id, ...newCat, productCount: 0 }]);
            setNewCat({ name: '', description: '' });
            setIsAdding(false);
        } catch (error) {
            console.error('Error creating category:', error);
        }
    };

    const handleDelete = async (id: string) => {
        if (window.confirm('Delete this category? This will not delete products in it.')) {
            try {
                await deleteDoc(doc(db, 'categories', id));
                setCategories(categories.filter(c => c.id !== id));
                setActiveMenuId(null);
            } catch (error) {
                console.error('Error deleting category:', error);
            }
        }
    };

    const handleUpdate = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!editingCategory) return;

        try {
            const { id, ...data } = editingCategory;
            await updateDoc(doc(db, 'categories', id), {
                ...data,
                updatedAt: serverTimestamp(),
            });
            setCategories(categories.map(c => c.id === id ? editingCategory : c));
            setEditingCategory(null);
        } catch (error) {
            console.error('Error updating category:', error);
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h2 className="text-2xl font-bold text-gray-900">Categories</h2>
                    <p className="text-gray-500">Organize your products into logical groups</p>
                </div>
                <button
                    onClick={() => setIsAdding(true)}
                    className="inline-flex items-center px-6 py-3 bg-purple-600 text-white font-semibold rounded-xl hover:bg-purple-700 transition-all shadow-lg shadow-purple-100"
                >
                    <Plus size={20} className="mr-2" />
                    Add New Category
                </button>
            </div>

            {isAdding && (
                <div className="bg-white p-8 rounded-3xl border border-purple-100 shadow-sm animate-in fade-in slide-in-from-top-4 duration-300">
                    <h3 className="text-lg font-bold text-gray-800 mb-6 flex items-center">
                        <Layers size={20} className="mr-2 text-purple-500" />
                        New Category
                    </h3>
                    <form onSubmit={handleCreate} className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="text-sm font-bold text-gray-700 block mb-2">Category Name</label>
                                <input
                                    type="text"
                                    required
                                    placeholder="e.g. Luxury Watches"
                                    className="w-full px-4 py-3 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-purple-100 transition-all font-medium"
                                    value={newCat.name}
                                    onChange={(e) => setNewCat({ ...newCat, name: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className="text-sm font-bold text-gray-700 block mb-2">Description (Optional)</label>
                                <input
                                    type="text"
                                    placeholder="Briefly describe what goes here..."
                                    className="w-full px-4 py-3 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-purple-100 transition-all"
                                    value={newCat.description}
                                    onChange={(e) => setNewCat({ ...newCat, description: e.target.value })}
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
                                className="px-8 py-3 bg-purple-600 text-white font-bold rounded-xl hover:bg-purple-700 transition-all shadow-md shadow-purple-100"
                            >
                                Create Category
                            </button>
                        </div>
                    </form>
                </div>
            )}

            {/* Categories Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {isLoading ? (
                    Array(6).fill(0).map((_, i) => (
                        <div key={i} className="h-40 bg-gray-100 rounded-2xl animate-pulse"></div>
                    ))
                ) : categories.length === 0 ? (
                    <div className="col-span-full py-20 text-center space-y-4">
                        <div className="bg-gray-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto">
                            <Layers size={40} className="text-gray-300" />
                        </div>
                        <p className="text-gray-500 font-medium">No categories created yet.</p>
                    </div>
                ) : (
                    categories.map((cat) => (
                        <div key={cat.id} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all group relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4">
                                <div className="relative">
                                    <button 
                                        onClick={() => setActiveMenuId(activeMenuId === cat.id ? null : cat.id)}
                                        className={`p-2 rounded-lg transition-all ${activeMenuId === cat.id ? 'bg-purple-50 text-purple-600' : 'text-gray-400 hover:text-gray-900 hover:bg-gray-100'}`}
                                    >
                                        <MoreVertical size={18} />
                                    </button>
                                    
                                    {activeMenuId === cat.id && (
                                        <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-2xl border border-gray-100 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                                            <Link 
                                                href={`/collections/${cat.name.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}
                                                target="_blank"
                                                className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors group/item"
                                            >
                                                <Eye size={16} className="mr-3 text-gray-400 group-hover/item:text-purple-600" />
                                                View on Site
                                            </Link>
                                            
                                            <button 
                                                onClick={() => {
                                                    setEditingCategory(cat);
                                                    setActiveMenuId(null);
                                                }}
                                                className="flex items-center w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors group/item"
                                            >
                                                <Edit2 size={16} className="mr-3 text-gray-400 group-hover/item:text-purple-600" />
                                                Edit Category
                                            </button>

                                            <div className="h-px bg-gray-100 my-1"></div>
                                            
                                            <button 
                                                onClick={() => handleDelete(cat.id)}
                                                className="flex items-center w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors font-semibold group/item"
                                            >
                                                <Trash2 size={16} className="mr-3 text-red-400 group-hover/item:text-red-600" />
                                                Delete
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="bg-purple-50 w-12 h-12 rounded-xl flex items-center justify-center">
                                    <Layers size={24} className="text-purple-600" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-800 text-lg">{cat.name}</h3>
                                    <p className="text-sm text-gray-500 mt-1 line-clamp-2">{cat.description || 'No description provided.'}</p>
                                </div>
                                <div className="pt-4 border-t border-gray-50 flex items-center justify-between">
                                    <div className="flex items-center text-xs font-bold text-purple-600">
                                        <CheckCircle2 size={14} className="mr-1" />
                                        {cat.productCount} Products
                                    </div>
                                    <ChevronRight size={16} className="text-gray-300 group-hover:text-purple-400 transition-colors" />
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>

            {/* Edit Modal */}
            {editingCategory && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                    <div className="bg-white w-full max-w-xl p-8 rounded-3xl shadow-2xl animate-in zoom-in-95 duration-200">
                        <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                            <Edit2 size={24} className="mr-3 text-purple-600" />
                            Edit Category
                        </h3>
                        <form onSubmit={handleUpdate} className="space-y-6">
                            <div className="space-y-4">
                                <div>
                                    <label className="text-sm font-bold text-gray-700 block mb-2">Category Name</label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-purple-100 transition-all font-medium"
                                        value={editingCategory.name}
                                        onChange={(e) => setEditingCategory({ ...editingCategory, name: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="text-sm font-bold text-gray-700 block mb-2">Description</label>
                                    <textarea
                                        rows={3}
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-purple-100 transition-all resize-none"
                                        value={editingCategory.description || ''}
                                        onChange={(e) => setEditingCategory({ ...editingCategory, description: e.target.value })}
                                    />
                                </div>
                            </div>
                            <div className="flex justify-end space-x-4 pt-4">
                                <button
                                    type="button"
                                    onClick={() => setEditingCategory(null)}
                                    className="px-6 py-3 text-gray-500 font-semibold hover:bg-gray-100 rounded-xl transition-all"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-8 py-3 bg-purple-600 text-white font-bold rounded-xl hover:bg-purple-700 transition-all shadow-lg shadow-purple-100"
                                >
                                    Save Changes
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

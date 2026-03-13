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
    AlertCircle
} from 'lucide-react';
import { db } from '@/lib/firebase';
import { collection, getDocs, addDoc, deleteDoc, doc, updateDoc, serverTimestamp, query, orderBy } from 'firebase/firestore';

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
            } catch (error) {
                console.error('Error deleting category:', error);
            }
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
                            <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                <button
                                    onClick={() => handleDelete(cat.id)}
                                    className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all"
                                >
                                    <Trash2 size={18} />
                                </button>
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
        </div>
    );
}

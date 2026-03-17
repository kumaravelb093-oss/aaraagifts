"use client";

import React, { useState, useEffect } from 'react';
import {
    Plus,
    Search,
    Filter,
    MoreVertical,
    Edit2,
    Trash2,
    ExternalLink,
    ChevronLeft,
    ChevronRight,
    Package,
    AlertCircle,
    Copy,
    Eye
} from 'lucide-react';
import { db } from '@/lib/firebase';
import { collection, getDocs, deleteDoc, doc, query, orderBy } from 'firebase/firestore';
import { allProducts } from '@/data/products';
import Link from 'next/link';

interface Product {
    id: string;
    title: string;
    category: string;
    img: string;
    price?: string;
    createdAt?: any;
    isStatic?: boolean;
    specifications?: { label: string; value: string }[];
}

export default function ProductsPage() {
    const [products, setProducts] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [activeMenuId, setActiveMenuId] = useState<string | null>(null);

    useEffect(() => {
        fetchProducts();
        
        // Handle clicks outside of menu to close it
        const handleClickOutside = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (!target.closest('.action-menu-container')) {
                setActiveMenuId(null);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const fetchProducts = async () => {
        setIsLoading(true);
        try {
            // Fetch dynamic products from Firestore
            const q = query(collection(db, 'products'), orderBy('createdAt', 'desc'));
            const querySnapshot = await getDocs(q);
            const firestoreItems: Product[] = [];
            querySnapshot.forEach((doc) => {
                firestoreItems.push({ id: doc.id, ...doc.data() } as Product);
            });

            // Map static products to our local interface
            const staticItems: Product[] = allProducts.map(p => ({
                id: p.id,
                title: p.title,
                category: p.category,
                img: p.img,
                isStatic: true
            }));

            // Combine them with deduplication (Firestore versions override static ones)
            const combinedMap = new Map<string, Product>();
            
            staticItems.forEach(item => combinedMap.set(item.id, item));
            firestoreItems.forEach(item => combinedMap.set(item.id, item));

            setProducts(Array.from(combinedMap.values()));
        } catch (error) {
            console.error('Error fetching products:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleDelete = async (id: string) => {
        if (window.confirm('Are you sure you want to delete this product?')) {
            try {
                await deleteDoc(doc(db, 'products', id));
                setProducts(products.filter(p => p.id !== id));
                setActiveMenuId(null);
            } catch (error) {
                console.error('Error deleting product:', error);
            }
        }
    };

    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text);
        alert('Product ID copied to clipboard!');
        setActiveMenuId(null);
    };

    const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="space-y-6">
            {/* Page Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h2 className="text-2xl font-bold text-gray-900">Products</h2>
                    <p className="text-gray-500">Manage your gift catalog and specifications</p>
                </div>
                <Link
                    href="/admin/products/new"
                    className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-100"
                >
                    <Plus size={20} className="mr-2" />
                    Add New Product
                </Link>
            </div>

            {/* Filters & Search */}
            <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input
                        type="text"
                        placeholder="Search products by title or category..."
                        className="w-full pl-11 pr-4 py-2.5 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-blue-100 transition-all"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <button className="inline-flex items-center px-5 py-2.5 bg-gray-50 text-gray-700 font-medium rounded-xl hover:bg-gray-100 transition-colors">
                    <Filter size={18} className="mr-2" />
                    Filters
                </button>
            </div>

            {/* Products Table */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                {isLoading ? (
                    <div className="p-20 flex flex-col items-center justify-center space-y-4">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
                        <p className="text-gray-500 font-medium">Loading products...</p>
                    </div>
                ) : filteredProducts.length === 0 ? (
                    <div className="p-20 flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="bg-gray-50 p-6 rounded-full">
                            <Package size={48} className="text-gray-300" />
                        </div>
                        <div>
                            <p className="text-lg font-bold text-gray-800">No products found</p>
                            <p className="text-gray-500">Try adjusting your search or add a new product.</p>
                        </div>
                    </div>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-gray-50 border-b border-gray-100">
                                    <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Product</th>
                                    <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Category</th>
                                    <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Status</th>
                                    <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50">
                                {filteredProducts.map((product) => (
                                    <tr key={product.id} className="hover:bg-gray-50/50 transition-colors group">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center space-x-4">
                                                <div className="w-12 h-12 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0 border border-gray-200">
                                                    <img src={product.img} alt={product.title} className="w-full h-full object-cover" />
                                                </div>
                                                <div>
                                                    <p className="font-bold text-gray-800">{product.title}</p>
                                                    <p className="text-xs text-gray-400 font-medium uppercase tracking-tight">ID: {product.id.slice(0, 8)}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-bold rounded-full">
                                                {product.category}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className={`flex items-center text-xs font-bold ${product.isStatic ? 'text-gray-400' : 'text-green-600'}`}>
                                                <div className={`w-1.5 h-1.5 rounded-full mr-2 ${product.isStatic ? 'bg-gray-300' : 'bg-green-500'}`}></div>
                                                {product.isStatic ? 'ReadOnly' : 'Active'}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <div className="flex items-center justify-end space-x-2 relative action-menu-container">
                                                {!product.isStatic ? (
                                                    <>
                                                        <Link
                                                            href={`/admin/products/edit/${product.id}`}
                                                            className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all md:opacity-0 group-hover:opacity-100"
                                                            title="Quick Edit"
                                                        >
                                                            <Edit2 size={18} />
                                                        </Link>
                                                        <button
                                                            onClick={() => handleDelete(product.id)}
                                                            className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all md:opacity-0 group-hover:opacity-100"
                                                            title="Delete"
                                                        >
                                                            <Trash2 size={18} />
                                                        </button>
                                                    </>
                                                ) : (
                                                    <div className="p-2 text-gray-300 italic text-xs">Static Content</div>
                                                )}
                                                <div className="relative">
                                                    <button 
                                                        onClick={() => setActiveMenuId(activeMenuId === product.id ? null : product.id)}
                                                        className={`p-2 rounded-lg transition-all ${activeMenuId === product.id ? 'bg-blue-50 text-blue-600' : 'text-gray-400 hover:text-gray-900 hover:bg-gray-100'}`}
                                                    >
                                                        <MoreVertical size={18} />
                                                    </button>
                                                    
                                                    {activeMenuId === product.id && (
                                                        <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-2xl border border-gray-100 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                                                            <div className="px-4 py-2 border-b border-gray-50 mb-1">
                                                                <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-1">Product ID</p>
                                                                <p className="text-xs font-mono text-gray-800 break-all select-all font-semibold uppercase">{product.id}</p>
                                                            </div>

                                                            <Link 
                                                                href={`/products/${product.id}`}
                                                                target="_blank"
                                                                className="flex items-center px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors group/item"
                                                            >
                                                                <Eye size={16} className="mr-3 text-gray-400 group-hover/item:text-blue-600" />
                                                                View on Site
                                                            </Link>
                                                            
                                                            <Link 
                                                                href={`/admin/products/edit/${product.id}`}
                                                                className="flex items-center px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors group/item"
                                                            >
                                                                <Edit2 size={16} className="mr-3 text-gray-400 group-hover/item:text-blue-600" />
                                                                Edit Details
                                                            </Link>
                                                            
                                                            <button 
                                                                onClick={() => copyToClipboard(product.id)}
                                                                className="flex items-center w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors group/item"
                                                            >
                                                                <Copy size={16} className="mr-3 text-gray-400 group-hover/item:text-blue-600" />
                                                                Copy ID
                                                            </button>

                                                            <div className="h-px bg-gray-100 my-1"></div>
                                                            
                                                            <button 
                                                                onClick={() => handleDelete(product.id)}
                                                                className="flex items-center w-full text-left px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition-colors font-semibold group/item"
                                                            >
                                                                <Trash2 size={16} className="mr-3 text-red-400 group-hover/item:text-red-600" />
                                                                Delete Product
                                                            </button>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}

                {/* Pagination */}
                <div className="px-6 py-4 border-t border-gray-100 flex items-center justify-between">
                    <p className="text-sm text-gray-500 font-medium">
                        Showing <span className="text-gray-900">{filteredProducts.length}</span> products
                    </p>
                    <div className="flex items-center space-x-2">
                        <button className="p-2 text-gray-400 hover:text-gray-900 border border-gray-200 rounded-lg disabled:opacity-50" disabled>
                            <ChevronLeft size={18} />
                        </button>
                        <button className="p-2 text-gray-400 hover:text-gray-900 border border-gray-200 rounded-lg disabled:opacity-50" disabled>
                            <ChevronRight size={18} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

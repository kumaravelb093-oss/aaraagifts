"use client";

import React, { useState, useEffect, use } from 'react';
import { useRouter } from 'next/navigation';
import {
    ArrowLeft,
    Save,
    Info,
    Type,
    Tag as TagIcon,
    Image as ImageIcon,
    AlertCircle,
    CheckCircle2,
    Loader2
} from 'lucide-react';
import Link from 'next/link';
import { db } from '@/lib/firebase';
import { doc, getDoc, updateDoc, serverTimestamp } from 'firebase/firestore';
import ImageUploader from '@/components/admin/ImageUploader';
import SpecField from '@/components/admin/SpecField';

interface Specification {
    label: string;
    value: string;
}

interface PageProps {
    params: Promise<{ id: string }>;
}

export default function EditProductPage({ params }: PageProps) {
    const { id } = use(params);
    const router = useRouter();
    
    const [isLoading, setIsLoading] = useState(true);
    const [isSaving, setIsSaving] = useState(false);
    const [saveError, setSaveError] = useState<string | null>(null);
    const [saveSuccess, setSaveSuccess] = useState(false);
    
    const [formData, setFormData] = useState({
        title: '',
        subtitle: '',
        description: '',
        category: 'Wedding Return Gifts',
        img: '',
        tag: '',
    });
    const [specs, setSpecs] = useState<Specification[]>([]);

    const categories = [
        'Wedding Return Gifts',
        'Corporate Studio',
        'Promotional Gifts',
        'Apparel & T-Shirts',
        'Award Gifts',
        'Branded Gift'
    ];

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const docRef = doc(db, 'products', id);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    const data = docSnap.data();
                    setFormData({
                        title: data.title || '',
                        subtitle: data.subtitle || '',
                        description: data.description || '',
                        category: data.category || 'Wedding Return Gifts',
                        img: data.img || '',
                        tag: data.tag || '',
                    });
                    setSpecs(data.specifications || []);
                } else {
                    setSaveError('Product not found.');
                }
            } catch (error: any) {
                console.error('Error fetching product:', error);
                setSaveError('Failed to load product data.');
            } finally {
                setIsLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSaveError(null);
        setSaveSuccess(false);

        if (!formData.title.trim()) {
            setSaveError('Product title is required.');
            return;
        }

        setIsSaving(true);

        try {
            const docRef = doc(db, 'products', id);
            await updateDoc(docRef, {
                ...formData,
                specifications: specs,
                updatedAt: serverTimestamp(),
            });
            setSaveSuccess(true);
            setTimeout(() => {
                router.push('/admin/products');
            }, 800);
        } catch (error: any) {
            console.error('Error updating product:', error);
            setSaveError(
                error?.message
                    ? `Failed to update: ${error.message}`
                    : 'Failed to update product. Check your Firebase connection and try again.'
            );
        } finally {
            setIsSaving(false);
        }
    };

    if (isLoading) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[400px] space-y-4">
                <Loader2 className="w-12 h-12 text-blue-600 animate-spin" />
                <p className="text-gray-500 font-medium">Loading product data...</p>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto space-y-8">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                    <Link
                        href="/admin/products"
                        className="p-2 hover:bg-gray-100 rounded-xl transition-colors text-gray-500"
                    >
                        <ArrowLeft size={24} />
                    </Link>
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900">Edit Product</h2>
                        <p className="text-gray-500 text-sm">Modify item details in your gift collection</p>
                    </div>
                </div>
            </div>

            {/* Error / Success Banner */}
            {saveError && (
                <div className="flex items-center space-x-3 bg-red-50 border border-red-200 text-red-700 px-5 py-4 rounded-2xl text-sm font-medium">
                    <AlertCircle size={18} className="flex-shrink-0" />
                    <span>{saveError}</span>
                </div>
            )}
            {saveSuccess && (
                <div className="flex items-center space-x-3 bg-green-50 border border-green-200 text-green-700 px-5 py-4 rounded-2xl text-sm font-medium">
                    <CheckCircle2 size={18} className="flex-shrink-0" />
                    <span>Product updated successfully! Redirecting...</span>
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-8 pb-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Info */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm space-y-6">
                            <div className="flex items-center space-x-2 text-blue-600 mb-2">
                                <Info size={18} />
                                <h3 className="font-bold uppercase tracking-wider text-xs">Basic Information</h3>
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <label className="text-sm font-bold text-gray-700 block mb-2">Product Title</label>
                                    <div className="relative">
                                        <Type className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                        <input
                                            type="text"
                                            required
                                            placeholder="e.g. Peacock Kumkum Plate"
                                            className="w-full pl-11 pr-4 py-3 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-blue-100 transition-all font-medium"
                                            value={formData.title}
                                            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="text-sm font-bold text-gray-700 block mb-2">Subtitle / Short Description</label>
                                    <input
                                        type="text"
                                        placeholder="e.g. Meenakari Enamel Brass Plate"
                                        className="w-full px-4 py-3 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-blue-100 transition-all"
                                        value={formData.subtitle}
                                        onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
                                    />
                                </div>

                                <div>
                                    <label className="text-sm font-bold text-gray-700 block mb-2">Detailed Description</label>
                                    <textarea
                                        rows={4}
                                        placeholder="Describe the product history, materials, and use case..."
                                        className="w-full px-4 py-3 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-blue-100 transition-all resize-none"
                                        value={formData.description}
                                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                            <SpecField specs={specs} onChange={setSpecs} />
                        </div>
                    </div>

                    {/* Sidebar Info */}
                    <div className="space-y-6">
                        <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm space-y-6 text-gray-400">
                            <div className="flex items-center space-x-2 text-blue-600 mb-2">
                                <ImageIcon size={18} />
                                <h3 className="font-bold uppercase tracking-wider text-xs">Product Image</h3>
                            </div>
                            <ImageUploader
                                value={formData.img}
                                onChange={(url) => setFormData({ ...formData, img: url })}
                                onRemove={() => setFormData({ ...formData, img: '' })}
                            />
                        </div>

                        <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm space-y-6">
                            <div className="flex items-center space-x-2 text-blue-600 mb-2">
                                <TagIcon size={18} />
                                <h3 className="font-bold uppercase tracking-wider text-xs">Categorization</h3>
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <label className="text-sm font-bold text-gray-700 block mb-2">Category</label>
                                    <select
                                        className="w-full px-4 py-3 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-blue-100 transition-all font-medium appearance-none"
                                        value={formData.category}
                                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                    >
                                        {categories.map(cat => (
                                            <option key={cat} value={cat}>{cat}</option>
                                        ))}
                                    </select>
                                </div>

                                <div>
                                    <label className="text-sm font-bold text-gray-700 block mb-2">Tag / Badge (Optional)</label>
                                    <input
                                        type="text"
                                        placeholder="e.g. Best Seller, New"
                                        className="w-full px-4 py-3 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-blue-100 transition-all font-medium"
                                        value={formData.tag}
                                        onChange={(e) => setFormData({ ...formData, tag: e.target.value })}
                                    />
                                </div>
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={isSaving}
                            className="w-full py-4 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-100 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isSaving ? (
                                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                            ) : (
                                <>
                                    <Save size={20} className="mr-2" />
                                    Update Product
                                </>
                            )}
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

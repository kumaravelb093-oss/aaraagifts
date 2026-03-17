"use client";

import React, { useState, useEffect } from 'react';
import {
    ArrowLeft,
    Clock,
    CheckCircle2,
    Loader2,
    Package,
    Layers,
    Users
} from 'lucide-react';
import Link from 'next/link';
import { db } from '@/lib/firebase';
import { collection, getDocs, query, orderBy, limit } from 'firebase/firestore';

interface Activity {
    id: string;
    title: string;
    description: string;
    time: string;
    type: 'product' | 'category' | 'section';
    timestamp: any;
}

export default function ActivityPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [activities, setActivities] = useState<Activity[]>([]);

    useEffect(() => {
        const fetchAllActivities = async () => {
            setIsLoading(true);
            try {
                // Fetch more items for the history page
                const productsQuery = query(collection(db, 'products'), orderBy('createdAt', 'desc'), limit(20));
                const categoriesQuery = query(collection(db, 'categories'), orderBy('createdAt', 'desc'), limit(20));
                const sectionsQuery = query(collection(db, 'sections'), orderBy('createdAt', 'desc'), limit(20));

                const [productsSnap, categoriesSnap, sectionsSnap] = await Promise.all([
                    getDocs(productsQuery),
                    getDocs(categoriesQuery),
                    getDocs(sectionsQuery)
                ]);

                const items: Activity[] = [];

                productsSnap.forEach(doc => {
                    items.push({
                        id: doc.id,
                        title: 'Product Added',
                        description: doc.data().title,
                        time: formatTime(doc.data().createdAt),
                        type: 'product',
                        timestamp: doc.data().createdAt?.seconds || 0
                    });
                });

                categoriesSnap.forEach(doc => {
                    items.push({
                        id: doc.id,
                        title: 'Category Created',
                        description: doc.data().name,
                        time: formatTime(doc.data().createdAt),
                        type: 'category',
                        timestamp: doc.data().createdAt?.seconds || 0
                    });
                });

                sectionsSnap.forEach(doc => {
                    items.push({
                        id: doc.id,
                        title: 'Section Modified',
                        description: doc.data().title,
                        time: formatTime(doc.data().createdAt),
                        type: 'section',
                        timestamp: doc.data().createdAt?.seconds || 0
                    });
                });

                const sorted = items.sort((a, b) => b.timestamp - a.timestamp);
                setActivities(sorted);
            } catch (error) {
                console.error('Error fetching activity log:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchAllActivities();
    }, []);

    const formatTime = (timestamp: any) => {
        if (!timestamp) return 'Just now';
        const date = timestamp.toDate();
        return date.toLocaleString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    if (isLoading) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[400px] space-y-4">
                <Loader2 className="w-12 h-12 text-blue-600 animate-spin" />
                <p className="text-gray-500 font-medium">Loading activity history...</p>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto space-y-8">
            {/* Header */}
            <div className="flex items-center space-x-4">
                <Link
                    href="/admin"
                    className="p-2 hover:bg-gray-100 rounded-xl transition-colors text-gray-500"
                >
                    <ArrowLeft size={24} />
                </Link>
                <div>
                    <h2 className="text-2xl font-bold text-gray-900">Activity Log</h2>
                    <p className="text-gray-500 text-sm">A full history of recent changes in the dashboard</p>
                </div>
            </div>

            <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="divide-y divide-gray-50">
                    {activities.length === 0 ? (
                        <div className="p-20 text-center space-y-4">
                            <Clock size={48} className="mx-auto text-gray-200" />
                            <p className="text-gray-500 font-medium">No activity recorded yet.</p>
                        </div>
                    ) : (
                        activities.map((activity) => (
                            <div key={activity.id} className="p-6 hover:bg-gray-50/50 transition-colors flex items-start space-x-4">
                                <div className={`mt-1 p-2 rounded-lg ${
                                    activity.type === 'product' ? 'bg-blue-50 text-blue-600' : 
                                    activity.type === 'category' ? 'bg-purple-50 text-purple-600' : 
                                    'bg-green-50 text-green-600'
                                }`}>
                                    {activity.type === 'product' ? <Package size={18} /> : 
                                     activity.type === 'category' ? <Layers size={18} /> : 
                                     <Users size={18} />}
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center justify-between">
                                        <p className="font-bold text-gray-900">{activity.title}</p>
                                        <span className="text-sm text-gray-400 font-medium">{activity.time}</span>
                                    </div>
                                    <p className="text-gray-600 mt-1">{activity.description}</p>
                                    <div className="mt-4 flex items-center text-xs font-bold uppercase tracking-wider text-green-600">
                                        <CheckCircle2 size={12} className="mr-1.5" />
                                        Success
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}

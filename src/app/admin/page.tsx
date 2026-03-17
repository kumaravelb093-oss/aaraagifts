"use client";

import React, { useState, useEffect } from 'react';
import {
    Package,
    Layers,
    TrendingUp,
    Clock,
    CheckCircle2,
    Users,
    ChevronRight,
    Loader2
} from 'lucide-react';
import Link from 'next/link';
import { db } from '@/lib/firebase';
import { collection, getDocs, query, orderBy, limit, getCountFromServer } from 'firebase/firestore';

interface Activity {
    id: string;
    title: string;
    description: string;
    time: string;
    type: 'product' | 'category' | 'section';
    timestamp: any;
}

export default function AdminDashboard() {
    const [isLoading, setIsLoading] = useState(true);
    const [stats, setStats] = useState([
        { name: 'Total Products', value: '...', icon: Package, color: 'text-blue-600', bg: 'bg-blue-50' },
        { name: 'Categories', value: '...', icon: Layers, color: 'text-purple-600', bg: 'bg-purple-50' },
        { name: 'Active Sections', value: '...', icon: Users, color: 'text-green-600', bg: 'bg-green-50' },
        { name: 'Recent Updates', value: '...', icon: TrendingUp, color: 'text-orange-600', bg: 'bg-orange-50' },
    ]);
    const [recentActivity, setRecentActivity] = useState<Activity[]>([]);

    useEffect(() => {
        const fetchDashboardData = async () => {
            setIsLoading(true);
            try {
                // Fetch Stats Counts
                const [productCount, categoryCount, sectionCount] = await Promise.all([
                    getCountFromServer(collection(db, 'products')),
                    getCountFromServer(collection(db, 'categories')),
                    getCountFromServer(collection(db, 'sections'))
                ]);

                // Fetch Recent Activity (Combining recent items from different collections)
                // In a real app, you might have a dedicated 'activities' collection, 
                // but here we'll pull the latest from products, categories, sections
                const productsQuery = query(collection(db, 'products'), orderBy('createdAt', 'desc'), limit(5));
                const categoriesQuery = query(collection(db, 'categories'), orderBy('createdAt', 'desc'), limit(5));
                const sectionsQuery = query(collection(db, 'sections'), orderBy('createdAt', 'desc'), limit(5));

                const [productsSnap, categoriesSnap, sectionsSnap] = await Promise.all([
                    getDocs(productsQuery),
                    getDocs(categoriesQuery),
                    getDocs(sectionsQuery)
                ]);

                const activities: Activity[] = [];

                productsSnap.forEach(doc => {
                    activities.push({
                        id: doc.id,
                        title: 'Product Added',
                        description: doc.data().title,
                        time: formatTime(doc.data().createdAt),
                        type: 'product',
                        timestamp: doc.data().createdAt?.seconds || 0
                    });
                });

                categoriesSnap.forEach(doc => {
                    activities.push({
                        id: doc.id,
                        title: 'Category Created',
                        description: doc.data().name,
                        time: formatTime(doc.data().createdAt),
                        type: 'category',
                        timestamp: doc.data().createdAt?.seconds || 0
                    });
                });

                sectionsSnap.forEach(doc => {
                    activities.push({
                        id: doc.id,
                        title: 'Section Modified',
                        description: doc.data().title,
                        time: formatTime(doc.data().createdAt),
                        type: 'section',
                        timestamp: doc.data().createdAt?.seconds || 0
                    });
                });

                // Sort and limit combined activities
                const sortedActivities = activities
                    .sort((a, b) => b.timestamp - a.timestamp)
                    .slice(0, 5);

                setRecentActivity(sortedActivities);

                setStats([
                    { name: 'Total Products', value: `${productCount.data().count}`, icon: Package, color: 'text-blue-600', bg: 'bg-blue-50' },
                    { name: 'Categories', value: `${categoryCount.data().count}`, icon: Layers, color: 'text-purple-600', bg: 'bg-purple-50' },
                    { name: 'Active Sections', value: `${sectionCount.data().count}`, icon: Users, color: 'text-green-600', bg: 'bg-green-50' },
                    { name: 'Recent Updates', value: `${sortedActivities.length}`, icon: TrendingUp, color: 'text-orange-600', bg: 'bg-orange-50' },
                ]);

            } catch (error) {
                console.error('Error fetching dashboard data:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchDashboardData();
    }, []);

    const formatTime = (timestamp: any) => {
        if (!timestamp) return 'Just now';
        const date = timestamp.toDate();
        const now = new Date();
        const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

        if (diffInSeconds < 60) return 'Just now';
        if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m ago`;
        if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}h ago`;
        return `${Math.floor(diffInSeconds / 86400)}d ago`;
    };

    if (isLoading) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[400px] space-y-4">
                <Loader2 className="w-12 h-12 text-blue-600 animate-spin" />
                <p className="text-gray-500 font-medium">Loading dashboard overview...</p>
            </div>
        );
    }

    return (
        <div className="space-y-8">
            {/* Page Header */}
            <div>
                <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
                <p className="text-gray-500">Real-time overview of your gift shop ecosystem</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat) => (
                    <div key={stat.name} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-500">{stat.name}</p>
                                <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                            </div>
                            <div className={`${stat.bg} p-3 rounded-xl`}>
                                <stat.icon className={stat.color} size={24} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Main Content Area - Full width for Recent Activity */}
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-xl font-bold text-gray-800 flex items-center">
                        <Clock size={24} className="mr-3 text-blue-500" />
                        Recent Activity
                    </h2>
                    <Link 
                        href="/admin/activity"
                        className="text-sm font-bold text-blue-600 hover:text-blue-700 flex items-center group"
                    >
                        View All Activity
                        <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                <div className="space-y-0">
                    {recentActivity.length === 0 ? (
                        <p className="text-gray-400 py-4 italic text-center">No recent activity found.</p>
                    ) : (
                        recentActivity.map((activity, i) => (
                            <div 
                                key={activity.id} 
                                className={`flex items-start space-x-4 py-6 ${i !== recentActivity.length - 1 ? 'border-b border-gray-50' : ''}`}
                            >
                                <div className={`mt-1 p-2 rounded-lg ${
                                    activity.type === 'product' ? 'bg-blue-50 text-blue-600' : 
                                    activity.type === 'category' ? 'bg-purple-50 text-purple-600' : 
                                    'bg-green-50 text-green-600'
                                }`}>
                                    <CheckCircle2 size={16} />
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center justify-between">
                                        <p className="font-bold text-gray-900">{activity.title}</p>
                                        <span className="text-xs text-gray-400 font-medium">{activity.time}</span>
                                    </div>
                                    <p className="text-gray-500 text-sm mt-1">{activity.description}</p>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}

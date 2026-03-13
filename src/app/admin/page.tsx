import React from 'react';
import {
    Users,
    Package,
    Layers,
    TrendingUp,
    Clock,
    CheckCircle2,
    Settings
} from 'lucide-react';

export default function AdminDashboard() {
    const stats = [
        { name: 'Total Products', value: '120+', icon: Package, color: 'text-blue-600', bg: 'bg-blue-50' },
        { name: 'Categories', value: '12', icon: Layers, color: 'text-purple-600', bg: 'bg-purple-50' },
        { name: 'Active Sections', value: '8', icon: Users, color: 'text-green-600', bg: 'bg-green-50' },
        { name: 'Recent Updates', value: '15', icon: TrendingUp, color: 'text-orange-600', bg: 'bg-orange-50' },
    ];

    const recentActivity = [
        { title: 'New Product Added', time: '2 hours ago', status: 'Peacock Kumkum Plate' },
        { title: 'Category Updated', time: '5 hours ago', status: 'Corporate Gifts' },
        { title: 'Section Modified', time: '1 day ago', status: 'Hero Banner' },
    ];

    return (
        <div className="space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat) => (stat.name !== '' &&
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

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Recent Activity */}
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                    <h2 className="text-lg font-bold text-gray-800 mb-6 flex items-center">
                        <Clock size={20} className="mr-2 text-blue-500" />
                        Recent Activity
                    </h2>
                    <div className="space-y-6">
                        {recentActivity.map((activity, i) => (
                            <div key={i} className="flex items-start space-x-4">
                                <div className="mt-1">
                                    <CheckCircle2 size={16} className="text-green-500" />
                                </div>
                                <div className="flex-1">
                                    <p className="font-semibold text-gray-800">{activity.title}</p>
                                    <p className="text-sm text-gray-500">{activity.status}</p>
                                </div>
                                <div className="text-xs text-gray-400 font-medium">
                                    {activity.time}
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className="w-full mt-6 py-3 text-sm font-semibold text-blue-600 hover:bg-blue-50 rounded-xl transition-colors">
                        View All Activity
                    </button>
                </div>

                {/* Quick Actions */}
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                    <h2 className="text-lg font-bold text-gray-800 mb-6 flex items-center">
                        <TrendingUp size={20} className="mr-2 text-purple-500" />
                        Quick Actions
                    </h2>
                    <div className="grid grid-cols-2 gap-4">
                        <button className="p-4 bg-gray-50 rounded-xl hover:bg-blue-50 hover:text-blue-600 transition-all text-left group">
                            <Package size={20} className="mb-2 text-gray-400 group-hover:text-blue-500" />
                            <p className="font-bold text-sm">Add Product</p>
                            <p className="text-xs text-gray-500">Create new item</p>
                        </button>
                        <button className="p-4 bg-gray-50 rounded-xl hover:bg-purple-50 hover:text-purple-600 transition-all text-left group">
                            <Layers size={20} className="mb-2 text-gray-400 group-hover:text-purple-500" />
                            <p className="font-bold text-sm">New Category</p>
                            <p className="text-xs text-gray-500">Group your products</p>
                        </button>
                        <button className="p-4 bg-gray-50 rounded-xl hover:bg-green-50 hover:text-green-600 transition-all text-left group">
                            <Settings size={20} className="mb-2 text-gray-400 group-hover:text-green-500" />
                            <p className="font-bold text-sm">Update Section</p>
                            <p className="text-xs text-gray-500">Edit homepage</p>
                        </button>
                        <button className="p-4 bg-gray-50 rounded-xl hover:bg-orange-50 hover:text-orange-600 transition-all text-left group">
                            <Users size={20} className="mb-2 text-gray-400 group-hover:text-orange-500" />
                            <p className="font-bold text-sm">Manage Users</p>
                            <p className="text-xs text-gray-500">Admin access</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

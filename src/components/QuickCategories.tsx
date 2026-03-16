"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { db } from '@/lib/firebase';
import { collection, query, where, getDocs, orderBy } from 'firebase/firestore';

const quickCategories = [
    {
        name: "Return Gifts",
        img: "/assets/images/products/wedding/wed4.jpg",
        href: "/collections/wedding"
    },
    {
        name: "Corporate Gifts",
        img: "/assets/images/corporate/combo2.jpeg",
        href: "/corporate"
    },
    {
        name: "Promotional Gifts",
        img: "/assets/images/insta/insta2.jpg",
        href: "/collections/promotional"
    },
    {
        name: "T-Shirts",
        img: "/assets/images/categories/tshirts.jpg",
        href: "/collections/apparel"
    },
    {
        name: "Award Gifts",
        img: "/assets/images/awards/award_thumb.jpg",
        href: "/collections/awards"
    },
    {
        name: "Branded Gifts",
        img: "/assets/images/products/wedding/wed1.jpg",
        href: "/collections/branded"
    },
];

const QuickCategories = () => {
    const [sections, setSections] = React.useState<any[]>([]);

    React.useEffect(() => {
        const fetchSections = async () => {
            try {
                const q = query(collection(db, 'sections'), where('isActive', '==', true), orderBy('order', 'asc'));
                const querySnapshot = await getDocs(q);
                const items: any[] = [];
                querySnapshot.forEach((doc) => {
                    items.push({ id: doc.id, ...doc.data() });
                });
                if (items.length > 0) {
                    setSections(items);
                }
            } catch (error) {
                console.error('Error fetching sections:', error);
            }
        };
        fetchSections();
    }, []);

    const displayCategories = sections.length > 0 ? sections : quickCategories;

    return (
        <section className="bg-white py-8 border-b border-brand-brown/5 overflow-x-auto no-scrollbar">
            <div className="container mx-auto px-6">
                <div className="flex justify-between items-center min-w-[800px] lg:min-w-0 lg:grid lg:grid-cols-6 gap-8">
                    {displayCategories.map((cat, i) => (
                        <motion.div
                            key={cat.id || i}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="flex flex-col items-center group cursor-pointer"
                        >
                            <Link href={cat.href || `/collections/${cat.title?.toLowerCase().replace(/\s+/g, '-')}`} className="flex flex-col items-center">
                                <div className="relative w-24 h-24 lg:w-32 lg:h-32 rounded-full overflow-hidden mb-4 border-2 border-transparent group-hover:border-brand-copper transition-all duration-500">
                                    <img
                                        src={cat.img || cat.imageUrl || "/assets/images/categories/default.jpg"}
                                        alt={cat.name || cat.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-brand-brown/5 group-hover:bg-transparent transition-colors duration-500" />
                                </div>
                                <span className="text-[10px] lg:text-[11px] uppercase tracking-[0.2em] font-bold text-center text-brand-espresso/80 group-hover:text-brand-copper transition-colors whitespace-nowrap">
                                    {cat.name || cat.title}
                                </span>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default QuickCategories;

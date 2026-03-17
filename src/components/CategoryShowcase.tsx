"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const categories = [
    {
        title: "Women's Day Specials",
        desc: "Curated limited editions to celebrate extraordinary women.",
        img: "/assets/images/categories/womens-day-fixed.jpg",
        href: "/collections/womens-day",
        span: "lg:col-span-2 lg:row-span-2"
    },
    {
        title: "Wedding Return Gifts",
        desc: "Magnificent tokens of eternal gratitude.",
        img: "/assets/images/categories/wedding-return-fixed.jpg",
        href: "/collections/wedding",
        span: "lg:col-span-1 lg:row-span-1"
    },
    {
        title: "Corporate Studio",
        desc: "Bespoke branded masterpieces for volume solutions.",
        img: "/assets/images/corporate/handbook&pen1.jpeg",
        href: "/corporate",
        span: "lg:col-span-1 lg:row-span-1"
    },
    {
        title: "Personalized Studio",
        desc: "Create a unique story with tailored selections.",
        img: "/assets/images/products/womens/gift-wrapped-surprise-box.jpg",
        href: "/collections/custom",
        span: "lg:col-span-2 lg:row-span-1"
    },
];

const CategoryShowcase = () => {
    return (
        <section className="py-40 bg-brand-ivory relative">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
                    <div className="max-w-2xl">
                        <div className="flex items-center gap-4 mb-6">
                            <StarIcon />
                            <span className="text-[10px] uppercase tracking-[0.5em] text-brand-gold font-bold">The Curated Series</span>
                        </div>
                        <h2 className="text-5xl md:text-8xl font-serif text-brand-orange leading-none tracking-tighter">
                            Explore <br />
                            <span className="italic font-light text-stroke opacity-60">The Collections</span>
                        </h2>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px] lg:auto-rows-[400px]">
                    {categories.map((cat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                            viewport={{ once: true }}
                            className={`${cat.span} group relative overflow-hidden bg-brand-espresso`}
                        >
                            <Link href={cat.href} className="block w-full h-full relative">
                                <Image
                                    src={cat.img}
                                    alt={cat.title}
                                    fill
                                    className="object-cover transition-transform duration-[2s] group-hover:scale-110 opacity-80 group-hover:opacity-100"
                                    unoptimized
                                />

                                {/* Overlay Content */}
                                <div className="absolute inset-0 bg-gradient-to-t from-brand-orange/90 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-700" />

                                <div className="absolute inset-0 p-10 flex flex-col justify-end">
                                    <div className="overflow-hidden mb-4">
                                        <motion.h3 className="text-3xl md:text-4xl font-serif text-black transition-transform duration-700 group-hover:-translate-y-2">
                                            {cat.title}
                                        </motion.h3>
                                    </div>
                                    <p className="text-black/80 text-sm font-bold mb-8 max-w-xs transition-opacity duration-700 opacity-0 group-hover:opacity-100">
                                        {cat.desc}
                                    </p>

                                    <div className="flex items-center justify-between">
                                        <span className="text-[9px] uppercase tracking-[0.4em] text-black font-black">Discover More</span>
                                        <div className="w-10 h-10 rounded-full border border-black/30 flex items-center justify-center text-black group-hover:bg-black group-hover:text-brand-orange transition-all duration-500">
                                            <ArrowUpRight size={18} />
                                        </div>
                                    </div>
                                </div>

                                {/* Fancy Corner Border */}
                                <div className="absolute top-6 right-6 w-12 h-12 border-t border-r border-brand-gold/30 transition-all duration-700 group-hover:w-20 group-hover:h-20" />
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const StarIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-brand-gold animate-pulse">
        <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" fill="currentColor" />
    </svg>
);

export default CategoryShowcase;

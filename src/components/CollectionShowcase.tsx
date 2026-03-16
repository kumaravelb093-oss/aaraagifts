"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Sparkles, ArrowRight, ChevronRight } from 'lucide-react';
import Link from 'next/link';

const staticCollections = [
    {
        title: "The Royal Box",
        img: "/assets/images/products/wedding/wed5.jpg",
        tag: "Bestseller"
    },
    {
        title: "Midnight Elegance",
        img: "/assets/images/products/wedding/wed3.jpg",
        tag: "Limited"
    },
    {
        title: "Ivory Dreams",
        img: "/assets/images/insta/insta1.jpg",
        tag: "Premium"
    },
    {
        title: "Golden Heritage",
        img: "/assets/images/insta/insta3.jpg",
        tag: "New"
    },
];

const CollectionShowcase = () => {
    return (
        <section className="py-40 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
                    <div className="max-w-2xl">
                        <div className="flex items-center gap-4 mb-6">
                            <span className="w-12 h-[1px] bg-brand-gold"></span>
                            <span className="text-[10px] uppercase tracking-[0.6em] text-brand-gold font-bold">Featured Selections</span>
                        </div>
                        <h2 className="text-6xl md:text-9xl font-serif text-brand-espresso leading-none tracking-tighter">
                            Signature <br />
                            <span className="italic font-light text-brand-maroon opacity-60">Hampers.</span>
                        </h2>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-brand-espresso/5 border border-brand-espresso/5">
                    {staticCollections.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1, delay: i * 0.1 }}
                            className="bg-white group relative aspect-[3/4] overflow-hidden"
                        >
                            <Image
                                src={item.img}
                                alt={item.title}
                                fill
                                className="object-cover transition-transform duration-[2s] group-hover:scale-110 opacity-90 group-hover:opacity-100"
                                unoptimized
                            />
                            <div className="absolute top-8 left-8">
                                <span className="px-5 py-2 glass-light text-[9px] uppercase tracking-widest font-bold text-brand-espresso backdrop-blur-md rounded-full border border-white/20">
                                    {item.tag}
                                </span>
                            </div>
                            <div className="absolute inset-x-0 bottom-0 p-8 glass-brown translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-link">
                                <h3 className="text-2xl font-serif text-white mb-6 leading-tight">{item.title}</h3>
                                <Link
                                    href="/collections"
                                    className="inline-flex items-center gap-2 text-[9px] uppercase tracking-widest font-bold text-white hover:text-brand-gold transition-colors"
                                >
                                    View Catalogue <ChevronRight size={14} />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CollectionShowcase;

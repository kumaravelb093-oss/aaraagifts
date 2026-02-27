"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Sparkles, ArrowRight } from 'lucide-react';

const brandedProducts = [
    {
        title: "Executive Noir Ensemble",
        img: "/assets/images/branded/mens-luxury-set.png",
        tag: "Premium",
        subtitle: "Men's Personal Suite"
    },
    {
        title: "Roman Heritage Chess",
        img: "/assets/images/branded/roman-chess-set.jpg",
        tag: "Artisan",
        subtitle: "Metal & Wood Set"
    },
    {
        title: "Grand Muse Station",
        img: "/assets/images/branded/pro-makeup-vanity.png",
        tag: "Professional",
        subtitle: "Vanity Trunk"
    },
    {
        title: "Artisan Harmony Box",
        img: "/assets/images/branded/holiday-gourmet-hamper.jpg",
        tag: "Seasonal",
        subtitle: "Gourmet Hamper"
    },
    {
        title: "Blossom Monogram Satchel",
        img: "/assets/images/branded/coach-pink-handbag.png",
        tag: "Designer",
        subtitle: "Coach Companion"
    },
];

const BrandedSection = () => {
    return (
        <section id="branded" className="py-40 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-center mb-24 text-center md:text-left">
                    <div className="max-w-2xl mb-12 md:mb-0">
                        <div className="flex items-center justify-center md:justify-start gap-4 mb-6">
                            <Sparkles className="text-brand-gold w-4 h-4" />
                            <span className="text-[10px] uppercase tracking-[0.5em] text-brand-gold font-bold">The Premium Collection</span>
                        </div>
                        <h2 className="text-5xl md:text-8xl font-serif text-brand-maroon leading-none tracking-tighter">
                            Branded <br />
                            <span className="italic font-light text-stroke opacity-60">Gifts</span>
                        </h2>
                    </div>

                    <a
                        href="/collections/branded"
                        className="group flex items-center gap-6 px-12 py-6 border border-brand-maroon/10 text-[10px] tracking-[0.4em] uppercase font-bold text-brand-maroon hover:bg-brand-maroon hover:text-white transition-all duration-700"
                    >
                        Explore Collection
                        <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform duration-500" />
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
                    {brandedProducts.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.2, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                            viewport={{ once: true }}
                            className="group"
                        >
                            <div className="relative aspect-[4/5] overflow-hidden mb-8 bg-brand-ivory shadow-sm group-hover:shadow-2xl transition-all duration-700">
                                <Image
                                    src={item.img}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition-transform duration-[2s] group-hover:scale-110"
                                    unoptimized
                                />

                                <div className="absolute top-0 left-0 w-full h-full bg-brand-maroon/0 group-hover:bg-brand-maroon/10 transition-colors" />

                                <div className="absolute top-4 left-4 px-3 py-1.5 bg-white/95 backdrop-blur-sm text-[7px] uppercase tracking-[0.3em] font-bold text-brand-maroon border border-brand-gold/20">
                                    {item.tag}
                                </div>
                            </div>

                            <div className="text-center px-4">
                                <div className="h-[1px] w-6 bg-brand-gold/30 mx-auto mb-4 group-hover:w-12 transition-all duration-700" />
                                <h3 className="text-xl font-serif text-brand-maroon mb-2 tracking-tight group-hover:text-brand-gold transition-colors">{item.title}</h3>
                                <p className="text-[9px] uppercase tracking-[0.2em] text-brand-maroon/50 font-medium">{item.subtitle}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BrandedSection;

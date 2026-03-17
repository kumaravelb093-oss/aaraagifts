"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import Image from 'next/image';

const slides = [
    {
        title: "Branded Gifting Elevated",
        subtitle: "Est. 2024 • Bespoke Selection",
        desc: "Exquisite gift boxes wrapped in handcrafted organic paper and rich linens. Each curation is a masterpiece of tactile satisfaction and artisanal precision.",
        img: "/assets/images/hero/branded.jpg",
        accent: "text-brand-orange"
    },
    {
        title: "Eternal Wedding Tokens",
        subtitle: "Heritage Collection • Royal Series",
        desc: "Magnificent brass-inlaid chests designed for the most cherished celebrations. Engineered with structural reinforcement to safeguard your most precious memories.",
        img: "/assets/images/hero/wedding.jpg",
        accent: "text-brand-brown"
    },
    {
        title: "Modern Corporate Studio",
        subtitle: "Institutional Excellence • Volume Tier",
        desc: "Precision-branded executive suites that integrate your identity through premium etching and color-matched silk linings. High-volume execution with boutique consistency.",
        img: "/assets/images/products/womens/w2.jpg",
        accent: "text-brand-espresso"
    }
];

const Hero = () => {
    const [current, setCurrent] = useState(0);

    const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
    const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

    useEffect(() => {
        const timer = setInterval(nextSlide, 8000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative h-[90vh] bg-brand-ivory overflow-hidden">
            {/* Background Image Layer */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={current}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0 z-0"
                >
                    <Image
                        src={slides[current].img}
                        alt={slides[current].title}
                        fill
                        className="object-cover"
                        priority
                        unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-ivory/80 via-brand-ivory/20 to-transparent" />
                </motion.div>
            </AnimatePresence>

            {/* Content Layer */}
            <div className="container mx-auto px-6 h-full relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 h-full items-center">
                    <div className="lg:col-span-7 pt-20">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={current}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -30 }}
                                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                            >
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-12 h-[1px] bg-brand-gold" />
                                    <span className="text-[10px] uppercase tracking-[0.6em] text-brand-gold font-bold">
                                        {slides[current].subtitle}
                                    </span>
                                </div>

                                <h1 className={`text-6xl md:text-[120px] font-serif leading-[0.85] mb-10 tracking-tighter ${slides[current].accent}`}>
                                    {slides[current].title.split(' ').slice(0, 2).join(' ')} <br />
                                    <span className="italic font-light opacity-50 text-stroke">
                                        {slides[current].title.split(' ').slice(2).join(' ')}
                                    </span>
                                </h1>

                                <p className="text-lg md:text-xl text-brand-espresso/70 mb-14 font-light leading-relaxed max-w-lg border-l-2 border-brand-gold/20 pl-8">
                                    {slides[current].desc}
                                </p>

                                <div className="flex flex-wrap gap-8 items-center">
                                    <button className="relative group px-16 py-6 bg-brand-orange text-brand-espresso text-[10px] tracking-[0.4em] uppercase font-black overflow-hidden transition-all duration-500">
                                        <span className="relative z-10 flex items-center gap-4">
                                            The Studio Selection
                                            <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-500" />
                                        </span>
                                        <div className="absolute inset-0 bg-brand-gold translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                                    </button>

                                    <div className="flex gap-4 items-center">
                                        <button onClick={prevSlide} className="w-14 h-14 rounded-full border border-brand-orange/20 flex items-center justify-center text-brand-orange hover:bg-brand-orange hover:text-brand-espresso transition-all duration-500">
                                            <ChevronLeft size={24} />
                                        </button>
                                        <span className="text-[10px] font-bold text-brand-gold tracking-widest">0{current + 1} / 0{slides.length}</span>
                                        <button onClick={nextSlide} className="w-14 h-14 rounded-full border border-brand-orange/20 flex items-center justify-center text-brand-orange hover:bg-brand-orange hover:text-brand-espresso transition-all duration-500">
                                            <ChevronRight size={24} />
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Decorative Elements */}
                    <div className="hidden lg:block lg:col-span-5 relative h-full">
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-brand-gold/10 rounded-full"
                        >
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-brand-gold rounded-full" />
                        </motion.div>

                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                className="flex flex-col items-center gap-6"
                            >
                                <Star className="text-brand-gold w-8 h-8 animate-pulse" />
                                <span className="text-[9px] uppercase tracking-[1em] text-brand-gold font-bold vertical-text">Premium Choice</span>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Progress Bar */}
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-brand-gold/10 z-20">
                <motion.div
                    key={current}
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 8, ease: "linear" }}
                    className="h-full bg-brand-gold"
                />
            </div>
        </section>
    );
};

export default Hero;


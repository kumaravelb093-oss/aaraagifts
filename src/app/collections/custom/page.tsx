"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Palette, Box, CheckCircle } from 'lucide-react';

const steps = [
    { icon: <Box className="w-8 h-8" />, title: "Select Base", desc: "Choose from our premium wood chests, velvet boxes, or recycled paper baskets." },
    { icon: <Palette className="w-8 h-8" />, title: "Brand Identity", desc: "Select linings, ribbon colors, and custom etching patterns." },
    { icon: <CheckCircle className="w-8 h-8" />, title: "Curate Items", desc: "Choose from over 200+ artisanal products to fill your creation." }
];

export default function CustomHamperPage() {
    return (
        <main className="bg-brand-ivory min-h-screen">
            <Navbar />

            {/* Split Screen Concept */}
            <div className="flex flex-col lg:flex-row min-h-[80vh]">
                <div className="lg:w-1/2 p-12 lg:p-24 bg-brand-elephant text-white flex flex-col justify-center">
                    <span className="text-[10px] uppercase tracking-[0.5em] text-brand-copper font-bold mb-8 block">Bespoke Experience</span>
                    <h1 className="text-5xl md:text-7xl font-serif mb-12 leading-tight">Master of <br /> <span className="italic">Your Own Studio.</span></h1>
                    <p className="text-white/40 text-lg font-light leading-relaxed mb-16 max-w-xl">
                        Why choose from a catalog when you can create a masterpiece? Use our intuitive builder to design a hamper that perfectly matches your vision.
                    </p>
                    <button className="px-12 py-5 bg-brand-copper text-white uppercase text-xs tracking-[0.3em] font-bold hover:bg-white hover:text-brand-elephant transition-all duration-500 w-fit">
                        Launch Hamper Builder
                    </button>
                </div>
                <div className="lg:w-1/2 relative bg-[url('/assets/images/hero/branded.jpg')] bg-cover bg-center">
                    {/* Removed darkening overlay for clarity */}
                </div>
            </div>

            {/* Process Steps */}
            <div className="py-40 container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
                    {steps.map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: i * 0.2 }}
                            viewport={{ once: true }}
                            className="text-center group"
                        >
                            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-brand-copper mx-auto mb-10 group-hover:scale-110 transition-transform duration-500">
                                {step.icon}
                            </div>
                            <h2 className="text-2xl font-serif text-brand-espresso mb-4">{step.title}</h2>
                            <p className="text-brand-espresso/40 text-sm font-light leading-relaxed max-w-xs mx-auto">
                                {step.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>

            <Footer />
        </main>
    );
}

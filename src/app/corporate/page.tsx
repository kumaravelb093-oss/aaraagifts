"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import { ArrowRight, Briefcase, Users, Laptop, Coffee, ChevronRight, ShoppingBag, Check } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { allProducts } from '@/data/products';

const categories = [
    { id: "all", label: "All Products" },
    { id: "combo", label: "Gift Combos" },
    { id: "handbook", label: "Handbook & Pen" },
    { id: "pen", label: "Premium Pens" },
    { id: "flask", label: "Flasks" },
    { id: "bag", label: "Bags" },
];

const features = [
    { icon: <Briefcase className="w-5 h-5" />, title: "Custom Branding", desc: "Logo engraving, screen printing & embossing on every product." },
    { icon: <Users className="w-5 h-5" />, title: "Bulk Orders", desc: "Volume pricing for 50+ units with consistent quality." },
    { icon: <Laptop className="w-5 h-5" />, title: "Employee Kits", desc: "Onboarding kits, milestone rewards & team appreciation gifts." },
    { icon: <Coffee className="w-5 h-5" />, title: "Event Gifting", desc: "Conference giveaways, product launches & retreat hampers." },
];

export default function CorporatePage() {
    const [activeFilter, setActiveFilter] = useState("all");
    const [addedId, setAddedId] = useState<string | null>(null);
    const { addToCart } = useCart();

    // Map the internal categories to the display labels/filters
    const filteredProducts = activeFilter === "all"
        ? allProducts.filter(p => p.category === "Corporate Studio")
        : allProducts.filter(p => {
            if (activeFilter === "combo") return p.category === "Corporate Studio" && p.title.toLowerCase().includes("combo");
            if (activeFilter === "handbook") return p.category === "Corporate Studio" && (p.title.toLowerCase().includes("journal") || p.title.toLowerCase().includes("notebook") || p.title.toLowerCase().includes("diary"));
            if (activeFilter === "pen") return p.category === "Corporate Studio" && p.title.toLowerCase().includes("pen");
            if (activeFilter === "flask") return p.category === "Corporate Studio" && p.title.toLowerCase().includes("flask");
            if (activeFilter === "bag") return p.category === "Corporate Studio" && p.title.toLowerCase().includes("bag");
            return false;
        });

    const handleAddToCart = (product: any) => {
        addToCart({
            id: product.id,
            title: product.title,
            img: product.img
        });
        setAddedId(product.id);
        setTimeout(() => setAddedId(null), 2000);
    };

    return (
        <main className="relative bg-brand-ivory min-h-screen">
            <Navbar />

            <section className="relative overflow-hidden">
                <div className="container mx-auto px-6 py-20">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2 text-center lg:text-left">
                            <motion.span
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                className="text-[10px] uppercase tracking-[0.6em] text-brand-copper font-bold mb-6 block"
                            >
                                Corporate Gifting Studio
                            </motion.span>
                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.1 }}
                                className="text-5xl md:text-7xl font-serif text-brand-brown mb-8 tracking-tight leading-tight"
                            >
                                The Institutional <br /> <span className="italic text-brand-copper">Standard.</span>
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="text-brand-espresso/50 text-lg max-w-xl mb-10 italic font-light leading-relaxed"
                            >
                                &ldquo;Elevating corporate culture through the medium of extraordinary gifting. We are the partners to
                                world-class organizations seeking to impress their teams and clients.&rdquo;
                            </motion.p>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                                className="flex flex-wrap gap-4 justify-center lg:justify-start"
                            >
                                <Link href="/contact" className="px-10 py-4 bg-brand-orange text-white text-[10px] tracking-[0.3em] font-bold uppercase hover:bg-brand-copper transition-all duration-500">
                                    Get a Quote
                                </Link>
                                <a href="/aaraa-catalogue.pdf" target="_blank" rel="noopener noreferrer" className="px-10 py-4 border border-brand-brown/20 text-brand-brown text-[10px] tracking-[0.3em] font-bold uppercase hover:bg-brand-brown hover:text-white transition-all duration-500">
                                    Download Catalogue
                                </a>
                            </motion.div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.3 }}
                            className="lg:w-1/2 grid grid-cols-2 gap-3"
                        >
                            <div className="space-y-3">
                                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                                    <Image src="/assets/images/corporate/combo1.jpeg" alt="Corporate Gift Combo" fill className="object-cover" unoptimized />
                                </div>
                                <div className="relative aspect-square rounded-2xl overflow-hidden">
                                    <Image src="/assets/images/corporate/pen2.jpeg" alt="Premium Pen" fill className="object-cover" unoptimized />
                                </div>
                            </div>
                            <div className="space-y-3 pt-8">
                                <div className="relative aspect-square rounded-2xl overflow-hidden">
                                    <Image src="/assets/images/corporate/handbook&pen7.jpeg" alt="Handbook and Pen" fill className="object-cover" unoptimized />
                                </div>
                                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                                    <Image src="/assets/images/corporate/flask1.jpeg" alt="Premium Flask" fill className="object-cover" unoptimized />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="bg-brand-orange py-16">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                        {features.map((f, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="text-center group"
                            >
                                <div className="text-brand-gold mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                                    {f.icon}
                                </div>
                                <h4 className="text-sm font-serif text-white mb-2 tracking-wider">{f.title}</h4>
                                <p className="text-white/40 text-xs leading-relaxed font-light">{f.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="text-[10px] uppercase tracking-[0.4em] text-brand-copper font-bold mb-4 block">Our Collection</span>
                        <h2 className="text-4xl md:text-6xl font-serif text-brand-brown mb-6">Corporate <span className="italic">Catalogue</span></h2>
                        <p className="text-brand-espresso/40 text-sm max-w-xl mx-auto font-light">
                            Explore our curated range of premium corporate gifts — from executive pen sets to branded combos.
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-3 mb-16">
                        {categories.map(cat => (
                            <button
                                key={cat.id}
                                onClick={() => setActiveFilter(cat.id)}
                                className={`px-6 py-3 text-[10px] uppercase tracking-[0.2em] font-bold border transition-all duration-400 rounded-sm ${activeFilter === cat.id
                                    ? "bg-brand-orange text-white border-brand-orange"
                                    : "bg-transparent text-brand-brown/60 border-brand-brown/15 hover:border-brand-orange hover:text-brand-orange"
                                    }`}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>

                    <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        <AnimatePresence mode="popLayout">
                            {filteredProducts.map((product, i) => (
                                <motion.div
                                    key={product.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.4, delay: i * 0.05 }}
                                    className="group cursor-pointer"
                                >
                                    <Link href={`/products/${product.id}`}>
                                        <div className="relative aspect-square overflow-hidden rounded-xl bg-brand-ivory mb-4">
                                            <Image
                                                src={product.img}
                                                alt={product.title}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                                unoptimized
                                            />
                                            <div className="absolute inset-0 bg-brand-orange/0 group-hover:bg-brand-orange/20 transition-all duration-500" />

                                            {product.tag && (
                                                <span className="absolute top-4 left-4 px-3 py-1.5 bg-white/90 backdrop-blur-sm text-[8px] uppercase tracking-[0.2em] font-bold text-brand-orange rounded-sm">
                                                    {product.tag}
                                                </span>
                                            )}

                                            <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                                                <div className="w-full flex items-center justify-center gap-2 py-3 bg-white/95 backdrop-blur-sm text-[9px] uppercase tracking-[0.2em] font-bold text-brand-orange hover:bg-brand-orange hover:text-white transition-all duration-300 rounded-sm">
                                                    View Details <ChevronRight size={12} />
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                    <div className="flex justify-between items-start mb-1 px-1">
                                        <Link href={`/products/${product.id}`} className="flex-1">
                                            <h3 className="text-sm font-serif text-brand-brown group-hover:text-brand-orange transition-colors">{product.title}</h3>
                                        </Link>
                                    </div>
                                    <div className="flex justify-between items-center px-1">
                                        <p className="text-[11px] text-brand-espresso/40 font-light">{product.subtitle}</p>
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                handleAddToCart(product);
                                            }}
                                            className={`p-2 rounded-full transition-all transform hover:scale-110 shadow-sm ${addedId === product.id
                                                ? "bg-brand-gold text-white"
                                                : "bg-brand-orange/5 text-brand-orange hover:bg-brand-orange hover:text-white"}`}
                                        >
                                            {addedId === product.id ? <Check size={14} /> : <ShoppingBag size={14} />}
                                        </button>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </section>

            <section className="bg-brand-brown py-32 text-white">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-20 items-center">
                        <div className="lg:w-1/2">
                            <span className="text-[10px] uppercase tracking-[0.6em] text-brand-copper font-bold mb-8 block">Why Choose Aaraa</span>
                            <h2 className="text-4xl md:text-6xl font-serif mb-12 leading-tight">Planned Excellence <br /> & <span className="italic">Volume Control.</span></h2>
                            <p className="text-white/40 text-lg font-light leading-relaxed mb-12">
                                For large-scale deployments, we provide detailed planning and quality assurance. Every corporate gift is
                                curated to ensure brand consistency and premium unboxing experience.
                            </p>
                            <ul className="space-y-6">
                                {[
                                    { t: "Custom Branding", d: "Logo engraving, embossing & screen printing on all products." },
                                    { t: "Quality Assurance", d: "Multi-point inspection for consistent finish across bulk orders." },
                                    { t: "Timely Delivery", d: "On-schedule delivery with tracking for every corporate order." }
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-4 items-start">
                                        <div className="w-1.5 h-1.5 rounded-full bg-brand-copper mt-2 flex-shrink-0" />
                                        <div>
                                            <span className="block font-serif text-xl mb-1">{item.t}</span>
                                            <span className="text-sm text-white/30 font-light">{item.d}</span>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="lg:w-1/2 grid grid-cols-2 gap-6">
                            <div className="aspect-square bg-white/5 rounded-2xl p-10 border border-white/10 flex flex-col justify-center">
                                <span className="text-4xl font-serif text-brand-copper mb-3">500+</span>
                                <span className="text-[10px] uppercase tracking-widest text-white/40">Enterprises Served</span>
                            </div>
                            <div className="aspect-square bg-white/5 rounded-2xl p-10 border border-white/10 flex flex-col justify-center mt-10">
                                <span className="text-4xl font-serif text-brand-copper mb-3">19+</span>
                                <span className="text-[10px] uppercase tracking-widest text-white/40">Product Variants</span>
                            </div>
                            <div className="aspect-square bg-white/5 rounded-2xl p-10 border border-white/10 flex flex-col justify-center -mt-6">
                                <span className="text-4xl font-serif text-brand-copper mb-3">50+</span>
                                <span className="text-[10px] uppercase tracking-widest text-white/40">Min Order Qty</span>
                            </div>
                            <div className="aspect-square bg-white/5 rounded-2xl p-10 border border-white/10 flex flex-col justify-center mt-4">
                                <span className="text-4xl font-serif text-brand-copper mb-3">5★</span>
                                <span className="text-[10px] uppercase tracking-widest text-white/40">Client Rating</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-white py-32">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl md:text-6xl font-serif text-brand-espresso mb-8">Bulk Orders & <span className="italic">Custom Branding</span></h2>
                    <p className="text-brand-espresso/50 text-lg max-w-2xl mx-auto mb-12 font-light leading-relaxed">
                        From logo integration to custom packaging, we offer end-to-end personalization for your brand.
                        Get in touch for volume pricing and branding mockups.
                    </p>
                    <div className="flex justify-center flex-wrap gap-6">
                        <Link href="/contact" className="group px-12 py-5 bg-brand-orange text-white uppercase text-xs tracking-[0.3em] font-bold hover:bg-brand-copper transition-all duration-500 flex items-center gap-3">
                            Inquire for Bulk
                            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <a href="/aaraa-catalogue.pdf" target="_blank" rel="noopener noreferrer" className="px-12 py-5 border border-brand-brown text-brand-brown uppercase text-xs tracking-[0.3em] font-bold hover:bg-brand-brown hover:text-white transition-all duration-500">
                            Download Catalog
                        </a>
                    </div>
                </div>
            </section>

            <ContactSection />
            <Footer />
        </main>
    );
}

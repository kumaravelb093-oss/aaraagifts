"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Sparkles, ArrowRight, ShoppingBag, Check, ChevronRight, Gift } from 'lucide-react';
import Link from 'next/link';
import { db } from '@/lib/firebase';
import { useCart } from '@/context/CartContext';
import { allProducts, Product } from '@/data/products';

const WeddingReturnSection = () => {
    const { addToCart } = useCart();
    const [addedId, setAddedId] = useState<string | null>(null);

    const initialProducts = allProducts
        .filter((p: Product) => p.category === "Wedding Return Gifts")
        .slice(0, 6);

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
        <section className="py-40 bg-brand-ivory relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row justify-between items-start mb-24 gap-8">
                    <div className="max-w-3xl">
                        <div className="flex items-center gap-4 mb-8">
                            <span className="w-12 h-[1px] bg-brand-gold"></span>
                            <span className="text-[10px] uppercase tracking-[0.6em] text-brand-gold font-bold">Heritage Tokens</span>
                        </div>
                        <h2 className="text-6xl md:text-9xl font-serif text-brand-orange leading-none tracking-tighter mb-8">
                            Wedding <br />
                            <span className="italic font-light text-brand-espresso opacity-60">Return Gifts.</span>
                        </h2>
                    </div>
                    <Link
                        href="/collections/wedding"
                        className="mt-8 lg:mt-0 flex items-center gap-4 group px-10 py-6 bg-white rounded-full hover:bg-brand-orange transition-all duration-500"
                    >
                        <span className="text-[10px] uppercase tracking-[0.3em] font-extrabold text-brand-espresso group-hover:text-black transition-colors">View All Collections</span>
                        <ArrowRight className="text-brand-gold group-hover:text-black group-hover:translate-x-2 transition-all" size={20} />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
                    {initialProducts.map((product, i) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="group"
                        >
                            <div className="relative aspect-[4/5] overflow-hidden mb-10 bg-white border border-brand-brown/5 shadow-sm group-hover:shadow-2xl transition-all duration-1000">
                                <Link href={`/products/${product.id}`}>
                                    <img
                                        src={product.img}
                                        alt={product.title}
                                        className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110 opacity-90 group-hover:opacity-100"
                                    />
                                </Link>
                                <div className="absolute top-8 right-8">
                                    <span className="text-[8px] uppercase tracking-[0.4em] font-bold text-brand-gold writing-vertical py-4 border-r border-brand-gold/30">
                                        {product.tag}
                                    </span>
                                </div>
                                <div className="absolute inset-x-0 bottom-0 p-8 glass-brown translate-y-full group-hover:translate-y-0 transition-transform duration-500 flex flex-col items-center gap-3">
                                    <button
                                        onClick={() => handleAddToCart(product)}
                                        className={`w-full py-4 text-[10px] uppercase font-bold tracking-widest transition-all flex items-center justify-center gap-3 shadow-xl ${addedId === product.id
                                            ? "bg-brand-gold text-brand-espresso"
                                            : "bg-brand-orange text-brand-espresso font-black hover:bg-brown-800"}`}
                                    >
                                        {addedId === product.id ? (
                                            <>
                                                <Check size={14} />
                                                In Hamper
                                            </>
                                        ) : (
                                            <>
                                                <ShoppingBag size={14} />
                                                Add to Hamper
                                            </>
                                        )}
                                    </button>
                                    <Link
                                        href={`/products/${product.id}`}
                                        className="w-full py-4 bg-white/90 backdrop-blur-sm text-brand-brown text-[10px] uppercase font-bold tracking-widest hover:bg-white transition-colors flex items-center justify-center gap-2"
                                    >
                                        View Details <ChevronRight size={14} />
                                    </Link>
                                </div>
                            </div>
                            <h3 className="text-3xl font-serif text-brand-espresso mb-3 tracking-tight group-hover:text-brand-orange transition-colors">{product.title}</h3>
                            <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-gold">{product.subtitle}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WeddingReturnSection;

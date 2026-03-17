"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Shirt, ArrowRight, ShoppingBag, Check, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { allProducts, Product } from '@/data/products';


const ApparelSection = () => {
    const { addToCart } = useCart();
    const [addedId, setAddedId] = useState<string | null>(null);

    const initialProducts = allProducts.filter((p: Product) => p.category === "Apparel & T-Shirts").map((p: Product) => ({
        id: p.id,
        title: p.title,
        img: p.img,
        tag: p.tag || "Classic",
        subtitle: p.subtitle || ""
    })).slice(0, 6);

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
        <section className="py-32 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row justify-between items-start mb-20 gap-8">
                    <div className="max-w-3xl">
                        <div className="flex items-center gap-4 mb-8">
                            <Shirt className="text-brand-copper" size={24} />
                            <span className="text-[10px] lg:text-[11px] uppercase tracking-[0.5em] text-brand-copper font-bold">Lifestyle & Apparel</span>
                        </div>
                        <h2 className="text-6xl md:text-9xl font-serif text-brand-espresso leading-none tracking-tighter mb-8">
                            Institutional <br />
                            <span className="italic font-light text-brand-brown">Apparel.</span>
                        </h2>
                    </div>
                    <Link
                        href="/collections/apparel"
                        className="mt-8 lg:mt-0 flex items-center gap-4 group px-10 py-6 bg-brand-ivory rounded-full hover:bg-brand-copper transition-all duration-500"
                    >
                        <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-espresso group-hover:text-white transition-colors">Explore T-Shirts</span>
                        <ArrowRight className="text-brand-copper group-hover:text-white group-hover:translate-x-2 transition-all" size={20} />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {initialProducts.map((product, i) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="group"
                        >
                            <div className="relative aspect-[4/5] overflow-hidden mb-8 rounded-2xl bg-brand-ivory/50">
                                <Link href={`/collections/apparel`}>
                                    <img
                                        src={product.img}
                                        alt={product.title}
                                        className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                                    />
                                </Link>
                                <div className="absolute top-6 left-6">
                                    <span className="px-5 py-2 glass-light text-[9px] uppercase tracking-widest font-bold text-brand-espresso backdrop-blur-md rounded-full border border-white/20">
                                        {product.tag}
                                    </span>
                                </div>
                                <div className="absolute inset-x-0 bottom-0 p-8 glass-brown translate-y-full group-hover:translate-y-0 transition-transform duration-500 flex flex-col items-center gap-3">
                                    <button
                                        onClick={() => handleAddToCart(product)}
                                        className={`w-full py-4 text-[10px] uppercase font-black tracking-widest transition-all flex items-center justify-center gap-3 shadow-xl ${addedId === product.id
                                            ? "bg-brand-gold text-brand-espresso"
                                            : "bg-brand-orange text-brand-espresso hover:bg-brown-800"}`}
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
                                        href={`/collections/apparel`}
                                        className="w-full py-4 bg-white/90 backdrop-blur-sm text-brand-brown text-[10px] uppercase font-bold tracking-widest hover:bg-white transition-colors flex items-center justify-center gap-2"
                                    >
                                        View Details <ChevronRight size={14} />
                                    </Link>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-3xl font-serif text-brand-espresso group-hover:text-brand-copper transition-colors mb-2">{product.title}</h3>
                                <p className="text-brand-espresso/50 text-[10px] uppercase tracking-widest font-bold">{product.subtitle}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ApparelSection;

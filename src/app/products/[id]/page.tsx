"use client";

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ShoppingBag, MessageCircle, Send, ChevronRight, Check, ArrowLeft } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { allProducts, Product } from '@/data/products';
import Link from 'next/link';

const ProductPage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState<Product | null>(null);
    const [isAdded, setIsAdded] = useState(false);
    const { addToCart } = useCart();
    const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

    useEffect(() => {
        const found = allProducts.find(p => p.id === id);
        if (found) setProduct(found);
    }, [id]);

    const handleAddToCart = () => {
        if (product) {
            addToCart({
                id: product.id,
                title: product.title,
                img: product.img
            });
            setIsAdded(true);
            setTimeout(() => setIsAdded(false), 2000);
        }
    };

    const handleWhatsAppEnquiry = () => {
        if (!product) return;
        const message = `Hello Aaraa Gifting! I am interested in inquiring about the "${product.title}" (ID: ${product.id}). Could you please provide more details?`;
        window.open(`https://wa.me/919940173007?text=${encodeURIComponent(message)}`, '_blank');
    };

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormStatus('sending');
        // Simulate API call
        setTimeout(() => setFormStatus('sent'), 1500);
    };

    if (!product) {
        return (
            <div className="min-h-screen bg-brand-ivory flex items-center justify-center">
                <p className="text-brand-brown font-serif italic">Loading masterpieces...</p>
            </div>
        );
    }

    return (
        <main className="bg-brand-ivory min-h-screen">
            <Navbar />

            <div className="container mx-auto px-6 pt-32 pb-40">
                {/* Back Link */}
                <Link href={product.href} className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest text-brand-brown/40 hover:text-brand-brown mb-12 transition-colors font-bold">
                    <ArrowLeft size={12} />
                    Back to {product.category}
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                    {/* Left: Product Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative aspect-square rounded-[2rem] overflow-hidden shadow-2xl bg-white group">
                            <Image
                                src={product.img}
                                alt={product.title}
                                fill
                                className="object-cover transition-transform duration-[3s] group-hover:scale-110"
                                unoptimized
                                priority
                            />

                            <div className="absolute bottom-10 left-10">
                                <span className="px-4 py-2 bg-brand-maroon text-white text-[9px] uppercase tracking-[0.3em] font-black rounded-full shadow-2xl">
                                    {product.tag || 'Aaraa Studio'}
                                </span>
                            </div>
                        </div>

                        {/* Secondary view if multiple images existed - currently showing single high-res view */}
                        <div className="grid grid-cols-4 gap-4 mt-8">
                            <div className="aspect-square rounded-2xl bg-white border border-brand-gold overflow-hidden cursor-pointer p-1">
                                <div className="relative w-full h-full rounded-xl overflow-hidden transition-all">
                                    <Image src={product.img} alt={product.title} fill className="object-cover" unoptimized />
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Product Details */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex flex-col"
                    >
                        <div className="mb-10">
                            <span className="text-[10px] uppercase tracking-[0.6em] text-brand-copper font-bold mb-4 block">{product.category}</span>
                            <h1 className="text-4xl md:text-6xl font-serif text-brand-brown mb-6 leading-tight">{product.title}</h1>
                            {product.subtitle && (
                                <p className="text-lg text-brand-espresso/60 font-light italic mb-8 border-l-2 border-brand-gold/30 pl-6 leading-relaxed">
                                    &ldquo;{product.subtitle}&rdquo;
                                </p>
                            )}
                            <p className="text-brand-espresso/40 text-base font-light leading-relaxed mb-10 max-w-xl">
                                {product.description || "A testament to Aaraa's philosophy of purposeful gifting. This piece is meticulously crafted to bridge the gap between tradition and modern branded gifting, ensuring your gesture leaves a lasting impression on the soul."}
                            </p>
                        </div>

                        {/* Actions */}
                        <div className="flex flex-col gap-4 mb-20 w-full max-w-md">
                            <button
                                onClick={handleAddToCart}
                                className="w-full py-5 bg-brand-brown text-white text-[11px] uppercase tracking-[0.4em] font-black hover:bg-brand-maroon transition-all flex items-center justify-center gap-4 group shadow-xl relative overflow-hidden"
                            >
                                <AnimatePresence mode="wait">
                                    {isAdded ? (
                                        <motion.div
                                            key="added"
                                            initial={{ y: 20, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            exit={{ y: -20, opacity: 0 }}
                                            className="flex items-center gap-3"
                                        >
                                            <Check size={16} /> Added to Hamper
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            key="add"
                                            initial={{ y: 20, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            exit={{ y: -20, opacity: 0 }}
                                            className="flex items-center gap-3"
                                        >
                                            <ShoppingBag size={16} /> Add to Hamper
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </button>

                            <button
                                onClick={handleWhatsAppEnquiry}
                                className="w-full py-5 bg-[#25D366] text-white text-[11px] uppercase tracking-[0.4em] font-black hover:bg-[#128C7E] transition-all flex items-center justify-center gap-4 group shadow-xl"
                            >
                                <MessageCircle size={18} /> WhatsApp Enquiry
                            </button>
                        </div>

                        {/* Quick Enquiry Form */}
                        <div className="bg-white/50 backdrop-blur-md rounded-[2.5rem] p-10 border border-brand-brown/5 shadow-inner">
                            <h3 className="text-xl font-serif text-brand-brown mb-8 flex items-center gap-4">
                                Personal Assistance
                                <div className="h-[1px] flex-1 bg-brand-gold/20" />
                            </h3>

                            {formStatus === 'sent' ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="py-10 text-center"
                                >
                                    <div className="w-16 h-16 bg-brand-gold/10 text-brand-gold rounded-full flex items-center justify-center mx-auto mb-6">
                                        <Check size={32} />
                                    </div>
                                    <h4 className="text-brand-brown font-serif text-2xl mb-2">Request Received</h4>
                                    <p className="text-xs uppercase tracking-widest text-brand-brown/40 font-bold">Our curator will contact you shortly</p>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleFormSubmit} className="space-y-4">
                                    <div className="grid grid-cols-2 gap-4">
                                        <input
                                            required
                                            type="text"
                                            placeholder="Your Name"
                                            className="w-full bg-white px-6 py-4 rounded-full text-xs font-bold border-none focus:ring-1 focus:ring-brand-gold outline-none"
                                        />
                                        <input
                                            required
                                            type="tel"
                                            placeholder="Contact No"
                                            className="w-full bg-white px-6 py-4 rounded-full text-xs font-bold border-none focus:ring-1 focus:ring-brand-gold outline-none"
                                        />
                                    </div>
                                    <textarea
                                        required
                                        placeholder={`Tell us about your requirements for ${product.title}...`}
                                        rows={3}
                                        className="w-full bg-white px-6 py-5 rounded-[2rem] text-xs font-bold border-none focus:ring-1 focus:ring-brand-gold outline-none resize-none"
                                    ></textarea>
                                    <button
                                        disabled={formStatus === 'sending'}
                                        type="submit"
                                        className="w-full py-5 bg-brand-maroon text-white text-[10px] uppercase font-black tracking-[0.3em] flex items-center justify-center gap-4 hover:bg-brand-brown transition-all rounded-full group shadow-lg disabled:opacity-50"
                                    >
                                        {formStatus === 'sending' ? 'Transmitting...' : 'Submit Request'}
                                        <Send size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </button>
                                </form>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>

            <Footer />
        </main>
    );
};

export default ProductPage;

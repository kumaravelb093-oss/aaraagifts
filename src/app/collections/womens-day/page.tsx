"use client";

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ShoppingBag, ChevronRight, Check } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { allProducts, Product } from '@/data/products';
import { db } from '@/lib/firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';

export default function WomensDayPage() {
    const { addToCart } = useCart();
    const [addedId, setAddedId] = useState<string | null>(null);
    const [products, setProducts] = useState<Product[]>(allProducts.filter(p => p.category === "Women's Day Gifts"));
    const [loading, setLoading] = useState(true);

    React.useEffect(() => {
        const fetchProducts = async () => {
            try {
                const q = query(
                    collection(db, "products"),
                    where("category", "==", "Women's Day Gifts")
                );
                const querySnapshot = await getDocs(q);
                const items: Product[] = [];
                querySnapshot.forEach((doc) => {
                    items.push({ id: doc.id, ...doc.data() } as Product);
                });
                
                setProducts(prev => {
                    const existingStatic = allProducts.filter(p => p.category === "Women's Day Gifts");
                    const firestoreIds = new Set(items.map(i => i.id));
                    return [...items, ...existingStatic.filter(p => !firestoreIds.has(p.id))];
                });
            } catch (error) {
                console.error("Error fetching womens day products:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);

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
        <main className="bg-brand-ivory min-h-screen">
            <Navbar />

            {/* Header Section */}
            <div className="pt-32 pb-20 container mx-auto px-6 text-center">
                <span className="text-[10px] uppercase tracking-[0.6em] text-brand-copper font-bold mb-6 block underline decoration-brand-copper/30 underline-offset-8">Limited Edition</span>
                <h1 className="text-5xl md:text-8xl font-serif text-brand-espresso mb-8 leading-tight">Women's Day <br /> <span className="italic font-light text-brand-brown">Curations.</span></h1>
                <p className="text-brand-espresso/50 text-xl max-w-2xl mx-auto font-light leading-relaxed">
                    Celebrating the extraordinary women in our lives with gifts that mirror their strength, grace, and distinction.
                </p>
            </div>

            {/* Product Grid */}
            <div className="container mx-auto px-6 pb-40">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {products.map((product, i) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="group"
                        >
                            <div className="relative aspect-[4/5] overflow-hidden mb-8 rounded-2xl bg-white shadow-sm group-hover:shadow-2xl transition-all duration-700">
                                <Link href={`/products/${product.id}`}>
                                    <Image
                                        src={product.img}
                                        alt={product.title}
                                        fill
                                        className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                        unoptimized
                                    />
                                    <div className="absolute inset-0 bg-brand-brown/0 group-hover:bg-brand-brown/10 transition-all duration-700" />
                                </Link>

                                <div className="absolute bottom-6 left-6 right-6 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                                    <Link
                                        href={`/products/${product.id}`}
                                        className="w-full py-4 bg-white/90 backdrop-blur-sm text-brand-brown text-[10px] uppercase font-bold tracking-widest hover:bg-brand-brown hover:text-white transition-colors flex items-center justify-center gap-3 shadow-sm mb-1"
                                    >
                                        View Details <ChevronRight size={14} />
                                    </Link>
                                    <button
                                        onClick={() => handleAddToCart(product)}
                                        className={`w-full py-4 text-[10px] uppercase font-bold tracking-widest transition-all flex items-center justify-center gap-3 shadow-xl ${addedId === product.id
                                            ? "bg-brand-gold text-white"
                                            : "bg-brand-orange text-white hover:bg-brand-brown"}`}
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
                                </div>
                            </div>
                            <div className="flex justify-between items-start">
                                <Link href={`/products/${product.id}`}>
                                    <h3 className="text-2xl font-serif text-brand-brown mb-2 group-hover:text-brand-copper transition-colors tracking-tight">{product.title}</h3>
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <Footer />
        </main>
    );
}

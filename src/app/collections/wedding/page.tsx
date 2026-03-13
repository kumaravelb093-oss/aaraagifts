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
import { collection, query, where, getDocs, orderBy } from 'firebase/firestore';

// Filter wedding products from the main catalog
const staticWeddingProducts = allProducts.filter(p => p.category === "Wedding Return Gifts");

export default function WeddingPage() {
    const { addToCart } = useCart();
    const [addedId, setAddedId] = useState<string | null>(null);
    const [weddingProducts, setWeddingProducts] = useState<Product[]>(staticWeddingProducts);
    const [loading, setLoading] = useState(true);

    React.useEffect(() => {
        const fetchProducts = async () => {
            try {
                const q = query(
                    collection(db, "products"),
                    where("category", "==", "Wedding Return Gifts"),
                    orderBy("createdAt", "desc")
                );
                const querySnapshot = await getDocs(q);
                if (!querySnapshot.empty) {
                    const items: Product[] = [];
                    querySnapshot.forEach((doc) => {
                        items.push({ id: doc.id, ...doc.data() } as Product);
                    });
                    setWeddingProducts(items);
                }
            } catch (error) {
                console.error("Error fetching products:", error);
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

            <div className="pt-32 pb-20 container mx-auto px-6 text-center">
                <span className="text-[10px] uppercase tracking-[0.6em] text-brand-copper font-bold mb-6 block underline decoration-brand-copper/30 underline-offset-8">The Heritage Collection</span>
                <h1 className="text-5xl md:text-8xl font-serif text-brand-espresso mb-8 leading-tight">Wedding Return <br /> <span className="italic font-light text-brand-brown">Gratitude.</span></h1>
                <p className="text-brand-espresso/50 text-xl max-w-2xl mx-auto font-light leading-relaxed italic">
                    "Tokens of eternal remembrance for the guests who graced your most cherished day."
                </p>
            </div>

            <div className="container mx-auto px-6 pb-40">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
                    {weddingProducts.map((product, i) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className="group"
                        >
                            <div className="relative aspect-square overflow-hidden mb-10 bg-white border border-brand-brown/5 shadow-sm group-hover:shadow-2xl transition-all duration-1000">
                                <Link href={`/products/${product.id}`}>
                                    <Image
                                        src={product.img}
                                        alt={product.title}
                                        fill
                                        className="object-cover transition-transform duration-[2s] group-hover:scale-110"
                                        unoptimized
                                    />
                                </Link>
                                <div className="absolute inset-x-0 bottom-0 p-8 glass-brown translate-y-full group-hover:translate-y-0 transition-transform duration-500 flex flex-col items-center gap-3">
                                    <Link
                                        href={`/products/${product.id}`}
                                        className="w-full py-4 bg-white/90 backdrop-blur-sm text-brand-brown text-[10px] uppercase font-bold tracking-widest hover:bg-white transition-colors flex items-center justify-center gap-2"
                                    >
                                        View Details <ChevronRight size={14} />
                                    </Link>
                                    <button
                                        onClick={() => handleAddToCart(product)}
                                        className={`w-full py-4 text-[10px] uppercase font-bold tracking-widest transition-all flex items-center justify-center gap-3 shadow-xl ${addedId === product.id
                                            ? "bg-brand-gold text-white"
                                            : "bg-brand-maroon text-white hover:bg-brand-brown"}`}
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
                            <Link href={`/products/${product.id}`}>
                                <h3 className="text-3xl font-serif text-brand-brown mb-3 tracking-tight group-hover:text-brand-maroon transition-colors">{product.title}</h3>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>

            <Footer />
        </main>
    );
}

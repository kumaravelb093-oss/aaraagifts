"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Sparkles, ArrowRight, ShoppingBag, Check, ChevronRight, Gift } from 'lucide-react';
import Link from 'next/link';
import { db } from '@/lib/firebase';
import { collection, query, where, getDocs, limit, orderBy } from 'firebase/firestore';
import { useCart } from '@/context/CartContext';

const WeddingReturnSection = () => {
    const { addToCart } = useCart();
    const [products, setProducts] = React.useState<any[]>([]);
    const [addedId, setAddedId] = React.useState<string | null>(null);

    React.useEffect(() => {
        const fetchWedding = async () => {
            try {
                const q = query(
                    collection(db, "products"),
                    where("category", "==", "Wedding Return Gifts"),
                    limit(6)
                );
                const querySnapshot = await getDocs(q);
                if (!querySnapshot.empty) {
                    const items: any[] = [];
                    querySnapshot.forEach((doc) => {
                        const data = doc.data();
                        items.push({
                            id: doc.id,
                            title: data.title,
                            img: data.img,
                            tag: data.tag || "Heritage",
                            subtitle: data.subtitle || ""
                        });
                    });
                    setProducts(items);
                }
            } catch (error) {
                console.error("Error fetching wedding products:", error);
            }
        };
        fetchWedding();
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

    if (products.length === 0) return null;

    return (
        <section id="wedding" className="py-40 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-center mb-24 text-center md:text-left">
                    <div className="max-w-2xl mb-12 md:mb-0">
                        <div className="flex items-center justify-center md:justify-start gap-4 mb-6">
                            <Gift className="text-brand-gold w-4 h-4" />
                            <span className="text-[10px] uppercase tracking-[0.5em] text-brand-gold font-bold">The Heritage Collection</span>
                        </div>
                        <h2 className="text-5xl md:text-8xl font-serif text-brand-maroon leading-none tracking-tighter">
                            Wedding Return <br />
                            <span className="italic font-light text-stroke opacity-60">Gratitude.</span>
                        </h2>
                    </div>

                    <Link
                        href="/collections/wedding"
                        className="group flex items-center gap-6 px-12 py-6 border border-brand-maroon/10 text-[10px] tracking-[0.4em] uppercase font-bold text-brand-maroon hover:bg-brand-maroon hover:text-white transition-all duration-700"
                    >
                        Explore Collection
                        <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform duration-500" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {products.map((product, i) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.2, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                            viewport={{ once: true }}
                            className="group"
                        >
                            <div className="relative aspect-square overflow-hidden mb-10 bg-brand-ivory shadow-sm group-hover:shadow-2xl transition-all duration-1000">
                                <Link href={`/products/${product.id}`}>
                                    <Image
                                        src={product.img}
                                        alt={product.title}
                                        fill
                                        className="object-cover transition-transform duration-[2s] group-hover:scale-110"
                                        unoptimized
                                    />
                                </Link>

                                <div className="absolute top-4 left-4 px-3 py-1.5 bg-white/95 backdrop-blur-sm text-[7px] uppercase tracking-[0.3em] font-bold text-brand-maroon border border-brand-gold/20">
                                    {product.tag}
                                </div>

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

                            <div className="text-center px-4">
                                <div className="h-[1px] w-8 bg-brand-gold/30 mx-auto mb-6 group-hover:w-20 transition-all duration-700" />
                                <Link href={`/products/${product.id}`}>
                                    <h3 className="text-2xl font-serif text-brand-maroon mb-3 tracking-tight group-hover:text-brand-gold transition-colors">{product.title}</h3>
                                </Link>
                                <p className="text-[10px] uppercase tracking-[0.2em] text-brand-maroon/50 font-medium">{product.subtitle}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WeddingReturnSection;

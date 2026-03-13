"use client";

import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

import { allProducts, Product } from "@/data/products";
import { Sparkles } from "lucide-react";
import { db } from '@/lib/firebase';
import { collection, query, where, getDocs, orderBy } from 'firebase/firestore';

export default function BrandedCollectionPage() {
    const [brandedProducts, setBrandedProducts] = React.useState<Product[]>(allProducts.filter(p => p.category === "Branded Gift"));
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        const fetchProducts = async () => {
            try {
                const q = query(
                    collection(db, "products"),
                    where("category", "==", "Branded Gift"),
                    orderBy("createdAt", "desc")
                );
                const querySnapshot = await getDocs(q);
                if (!querySnapshot.empty) {
                    const items: Product[] = [];
                    querySnapshot.forEach((doc) => {
                        items.push({ id: doc.id, ...doc.data() } as Product);
                    });
                    setBrandedProducts(items);
                }
            } catch (error) {
                console.error("Error fetching branded:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);

    return (
        <main className="relative bg-brand-ivory min-h-screen">
            <WhatsAppButton />
            <Navbar />

            <section className="pt-40 pb-20 px-6">
                <div className="container mx-auto">
                    <div className="max-w-4xl mx-auto text-center mb-20">
                        <div className="flex items-center justify-center gap-4 mb-6">
                            <Sparkles className="text-brand-gold w-4 h-4" />
                            <span className="text-[10px] uppercase tracking-[0.5em] text-brand-gold font-bold">The Elite Collection</span>
                        </div>
                        <h1 className="text-6xl md:text-8xl font-serif text-brand-maroon leading-none tracking-tighter mb-8">
                            Branded <span className="italic font-light">Gifts</span>
                        </h1>
                        <p className="text-sm md:text-base text-brand-brown/60 max-w-2xl mx-auto font-medium leading-relaxed uppercase tracking-widest">
                            Heirloom-quality treasures and bespoke ensembles curated for those who appreciate the extraordinary.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {brandedProducts.map((product) => (
                            <div key={product.id} className="group">
                                <div className="relative aspect-[4/5] overflow-hidden mb-8 bg-white shadow-sm group-hover:shadow-2xl transition-all duration-700">
                                    <img
                                        src={product.img}
                                        alt={product.title}
                                        className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                                    />
                                    <div className="absolute top-6 left-6 px-4 py-2 bg-white/90 backdrop-blur-sm text-[8px] uppercase tracking-[0.3em] font-bold text-brand-maroon border border-brand-gold/20">
                                        {product.tag}
                                    </div>
                                </div>
                                <div className="text-center px-4">
                                    <div className="h-[1px] w-8 bg-brand-gold/30 mx-auto mb-6 group-hover:w-20 transition-all duration-700" />
                                    <h3 className="text-2xl font-serif text-brand-maroon mb-2 tracking-tight">{product.title}</h3>
                                    <p className="text-[9px] uppercase tracking-[0.2em] text-brand-maroon/50 font-medium mb-4">{product.subtitle}</p>
                                    <p className="text-[11px] text-brand-brown/70 leading-relaxed mb-8 h-12 overflow-hidden line-clamp-3 uppercase tracking-widest font-bold">
                                        {product.description}
                                    </p>
                                    <button className="px-8 py-4 border border-brand-maroon/10 text-[9px] tracking-[0.4em] uppercase font-bold text-brand-maroon hover:bg-brand-maroon hover:text-white transition-all duration-500">
                                        Inquire Now
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

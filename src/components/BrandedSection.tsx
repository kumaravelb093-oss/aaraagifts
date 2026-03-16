"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Sparkles, ArrowRight } from 'lucide-react';
import Link from 'next/link';

import { db } from '@/lib/firebase';
import { collection, query, where, getDocs, limit, orderBy } from 'firebase/firestore';

const brandedProducts = [
    { id: '1', title: "Executive Noir Ensemble", img: "/assets/images/branded/mens-luxury-set.png", tag: "Premium", subtitle: "Men's Personal Suite" },
    { id: '2', title: "Roman Heritage Chess", img: "/assets/images/branded/roman-chess-set.jpg", tag: "Artisan", subtitle: "Metal & Wood Set" },
    { id: '3', title: "Grand Muse Station", img: "/assets/images/branded/pro-makeup-vanity.png", tag: "Professional", subtitle: "Vanity Trunk" },
    { id: '4', title: "Artisan Harmony Box", img: "/assets/images/branded/holiday-gourmet-hamper.jpg", tag: "Seasonal", subtitle: "Gourmet Hamper" },
    { id: '5', title: "Blossom Monogram Satchel", img: "/assets/images/branded/coach-pink-handbag.png", tag: "Designer", subtitle: "Coach Companion" },
    { id: '6', title: "Chanel Rose Aura Suite", img: "/assets/images/branded/chanel-perfume-set.png", tag: "Iconic", subtitle: "Perfume Ensemble" },
    { id: '7', title: "The Emerald Grove Set", img: "/assets/images/branded/gatherers-grove-jewelry.png", tag: "Artisanal", subtitle: "Minimalist Jewelry" },
    { id: '8', title: "Southery Pearl Collection", img: "/assets/images/branded/southery-pearl-collection.png", tag: "Heritage", subtitle: "Gemstone Curation" },
    { id: '9', title: "Celestial Voyager Mugs", img: "/assets/images/branded/zodiac-constellation-mugs.png", tag: "Bespoke", subtitle: "Zodiac Constellation Pair" },
    { id: '10', title: "The Navigator's Tech Wrap", img: "/assets/images/branded/leather-tech-wrap.png", tag: "Executive", subtitle: "Leather Tech Wrap" },
];

const BrandedSection = () => {
    // Removed useState and useEffect hooks for Firestore fetching
    // const [products, setProducts] = React.useState<any[]>([]);
    // const [loading, setLoading] = React.useState(true);

    // React.useEffect(() => {
    //     const fetchBranded = async () => {
    //         try {
    //             const q = query(
    //                 collection(db, "products"),
    //                 where("category", "==", "Branded Gift"),
    //                 limit(10)
    //             );
    //             const querySnapshot = await getDocs(q);
    //             if (!querySnapshot.empty) {
    //                 const items: any[] = [];
    //                 querySnapshot.forEach((doc) => {
    //                     const data = doc.data();
    //                     items.push({
    //                         id: doc.id,
    //                         title: data.title,
    //                         img: data.img,
    //                         tag: data.tag || "Premium",
    //                         subtitle: data.subtitle || ""
    //                     });
    //                 });
    //                 setProducts(items);
    //             }
    //         } catch (error) {
    //             console.error("Error fetching branded products:", error);
    //         } finally {
    //             setLoading(false);
    //         }
    //     };
    //     fetchBranded();
    // }, []);

    // const displayProducts = [
    //     ...products,
    //     ...brandedProducts.filter(bp => !products.some(p => p.id === bp.id))
    // ].slice(0, 10);

    return (
        <section id="branded" className="py-40 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
                    <div className="max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}
                            className="flex items-center gap-4 mb-6"
                        >
                            <span className="w-12 h-[1px] bg-brand-gold"></span>
                            <span className="text-[10px] uppercase tracking-[0.6em] text-brand-gold font-bold">Volume Gifting Solutions</span>
                        </motion.div>
                        <h2 className="text-6xl md:text-9xl font-serif text-brand-espresso leading-none tracking-tighter">
                            Branded <br />
                            <span className="italic font-light text-brand-maroon">Masterpieces.</span>
                        </h2>
                    </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-px bg-brand-espresso/5 border border-brand-espresso/5">
                    {brandedProducts.map((item: any, i: number) => (
                        <motion.div
                            key={item.id || i}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1, delay: i * 0.1 }}
                            className="bg-white group relative aspect-[3/4] overflow-hidden"
                        >
                            <Image
                                src={item.img}
                                alt={item.title}
                                fill
                                className="object-cover transition-transform duration-[2s] group-hover:scale-110 opacity-90 group-hover:opacity-100"
                                unoptimized
                            />
                            <div className="absolute inset-x-0 bottom-0 p-8 translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-link">
                                <span className="text-[9px] uppercase tracking-[0.4em] text-brand-gold font-bold mb-2 block">Premium Branding</span>
                                <h3 className="text-xl font-serif text-white mb-6 leading-tight">{item.title}</h3>
                                <Link
                                    href="/corporate"
                                    className="inline-flex items-center gap-2 text-[9px] uppercase tracking-widest font-bold text-white hover:text-brand-gold transition-colors"
                                >
                                    Inquire Now <ArrowRight size={14} />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BrandedSection;

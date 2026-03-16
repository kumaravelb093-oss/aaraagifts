"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Sparkles, ArrowRight } from 'lucide-react';

const staticCollections = [
    {
        title: "The Royal Box",
        img: "/assets/images/products/wedding/wed5.jpg",
        tag: "Bestseller"
    },
    {
        title: "Midnight Elegance",
        img: "/assets/images/products/wedding/wed3.jpg",
        tag: "Limited"
    },
    {
        title: "Ivory Dreams",
        img: "/assets/images/insta/insta1.jpg",
        tag: "Premium"
    },
    {
        title: "Golden Heritage",
        img: "/assets/images/insta/insta3.jpg",
        tag: "New"
    },
];

import { db } from '@/lib/firebase';
import { collection, query, getDocs, limit, orderBy, where } from 'firebase/firestore';
import { allProducts, Product } from '@/data/products';

const CollectionShowcase = () => {
    const [collectionsData, setCollectionsData] = React.useState(staticCollections);

    React.useEffect(() => {
        const fetchFeatured = async () => {
            try {
                const q = query(
                    collection(db, "products"),
                    where("category", "==", "Signature Hampers"),
                    limit(4)
                );
                const querySnapshot = await getDocs(q);
                const items: any[] = [];
                querySnapshot.forEach((doc) => {
                    const data = doc.data();
                    items.push({
                        id: doc.id,
                        title: data.title,
                        img: data.img,
                        tag: data.tag || "Exclusive",
                        subtitle: data.subtitle || ""
                    });
                });
                
                const staticSignature = allProducts.filter((p: Product) => p.category === "Signature Hampers").map((p: Product) => ({
                    id: p.id,
                    title: p.title,
                    img: p.img,
                    tag: p.tag || "Legacy",
                    subtitle: p.subtitle || ""
                }));
                const firestoreIds = new Set(items.map(i => i.id));
                setCollectionsData([...items, ...staticSignature.filter((p: any) => !firestoreIds.has(p.id))].slice(0, 4));
            } catch (error) {
                console.error("Error fetching featured:", error);
            }
        };
        fetchFeatured();
    }, []);
    return (
        <section className="py-40 bg-brand-ivory relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-center mb-24 text-center md:text-left">
                    <div className="max-w-2xl mb-12 md:mb-0">
                        <div className="flex items-center justify-center md:justify-start gap-4 mb-6">
                            <Sparkles className="text-brand-gold w-4 h-4" />
                            <span className="text-[10px] uppercase tracking-[0.5em] text-brand-gold font-bold">Featured Selections</span>
                        </div>
                        <h2 className="text-5xl md:text-8xl font-serif text-brand-maroon leading-none tracking-tighter">
                            Signature <br />
                            <span className="italic font-light text-stroke opacity-60">Hampers</span>
                        </h2>
                    </div>

                    <a
                        href="/aaraa-catalogue.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-6 px-12 py-6 border border-brand-maroon/10 text-[10px] tracking-[0.4em] uppercase font-bold text-brand-maroon hover:bg-brand-maroon hover:text-white transition-all duration-700"
                    >
                        View Catalogue
                        <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform duration-500" />
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {collectionsData.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.2, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                            viewport={{ once: true }}
                            className="group"
                        >
                            <div className="relative aspect-[3/4] overflow-hidden mb-10 bg-white shadow-sm group-hover:shadow-2xl transition-all duration-700">
                                <Image
                                    src={item.img}
                                    alt={item.title}
                                    fill
                                    priority={i === 0}
                                    className="object-cover transition-transform duration-[2s] group-hover:scale-110"
                                    unoptimized
                                />

                                <div className="absolute top-0 left-0 w-full h-full bg-brand-maroon/0 group-hover:bg-brand-maroon/10 transition-colors" />

                                <div className="absolute top-6 left-6 px-4 py-2 bg-white/90 backdrop-blur-sm text-[8px] uppercase tracking-[0.3em] font-bold text-brand-maroon border border-brand-gold/20">
                                    {item.tag}
                                </div>
                            </div>

                            <div className="text-center px-4">
                                <div className="h-[1px] w-8 bg-brand-gold/30 mx-auto mb-6 group-hover:w-20 transition-all duration-700" />
                                <h3 className="text-2xl font-serif text-brand-maroon mb-3 tracking-tight group-hover:text-brand-gold transition-colors">{item.title}</h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CollectionShowcase;

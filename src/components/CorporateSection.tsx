"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Users, Laptop, Coffee } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const features = [
    {
        icon: <Briefcase className="w-5 h-5" />,
        title: "Custom Branding",
        desc: "Logo engraving, screen printing & embossing on every product."
    },
    {
        icon: <Users className="w-5 h-5" />,
        title: "Large Scale Execution",
        desc: "Volume orders with consistent artisanal quality."
    },
    {
        icon: <Laptop className="w-5 h-5" />,
        title: "Employee Appreciation",
        desc: "Tailored onboarding kits and milestone gifts for your team."
    },
    {
        icon: <Coffee className="w-5 h-5" />,
        title: "Event Gifting",
        desc: "Curated hampers for conferences, launches, and retreats."
    }
];

const showcaseImages = [
    { src: "/assets/images/corporate/combo1.jpeg", alt: "Gift Combo Set" },
    { src: "/assets/images/corporate/handbook&pen7.jpeg", alt: "Handbook & Pen Set" },
    { src: "/assets/images/corporate/pen2.jpeg", alt: "Premium Pen" },
    { src: "/assets/images/corporate/flask1.jpeg", alt: "Insulated Flask" },
];

import { db } from '@/lib/firebase';
import { collection, query, where, getDocs, limit, orderBy } from 'firebase/firestore';

const CorporateSection = () => {
    const [products, setProducts] = React.useState<any[]>([]);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        const fetchCorporate = async () => {
            try {
                const q = query(
                    collection(db, "products"),
                    where("category", "==", "Corporate Studio"),
                    limit(4)
                );
                const querySnapshot = await getDocs(q);
                if (!querySnapshot.empty) {
                    const items: any[] = [];
                    querySnapshot.forEach((doc) => {
                        const data = doc.data();
                        items.push({
                            src: data.img,
                            alt: data.title
                        });
                    });
                    setProducts(items);
                }
            } catch (error) {
                console.error("Error fetching corporate products:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchCorporate();
    }, []);

    const displayImages = [
        ...products,
        ...showcaseImages.filter(si => !products.some(p => p.src === si.src))
    ].slice(0, 4);
    return (
        <section className="py-32 bg-brand-ivory">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    {/* Image Grid */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-2 gap-3"
                    >
                        {displayImages.map((img, i) => (
                            <div
                                key={i}
                                className={`relative overflow-hidden rounded-xl group ${i === 0 ? 'aspect-[4/5]' : i === 3 ? 'aspect-[4/5]' : 'aspect-square'
                                    } ${i === 1 ? 'mt-8' : ''} ${i === 2 ? '-mt-4' : ''}`}
                            >
                                <Image
                                    src={img.src}
                                    alt={img.alt}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    unoptimized
                                />
                                <div className="absolute inset-0 bg-brand-maroon/0 group-hover:bg-brand-maroon/10 transition-all duration-500" />
                            </div>
                        ))}
                    </motion.div>

                    {/* Content */}
                    <div>
                        <span className="text-[10px] uppercase tracking-[0.4em] text-brand-copper font-bold mb-6 block">Corporate Excellence</span>
                        <h2 className="text-5xl md:text-7xl font-serif text-brand-brown mb-10 leading-tight">Partners in <br /><span className="italic text-brand-copper">Memorable</span> Impressions</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-14">
                            {features.map((f, i) => (
                                <div key={i} className="group">
                                    <div className="text-brand-copper mb-4 group-hover:scale-110 transition-transform duration-300">
                                        {f.icon}
                                    </div>
                                    <h4 className="text-base font-serif text-brand-brown mb-2 uppercase tracking-wider">{f.title}</h4>
                                    <p className="text-brand-espresso/40 text-xs leading-relaxed font-light">{f.desc}</p>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-wrap gap-4">
                            <Link
                                href="/corporate"
                                className="px-10 py-4 bg-brand-maroon text-white text-[10px] tracking-[0.3em] font-bold uppercase hover:bg-brand-copper transition-all duration-500 inline-block"
                            >
                                Explore Collection
                            </Link>
                            <a
                                href="/aaraa-catalogue.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-10 py-4 border border-brand-brown/20 text-brand-brown text-[10px] tracking-[0.3em] font-bold uppercase hover:bg-brand-brown hover:text-white transition-all duration-500 inline-block"
                            >
                                Download Catalogue
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CorporateSection;

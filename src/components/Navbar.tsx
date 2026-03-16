"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search, ShoppingBag, Menu, X, ChevronDown, ChevronRight, LayoutGrid } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '@/context/CartContext';
import { allProducts, Product } from '@/data/products';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState<Product[]>([]);
    const [logoError, setLogoError] = useState(false);
    const [activeSubmenu, setActiveSubmenu] = useState<number | null>(null);
    const { cartCount, setIsCartOpen, cart } = useCart();
    const searchRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Search Logic
    useEffect(() => {
        if (searchQuery.length > 1) {
            const results = allProducts.filter(p =>
                p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
                p.subtitle?.toLowerCase().includes(searchQuery.toLowerCase())
            ).slice(0, 5);
            setSearchResults(results);
        } else {
            setSearchResults([]);
        }
    }, [searchQuery]);

    // Close search on click outside
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
                setIsSearchOpen(false);
                setSearchQuery("");
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const navLinks = [
        { name: "HOME", href: "/" },
        {
            name: "RETURN GIFTS",
            href: "/collections/wedding",
            sublinks: ["Brass Artifacts", "Silver Platters", "Ethnic Hamper Sets", "Premium Wedding Sweets"]
        },
        {
            name: "MAKE YOUR OWN HAMPER",
            href: "/collections/custom",
            sublinks: ["Select Box Size", "Choose Lining", "Curate Items", "Personalized Note"]
        },
        {
            name: "CORPORATE STUDIO",
            href: "/corporate",
            sublinks: ["Gift Combos", "Handbook & Pen Sets", "Premium Pens", "Flasks & Bags"]
        },
        {
            name: "BRANDED GIFT",
            href: "/collections/branded",
            sublinks: ["Executive Ensembles", "Artisan Chess Sets", "Beauty Stations", "Designer Satchels"]
        },
        { name: "OUR STORY", href: "/about" },
        { name: "CONTACT", href: "/contact" },
    ];

    return (
        <header className="sticky top-0 left-0 right-0 z-[100] w-full bg-brand-orange border-b border-white/5">
            {/* Announcement Bar */}
            <div className="bg-brand-brown/90 text-white py-1 overflow-hidden h-7 flex items-center border-b border-white/5">
                <div className="flex whitespace-nowrap animate-marquee">
                    {[1, 2, 3, 4].map((i) => (
                        <span key={i} className="mx-8 text-[8px] font-bold uppercase tracking-[0.4em] flex items-center">
                            Curating Extraordinary Moments <span className="w-1 h-1 bg-brand-gold rounded-full ml-12" />
                            Global Premium Shipping Available <span className="w-1 h-1 bg-brand-gold rounded-full ml-12" />
                        </span>
                    ))}
                </div>
            </div>

            {/* Main Navbar */}
            <div className={`transition-all duration-300 ${isScrolled ? 'py-1' : 'py-2'}`}>
                <div className="container mx-auto px-6 grid grid-cols-3 items-center min-h-[50px]">

                    {/* Left: Collections Shortcut (Optional/Decorative) */}
                    <div className="flex items-center">
                        <Link href="/collections" className="text-[9px] font-bold text-white/40 hover:text-brand-gold tracking-[0.2em] transition-all uppercase flex items-center gap-2 group">
                            <LayoutGrid size={10} className="group-hover:rotate-90 transition-transform duration-500" />
                            Collections
                        </Link>
                    </div>

                    {/* Center: Logo */}
                    <div className="flex justify-center">
                        <Link href="/" className="relative group/logo">
                            <div className={`relative transition-all duration-500 ${isScrolled ? 'h-20 w-40' : 'h-28 w-56 lg:h-32 lg:w-64'}`}>
                                <Image
                                    src="/aaraa-logo-transparent.png"
                                    alt="Aaraa Gifting"
                                    fill
                                    className="object-contain"
                                    priority
                                    unoptimized
                                    onError={() => setLogoError(true)}
                                />
                                {logoError && (
                                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                                        <span className="text-xl font-serif font-bold tracking-widest leading-none text-white">AARAA</span>
                                        <span className="text-[6px] uppercase tracking-[0.4em] font-bold text-brand-gold">Aaraa Studio</span>
                                    </div>
                                )}
                            </div>
                        </Link>
                    </div>

                    {/* Right: Icons (Search, Cart, Menu) */}
                    <div className="flex items-center justify-end space-x-6 lg:space-x-8 text-white">
                        {/* Search Icon & Box */}
                        <div className="relative" ref={searchRef}>
                            <button
                                onClick={() => setIsSearchOpen(!isSearchOpen)}
                                className="hover:text-brand-gold transition-colors focus:outline-none"
                            >
                                <Search size={16} strokeWidth={2.5} />
                            </button>

                            <AnimatePresence>
                                {isSearchOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.95, y: 10 }}
                                        animate={{ opacity: 1, scale: 1, y: 0 }}
                                        exit={{ opacity: 0, scale: 0.95, y: 10 }}
                                        className="absolute right-0 top-full mt-4 w-[320px] bg-white rounded-xl shadow-2xl border border-brand-gold/20 overflow-hidden"
                                    >
                                        <div className="p-4 bg-brand-ivory border-b border-brand-gold/10">
                                            <input
                                                autoFocus
                                                type="text"
                                                placeholder="Search Aaraa Studio..."
                                                value={searchQuery}
                                                onChange={(e) => setSearchQuery(e.target.value)}
                                                className="w-full bg-transparent text-brand-brown text-xs font-bold tracking-wider placeholder:text-brand-brown/40 border-none focus:outline-none"
                                            />
                                        </div>

                                        <div className="max-h-[350px] overflow-y-auto">
                                            {searchQuery.length > 1 ? (
                                                searchResults.length > 0 ? (
                                                    <div className="p-2">
                                                        {searchResults.map((res) => (
                                                            <Link
                                                                key={res.id}
                                                                href={`/products/${res.id}`}
                                                                onClick={() => { setIsSearchOpen(false); setSearchQuery(""); }}
                                                                className="flex items-center gap-4 p-3 hover:bg-brand-brown/5 rounded-lg group transition-colors"
                                                            >
                                                                <div className="relative w-12 h-12 rounded-md overflow-hidden flex-shrink-0">
                                                                    <Image src={res.img} alt={res.title} fill className="object-cover" unoptimized />
                                                                </div>
                                                                <div className="flex-1">
                                                                    <h4 className="text-[10px] uppercase font-bold text-brand-brown group-hover:text-brand-copper transition-colors">{res.title}</h4>
                                                                    <p className="text-[8px] text-brand-brown/40 uppercase tracking-widest">{res.category}</p>
                                                                </div>
                                                                <ChevronRight size={12} className="text-brand-gold" />
                                                            </Link>
                                                        ))}
                                                    </div>
                                                ) : (
                                                    <div className="p-8 text-center">
                                                        <p className="text-[10px] uppercase tracking-widest text-brand-brown/40 font-bold">No products found</p>
                                                    </div>
                                                )
                                            ) : (
                                                <div className="p-8 text-center">
                                                    <p className="text-[10px] uppercase tracking-widest text-brand-brown/40 font-bold italic">Start typing to search...</p>
                                                </div>
                                            )}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Cart Icon */}
                        <button
                            onClick={() => setIsCartOpen(true)}
                            className="relative group transition-colors"
                        >
                            <ShoppingBag size={16} strokeWidth={2.5} className="group-hover:text-brand-gold" />
                            <AnimatePresence>
                                {cartCount > 0 && (
                                    <motion.span
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        className="absolute -top-1.5 -right-1.5 bg-brand-gold text-brand-brown text-[7px] font-black w-3.5 h-3.5 rounded-full flex items-center justify-center border border-brand-orange"
                                    >
                                        {cartCount}
                                    </motion.span>
                                )}
                            </AnimatePresence>
                        </button>

                        {/* Mobile Menu Icon */}
                        <button
                            className="lg:hidden hover:text-brand-gold"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>
                </div>

                {/* Desktop Menu Links */}
                <nav className="hidden lg:flex justify-center space-x-8 mt-2 pb-2">
                    {navLinks.map((link, i) => (
                        <div
                            key={i}
                            className="relative"
                            onMouseEnter={() => setActiveSubmenu(i)}
                            onMouseLeave={() => setActiveSubmenu(null)}
                        >
                            <Link
                                href={link.href}
                                className="text-[9px] font-extrabold text-white/80 hover:text-brand-gold tracking-[0.2em] transition-all relative block py-1 uppercase"
                            >
                                {link.name}
                                {activeSubmenu === i && (
                                    <motion.div layoutId="underline" className="absolute -bottom-0.5 left-0 w-full h-[1px] bg-brand-gold" />
                                )}
                            </Link>

                            <AnimatePresence>
                                {activeSubmenu === i && link.sublinks && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 5 }}
                                        className="absolute top-full left-1/2 -translate-x-1/2 w-64 pt-4 z-50"
                                    >
                                        <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-2xl border border-brand-gold/10 overflow-hidden">
                                            <div className="grid grid-cols-1 gap-1">
                                                {link.sublinks.map((sub, j) => (
                                                    <Link
                                                        key={j}
                                                        href={link.href}
                                                        className="px-4 py-3 text-[9px] text-brand-espresso/60 hover:text-brand-brown hover:bg-brand-gold/10 rounded-xl tracking-[0.1em] transition-all uppercase font-bold flex items-center justify-between group"
                                                    >
                                                        {sub}
                                                        <ChevronRight size={10} className="text-brand-gold opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </nav>
            </div>

            {/* Mobile Sidebar Navigation */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[150]"
                        />
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 h-full w-[80%] max-w-[400px] bg-white z-[200] shadow-2xl p-8 overflow-y-auto"
                        >
                            <div className="flex justify-between items-center mb-12">
                                <span className="text-2xl font-serif text-brand-brown tracking-widest font-bold">AARAA</span>
                                <button onClick={() => setIsMobileMenuOpen(false)} className="text-brand-brown bg-brand-brown/5 p-2 rounded-full">
                                    <X size={24} />
                                </button>
                            </div>

                            <div className="space-y-6">
                                {navLinks.map((link, i) => (
                                    <div key={i} className="border-b border-brand-brown/5 pb-6">
                                        <Link
                                            href={link.href}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className="text-xl font-serif text-brand-brown uppercase tracking-wider mb-4 block font-bold"
                                        >
                                            {link.name}
                                        </Link>
                                        {link.sublinks && (
                                            <div className="grid grid-cols-1 gap-3 pl-4">
                                                {link.sublinks.map((sub, j) => (
                                                    <Link
                                                        key={j}
                                                        href={link.href}
                                                        onClick={() => setIsMobileMenuOpen(false)}
                                                        className="text-brand-brown/40 text-[10px] uppercase tracking-widest font-bold flex items-center gap-2"
                                                    >
                                                        <div className="w-1 h-1 bg-brand-gold rounded-full" />
                                                        {sub}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;

"use client";

import React from 'react';
import Link from 'next/link';
import { Instagram, Facebook, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-brand-orange pt-16 pb-8 text-brand-espresso font-medium">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand Info */}
                    <div className="lg:col-span-1 pr-8 lg:pr-12 border-r border-white/5">
                        <div className="mb-4 flex flex-col items-start">
                            <Link href="/" className="relative h-[60px] w-[140px] mb-3 block">
                                <img
                                    src="/aaraa-logo-transparent.png"
                                    alt="Aaraa Gifting"
                                    className="object-contain h-full w-full"
                                />
                            </Link>
                            <span className="text-brand-espresso italic text-[10px] tracking-[0.4em] uppercase font-sans font-black">Aaraa Studio</span>
                        </div>
                        <p className="text-brand-espresso/60 mb-5 leading-relaxed text-xs font-bold">
                            Crafting the world's most beautiful gifting moments through meticulous curation and artisanal craftsmanship.
                        </p>
                        <div className="flex gap-4">
                            <Link href="https://www.instagram.com/aaraagifts" target="_blank" className="w-10 h-10 border border-brand-espresso/20 rounded-full flex items-center justify-center text-brand-espresso/60 hover:border-black hover:text-black transition-all">
                                <Instagram className="w-4 h-4" />
                            </Link>
                            <Link href="https://www.facebook.com/aaraagifts" target="_blank" className="w-10 h-10 border border-brand-espresso/20 rounded-full flex items-center justify-center text-brand-espresso/60 hover:border-black hover:text-black transition-all">
                                <Facebook className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="lg:ml-auto">
                        <h4 className="text-[10px] uppercase tracking-[0.4em] text-black mb-5 font-black">Discovery</h4>
                        <ul className="space-y-3 text-xs tracking-[0.1em] text-brand-espresso/70 uppercase font-bold">
                            <li><Link href="/collections" className="hover:text-black transition-colors">Wedding Collections</Link></li>
                            <li><Link href="/corporate" className="hover:text-black transition-colors">Corporate Gifting</Link></li>
                            <li><Link href="/about" className="hover:text-black transition-colors">Our Story</Link></li>
                            <li><Link href="/contact" className="hover:text-black transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Reach Us */}
                    <div className="lg:ml-auto">
                        <h4 className="text-[10px] uppercase tracking-[0.4em] text-black mb-5 font-black">Support</h4>
                        <ul className="space-y-3 text-xs tracking-[0.1em] text-brand-espresso/70 uppercase font-bold">
                            <li><Link href="#" className="hover:text-black transition-colors">Shipping Guide</Link></li>
                            <li><Link href="#" className="hover:text-black transition-colors">Returns Policy</Link></li>
                            <li><Link href="#" className="hover:text-black transition-colors">Track Order</Link></li>
                        </ul>
                    </div>

                    {/* Studio Details */}
                    <div className="lg:ml-auto">
                        <h4 className="text-[10px] uppercase tracking-[0.4em] text-black mb-5 font-black">The Studio</h4>
                        <ul className="space-y-4 text-xs text-brand-espresso/70 font-bold">
                            <li className="flex gap-3"><MapPin className="w-4 h-4 text-brand-espresso flex-shrink-0" /> South Extension, Block C, New Delhi</li>
                            <li className="flex gap-3"><Phone className="w-4 h-4 text-brand-espresso flex-shrink-0" /> +91 97112 00000</li>
                            <li className="flex gap-3"><Mail className="w-4 h-4 text-brand-espresso flex-shrink-0" /> aaraagiftshop@gmail.com</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-brand-espresso/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-brand-espresso/40 text-[10px] uppercase tracking-[0.5em] font-bold">
                        © Aaraa Gifts {new Date().getFullYear()}. Crafted for impressions.
                    </p>
                    <div className="flex gap-8 text-[10px] uppercase tracking-[0.2em] text-brand-espresso/40 font-bold">
                        <span className="hover:text-black cursor-pointer transition-colors">Privacy</span>
                        <span className="hover:text-black cursor-pointer transition-colors">Terms</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

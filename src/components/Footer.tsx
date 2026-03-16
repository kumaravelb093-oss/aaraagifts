"use client";

import React from 'react';
import Link from 'next/link';
import { Instagram, Facebook, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-brand-orange pt-16 pb-8 text-white">
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
                            <span className="text-brand-copper italic text-[10px] tracking-[0.4em] uppercase font-sans font-bold">Aaraa Studio</span>
                        </div>
                        <p className="text-white/30 mb-5 leading-relaxed text-xs font-light">
                            Crafting the world's most beautiful gifting moments through meticulous curation and artisanal craftsmanship.
                        </p>
                        <div className="flex gap-4">
                            <Link href="https://www.instagram.com/aaraagifts" target="_blank" className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center text-white/60 hover:border-brand-gold hover:text-brand-gold transition-all">
                                <Instagram className="w-4 h-4" />
                            </Link>
                            <Link href="https://www.facebook.com/aaraagifts" target="_blank" className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center text-white/60 hover:border-brand-gold hover:text-brand-gold transition-all">
                                <Facebook className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="lg:ml-auto">
                        <h4 className="text-[10px] uppercase tracking-[0.4em] text-brand-copper mb-5 font-bold">Discovery</h4>
                        <ul className="space-y-3 text-xs tracking-[0.1em] text-white/50 uppercase font-medium">
                            <li><Link href="/collections" className="hover:text-white transition-colors">Wedding Collections</Link></li>
                            <li><Link href="/corporate" className="hover:text-white transition-colors">Corporate Gifting</Link></li>
                            <li><Link href="/about" className="hover:text-white transition-colors">Our Story</Link></li>
                            <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Reach Us */}
                    <div className="lg:ml-auto">
                        <h4 className="text-[10px] uppercase tracking-[0.4em] text-brand-copper mb-5 font-bold">Support</h4>
                        <ul className="space-y-3 text-xs tracking-[0.1em] text-white/50 uppercase font-medium">
                            <li><Link href="#" className="hover:text-white transition-colors">Shipping Guide</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Returns Policy</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Track Order</Link></li>
                        </ul>
                    </div>

                    {/* Studio Details */}
                    <div className="lg:ml-auto">
                        <h4 className="text-[10px] uppercase tracking-[0.4em] text-brand-copper mb-5 font-bold">The Studio</h4>
                        <ul className="space-y-4 text-xs text-white/50 font-light">
                            <li className="flex gap-3"><MapPin className="w-4 h-4 text-brand-copper flex-shrink-0" /> South Extension, Block C, New Delhi</li>
                            <li className="flex gap-3"><Phone className="w-4 h-4 text-brand-copper flex-shrink-0" /> +91 97112 00000</li>
                            <li className="flex gap-3"><Mail className="w-4 h-4 text-brand-copper flex-shrink-0" /> hello@aaragifts.com</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-white/20 text-[10px] uppercase tracking-[0.5em] font-bold">
                        © Aaraa Gifts {new Date().getFullYear()}. Crafted for impressions.
                    </p>
                    <div className="flex gap-8 text-[10px] uppercase tracking-[0.2em] text-white/20 font-bold">
                        <span className="hover:text-brand-copper cursor-pointer transition-colors">Privacy</span>
                        <span className="hover:text-brand-copper cursor-pointer transition-colors">Terms</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

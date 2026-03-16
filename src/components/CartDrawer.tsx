"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingBag, Plus, Minus, Trash2, MessageCircle } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import Image from 'next/image';

const CartDrawer = () => {
    const { isCartOpen, setIsCartOpen, cart, removeFromCart, addToCart, decreaseQuantity, cartCount } = useCart();

    const handleWhatsAppEnquiry = () => {
        if (cart.length === 0) return;

        const productList = cart.map(item => `- ${item.title} (Qty: ${item.quantity})`).join('\n');
        const message = `Hello Aaraa Gifting! I would like to enquire about the following items in my hamper:\n\n${productList}\n\nTotal Items: ${cartCount}\n\nPlease let me know the details and process.`;

        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/919940173007?text=${encodedMessage}`, '_blank');
        setIsCartOpen(false);
    };

    return (
        <AnimatePresence>
            {isCartOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsCartOpen(false)}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[250]"
                    />

                    {/* Drawer */}
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: "spring", damping: 30, stiffness: 300 }}
                        className="fixed top-0 right-0 h-full w-full max-w-[450px] bg-white z-[300] shadow-2xl flex flex-col"
                    >
                        {/* Header */}
                        <div className="p-8 border-b border-brand-brown/5 flex justify-between items-center bg-brand-ivory">
                            <div className="flex items-center gap-3">
                                <ShoppingBag className="text-brand-brown" size={24} />
                                <h2 className="text-xl font-serif text-brand-brown font-bold tracking-widest uppercase">Your Hamper ({cartCount})</h2>
                            </div>
                            <button
                                onClick={() => setIsCartOpen(false)}
                                className="p-2 hover:bg-brand-brown/5 rounded-full text-brand-brown transition-colors"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        {/* Items */}
                        <div className="flex-1 overflow-y-auto p-8 space-y-8">
                            {cart.length > 0 ? (
                                cart.map((item) => (
                                    <div key={item.id} className="flex gap-6 group">
                                        <div className="relative w-24 h-24 rounded-2xl overflow-hidden bg-brand-ivory flex-shrink-0 shadow-sm">
                                            <Image
                                                src={item.img}
                                                alt={item.title}
                                                fill
                                                className="object-cover"
                                                unoptimized
                                            />
                                        </div>
                                        <div className="flex-1 flex flex-col justify-between py-1">
                                            <div>
                                                <div className="flex justify-between items-start mb-1">
                                                    <h3 className="text-xs font-black text-brand-brown uppercase tracking-widest leading-tight">{item.title}</h3>
                                                    <button
                                                        onClick={() => removeFromCart(item.id)}
                                                        className="text-brand-brown/20 hover:text-brand-orange transition-colors"
                                                    >
                                                        <Trash2 size={14} />
                                                    </button>
                                                </div>
                                            </div>

                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center border border-brand-brown/10 rounded-full px-3 py-1 bg-brand-ivory">
                                                    <button
                                                        onClick={() => decreaseQuantity(item.id)}
                                                        className="text-brand-brown/40 hover:text-brand-brown transition-colors p-1"
                                                    >
                                                        <Minus size={12} />
                                                    </button>
                                                    <span className="text-[10px] font-bold text-brand-brown w-6 text-center">{item.quantity}</span>
                                                    <button
                                                        onClick={() => addToCart(item)}
                                                        className="text-brand-brown/40 hover:text-brand-brown transition-colors p-1"
                                                    >
                                                        <Plus size={12} />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="h-full flex flex-col items-center justify-center text-center">
                                    <div className="w-20 h-20 bg-brand-ivory rounded-full flex items-center justify-center mb-6">
                                        <ShoppingBag className="text-brand-brown/10" size={40} />
                                    </div>
                                    <h3 className="text-lg font-serif text-brand-brown mb-2">Your hamper is empty</h3>
                                    <p className="text-xs text-brand-brown/40 uppercase tracking-widest mb-8">Let's find something extraordinary</p>
                                    <button
                                        onClick={() => setIsCartOpen(false)}
                                        className="px-8 py-4 bg-brand-brown text-white text-[10px] font-bold uppercase tracking-widest hover:bg-brand-orange transition-all shadow-xl"
                                    >
                                        Start Gifting
                                    </button>
                                </div>
                            )}
                        </div>

                        {/* Footer */}
                        {cart.length > 0 && (
                            <div className="p-8 bg-brand-ivory border-t border-brand-gold/10">
                                <div className="grid grid-cols-1 gap-4">
                                    <button
                                        onClick={handleWhatsAppEnquiry}
                                        className="w-full bg-[#25D366] text-white py-5 rounded-sm text-[11px] font-bold uppercase tracking-[0.3em] flex items-center justify-center gap-4 hover:bg-[#128C7E] transition-all shadow-2xl group"
                                    >
                                        Enquire on WhatsApp
                                        <MessageCircle size={18} className="group-hover:scale-110 transition-transform" />
                                    </button>
                                    <button
                                        onClick={() => setIsCartOpen(false)}
                                        className="w-full py-4 text-[10px] font-bold text-brand-brown/40 uppercase tracking-widest hover:text-brand-brown transition-colors"
                                    >
                                        Continue Shopping
                                    </button>
                                </div>
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default CartDrawer;

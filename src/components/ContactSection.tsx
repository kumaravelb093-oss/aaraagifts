"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Send, Loader2, CheckCircle2 } from 'lucide-react';

const ContactSection = () => {
    const [status, setStatus] = React.useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = React.useState('');
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        category: 'Corporate Gifting',
        quantity: '',
        message: ''
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        setErrorMessage('');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.error || 'Failed to send inquiry');
            }

            setStatus('success');
            setFormData({ name: '', email: '', category: 'Corporate Gifting', quantity: '', message: '' });
        } catch (error: any) {
            console.error('Submission error:', error);
            setStatus('error');
            setErrorMessage(error.message || 'Something went wrong. Please try again.');
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };
    return (
        <section className="py-32 bg-brand-ivory">
            <div className="container mx-auto px-6">
                <div className="max-w-6xl mx-auto flex flex-col lg:flex-row shadow-2xl border border-brand-brown/5 bg-white rounded-3xl overflow-hidden">
                    <div className="lg:w-1/3 p-12 lg:p-16 bg-brand-brown text-white">
                        <h2 className="text-3xl lg:text-5xl font-serif mb-10 leading-tight">Start Your <span className="italic text-brand-sandal">Gifting Journey</span></h2>
                        <p className="text-white/40 mb-16 leading-relaxed text-sm font-light">
                            From large scale corporate orders to bespoke personal hampers, tell us what you're looking for and our master curators will reach out shortly.
                        </p>
                        <ul className="space-y-8">
                            <li className="flex gap-4">
                                <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-brand-sandal">
                                    <Send size={18} />
                                </div>
                                <div>
                                    <p className="text-[10px] uppercase tracking-widest text-white/30 mb-1">Inquiry</p>
                                    <p className="text-sm font-serif">aaraagiftshop@gmail.com</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="lg:w-2/3 p-12 lg:p-16 bg-white">
                        {status === 'success' ? (
                            <div className="h-full flex flex-col items-center justify-center text-center space-y-6 py-12 animate-in fade-in zoom-in duration-500">
                                <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center">
                                    <CheckCircle2 size={40} />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-serif text-brand-brown mb-2">Inquiry Received</h3>
                                    <p className="text-brand-brown/60 text-sm max-w-sm mx-auto">
                                        Thank you for reaching out. Our curators will review your requirements and get back to you shortly.
                                    </p>
                                </div>
                                <button 
                                    onClick={() => setStatus('idle')}
                                    className="text-[11px] tracking-widest uppercase font-bold text-brand-brown hover:text-brand-copper transition-colors"
                                >
                                    Send another inquiry
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-10">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                    <div className="relative group">
                                        <input 
                                            type="text" 
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full bg-transparent border-b border-brand-brown/20 py-4 focus:outline-none focus:border-brand-brown transition-all text-sm font-medium text-black placeholder:text-black/40" 
                                            placeholder="FULL NAME" 
                                        />
                                    </div>
                                    <div className="relative group">
                                        <input 
                                            type="email" 
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full bg-transparent border-b border-brand-brown/20 py-4 focus:outline-none focus:border-brand-brown transition-all text-sm font-medium text-black placeholder:text-black/40" 
                                            placeholder="EMAIL ADDRESS" 
                                        />
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                    <div>
                                        <select 
                                            name="category"
                                            value={formData.category}
                                            onChange={handleChange}
                                            className="w-full bg-transparent border-b border-brand-brown/20 py-4 focus:outline-none focus:border-brand-brown transition-all text-[11px] tracking-widest uppercase font-semibold text-black/70 cursor-pointer"
                                        >
                                            <option>Corporate Gifting</option>
                                            <option>Wedding & Festive</option>
                                            <option>Personalized Hamper</option>
                                        </select>
                                    </div>
                                    <div>
                                        <input 
                                            type="text" 
                                            name="quantity"
                                            value={formData.quantity}
                                            onChange={handleChange}
                                            className="w-full bg-transparent border-b border-brand-brown/20 py-4 focus:outline-none focus:border-brand-brown transition-all text-sm font-medium text-black placeholder:text-black/40" 
                                            placeholder="EXPECTED QUANTITY" 
                                        />
                                    </div>
                                </div>
                                <div>
                                    <textarea 
                                        name="message"
                                        rows={4} 
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full bg-transparent border-b border-brand-brown/20 py-4 focus:outline-none focus:border-brand-brown transition-all text-sm font-medium text-black resize-none placeholder:text-black/40" 
                                        placeholder="TELL US MORE ABOUT YOUR REQUIREMENTS"
                                    ></textarea>
                                </div>
                                
                                {status === 'error' && (
                                    <p className="text-red-500 text-xs font-medium">{errorMessage}</p>
                                )}

                                <button 
                                    disabled={status === 'loading'}
                                    className="px-12 py-5 bg-brand-brown text-white text-[11px] tracking-[0.3em] font-bold uppercase rounded-sm hover:bg-brand-copper transition-all duration-500 shadow-xl flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {status === 'loading' ? (
                                        <Loader2 className="animate-spin mr-2" size={16} />
                                    ) : null}
                                    {status === 'loading' ? 'Sending...' : 'Send Enquiry'}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;

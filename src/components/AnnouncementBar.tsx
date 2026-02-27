"use client";

import React from 'react';

const AnnouncementBar = () => {
    const messages = [
        "15% off on Signature Bestsellers",
        "24 - 48 hours delivery available",
        "Premium Packaging Included",
        "Worldwide Shipping Available"
    ];

    return (
        <div className="bg-brand-copper text-white py-2 overflow-hidden h-9 flex items-center">
            <div className="flex whitespace-nowrap animate-marquee">
                {[...messages, ...messages, ...messages].map((msg, i) => (
                    <span key={i} className="mx-8 text-[10px] font-bold uppercase tracking-[0.2em] flex items-center">
                        {msg}
                        <span className="w-1.5 h-1.5 bg-brand-ivory/30 rounded-full ml-16" />
                    </span>
                ))}
            </div>
        </div>
    );
};

export default AnnouncementBar;

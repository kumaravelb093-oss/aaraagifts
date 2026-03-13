"use client";

import React, { useState } from 'react';
import { Upload, X, Image as ImageIcon } from 'lucide-react';
import { CldImage } from 'next-cloudinary';

interface ImageUploaderProps {
    value: string;
    onChange: (url: string) => void;
    onRemove: () => void;
}

export default function ImageUploader({
    value,
    onChange,
    onRemove
}: ImageUploaderProps) {
    const [isUploading, setIsUploading] = useState(false);

    const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        setIsUploading(true);
        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await fetch('/api/upload', {
                method: 'POST',
                body: formData,
            });

            const data = await response.json();
            if (data.secure_url) {
                onChange(data.secure_url);
            }
        } catch (error) {
            console.error('Upload failed:', error);
        } finally {
            setIsUploading(false);
        }
    };

    return (
        <div className="space-y-4 w-full">
            <div className="flex items-center gap-4">
                {value ? (
                    <div className="relative w-40 h-40 rounded-2xl overflow-hidden border-2 border-blue-100 group">
                        <img
                            src={value}
                            alt="Uploaded"
                            className="w-full h-full object-cover"
                        />
                        <button
                            onClick={onRemove}
                            className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
                        >
                            <X size={16} />
                        </button>
                    </div>
                ) : (
                    <label className="w-40 h-40 flex flex-col items-center justify-center border-2 border-dashed border-gray-200 rounded-2xl cursor-pointer hover:border-blue-400 hover:bg-blue-50 transition-all group">
                        {isUploading ? (
                            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                        ) : (
                            <>
                                <Upload size={24} className="text-gray-400 group-hover:text-blue-500 mb-2" />
                                <span className="text-sm font-medium text-gray-500 group-hover:text-blue-600">Upload Image</span>
                            </>
                        )}
                        <input
                            type="file"
                            className="hidden"
                            accept="image/*"
                            onChange={handleUpload}
                            disabled={isUploading}
                        />
                    </label>
                )}

                {!value && !isUploading && (
                    <div className="text-sm text-gray-500 max-w-[200px]">
                        <p className="font-medium text-gray-700">Add a product photo</p>
                        <p>PNG, JPG up to 10MB</p>
                    </div>
                )}
            </div>
        </div>
    );
}

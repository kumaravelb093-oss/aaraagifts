"use client";

import React, { useState, useRef } from 'react';
import { Upload, X, AlertCircle } from 'lucide-react';

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
    const [error, setError] = useState<string | null>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        setIsUploading(true);
        setError(null);

        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await fetch('/api/upload', {
                method: 'POST',
                body: formData,
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Upload failed');
            }

            if (data.secure_url) {
                onChange(data.secure_url);
            } else {
                throw new Error('No URL returned from upload');
            }
        } catch (err: any) {
            console.error('Upload failed:', err);
            setError(err.message || 'Upload failed. Please try again.');
        } finally {
            setIsUploading(false);
            // Reset input so same file can be re-selected
            if (inputRef.current) {
                inputRef.current.value = '';
            }
        }
    };

    const handleRemove = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setError(null);
        onRemove();
        if (inputRef.current) {
            inputRef.current.value = '';
        }
    };

    const handleLabelClick = () => {
        if (!isUploading) {
            inputRef.current?.click();
        }
    };

    return (
        <div className="space-y-3 w-full">
            <div className="flex items-start gap-4">
                {value ? (
                    <div className="relative w-40 h-40 rounded-2xl overflow-hidden border-2 border-blue-100 group flex-shrink-0">
                        <img
                            src={value}
                            alt="Uploaded"
                            className="w-full h-full object-cover"
                        />
                        <button
                            type="button"
                            onClick={handleRemove}
                            className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-lg hover:bg-red-600"
                        >
                            <X size={16} />
                        </button>
                    </div>
                ) : (
                    <div
                        onClick={handleLabelClick}
                        className={`w-40 h-40 flex flex-col items-center justify-center border-2 border-dashed rounded-2xl cursor-pointer transition-all group flex-shrink-0
                            ${isUploading
                                ? 'border-blue-300 bg-blue-50 cursor-not-allowed'
                                : 'border-gray-200 hover:border-blue-400 hover:bg-blue-50'
                            }`}
                    >
                        {isUploading ? (
                            <div className="flex flex-col items-center space-y-2">
                                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                                <span className="text-xs text-blue-500 font-medium">Uploading...</span>
                            </div>
                        ) : (
                            <>
                                <Upload size={24} className="text-gray-400 group-hover:text-blue-500 mb-2" />
                                <span className="text-sm font-medium text-gray-500 group-hover:text-blue-600">Upload Image</span>
                            </>
                        )}
                        <input
                            ref={inputRef}
                            type="file"
                            className="hidden"
                            accept="image/*"
                            onChange={handleUpload}
                            disabled={isUploading}
                        />
                    </div>
                )}

                {!value && !isUploading && (
                    <div className="text-sm text-gray-500 mt-2">
                        <p className="font-medium text-gray-700">Add a product photo</p>
                        <p>PNG, JPG up to 10MB</p>
                        <p className="text-xs text-gray-400 mt-1">Click the box to browse files</p>
                    </div>
                )}

                {value && !isUploading && (
                    <div className="text-sm text-green-600 mt-2">
                        <p className="font-semibold">✓ Image uploaded</p>
                        <p className="text-xs text-gray-400 mt-1">Hover over image to remove</p>
                    </div>
                )}
            </div>

            {error && (
                <div className="flex items-center space-x-2 text-red-600 bg-red-50 p-3 rounded-xl text-sm">
                    <AlertCircle size={16} className="flex-shrink-0" />
                    <span>{error}</span>
                </div>
            )}
        </div>
    );
}

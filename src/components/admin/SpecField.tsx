"use client";

import React from 'react';
import { Plus, Trash2, Tag } from 'lucide-react';

interface Specification {
    label: string;
    value: string;
}

interface SpecFieldProps {
    specs: Specification[];
    onChange: (specs: Specification[]) => void;
}

export default function SpecField({ specs, onChange }: SpecFieldProps) {
    const addSpec = () => {
        onChange([...specs, { label: '', value: '' }]);
    };

    const removeSpec = (index: number) => {
        const newSpecs = [...specs];
        newSpecs.splice(index, 1);
        onChange(newSpecs);
    };

    const updateSpec = (index: number, field: keyof Specification, val: string) => {
        const newSpecs = [...specs];
        newSpecs[index][field] = val;
        onChange(newSpecs);
    };

    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-bold text-gray-700 flex items-center">
                    <Tag size={16} className="mr-2 text-blue-500" />
                    Product Specifications
                </label>
                <button
                    type="button"
                    onClick={addSpec}
                    className="text-xs font-semibold text-blue-600 hover:text-blue-700 flex items-center bg-blue-50 px-3 py-1.5 rounded-lg transition-colors"
                >
                    <Plus size={14} className="mr-1" />
                    Add Specification
                </button>
            </div>

            {specs.length === 0 ? (
                <div className="text-center py-6 bg-gray-50 rounded-xl border border-dashed border-gray-200">
                    <p className="text-sm text-gray-500 italic">No specifications added yet. Add sizes, volumes, or other details.</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 gap-3">
                    {specs.map((spec, index) => (
                        <div key={index} className="flex items-center gap-3 bg-white p-3 rounded-xl border border-gray-100 shadow-sm animate-in fade-in slide-in-from-top-2 duration-300">
                            <input
                                type="text"
                                placeholder="Label (e.g. Size, Volume)"
                                className="flex-1 px-4 py-2 bg-gray-50 border-none rounded-lg text-sm focus:ring-2 focus:ring-blue-100 transition-all font-medium"
                                value={spec.label}
                                onChange={(e) => updateSpec(index, 'label', e.target.value)}
                            />
                            <input
                                type="text"
                                placeholder="Value (e.g. 10 inch, 500ml)"
                                className="flex-1 px-4 py-2 bg-gray-50 border-none rounded-lg text-sm focus:ring-2 focus:ring-blue-100 transition-all"
                                value={spec.value}
                                onChange={(e) => updateSpec(index, 'value', e.target.value)}
                            />
                            <button
                                type="button"
                                onClick={() => removeSpec(index)}
                                className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all"
                            >
                                <Trash2 size={18} />
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

import React from 'react';
import { cn } from "@/lib/utils";

interface PlaceholderImageProps {
    label: string;
    className?: string;
}

export function PlaceholderImage({ label, className }: PlaceholderImageProps) {
    return (
        <div className={cn(
            "w-full h-full bg-neutral-900 border border-white/10 flex items-center justify-center p-4 relative overflow-hidden group",
            className
        )}>
            {/* Decorative Grid Background */}
            <div className="absolute inset-0 opacity-10"
                style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '20px 20px' }}
            />

            {/* Animated Sheer */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-in-out" />

            {/* Content */}
            <div className="text-center z-10">
                <div className="w-16 h-16 border-2 border-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:border-primary transition-colors duration-300">
                    <span className="text-white/40 group-hover:text-primary text-2xl">IMG</span>
                </div>
                <p className="text-white/60 font-mono text-sm uppercase tracking-wider group-hover:text-white transition-colors">
                    {label}
                </p>
            </div>
        </div>
    );
}

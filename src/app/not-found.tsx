"use client";

import Link from "next/link";
import { ArrowLeft, Search } from "lucide-react";

export default function NotFound() {
    return (
        <div className="min-h-screen bg-black flex flex-col items-center justify-center px-4 relative overflow-hidden">
            <div className="absolute inset-0 cvh-grid-bg opacity-50" />

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#7c3aed]/5 blur-[120px] pointer-events-none" />

            <div className="relative z-10 flex flex-col items-center text-center">
                <span className="text-[8rem] md:text-[12rem] font-bold text-white/[0.04] select-none leading-none tracking-tight">
                    404
                </span>

                <div className="-mt-12">
                    <p className="text-white/70 text-lg mb-2 font-medium">
                        Page not found
                    </p>

                    <p className="text-white/35 text-sm mb-10 max-w-md">
                        The page you are looking for does not exist, has been moved, or is no longer available.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <Link
                            href="/"
                            className="cvh-btn-primary"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Back to Home
                        </Link>
                        <Link
                            href="/projects"
                            className="cvh-btn-secondary"
                        >
                            <Search className="w-4 h-4" />
                            Browse Projects
                        </Link>
                    </div>
                </div>
            </div>

            <p className="text-white/15 text-xs mt-16 font-mono">
                HTTP 404 — The requested resource was not found on this server.
            </p>
        </div>
    );
}

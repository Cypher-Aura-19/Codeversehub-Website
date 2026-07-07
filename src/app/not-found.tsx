"use client";

import Link from "next/link";
import { ArrowLeft, Search } from "lucide-react";

export default function NotFound() {
    return (
        <div className="min-h-screen bg-black flex flex-col items-center justify-center px-4 relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `linear-gradient(rgba(139,92,246,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.5) 1px, transparent 1px)`,
                    backgroundSize: "60px 60px",
                }}
            />

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-violet-600/5 blur-[120px] pointer-events-none" />

            <div className="relative z-10 flex flex-col items-center text-center">
                <span className="text-[8rem] md:text-[12rem] font-bold text-white/5 select-none leading-none">
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
                            className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-bold hover:from-violet-500 hover:to-fuchsia-500 transition-all duration-300"
                        >
                            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
                            Back to Home
                        </Link>
                        <Link
                            href="/projects"
                            className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-xl border border-white/15 text-white/80 font-medium hover:bg-white/5 hover:border-white/30 transition-all duration-300"
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

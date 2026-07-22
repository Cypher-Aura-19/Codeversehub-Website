"use client";

export default function TerminalWindow() {
  return (
    <div className="w-full rounded-xl border border-white/[0.08] bg-[#0d0d0d] overflow-hidden shadow-2xl">
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06] bg-black/40">
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
        </div>
        <span className="text-[11px] text-white/30 font-mono tracking-tight mx-auto">
          bash ~ cvh
        </span>
      </div>

      {/* Terminal content */}
      <div className="p-5 font-mono text-sm leading-relaxed space-y-2.5">
        <div className="flex items-start gap-2">
          <span className="text-green-400/70 shrink-0">$</span>
          <span className="text-white/60">git clone https://github.com/TheCodeVerseHub</span>
        </div>
        <div className="text-white/40 pl-5 space-y-0.5">
          <span className="block">Cloning into &lsquo;TheCodeVerseHub&rsquo;...</span>
          <span className="block text-green-400/50">remote: Counting objects: 127, done.</span>
          <span className="block text-green-400/50">remote: Compressing objects: 100% (64/64), done.</span>
          <span className="block text-green-400/50">Receiving objects: 100% (127/127), done.</span>
        </div>
        <div className="flex items-start gap-2 pt-1">
          <span className="text-green-400/70 shrink-0">$</span>
          <span>
            <span className="text-white/60">cd community </span>
            <span className="text-white/30 animate-pulse">|</span>
          </span>
        </div>
        <div className="flex items-start gap-2 pt-1">
          <span className="text-green-400/70 shrink-0">$</span>
          <span className="text-[#22d3ee]/70">Welcome to The Codeverse Hub.</span>
        </div>
        <div className="flex items-start gap-2">
          <span className="text-green-400/70 shrink-0">$</span>
          <span className="text-white/35 text-xs">Type &lsquo;help&rsquo; to get started.</span>
        </div>
        <div className="flex items-start gap-2 pt-2">
          <span className="text-green-400/70 shrink-0">$</span>
          <span className="text-white/80 font-semibold">ready</span>
        </div>
      </div>
    </div>
  );
}

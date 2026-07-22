"use client";

import { useEffect, useState, useRef } from "react";

const snippets = [
  {
    lang: "python",
    label: "Python",
    color: "#3B82F6",
    lines: [
      { text: "# Welcome to CodeVerse Hub!", type: "comment" },
      { text: "def join_community(developer):", type: "code" },
      { text: '    skills = developer["skills"]', type: "code" },
      {
        text: "    return f\\\"Welcome, {developer['name']}! 🚀\\\"",
        type: "code",
      },
      { text: "", type: "blank" },
      { text: "me = {", type: "code" },
      { text: '    "name": "your_username",', type: "code" },
      { text: '    "skills": ["Python", "JS", "Rust"]', type: "code" },
      { text: "}", type: "code" },
      { text: "print(join_community(me))", type: "code" },
      { text: "# → Welcome, your_username! 🚀", type: "output" },
    ],
  },
  {
    lang: "typescript",
    label: "TypeScript",
    color: "#8B5CF6",
    lines: [
      { text: "// CodeVerse Hub — Build together", type: "comment" },
      { text: "interface Developer {", type: "code" },
      { text: "  name: string;", type: "code" },
      { text: "  stack: string[];", type: "code" },
      { text: "  community: 'CodeVerse Hub';", type: "code" },
      { text: "}", type: "code" },
      { text: "", type: "blank" },
      { text: "const you: Developer = {", type: "code" },
      { text: '  name: "awesome_dev",', type: "code" },
      { text: '  stack: ["React", "Node", "TS"],', type: "code" },
      { text: '  community: "CodeVerse Hub"', type: "code" },
      { text: "};", type: "code" },
    ],
  },
  {
    lang: "rust",
    label: "Rust",
    color: "#F97316",
    lines: [
      { text: "// Blazingly fast community 🦀", type: "comment" },
      { text: "struct Developer {", type: "code" },
      { text: "    name: String,", type: "code" },
      { text: "    joined_cvh: bool,", type: "code" },
      { text: "}", type: "code" },
      { text: "", type: "blank" },
      { text: "fn main() {", type: "code" },
      { text: "    let dev = Developer {", type: "code" },
      { text: '        name: String::from("you"),', type: "code" },
      { text: "        joined_cvh: true,", type: "code" },
      { text: "    };", type: "code" },
      { text: '    println!("Hello, {}!", dev.name);', type: "code" },
      { text: "}", type: "code" },
    ],
  },
];

function getColor(type: string, lang: string) {
  if (type === "comment") return "text-white/30 italic";
  if (type === "output") return "text-emerald-400";
  if (lang === "python") return "text-blue-200";
  if (lang === "typescript") return "text-violet-200";
  if (lang === "rust") return "text-orange-200";
  return "text-slate-200";
}

export default function TerminalWindow() {
  const [snippetIdx, setSnippetIdx] = useState(0);
  const [visibleLines, setVisibleLines] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const snippet = snippets[snippetIdx];

  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisibleLines(0);
      setCharIdx(0);
      setDisplayedLines([]);
    }, 0);
    return () => clearTimeout(timeout);
  }, [snippetIdx]);

  useEffect(() => {
    if (visibleLines >= snippet.lines.length) {
      const timeout = setTimeout(() => {
        setSnippetIdx((prev) => (prev + 1) % snippets.length);
      }, 2800);
      return () => clearTimeout(timeout);
    }

    const currentLine = snippet.lines[visibleLines];
    const fullText = currentLine.text;

    if (charIdx <= fullText.length) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      const delay = currentLine.type === "blank" ? 80 : 18;
      intervalRef.current = setInterval(() => {
        setCharIdx((prev) => {
          if (prev >= fullText.length) {
            clearInterval(intervalRef.current!);
            setDisplayedLines((lines) => [...lines, fullText]);
            setVisibleLines((v) => v + 1);
            setCharIdx(0);
            return 0;
          }
          return prev + 1;
        });
      }, delay);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [visibleLines, snippet]);

  const currentLineText =
    visibleLines < snippet.lines.length
      ? snippet.lines[visibleLines].text.slice(0, charIdx)
      : null;

  return (
    <div className="relative w-full max-w-lg">
      {/* Terminal window */}
      <div className="relative rounded-xl border border-white/[0.08] bg-[#0a0a0a] overflow-hidden shadow-xl">
        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/[0.06] bg-white/[0.02]">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
          <div className="flex-1 flex items-center justify-center gap-2">
            <span
              className="text-[11px] font-mono px-2.5 py-0.5 rounded"
              style={{
                backgroundColor: snippet.color + "22",
                color: snippet.color,
              }}
            >
              {snippet.label}
            </span>
          </div>
          <div className="flex gap-1">
            {snippets.map((s, i) => (
              <button
                key={i}
                onClick={() => setSnippetIdx(i)}
                className="flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-mono cursor-pointer transition-all duration-200"
                style={{
                  backgroundColor:
                    i === snippetIdx ? s.color + "30" : "rgba(255,255,255,0.05)",
                  color: i === snippetIdx ? s.color : "rgba(255,255,255,0.35)",
                }}
              >
                <span
                  className="w-1 h-1 rounded-full shrink-0"
                  style={{
                    backgroundColor:
                      i === snippetIdx ? s.color : "rgba(255,255,255,0.3)",
                  }}
                />
                {s.label}
              </button>
            ))}
          </div>
        </div>

        {/* Code area */}
        <div className="p-4 font-mono text-xs sm:text-sm leading-relaxed min-h-[260px] sm:min-h-[300px]">
          {displayedLines.map((line, i) => {
            const lineData = snippet.lines[i];
            return (
              <div key={i} className="flex gap-3">
                <span className="text-white/15 select-none w-5 text-right shrink-0">
                  {i + 1}
                </span>
                <span
                  className={getColor(lineData?.type ?? "code", snippet.lang)}
                >
                  {line || "\u00A0"}
                </span>
              </div>
            );
          })}
          {currentLineText !== null && (
            <div className="flex gap-3">
              <span className="text-white/15 select-none w-5 text-right shrink-0">
                {displayedLines.length + 1}
              </span>
              <span
                className={getColor(
                  snippet.lines[visibleLines]?.type ?? "code",
                  snippet.lang,
                )}
              >
                {currentLineText}
                <span className="animate-pulse inline-block w-2 h-3.5 bg-white/50 ml-0.5 align-middle" />
              </span>
            </div>
          )}
        </div>

        {/* Bottom bar */}
        <div className="px-4 py-2 border-t border-white/[0.06] flex items-center gap-3 bg-white/[0.01]">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          <span className="text-white/30 text-[11px] font-mono">
            cvh ~ dev session
          </span>
        </div>
      </div>
    </div>
  );
}

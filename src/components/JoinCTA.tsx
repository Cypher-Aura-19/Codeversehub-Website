"use client";

import ShinyText from "./ShinyText";

export default function JoinCTA() {
  return (
    <section className="relative bg-black overflow-hidden py-24 md:py-32 px-4">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[300px] rounded-full bg-violet-600/10 blur-[100px]" />
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* Card */}
        <div className="rounded-3xl border border-white/10 bg-white/3 p-10 md:p-16 text-center relative overflow-hidden">
          {/* Inner glow */}
          <div className="absolute inset-0 bg-gradient-to-b from-violet-500/5 via-transparent to-transparent" />

          {/* Discord server icon simulation */}
          <div className="relative z-10 flex justify-center mb-8">
            <div
              className="w-20 h-20 rounded-[28px] flex items-center justify-center shadow-2xl shadow-violet-500/30"
              style={{ background: "linear-gradient(135deg,#7c3aed,#a855f7)" }}
            >
              <svg
                className="w-10 h-10 text-white"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
              </svg>
            </div>
          </div>

          <div className="relative z-10 space-y-4 mb-8">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white">
              Your next breakthrough
            </h2>
            <h2>
              <ShinyText
                text="starts in a chat."
                className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold leading-[1.05] tracking-tight bg-gradient-to-r from-violet-300 via-fuchsia-400 to-indigo-300 bg-clip-text text-transparent"
                speed={2}
                delay={0.5}
                color="#ea73ff"
                shineColor="#c4b5ff"
                spread={120}
                direction="left"
                yoyo={false}
                pauseOnHover={false}
                disabled={false}
              />
            </h2>
          </div>

          <p className="relative z-10 text-white/50 text-base md:text-lg max-w-xl mx-auto mb-10">
            1800+ developers helping each other ship code, review PRs, learn new
            skills, and build careers. All for free, all on Discord.
          </p>

          <div className="relative z-10 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://discord.gg/3xKFvKhuGR"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2.5 font-bold text-white text-base md:text-lg px-10 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_50px_rgba(139,92,246,0.5)]"
              style={{
                background: "linear-gradient(135deg,#7c3aed,#9333ea,#a855f7)",
              }}
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
              </svg>
              Join Discord — Free
            </a>
          </div>

          {/* Member avatars row */}
          <div className="relative z-10 flex items-center justify-center gap-3 mt-8">
            <div className="flex -space-x-2">
              {[
                "https://cdn.discordapp.com/avatars/955695820999639120/cf296ec1b2af5b10746bb89dbd24fc38.webp?size=96",
                "https://cdn.discordapp.com/avatars/380987045008506880/4544bf7a183195600feefa78596578eb.webp?size=40",
                "https://cdn.discordapp.com/avatars/847851585706393652/1eae2121f1537af4a3c3c4836d9c9bfc.webp?size=96",
                "https://cdn.discordapp.com/avatars/927288268054229062/349d2011d76e055e12de1fc71644ef6f.webp?size=96",
                "https://cdn.discordapp.com/avatars/903540976449097749/1a6aad52b59261e32fa66a96c915adcb.webp?size=96",
                "https://cdn.discordapp.com/avatars/1418496947240697876/83c7517e2f0e45d91edf4aee0cfd91b5.webp?size=96",
              ].map((c, i) => (
                <img
                  key={i}
                  src={c}
                  className="w-8 h-8 rounded-full border-2 border-black flex items-center justify-center text-white text-xs font-bold"
                  //   style={{ backgroundColor: c }}
                >
                  {/* {String.fromCharCode(65 + i)} */}
                </img>
              ))}
            </div>
            <span className="text-white/40 text-sm">
              1800+ devs waiting for you
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

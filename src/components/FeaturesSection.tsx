"use client";

const WAVEFORM_HEIGHTS = Array.from({ length: 48 }, (_, i) =>
  Math.max(2, 4 + Math.sin(i * 0.4) * 10 + Math.sin(i * 0.7) * 6).toFixed(2)
);

export function FeaturesSection() {
  return (
    <section className="bg-background">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-11 px-5 md:px-8 lg:items-stretch py-16 lg:py-24">
        {/* Eyebrow label */}
        <h2 className="text-center text-sm font-semibold text-[#040406]/50 uppercase tracking-widest">
          How Cluely helps during a meeting
        </h2>

        {/* Cards container */}
        <div className="flex flex-col lg:flex-row gap-4 w-full">
          {/* LEFT CARD — blue, "Cluely listens" */}
          <div
            className="flex-1 rounded-[20px] p-8 overflow-hidden"
            style={{ background: "rgb(80, 114, 206)" }}
          >
            <h3 className="text-white text-[28px] font-semibold leading-tight mb-3">
              Cluely{" "}
              <span
                className="inline-flex items-center gap-1 rounded-full px-3 py-0.5 text-white text-[26px]"
                style={{ background: "rgba(255,255,255,0.2)" }}
              >
                🎙 listens
              </span>
              {" "}in to the conversation
            </h3>
            <p className="text-white/80 text-base mb-8">
              It picks up the context of your meeting in real time, so it can help when you need it.
            </p>

            {/* Recording UI */}
            <div className="mt-4">
              {/* Timer */}
              <div className="text-center mb-2">
                <span className="text-white font-bold text-[40px] tabular-nums">00:00</span>
              </div>

              {/* Recording indicator */}
              <div className="flex items-center justify-center gap-1.5 mb-4">
                <div className="w-2 h-2 rounded-full bg-[#FF3B30]" />
                <span className="text-white/70 text-sm">Recording</span>
              </div>

              {/* Waveform */}
              <div className="flex items-end justify-center gap-[3px] h-8 mb-4">
                {WAVEFORM_HEIGHTS.map((h, i) => (
                  <div
                    key={i}
                    className="bg-white/60 rounded-full"
                    style={{
                      width: "3px",
                      height: `${h}px`,
                      animationName: "pulse",
                      animationDuration: `${(0.8 + (i % 5) * 0.1).toFixed(1)}s`,
                      animationTimingFunction: "ease-in-out",
                      animationDelay: `${(i * 0.03).toFixed(2)}s`,
                      animationIterationCount: "infinite",
                      animationDirection: "alternate",
                    }}
                  />
                ))}
              </div>

              {/* Dimmed Cluely panel */}
              <div
                className="opacity-30 rounded-xl p-3 mt-2"
                style={{ background: "rgba(0,0,0,0.3)" }}
              >
                <div className="flex gap-3 text-xs text-white/60 mb-1">
                  <span>✦ Assist</span>
                  <span>·</span>
                  <span>What should I say?</span>
                  <span>·</span>
                  <span>Follow-up questions</span>
                  <span>·</span>
                  <span>Recap</span>
                </div>
                <div
                  className="h-8 rounded-lg"
                  style={{ background: "rgba(255,255,255,0.08)" }}
                />
              </div>
            </div>
          </div>

          {/* RIGHT CARD — light gray, "Cluely assists" */}
          <div
            className="flex-1 rounded-[20px] p-8 overflow-hidden"
            style={{ background: "rgb(242, 244, 250)" }}
          >
            <h3 className="text-[#040406] text-[28px] font-semibold leading-tight mb-3">
              When you need help, Cluely{" "}
              <span className="inline-flex items-center gap-1">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="#3B82F6"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
                </svg>
                assists
              </span>
              {" "}you instantly
            </h3>
            <p className="text-[#040406]/60 text-base mb-8">
              Hit Cmd/Ctrl + Enter and Cluely helps you with AI in the moment.
            </p>

            {/* Cluely floating control bar */}
            <div className="flex justify-center mb-4">
              <div
                className="inline-flex items-center gap-3 rounded-full px-5 py-2"
                style={{ background: "rgb(40,40,40)" }}
              >
                <div className="w-5 h-5 rounded-full border-2 border-white/80" />
                <span className="text-white text-sm">∨ Hide</span>
                <div className="w-5 h-5 rounded bg-white/20" />
              </div>
            </div>

            {/* Cluely AI Panel */}
            <div
              className="rounded-xl p-4"
              style={{ background: "rgb(37,37,42)" }}
            >
              <div className="flex justify-between items-start mb-3">
                <span className="text-white/50 text-xs">Viewed screen</span>
                <span
                  className="text-white text-xs rounded px-2 py-0.5 font-medium"
                  style={{ background: "rgb(59,130,246)" }}
                >
                  Assist
                </span>
              </div>
              <p className="text-white/80 text-xs leading-5 mb-3">
                Cluely is an AI meeting assistant that listens in real time, understands what&apos;s
                being said, and gives you instant answers, notes, and next steps, all while staying
                completely undetectable on your screen.
              </p>
              <div className="flex gap-2 text-xs text-white/40 mb-3 flex-wrap">
                <span>✦ Assist</span>
                <span>·</span>
                <span>What should I say?</span>
                <span>·</span>
                <span>Follow-up questions</span>
                <span>·</span>
                <span>Recap</span>
              </div>
              <div
                className="flex items-center gap-2 rounded-lg px-3 py-2"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <span className="text-white/40 text-xs flex-1">
                  Ask about your screen or conversation…
                </span>
                <div className="flex gap-1">
                  <span className="text-white/40 text-[10px] border border-white/20 rounded px-1">
                    ⌘
                  </span>
                  <span className="text-white/40 text-[10px] border border-white/20 rounded px-1">
                    ↵
                  </span>
                </div>
                <div
                  className="w-6 h-6 rounded-full flex items-center justify-center"
                  style={{ background: "rgb(59,130,246)" }}
                >
                  <span className="text-white text-xs">▶</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

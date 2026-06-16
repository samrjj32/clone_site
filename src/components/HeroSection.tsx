export function HeroSection() {
  return (
    <section
      className="overflow-hidden flex flex-col items-center"
      style={{
        minHeight: "100vh",
        background: `
          radial-gradient(87.76% 87.72% at 50% 9.2%, rgba(255,255,255,0) 41.36%, rgb(255,255,255) 71.93%),
          url('/images/pages/home/background.png')
        `,
        backgroundSize: "cover",
        backgroundPosition: "center top",
        paddingTop: "80px",
      }}
    >
      {/* Hero text block */}
      <div
        className="max-w-[900px] mx-auto text-center px-5 flex flex-col items-center gap-8 lg:gap-12"
        style={{ paddingTop: "80px" }}
      >
        <h1
          className="font-serif text-[42px] lg:text-[80px] font-normal text-white"
          style={{ lineHeight: 1.1, letterSpacing: "-0.02em" }}
        >
          #1 Undetectable AI for Meetings
        </h1>

        <p
          className="font-sans text-[17px] lg:text-[20px] font-normal"
          style={{ color: "rgba(255,255,255,0.85)", maxWidth: "600px" }}
        >
          Cluely takes perfect meeting notes and gives real-time answers, all
          while completely undetectable
        </p>

        {/* CTA button */}
        <a
          href="#"
          style={{
            background:
              "radial-gradient(101.79% 101.79% at 65.61% 81.79%, rgba(255,255,255,0.6) 0px, rgba(255,255,255,0) 100%), radial-gradient(114.65% 114.65% at 9.73% 17.27%, rgb(30,130,224) 0px, rgb(28,56,234) 100%)",
          }}
          className="inline-flex items-center gap-2 rounded-[12px] px-5 py-2.5 text-base font-medium text-white relative overflow-hidden"
        >
          <span
            className="absolute inset-[-1px] rounded-[12px] pointer-events-none"
            style={{
              background:
                "linear-gradient(176.87deg, rgba(255,255,255,0.5) 8.56%, rgba(255,255,255,0) 85.04%)",
              zIndex: 20,
            }}
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/apple.svg"
            width={14}
            height={14}
            alt=""
            className="invert"
          />
          Get for Mac
        </a>
      </div>

      {/* Mac Mockup */}
      <div className="relative mx-auto w-full max-w-[940px] px-5 mt-8">
        {/* Mac window outer frame */}
        <div
          className="relative overflow-hidden rounded-t-xl"
          style={{
            background:
              "linear-gradient(180deg, rgb(255,200,120) 0%, rgb(255,140,60) 40%, rgb(220,100,40) 100%)",
          }}
        >
          {/* Mac menubar */}
          <div
            className="flex items-center justify-between px-4 py-2"
            style={{ background: "rgba(0,0,0,0.15)" }}
          >
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
              <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
              <div className="w-3 h-3 rounded-full bg-[#27C840]" />
            </div>
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 opacity-60 text-white text-xs">≋</div>
              <div className="w-4 h-4 opacity-60 text-white text-xs">▪</div>
            </div>
          </div>

          {/* Cluely floating control bar */}
          <div className="absolute top-12 left-1/2 -translate-x-1/2 z-20">
            <div
              className="flex items-center gap-3 rounded-full px-4 py-2"
              style={{ background: "rgb(40,40,40)" }}
            >
              <div className="w-5 h-5 rounded-full border-2 border-white opacity-80" />
              <span className="text-white text-sm">∨ Hide</span>
              <div className="w-6 h-6 rounded bg-white opacity-20" />
            </div>
          </div>

          {/* Mac desktop area with wallpaper */}
          <div
            className="relative"
            style={{ minHeight: "400px", background: "rgb(180, 80, 20)" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/wallpaper@2x.png"
              alt="Demo"
              className="absolute inset-0 w-full h-full object-cover opacity-70"
              width={973}
              height={544}
            />

            {/* Zoom call window */}
            <div
              className="relative mx-auto"
              style={{ maxWidth: "70%", marginTop: "30px" }}
            >
              <div
                className="rounded-xl overflow-hidden"
                style={{ background: "rgb(20,20,20)" }}
              >
                {/* Zoom toolbar */}
                <div
                  className="flex items-center gap-1 px-3 py-1"
                  style={{ background: "rgb(30,30,30)" }}
                >
                  <div className="flex gap-1">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#27C840]" />
                  </div>
                </div>

                {/* Video participants */}
                <div
                  className="flex"
                  style={{ height: "220px", background: "rgb(15,15,15)" }}
                >
                  <div className="flex-1 bg-[#1a1a2e] flex items-center justify-center">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/images/gina-huels.png"
                      className="w-16 h-16 rounded-full"
                      alt=""
                    />
                  </div>
                  <div className="flex-1 bg-[#0d1117] flex items-center justify-center">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/images/todd-cremin.png"
                      className="w-16 h-16 rounded-full"
                      alt=""
                    />
                  </div>
                </div>

                {/* Cluely AI panel overlay */}
                <div
                  className="absolute top-8 left-1/2 -translate-x-1/2 w-[90%] rounded-xl p-3"
                  style={{
                    background: "rgba(30,30,35,0.95)",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <div className="flex justify-end mb-2">
                    <span
                      className="text-xs text-white rounded-full px-3 py-1"
                      style={{ background: "rgb(59,130,246)" }}
                    >
                      What should I say?
                    </span>
                  </div>
                  <p className="text-white text-xs leading-5 mb-3">
                    &ldquo;A discounted cash flow model values a company by
                    projecting future free cash flows and discounting them to
                    present value using the weighted average cost of
                    capital.&rdquo;
                  </p>
                  <div className="flex gap-3 text-xs text-white/50 mb-2">
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
                      border: "1px solid rgba(255,255,255,0.12)",
                    }}
                  >
                    <span className="text-white/40 text-xs flex-1">
                      Ask about your screen or conversation…
                    </span>
                    <div className="flex gap-1">
                      <span className="text-white/40 text-xs border border-white/20 rounded px-1">
                        ⌘
                      </span>
                      <span className="text-white/40 text-xs border border-white/20 rounded px-1">
                        ↵
                      </span>
                    </div>
                  </div>
                </div>

                {/* Zoom bottom bar */}
                <div
                  className="flex items-center gap-4 px-4 py-2"
                  style={{ background: "rgb(30,30,30)" }}
                >
                  <span className="text-white/60 text-xs">🎤 Unmute</span>
                  <span className="text-white/60 text-xs">📷 Start Video</span>
                  <div className="ml-auto">
                    <span
                      className="text-white text-xs px-3 py-1 rounded"
                      style={{ background: "rgb(220,50,50)" }}
                    >
                      End
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mac dock */}
          <div
            className="flex items-center justify-center py-3 px-4"
            style={{
              background: "rgba(255,255,255,0.1)",
              backdropFilter: "blur(8px)",
            }}
          >
            <div
              className="flex items-center gap-2 rounded-2xl px-4 py-2"
              style={{
                background: "rgba(255,255,255,0.2)",
                backdropFilter: "blur(12px)",
              }}
            >
              {[
                {
                  src: "/images/pages/home/launchpad-icon.png",
                  alt: "Launchpad",
                },
                { src: "/images/pages/home/safari-icon.png", alt: "Safari" },
                {
                  src: "/images/pages/home/settings-icon.png",
                  alt: "Settings",
                },
                { src: "/images/pages/home/zoom-icon.png", alt: "Zoom" },
                { src: "/images/pages/home/cluely-icon.png", alt: "Cluely" },
                { src: "/images/pages/home/trash-icon.png", alt: "Trash" },
              ].map((icon) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={icon.alt}
                  src={icon.src}
                  alt={icon.alt}
                  width={48}
                  height={48}
                  className="rounded-xl"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

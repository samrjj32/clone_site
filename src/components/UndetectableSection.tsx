import Image from "next/image";

const features = [
  {
    title: "Doesn't join meetings.",
    description:
      "Cluely never joins your meetings, so there are no bots and no extra people on the guest list.",
    mockup: "participants",
  },
  {
    title: "Invisible to screen share.",
    description:
      "Cluely never shows up in shared screens, recordings, or external meeting tools.",
    mockup: "invisible",
  },
  {
    title: "Follows your eyes.",
    description:
      "Cluely window is fully moveable so you can position it exactly where you're looking.",
    mockup: "moveable",
  },
];

const tools = [
  { name: "Zoom", src: "/images/tools/zoom.png" },
  { name: "Slack", src: "/images/tools/slack.png" },
  { name: "Webex", src: "/images/tools/webex.png" },
  { name: "Microsoft Teams", src: "/images/tools/teams.png" },
  { name: "Google Meet", src: "/images/tools/meet.png" },
];

const participants = [
  { name: "Gina Huels", email: "ginahue65@cluely.com", role: "Owner", src: "/images/gina-huels.png" },
  { name: "Todd Cremin", email: "todd.cremin@cluely.com", role: "Speaker", src: "/images/todd-cremin.png" },
  { name: "Holly Gleason", email: "holly_gleaso1972@cluely.com", role: "Speaker", src: "/images/holly-gleason.png" },
  { name: "Tomas Hansen", email: "tomas_hansen@cluely.com", role: "Speaker", src: "/images/tomas-hansen.png" },
];

function ParticipantsCard() {
  return (
    <div className="w-full rounded-2xl overflow-hidden bg-white shadow-sm" style={{ border: "1px solid rgba(0,0,0,0.06)" }}>
      <div className="flex items-center justify-between px-4 py-3" style={{ borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
        <span className="font-semibold text-sm text-[#040406]">Meeting participants (4)</span>
        <span className="flex items-center gap-1 text-xs font-medium text-green-600">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
          No bots detected
        </span>
      </div>
      {participants.map((p, i) => (
        <div key={i} className="flex items-center gap-3 px-4 py-2.5" style={{ borderBottom: i < participants.length - 1 ? "1px solid rgba(0,0,0,0.05)" : "none" }}>
          <Image src={p.src} alt={p.name} width={32} height={32} className="rounded-full flex-shrink-0" />
          <div className="flex-1 min-w-0">
            <div className="text-sm font-medium text-[#040406] truncate">
              {p.name} {i === 0 && <span className="text-xs text-gray-400 font-normal">(You)</span>}
            </div>
            <div className="text-xs text-gray-400 truncate">{p.email}</div>
          </div>
          <div className="flex items-center gap-1 text-xs text-gray-500 flex-shrink-0">
            {p.role} <span className="text-gray-300">∨</span>
          </div>
        </div>
      ))}
    </div>
  );
}

function InvisibleCard() {
  return (
    <div className="w-full rounded-2xl overflow-hidden relative bg-white shadow-sm" style={{ border: "1px solid rgba(0,0,0,0.06)", minHeight: "200px" }}>
      <Image
        src="/images/invisible-tool.png"
        alt="Invisible to screen share"
        width={600}
        height={400}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex">
        <div className="flex-1 flex items-start pt-3 pl-3">
          <span className="text-xs font-semibold text-white bg-green-500 rounded-full px-2.5 py-1">Visible to you</span>
        </div>
        <div className="flex-1 flex items-start pt-3 justify-end pr-3">
          <span className="text-xs font-semibold text-white rounded-full px-2.5 py-1" style={{ background: "rgba(0,0,0,0.7)" }}>Invisible to others</span>
        </div>
      </div>
    </div>
  );
}

function MoveableCard() {
  return (
    <div className="w-full rounded-2xl overflow-hidden relative flex items-center justify-center" style={{ background: "rgb(230, 220, 250)", minHeight: "200px", border: "1px solid rgba(0,0,0,0.06)" }}>
      <div className="flex flex-col items-center gap-4 p-6">
        {/* Cluely AI response mockup */}
        <div className="w-full rounded-xl p-3 bg-purple-50" style={{ border: "1px solid rgba(120,80,220,0.15)" }}>
          <div className="flex items-center gap-1.5 mb-1">
            <div className="w-3 h-3 rounded-full" style={{ background: "rgba(120,80,220,0.6)" }} />
            <span className="text-xs font-medium" style={{ color: "rgb(80,40,180)" }}>AI Response</span>
          </div>
          <div className="h-2 bg-purple-200 rounded w-full mb-1" />
          <div className="h-2 bg-purple-200 rounded w-3/4" />
        </div>
        {/* Keyboard shortcuts grid */}
        <div className="flex items-center gap-2">
          <Image src="/images/command-btn.png" alt="Command" width={52} height={52} className="rounded-xl" />
          <span className="text-gray-400 text-lg font-light">+</span>
          <div className="flex flex-col gap-1">
            <div className="flex gap-1">
              <Image src="/images/return-btn.png" alt="Return" width={40} height={40} className="rounded-xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function UndetectableSection() {
  return (
    <section
      id="undetectability"
      className="relative z-10 overflow-hidden py-20 lg:py-28"
      style={{ scrollMarginTop: "96px" }}
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2
            className="font-sans font-semibold text-[#040406]"
            style={{ fontSize: "clamp(28px, 3vw, 44px)", lineHeight: 1.1 }}
          >
            Undetectable in every way
          </h2>
          <p
            className="mt-3 font-sans"
            style={{ fontSize: "18px", color: "rgb(120, 120, 135)" }}
          >
            Suite of features to use Cluely without a trace.
          </p>
        </div>

        {/* 3 feature cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {features.map((feature, i) => (
            <div
              key={i}
              className="rounded-[20px] overflow-hidden flex flex-col"
              style={{ background: "rgb(237, 241, 250)", border: "1px solid rgba(0,0,0,0.04)" }}
            >
              {/* Card image area */}
              <div className="p-5 flex-1 flex items-center justify-center min-h-[220px]">
                {feature.mockup === "participants" && <ParticipantsCard />}
                {feature.mockup === "invisible" && <InvisibleCard />}
                {feature.mockup === "moveable" && <MoveableCard />}
              </div>
              {/* Card text */}
              <div className="px-5 pb-6 pt-2">
                <p className="text-[15px] leading-relaxed text-[#040406]">
                  <strong className="font-semibold">{feature.title}</strong>{" "}
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Compatible with every tool */}
        <div className="mt-16 text-center">
          <p
            className="font-sans font-semibold uppercase tracking-[0.15em] mb-6"
            style={{ fontSize: "11px", color: "rgb(120, 120, 135)" }}
          >
            COMPATIBLE WITH EVERY TOOL
          </p>
          <div className="flex items-center justify-center gap-8 flex-wrap">
            {tools.map((tool) => (
              <div key={tool.name} className="flex items-center gap-2">
                <Image
                  src={tool.src}
                  alt={tool.name}
                  width={28}
                  height={28}
                  className="object-contain"
                />
                <span className="text-[15px] font-medium text-[#040406]">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

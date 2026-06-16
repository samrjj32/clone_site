import Image from "next/image";
import Link from "next/link";

export function CTASection() {
  return (
    <div
      className="relative z-20 overflow-x-hidden"
      style={{
        background: "rgb(221, 226, 238)",
        paddingTop: "clamp(80px, 12vw, 220px)",
        paddingBottom: "clamp(64px, 10vw, 160px)",
      }}
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="relative flex items-start justify-between">
          {/* Left: Text + Button */}
          <div className="max-w-[600px]">
            <h3
              className="font-sans font-bold text-[#040406]"
              style={{ fontSize: "clamp(28px, 3vw, 44px)", lineHeight: 1.2 }}
            >
              Meeting AI that helps during the call, not after.
            </h3>
            <p
              className="mt-3 font-sans font-medium"
              style={{
                fontSize: "clamp(18px, 1.5vw, 24px)",
                background: "linear-gradient(90deg, #3B82F6, #8B5CF6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Try Cluely on your next meeting today.
            </p>
            <Link
              href="#"
              className="mt-6 inline-flex items-center gap-2 rounded-[12px] px-5 py-2.5 text-base font-medium text-white"
              style={{
                background:
                  "radial-gradient(101.79% 101.79% at 65.61% 81.79%, rgba(255,255,255,0.6) 0px, rgba(255,255,255,0) 100%), radial-gradient(114.65% 114.65% at 9.73% 17.27%, rgb(30,130,224) 0px, rgb(28,56,234) 100%)",
              }}
            >
              <Image src="/images/apple.svg" alt="" width={14} height={14} className="invert" />
              Get for Mac
            </Link>
          </div>

          {/* Right: Keyboard decoration */}
          <div className="hidden md:block absolute right-0 top-[-40px] pointer-events-none select-none">
            <div className="relative w-[280px] h-[220px]">
              <Image
                src="/images/command-btn.png"
                alt=""
                width={160}
                height={160}
                className="absolute"
                style={{ top: 0, right: 60, transform: "rotate(-8deg)" }}
              />
              <Image
                src="/images/return-btn.png"
                alt=""
                width={120}
                height={120}
                className="absolute"
                style={{ bottom: 10, right: 0, transform: "rotate(6deg)" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";

const stats = [
  {
    value: "12+",
    valueSuffix: null,
    label: "Languages",
    description:
      "We support over 12 different languages, including English, Chinese, Spanish, and more.",
  },
  {
    value: "300",
    valueSuffix: "ms",
    label: "Response time",
    description:
      "We have the fastest live transcription available. Test us against any other competitor.",
  },
  {
    value: "95%",
    valueSuffix: null,
    label: "Transcription accuracy",
    description:
      "Trusted by many teams for reliable transcription. All processed with industry-leading accuracy.",
  },
];

export function TranscriptionSection() {
  return (
    <div className="w-full pt-20">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-16 items-start">
          {/* Left: Transcript screenshot */}
          <div
            className="w-full md:flex-1 rounded-[20px] overflow-hidden flex-shrink-0"
            style={{
              background: "rgb(226, 230, 242)",
              padding: "24px 24px 0 24px",
            }}
          >
            <Image
              src="/images/transcript-tab.png"
              alt="Real-time transcript"
              width={800}
              height={560}
              className="w-full h-auto block rounded-t-xl"
            />
          </div>

          {/* Right: Heading + stats */}
          <div className="w-full md:flex-1 flex flex-col">
            <h2
              className="font-sans font-semibold text-[#040406] mb-8"
              style={{ fontSize: "clamp(28px, 3vw, 44px)", lineHeight: 1.1 }}
            >
              Real-time transcription
            </h2>

            <div className="flex flex-col">
              {stats.map((stat, i) => (
                <div key={i}>
                  <div className="flex gap-6 items-start py-6">
                    {/* Stat value */}
                    <div
                      className="font-sans font-bold text-[#040406] leading-none flex-shrink-0"
                      style={{ fontSize: "52px", minWidth: "120px" }}
                    >
                      {stat.value}
                      {stat.valueSuffix && (
                        <span
                          className="font-medium"
                          style={{ fontSize: "24px" }}
                        >
                          {stat.valueSuffix}
                        </span>
                      )}
                    </div>
                    {/* Stat text */}
                    <div>
                      <h3
                        className="font-sans font-semibold text-[#040406] mb-1"
                        style={{ fontSize: "20px" }}
                      >
                        {stat.label}
                      </h3>
                      <p
                        className="font-sans font-normal leading-relaxed"
                        style={{ fontSize: "16px", color: "rgb(120, 120, 135)" }}
                      >
                        {stat.description}
                      </p>
                    </div>
                  </div>
                  {i < stats.length - 1 && (
                    <div
                      style={{
                        borderTop: "1px solid rgb(230, 232, 240)",
                        margin: "0",
                      }}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

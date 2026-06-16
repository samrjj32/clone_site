"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Why real-time vs. a regular AI notetaker?",
    answer:
      "Regular AI notetakers join your call as a bot, record everything, and send you notes after. Cluely is different — it listens in real time and helps you during the meeting, not just after. You get instant answers when you need them, not a summary you read tomorrow.",
  },
  {
    question: "Who is Cluely for?",
    answer:
      "Cluely is for anyone who has meetings — sales calls, interviews, investor pitches, team standups, customer support calls, or any situation where you need to be sharp and informed. If you want to show up better in meetings, Cluely is for you.",
  },
  {
    question: "Is Cluely free?",
    answer:
      "Cluely offers a free trial so you can experience it before committing. After the trial, there's a paid plan to continue using all features.",
  },
  {
    question: "How is it undetectable in meetings?",
    answer:
      "Cluely runs locally on your Mac as a native app. It never joins your meeting as a bot, never shows up in screen recordings or shared screens, and is completely invisible to other participants. It reads your screen and audio directly — no meeting bot required.",
  },
  {
    question: "What languages and apps are supported?",
    answer:
      "Cluely supports 12+ languages including English, Chinese, Spanish, and more. It works with any meeting tool that uses audio on your Mac — Zoom, Google Meet, Microsoft Teams, Slack, Webex, and more.",
  },
  {
    question: "Can I talk to customer support?",
    answer:
      "Yes! You can reach us at help@cluely.com or visit our Help Center. We also have a community Discord where you can connect with other Cluely users.",
  },
];

function ChevronDown({ open }: { open: boolean }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{
        transition: "transform 0.2s ease",
        transform: open ? "rotate(180deg)" : "rotate(0deg)",
        flexShrink: 0,
        color: "rgb(120,120,135)",
      }}
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      className="faq relative z-[1] w-full"
      style={{ paddingTop: "96px", paddingBottom: "0" }}
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <h2
          className="font-sans font-semibold text-[#040406] mb-8"
          style={{ fontSize: "clamp(24px, 2.5vw, 36px)" }}
        >
          Frequently asked questions
        </h2>

        <div className="w-full">
          {faqs.map((faq, i) => (
            <div
              key={i}
              style={{ borderTop: "1px solid rgb(230, 232, 240)" }}
            >
              <button
                className="flex w-full items-center justify-between py-5 text-left"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                type="button"
              >
                <h3
                  className="font-sans font-medium text-[#040406] pr-4"
                  style={{ fontSize: "18px", lineHeight: 1.4 }}
                >
                  {faq.question}
                </h3>
                <ChevronDown open={openIndex === i} />
              </button>

              <div
                style={{
                  overflow: "hidden",
                  maxHeight: openIndex === i ? "400px" : "0",
                  transition: "max-height 0.3s ease",
                }}
              >
                <p
                  className="font-sans pb-5"
                  style={{
                    fontSize: "16px",
                    color: "rgb(80, 80, 90)",
                    lineHeight: 1.6,
                  }}
                >
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
          {/* Bottom border */}
          <div style={{ borderTop: "1px solid rgb(230, 232, 240)" }} />
        </div>
      </div>
    </section>
  );
}

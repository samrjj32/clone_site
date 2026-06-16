import Image from "next/image";
import Link from "next/link";
import { XIcon, DiscordIcon, InstagramIcon, GithubIcon } from "./icons";

const footerColumns = [
  {
    heading: "Resources",
    links: [
      { label: "Mobile", href: "/mobile", badge: "New" },
      { label: "Manifesto", href: "/manifesto" },
      { label: "Press", href: "/press" },
      { label: "Bug Bounty", href: "https://cluelyhq.notion.site/bugbounty" },
    ],
  },
  {
    heading: "Support",
    links: [
      { label: "Help Center", href: "https://support.cluely.com/en/" },
      { label: "Contact Us", href: "mailto:help@cluely.com" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Subprocessors", href: "/subprocessors" },
    ],
  },
] as const;

export function Footer() {
  return (
    <footer style={{ background: "rgb(221, 226, 238)" }}>
      {/* Top border */}
      <div style={{ borderTop: "1px solid rgba(0,0,0,0.1)" }} />

      <div className="mx-auto max-w-7xl px-5 md:px-8 py-8">
        {/* Main row */}
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Logo */}
          <div>
            <Link href="/">
              <Image
                src="/images/wordmark.svg"
                alt="Cluely"
                width={84}
                height={22}
              />
            </Link>
          </div>

          {/* Link columns */}
          <div className="flex gap-12 lg:gap-16 flex-wrap">
            {footerColumns.map((col) => (
              <div key={col.heading}>
                <h4
                  className="font-sans font-semibold mb-4"
                  style={{ fontSize: "13px", color: "rgb(80, 80, 90)" }}
                >
                  {col.heading}
                </h4>
                <ul className="space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="font-sans inline-flex items-center gap-1.5 hover:text-[#040406] transition-colors"
                        style={{ fontSize: "14px", color: "rgb(80, 80, 90)" }}
                      >
                        {link.label}
                        {"badge" in link && link.badge && (
                          <span
                            className="font-semibold text-white rounded px-1.5 py-0.5"
                            style={{
                              fontSize: "10px",
                              background: "rgb(59, 130, 246)",
                            }}
                          >
                            {link.badge}
                          </span>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <div
          className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mt-8 pt-6"
          style={{ borderTop: "1px solid rgba(0,0,0,0.1)" }}
        >
          {/* Left: Status + subprocessors */}
          <div>
            <div
              className="inline-flex items-center gap-2 rounded-full px-3 py-1"
              style={{
                border: "1px solid rgba(0,0,0,0.12)",
                background: "rgba(255,255,255,0.5)",
              }}
            >
              <span
                className="inline-block rounded-full"
                style={{
                  width: "8px",
                  height: "8px",
                  background: "rgb(34, 197, 94)",
                }}
              />
              <span
                className="font-sans"
                style={{ fontSize: "13px", color: "rgb(60, 60, 70)" }}
              >
                All systems operational
              </span>
            </div>
            <p
              className="mt-2 font-sans"
              style={{ fontSize: "12px", color: "rgb(120,120,135)" }}
            >
              List of{" "}
              <Link href="/subprocessors" className="underline hover:text-[#040406]">
                subprocessors
              </Link>
              .
            </p>
          </div>

          {/* Right: Copyright + socials */}
          <div className="flex items-center gap-4">
            <span
              className="font-sans"
              style={{ fontSize: "13px", color: "rgb(100, 100, 115)" }}
            >
              © 2026 Cluely. All rights reserved.
            </span>
            <div className="flex items-center gap-3" style={{ color: "rgb(100,100,115)" }}>
              <Link href="https://x.com/cluely" className="hover:text-[#040406] transition-colors">
                <XIcon />
              </Link>
              <Link href="https://discord.gg/cluely" className="hover:text-[#040406] transition-colors">
                <DiscordIcon />
              </Link>
              <Link href="https://instagram.com/cluely" className="hover:text-[#040406] transition-colors">
                <InstagramIcon />
              </Link>
              <Link href="https://github.com/cluely" className="hover:text-[#040406] transition-colors">
                <GithubIcon />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

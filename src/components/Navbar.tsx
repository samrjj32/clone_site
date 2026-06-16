"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      style={{
        position: scrolled ? "fixed" : "absolute",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        width: "100%",
        paddingTop: "10px",
        backgroundColor: scrolled ? "rgba(255,255,255,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(0,0,0,0.08)" : "none",
        transition: "all 0.3s ease",
      }}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 md:px-8">
        {/* Logo */}
        <Link href="/">
          <Image
            src={scrolled ? "/images/wordmark.svg" : "/images/wordmark-light.svg"}
            alt="Cluely"
            width={84}
            height={22}
            priority
          />
        </Link>

        {/* Nav links — desktop only */}
        <nav className="hidden lg:flex items-center gap-6">
          <Link
            href="/#undetectability"
            style={{
              fontSize: "16px",
              fontWeight: 400,
              textDecoration: "none",
              color: scrolled ? "#040406" : "rgba(255,255,255,0.85)",
              transition: "color 0.3s ease, opacity 0.3s ease",
            }}
            className="hover:opacity-70"
          >
            Undetectability
          </Link>
          <Link
            href="/mobile"
            style={{
              fontSize: "16px",
              fontWeight: 400,
              textDecoration: "none",
              color: scrolled ? "#040406" : "rgba(255,255,255,0.85)",
              transition: "color 0.3s ease, opacity 0.3s ease",
            }}
            className="hover:opacity-70"
          >
            Mobile
          </Link>
          <Link
            href="/blog"
            style={{
              fontSize: "16px",
              fontWeight: 400,
              textDecoration: "none",
              color: scrolled ? "#040406" : "rgba(255,255,255,0.85)",
              transition: "color 0.3s ease, opacity 0.3s ease",
            }}
            className="hover:opacity-70"
          >
            Blog
          </Link>
        </nav>

        {/* CTA Button */}
        <Link
          href="#"
          className="inline-flex items-center gap-1.5 rounded-[12px] px-5 py-2.5 text-sm font-medium text-white"
          style={{
            background:
              "radial-gradient(101.79% 101.79% at 65.61% 81.79%, rgba(255,255,255,0.6) 0px, rgba(255,255,255,0) 100%), radial-gradient(114.65% 114.65% at 9.73% 17.27%, rgb(30,130,224) 0px, rgb(28,56,234) 100%)",
          }}
        >
          <Image
            src="/images/apple.svg"
            alt=""
            width={14}
            height={14}
            className="invert"
          />
          Get for Mac
        </Link>
      </div>
    </header>
  );
}

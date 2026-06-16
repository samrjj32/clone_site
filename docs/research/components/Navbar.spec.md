# Navbar Specification

## Overview
- **Target file:** `src/components/Navbar.tsx`
- **Interaction model:** scroll-driven (transparent → white with border on scroll)

## DOM Structure
```
<header> (absolute top-0 z-[9999] flex w-full pt-2.5)
  <div> (flex items-center justify-between px-5 md:px-8 w-full max-w-7xl mx-auto)
    <a href="/" class="logo">
      <img src="/images/wordmark-light.svg" alt="Cluely" width=84 height=22 />
    </a>
    <nav> (hidden lg:flex items-center gap-6)
      <a href="/#undetectability">Undetectability</a>
      <a href="/mobile">Mobile</a>
      <a href="/blog">Blog</a>
    </nav>
    <a href="https://api.v2.cluely.com/desktop-download/mac/latest.dmg" class="purple-gradient-button">
      🍎 Get for Mac
    </a>
  </div>
</header>
```

## Computed Styles (exact values)

### Header (initial — at scroll position 0)
- position: absolute
- top: 0
- left: 0
- right: 0
- zIndex: 9999
- backgroundColor: transparent
- paddingTop: 10px
- width: 100%
- display: flex

### Header (scrolled — after ~50px)
- position: fixed (or sticky)
- backgroundColor: rgba(255, 255, 255, 0.9) with backdrop-filter: blur(12px)
- borderBottom: 1px solid rgba(0,0,0,0.08)
- paddingTop: 8px (slightly reduced)
- transition: all 0.3s ease

### Logo image
- width: 84px
- height: 22px
- object-fit: contain
- The light logo (white) is used on the transparent navbar
- Switch to dark logo (/images/wordmark.svg) when navbar is white/scrolled

### Nav links
- fontSize: 16px
- fontWeight: 400
- color: rgba(255,255,255,0.85) initially (on dark hero)
- color: #040406 when navbar is white
- fontFamily: Geist, ui-sans-serif
- letterSpacing: normal
- textDecoration: none
- transition: color 0.2s ease
- Hover: opacity 0.7

### CTA Button "Get for Mac"
- background: radial-gradient(101.79% 101.79% at 65.61% 81.79%, rgba(255,255,255,0.6) 0, rgba(255,255,255,0) 100%), radial-gradient(114.65% 114.65% at 9.73% 17.27%, rgb(30,130,224) 0, rgb(28,56,234) 100%)
- color: white
- padding: 10px 20px
- borderRadius: 12px
- fontSize: 16px
- fontWeight: 500
- display: flex
- alignItems: center
- gap: 6px
- Has Apple logo icon before text (🍎 or SVG)

## States & Behaviors

### Scroll behavior
- **Trigger:** window.scrollY > 50
- **State A (top):** transparent bg, white logo, white nav links
- **State B (scrolled):** white/frosted glass bg, dark logo, dark nav links, subtle border-bottom
- **Transition:** all 0.3s ease

## Assets
- Light logo: `/images/wordmark-light.svg` (white, used on dark/transparent nav)
- Dark logo: `/images/wordmark.svg` (dark, used on white nav)

## Text Content
- Nav links: Undetectability, Mobile, Blog
- CTA: "Get for Mac" with Apple icon

## Responsive Behavior
- **Desktop (1440px):** full nav with all links visible
- **Mobile (390px):** hide nav links, show hamburger menu (mobile menu)
- **Breakpoint:** links hide below lg (~1024px)

## Implementation Notes
- Use `useEffect` + `useState` with a scroll listener to toggle the scrolled class
- Apple icon: use an SVG or the `/images/apple.svg` asset

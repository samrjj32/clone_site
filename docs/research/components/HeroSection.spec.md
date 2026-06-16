# HeroSection Specification

## Overview
- **Target file:** `src/components/HeroSection.tsx`
- **Interaction model:** static (no scroll-driven behavior; Mac mockup below is decorative)

## DOM Structure
```
<section> (full viewport, relative, overflow-hidden)
  <!-- Background: mountain landscape image with gradient overlay -->
  <div class="hero-content"> (text centered, positioned in upper 55% of viewport)
    <h1> "#1 Undetectable AI for Meetings"
    <h2> (subtitle) "Cluely takes perfect meeting notes and gives real-time answers, all while completely undetectable"
    <a href="...mac download..."> (CTA button)
      <svg Apple icon /> Get for Mac
  </div>
  <!-- Mac desktop mockup, positioned at bottom, partially cut off -->
  <div class="mac-mockup">
    <!-- Mac window chrome (traffic lights + menubar) -->
    <!-- Cluely overlay bar: logo | v Hide | toggle -->
    <!-- Zoom call window with two participants -->
    <!-- Cluely assist panel overlaid on call -->
    <!-- Mac dock at bottom -->
  </div>
</section>
```

## Computed Styles

### Section (hero container)
- background: radial-gradient(87.76% 87.72% at 50% 9.2%, rgba(255,255,255,0) 41.36%, rgb(255,255,255) 71.93%), image-set(url("/images/pages/home/background.png") 1dppx, url("/images/pages/home/background@2x.png") 2dppx)
- backgroundSize: cover
- backgroundPosition: center top
- minHeight: 100svh
- display: flex
- flexDirection: column
- alignItems: center
- paddingTop: 80px (accounts for fixed nav ~52px + spacing)

### Hero content div
- display: flex
- flexDirection: column
- alignItems: center
- gap: 32px (lg: 48px)
- textAlign: center
- paddingLeft: 20px
- paddingRight: 20px
- maxWidth: 900px

### H1 heading
- fontFamily: "EB Garamond", Georgia, serif (--font-eb-garamond)
- fontSize: 80px (desktop), ~48px (mobile)
- fontWeight: 400
- lineHeight: 1.1
- color: rgb(255, 255, 255)
- letterSpacing: -0.02em
- textAlign: center

### H2 subtitle
- fontFamily: Geist, ui-sans-serif
- fontSize: 20px (desktop), 18px (mobile)
- fontWeight: 400
- color: rgba(255,255,255,0.85)
- lineHeight: 1.5
- maxWidth: 600px
- textAlign: center

### CTA Button
- className: "purple-gradient-button" (defined in globals.css)
- background: radial-gradient(101.79% 101.79% at 65.61% 81.79%, rgba(255,255,255,0.6) 0, rgba(255,255,255,0) 100%), radial-gradient(114.65% 114.65% at 9.73% 17.27%, rgb(30,130,224) 0, rgb(28,56,234) 100%)
- color: white
- padding: 10px 20px
- borderRadius: 12px
- fontSize: 16px
- fontWeight: 500
- display: flex / inline-flex
- alignItems: center
- gap: 6px
- Has inner .blurred-border span for glass shimmer effect:
  background: linear-gradient(176.87deg, rgba(255,255,255,0.5) 8.56%, rgba(255,255,255,0) 85.04%)
  position: absolute, inset: -1px, borderRadius: inherit

## Mac Mockup

The Mac mockup is a decorative UI element positioned below the hero text, visible at the bottom of viewport.

### Outer Mac window frame
- borderRadius: 12px 12px 0 0
- background: linear-gradient of orange/golden tones (macOS Sonoma gradient)
- overflow: hidden
- width: ~940px centered
- has: top bar with traffic lights (●●●) + wifi/battery icons

### Cluely overlay bar (floating, dark pill)
- position: absolute, horizontally centered, near top of mac window
- background: rgb(40, 40, 40) or rgba(0,0,0,0.8)
- borderRadius: 9999px (pill shape)
- padding: 8px 16px
- display: flex items-center gap-8
- contains: Cluely logo icon + "v Hide" dropdown + toggle

### Zoom call area
- background: dark (black/very dark gray)
- Two participant thumbnails side by side
- Two faces: Asian man (left) + South Asian man (right)

### Cluely assist panel (overlaid on call)
- Dark glass panel, borderRadius: 12px
- Shows: "What should I say?" bubble (blue, top right)
- Quote text block: "A discounted cash flow model values a company..."
- Bottom tabs: Assist · What should I say? · Follow-up questions · Recap
- Input: "Ask about your screen or conversation, or [⌘][↵] for Assist"
- Smart button + send button (blue circle arrow)

### Mac dock
- position: bottom of mac frame
- horizontal bar of app icons (Launchpad, Safari, Settings, Zoom, Cluely, Trash)
- each icon: 65x65px with rounded corners
- dock background: frosted glass / semi-transparent bar
- background: rgba(255,255,255,0.2) backdrop-filter blur
- borderRadius: 16px

## Assets
- Background: `/images/pages/home/background.png` + `background@2x.png`
- Mac wallpaper: `/images/wallpaper@2x.png` (973×544)
- Mac shimmer: `/images/shimmer.png` (20×57)
- Dock icons: `/images/pages/home/launchpad-icon.png`, `safari-icon.png`, `settings-icon.png`, `zoom-icon.png`, `cluely-icon.png`, `trash-icon.png`
- Apple logo in button: `/images/apple.svg`

## Text Content (verbatim)
- H1: "#1 Undetectable AI for Meetings"
- H2: "Cluely takes perfect meeting notes and gives real-time answers, all while completely undetectable"
- Button: "Get for Mac"
- Cluely panel quote: ""A discounted cash flow model values a company by projecting future free cash flows and discounting them to present value using the weighted average cost of capital.""
- Panel tabs: "Assist · What should I say? · Follow-up questions · Recap"
- Input placeholder: "Ask about your screen or conversation, or ⌘ ↵ for Assist"
- Bubble: "What should I say?"
- Zoom controls: "Unmute · Start Video · End"

## Responsive Behavior
- **Desktop (1440px):** H1 ~80px, mac mockup visible at bottom
- **Mobile (390px):** H1 ~36–40px, mac mockup hidden or shrunk
- **Breakpoint:** ~768px — reduce heading size; ~1024px — show full mockup

## Implementation Notes
- The hero background uses CSS `background` shorthand with image-set for retina
- Use `next/image` for the background? No — use CSS background-image on the section itself (it's more appropriate for decorative backgrounds)
- The Mac mockup is purely decorative HTML — no interactivity needed
- The Cluely overlay panel content can be static (no real animation required)

# FeaturesSection Specification

## Overview
- **Target file:** `src/components/FeaturesSection.tsx`
- **Interaction model:** static
- **Section heading:** "How Cluely helps during a meeting"

## DOM Structure
```
<div> (mx-auto flex w-full max-w-7xl flex-col items-center gap-11 px-5 md:px-8 lg:items-stretch)
  <h2> "How Cluely helps during a meeting"
  <div> (flex gap-4 lg:flex-row flex-col)
    <!-- Left card: blue -->
    <div class="card-blue"> (flex-1, rounded-2xl, bg blue)
      <h3> "Cluely listens in to the conversation"
      <p> "It picks up the context of your meeting in real time..."
      <div class="recording-ui">
        <!-- Timer: 00:00 -->
        <!-- Red dot + "Recording" label -->
        <!-- Audio waveform visualization -->
        <!-- Cluely panel (ghost/dimmed) -->
      </div>
    </div>
    <!-- Right card: white/light gray -->
    <div class="card-white"> (flex-1, rounded-2xl, bg light)
      <h3> "When you need help, Cluely <spark icon> assists you instantly"
      <p> "Hit Cmd/Ctrl + Enter and Cluely helps you with AI in the moment."
      <div class="assist-ui">
        <!-- Cluely floating bar (pill) -->
        <!-- Dark assist panel -->
          <!-- "Viewed screen" + "Assist" chip -->
          <!-- Text content about Cluely -->
          <!-- Tabs: Assist · What should I say? · Follow-up questions · Recap -->
          <!-- Input field -->
      </div>
    </div>
  </div>
</div>
```

## Computed Styles

### Section wrapper
- maxWidth: 1280px (max-w-7xl)
- margin: 0 auto
- paddingLeft: 20px (md: 32px)
- paddingRight: 20px (md: 32px)
- display: flex
- flexDirection: column
- alignItems: center (lg: stretch)
- gap: 44px

### Section heading (h2)
- fontFamily: Geist, ui-sans-serif
- fontSize: 22px
- fontWeight: 600
- color: rgb(4, 4, 6)
- textAlign: center (or left on lg)
- letterSpacing: normal

### Cards container
- display: flex
- gap: 16px
- flexDirection: column (mobile), row (lg)

### Left Card (Blue - "Cluely listens")
- background: rgb(80, 114, 206) or similar blue (#5072CE-ish)
- borderRadius: 20px
- padding: 32px
- flex: 1
- overflow: hidden
- minHeight: 400px

### Left Card H3
- fontFamily: Geist
- fontSize: 28px (desktop)
- fontWeight: 600
- color: white
- lineHeight: 1.2

### Left Card P
- fontSize: 16px
- color: rgba(255,255,255,0.8)
- fontWeight: 400

### "listens" word in h3 has a pill/highlight around it
- background: rgba(255,255,255,0.2) or a dark blue pill
- borderRadius: 999px
- padding: 2px 10px
- display: inline

### Recording UI (inside blue card)
- Timer "00:00": fontSize 40px, fontWeight 700, color white, font-variant-numeric: tabular-nums
- "Recording" label: red dot (8px circle, #FF3B30) + "Recording" text in white, fontSize 14px
- Waveform: row of vertical bars, varying heights (animated pulse)
  - ~50 bars, height varies from 4px to 24px
  - color: rgba(255,255,255,0.6)
  - bar width: ~3px, gap: ~4px
- Below waveform: dimmed/ghost Cluely panel (opacity 0.3-0.4)

### Right Card (White - "When you need help")
- background: rgb(247, 248, 252) or rgb(240, 242, 250)
- borderRadius: 20px  
- padding: 32px
- flex: 1
- overflow: hidden

### Right Card H3
- fontFamily: Geist
- fontSize: 28px
- fontWeight: 600
- color: rgb(4, 4, 6)
- Has a sparkle/spark icon (✦ or ⚡) inline before "assists"

### Right Card P
- fontSize: 16px
- color: rgb(100, 100, 120)
- fontWeight: 400

### Cluely Floating Bar (in right card)
- background: rgb(40, 40, 40)
- borderRadius: 9999px
- padding: 8px 16px
- display: inline-flex
- alignItems: center
- gap: 12px
- color: white
- fontSize: 14px
- Contains: Cluely wheel icon (svg) + "v Hide" + toggle square

### Cluely Assist Panel (dark, in right card)
- background: rgb(45, 45, 50) or rgb(37, 37, 42)
- borderRadius: 12px
- padding: 16px
- color: white

### Panel "Assist" chip
- background: rgba(59, 130, 246, 0.9)
- color: white
- borderRadius: 6px
- padding: 3px 10px
- fontSize: 12px

### Panel "Viewed screen" label
- fontSize: 11px
- color: rgba(255,255,255,0.4)
- fontWeight: 500

### Panel text content
- fontSize: 13px
- color: rgba(255,255,255,0.85)
- lineHeight: 1.5

### Panel tabs row
- fontSize: 12px
- color: rgba(255,255,255,0.5)
- Items separated by " · " bullet
- tabs: Assist · What should I say? · Follow-up questions · Recap

### Input field in panel
- background: rgba(255,255,255,0.08)
- borderRadius: 8px
- border: 1px solid rgba(255,255,255,0.12)
- padding: 10px 12px
- fontSize: 13px
- color: rgba(255,255,255,0.5) (placeholder)
- Has: keyboard shortcut badges [⌘][↵] + send button (blue circle)

## States & Behaviors
- No interactive states for the cards themselves
- Waveform bars can have a subtle staggered CSS animation (cluely-pulse keyframe)
- Timer "00:00" is static

## Assets
- No images needed — all UI is built with HTML/CSS

## Text Content (verbatim)
- Section h2: "How Cluely helps during a meeting"
- Left card h3: "Cluely listens in to the conversation"
- Left card p: "It picks up the context of your meeting in real time, so it can help when you need it."
- Timer: "00:00"
- Recording: "● Recording"
- Right card h3: "When you need help, Cluely ✦ assists you instantly"
- Right card p: "Hit Cmd/Ctrl + Enter and Cluely helps you with AI in the moment."
- Floating bar: "v Hide" + toggle
- Panel "Viewed screen": "Cluely is an AI meeting assistant that listens in real time, understands what's being said, and gives you instant answers, notes, and next steps, all while staying completely undetectable on your screen."
- Panel tabs: "Assist · What should I say? · Follow-up questions · Recap"
- Input: "Ask about your screen or conversation, or ⌘ ↵ for Assist"

## Responsive Behavior
- **Desktop:** two cards side by side (flex-row), each flex-1
- **Mobile:** stacked vertically (flex-col)
- **Breakpoint:** ~1024px (lg)

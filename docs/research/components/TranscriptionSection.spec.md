# TranscriptionSection Specification

## Overview
- **Target file:** `src/components/TranscriptionSection.tsx`
- **Interaction model:** static (number animation on scroll-into-view optional)

## DOM Structure
```
<div> (w-full pt-20)
  <div> (mx-auto max-w-7xl px-5 md:px-8)
    <div> (flex gap-16 items-start — two columns)
      <!-- Left: Transcript screenshot -->
      <div class="transcript-image"> (flex-1, light blue-gray bg, rounded-2xl, overflow-hidden)
        <img src="/images/transcript-tab.png" alt="Real-time transcript" />
      </div>
      <!-- Right: Stats -->
      <div class="stats-column"> (flex-1)
        <h2> "Real-time transcription"
        <div class="stats-list"> (flex-col, dividers between items)
          <div class="stat-item">
            <span class="stat-value"> "12+"
            <div>
              <h3 class="stat-label"> "Languages"
              <p class="stat-desc"> "We support over 12 different languages, including English, Chinese, Spanish, and more."
            </div>
          </div>
          <hr />
          <div class="stat-item">
            <span class="stat-value"> "300ms"  (300 in large, ms in smaller)
            <div>
              <h3 class="stat-label"> "Response time"
              <p class="stat-desc"> "We have the fastest live transcription available. Test us against any other competitor."
            </div>
          </div>
          <hr />
          <div class="stat-item">
            <span class="stat-value"> "95%"
            <div>
              <h3 class="stat-label"> "Transcription accuracy"
              <p class="stat-desc"> "Trusted by many teams for reliable transcription. All processed with industry-leading accuracy."
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
```

## Computed Styles

### Container
- paddingTop: 80px
- maxWidth: 1280px
- margin: 0 auto

### Two-column flex
- display: flex
- gap: 64px (desktop)
- alignItems: flex-start
- flexDirection: row (desktop), column (mobile)

### Left column (transcript image)
- flex: 1
- background: rgb(237, 241, 250) or rgb(226, 230, 242)
- borderRadius: 20px
- overflow: hidden
- padding: 32px 32px 0 32px (no bottom padding — image flush at bottom)

### Transcript image
- width: 100%
- height: auto
- display: block
- objectFit: contain

### Right column (stats)
- flex: 1
- display: flex
- flexDirection: column
- gap: 0

### H2 "Real-time transcription"
- fontFamily: Geist
- fontSize: 44px (desktop), 28px (mobile)
- fontWeight: 600
- color: rgb(4, 4, 6)
- lineHeight: 1.1
- marginBottom: 32px

### Stat item
- display: flex
- gap: 24px
- alignItems: flex-start
- paddingTop: 24px
- paddingBottom: 24px

### Stat value (e.g. "12+")
- fontFamily: Geist
- fontSize: 52px (desktop)
- fontWeight: 700
- color: rgb(4, 4, 6)
- lineHeight: 1
- minWidth: 120px
- "300ms": "300" is large (52px), "ms" is smaller inline (24px, fontWeight 500)

### Stat label (h3)
- fontSize: 20px
- fontWeight: 600
- color: rgb(4, 4, 6)
- marginBottom: 4px

### Stat description (p)
- fontSize: 16px
- color: rgb(120, 120, 135)
- fontWeight: 400
- lineHeight: 1.5

### Divider (hr)
- border: none
- borderTop: 1px solid rgb(230, 232, 240)
- margin: 0

## Assets
- Transcript screenshot: `/images/transcript-tab.png`

## Text Content (verbatim)
- H2: "Real-time transcription"
- Stat 1 value: "12+" | label: "Languages" | desc: "We support over 12 different languages, including English, Chinese, Spanish, and more."
- Stat 2 value: "300ms" | label: "Response time" | desc: "We have the fastest live transcription available. Test us against any other competitor."
- Stat 3 value: "95%" | label: "Transcription accuracy" | desc: "Trusted by many teams for reliable transcription. All processed with industry-leading accuracy."

## Meeting notes image content (what the screenshot shows)
- Meeting: "Strategic Sales Growth and Client Relationship Management"
- Date: Thursday, Oct 24 • Alexa, Roy, +3 more
- Tabs: Summary | Transcript (active) | Chats
- Transcript shows: Neesh & Them conversation about software

## Responsive Behavior
- **Desktop:** side-by-side columns
- **Mobile:** stacked (image on top, stats below)
- **Breakpoint:** ~768px (md)

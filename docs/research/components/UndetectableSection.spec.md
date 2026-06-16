# UndetectableSection Specification

## Overview
- **Target file:** `src/components/UndetectableSection.tsx`
- **Interaction model:** static (scroll-reveal on entry)
- **ID:** `undetectability`

## DOM Structure
```
<section id="undetectability"> (relative z-10 scroll-mt-24 overflow-hidden)
  <div> (mx-auto max-w-7xl px-5 md:px-8, flex-col, items-center)
    <div class="section-header">
      <h2> "Undetectable in every way"
      <p> "Suite of features to use Cluely without a trace."
    </div>
    <div class="cards-grid"> (3 cards in a row on desktop, stacked on mobile)
      <!-- Card 1: Doesn't join meetings -->
      <div class="feature-card">
        <div class="card-image"> (light blue-gray bg with meeting participants UI)
        <h3><strong>Doesn't join meetings.</strong> Cluely never joins...</h3>
      </div>
      <!-- Card 2: Invisible to screen share -->
      <div class="feature-card">
        <div class="card-image"> (split "Visible to you" / "Invisible to others" demo)
        <h3><strong>Invisible to screen share.</strong> Cluely never shows up...</h3>
      </div>
      <!-- Card 3: Follows your eyes -->
      <div class="feature-card">
        <div class="card-image"> (Cluely window on desktop with keyboard shortcuts)
        <h3><strong>Follows your eyes.</strong> Cluely window is fully moveable...</h3>
      </div>
    </div>
    <!-- Compatible with every tool section -->
    <div class="compat-section">
      <p class="compat-label"> "COMPATIBLE WITH EVERY TOOL"
      <div class="tools-row"> (5 tool logos with names)
        <div> <img Zoom /> Zoom </div>
        <div> <img Slack /> Slack </div>
        <div> <img Webex /> Webex </div>
        <div> <img Teams /> Microsoft Teams </div>
        <div> <img Meet /> Google Meet </div>
      </div>
    </div>
  </div>
</section>
```

## Computed Styles

### Section
- position: relative
- zIndex: 10
- scrollMarginTop: 96px
- overflow: hidden
- paddingTop: 80px
- paddingBottom: 60px

### Section header
- textAlign: center
- marginBottom: 48px

### H2 "Undetectable in every way"
- fontFamily: Geist
- fontSize: 44px (desktop), 28px (mobile)
- fontWeight: 600
- color: rgb(4, 4, 6)
- lineHeight: 1.1

### P subtitle
- fontSize: 18px
- color: rgb(120, 120, 135)
- fontWeight: 400
- marginTop: 8px

### Cards grid
- display: grid (or flex)
- gridTemplateColumns: repeat(3, 1fr) on desktop
- gap: 16px (desktop), 24px (mobile stacked)
- width: 100%

### Feature card
- background: white
- borderRadius: 20px
- overflow: hidden
- border: 1px solid rgba(0,0,0,0.06)
- display: flex
- flexDirection: column

### Card image container
- background: rgb(237, 241, 250) or light blue-gray
- padding: 24px
- overflow: hidden
- borderRadius: 12px
- marginBottom: 16px
- minHeight: 260px
- display: flex
- alignItems: center
- justifyContent: center

### Card 1 image — meeting participants UI
- White card showing:
  - "Meeting participants (4)" header with "No bots detected" green badge
  - 4 participants: Gina Huels (Owner), Todd Cremin (Speaker), Holly Gleason (Speaker), Tomas Hansen (Speaker)
  - Avatar images: /images/gina-huels.png, todd-cremin.png, holly-gleason.png, tomas-hansen.png
  - Each row: avatar (32px circle) + name + email + role dropdown
  - "No bots detected": green dot + text, in green badge, top right of card header

### Card 2 image — split screen visibility demo
- Two panels overlapping: "Visible to you" (green label) and "Invisible to others" (red label)
- Left panel shows code editor with Cluely AI Response
- Toggle handle in center (dark pill with left/right arrows)
- Code: fetchUserData function in VS Code style

### Card 3 image — moveable window
- Shows desktop with Cluely window positioned, keyboard shortcut visualization
- command (⌘) key + arrow keys layout
- Background has a purple/gradient desktop

### Feature card text
- padding: 16px 16px 20px

### H3 bold + normal text
- fontSize: 16px (desktop)
- fontWeight: 400
- color: rgb(4, 4, 6)
- lineHeight: 1.5
- The first part (before the period) is bold: fontWeight: 700
- "Doesn't join meetings." — bold
- "Cluely never joins..." — normal weight

## Compatible With Every Tool

### Compat label
- fontSize: 11px
- fontWeight: 600
- letterSpacing: 0.15em
- color: rgb(120, 120, 135)
- textTransform: uppercase
- textAlign: center
- marginTop: 60px
- marginBottom: 24px

### Tools row
- display: flex
- justifyContent: center
- alignItems: center
- gap: 40px (desktop), wrap on mobile
- flexWrap: wrap

### Tool item
- display: flex
- alignItems: center
- gap: 8px
- fontSize: 16px
- fontWeight: 500
- color: rgb(4, 4, 6)

### Tool logo image
- width: 28px
- height: 28px
- objectFit: contain

## Assets
- Avatar images: `/images/gina-huels.png`, `/images/todd-cremin.png`, `/images/holly-gleason.png`, `/images/tomas-hansen.png`
- Cluely icon in meeting panel: `/images/cluely-icon.svg`
- Tool logos: `/images/tools/zoom.png`, `slack.png`, `webex.png`, `teams.png`, `meet.png`
- Invisible tool screenshot: `/images/invisible-tool.png`
- Command button images: `/images/command-btn.png`, `/images/command-active.png`, `/images/return-btn.png`, `/images/return-active.png`

## Text Content (verbatim)
- H2: "Undetectable in every way"
- P: "Suite of features to use Cluely without a trace."
- Card 1 h3: "Doesn't join meetings. Cluely never joins your meetings, so there are no bots and no extra people on the guest list."
- Card 2 h3: "Invisible to screen share. Cluely never shows up in shared screens, recordings, or external meeting tools."
- Card 3 h3: "Follows your eyes. Cluely window is fully moveable so you can position it exactly where you're looking."
- Compat label: "COMPATIBLE WITH EVERY TOOL"
- Tools: Zoom, Slack, Webex, Microsoft Teams, Google Meet
- Meeting participants: Gina Huels (You) ginahue65@cluely.com - Owner, Todd Cremin todd.cremin@cluely.com - Speaker, Holly Gleason holly_gleaso1972@cluely.com - Speaker, Tomas Hansen tomas_hansen@cluely.com - Speaker
- "No bots detected" (green badge in card 1)
- Visibility labels: "Visible to you" (green), "Invisible to others" (red/dark)

## Responsive Behavior
- **Desktop (1440px):** 3-column grid, tools in one row
- **Mobile (390px):** stacked single column cards, tools wrap to 2-3 per row
- **Breakpoint:** ~1024px for 3-column layout

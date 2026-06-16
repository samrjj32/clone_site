# Cluely.com Page Topology

## Page Sections (top to bottom)

1. **Navbar** - absolute positioned (becomes sticky on scroll), transparent bg initially
   - Logo (white wordmark) + nav links (Undetectability, Mobile, Blog) + CTA "Get for Mac" button
   - On scroll: gains white bg, border-bottom, becomes sticky

2. **Hero Section** - Full viewport height
   - Background: radial gradient overlay + `/images/pages/home/background.png` (mountain landscape)
   - Large serif heading: "#1 Undetectable AI for Meetings"
   - Subheading (h2): "Cluely takes perfect meeting notes and gives real-time answers..."
   - Purple gradient CTA button: "🍎 Get for Mac"
   - Mac desktop mockup below (wallpaper + dock + Cluely overlay panel)
   - INTERACTION MODEL: static

3. **How Cluely Helps Section** - "How Cluely helps during a meeting"
   - Two side-by-side cards (max-w-7xl)
   - Left card (blue bg): "Cluely listens in to the conversation" + recording UI
   - Right card (white bg): "When you need help, Cluely assists you instantly" + Cluely panel UI
   - INTERACTION MODEL: static

4. **Instant Meeting Notes Section** - White bg
   - Heading: "Instant meeting notes" + subtext: "The easiest way to get beautiful, shareable meeting notes."
   - Large meeting notes screenshot (desktop-notes.png)
   - INTERACTION MODEL: static

5. **Undetectable Features Section** (id="undetectability") - scroll-mt-24
   - Heading: "Undetectable in every way" + "Suite of features to use Cluely without a trace."
   - 3 cards in a row:
     a. "Doesn't join meetings" - meeting participants UI (no bots)
     b. "Invisible to screen share" - split visible/invisible demo
     c. "Follows your eyes" - moveable window demo
   - INTERACTION MODEL: static (possibly scroll-reveal animations)

6. **Compatible With Every Tool** - center-aligned logos
   - "COMPATIBLE WITH EVERY TOOL" (uppercase, spaced)
   - 5 tool logos: Zoom, Slack, Webex, Microsoft Teams, Google Meet

7. **Real-time Transcription Stats** - Two-column (image left, stats right)
   - Left: transcript screenshot
   - Right: "Real-time transcription" heading + 3 stats with dividers:
     - 12+ Languages
     - 300ms Response time
     - 95% Transcription accuracy
   - INTERACTION MODEL: static (number counter animation on scroll)

8. **FAQ Section** - Accordion
   - Heading: "Frequently asked questions"
   - 6 accordion items (collapsed by default)
   - INTERACTION MODEL: click-driven accordion

9. **CTA Section** - Lavender/light blue background (#DDE2EE gradient)
   - "Meeting AI that helps during the call, not after."
   - Subtitle in blue: "Try Cluely on your next meeting today."
   - "🍎 Get for Mac" button
   - Decorative keyboard key images (command, return keys) on right
   - INTERACTION MODEL: static

10. **Footer** - Lavender background continues
    - Cluely logo (dark wordmark)
    - 3 link columns: Resources, Support, Legal
    - Bottom row: "All systems operational" badge + "List of subprocessors." link
    - Copyright: "© 2026 Cluely. All rights reserved."
    - Social icons: X, Discord, Instagram, GitHub

## Layout Architecture
- Max content width: max-w-7xl (1280px) with px-5 md:px-8 padding
- Navbar: absolute z-[9999] initially, sticky after scroll
- No horizontal scroll
- Background: white for most sections, lavender (#DDE2EE) for CTA + footer

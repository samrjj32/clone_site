# FAQSection Specification

## Overview
- **Target file:** `src/components/FAQSection.tsx`
- **Interaction model:** click-driven accordion (one open at a time or multiple — default all closed)

## DOM Structure
```
<section class="faq"> (relative z-1 w-full py-24 mx-auto max-w-7xl px-5 md:px-8)
  <h2> "Frequently asked questions"
  <div class="faq-list"> (flex-col, dividers)
    <div class="faq-item"> (each FAQ)
      <button class="faq-trigger"> (flex between, cursor pointer)
        <h3> "Why real-time vs. a regular AI notetaker?"
        <ChevronDownIcon /> (rotates when open)
      </button>
      <div class="faq-answer"> (hidden when closed, animated expand)
        <p> "..."
      </div>
    </div>
    <!-- repeated for each FAQ -->
  </div>
</section>
```

## Computed Styles

### Section
- maxWidth: 1280px
- margin: 0 auto
- paddingLeft: 20px (md: 32px)
- paddingRight: 20px
- paddingTop: 96px
- paddingBottom: 96px

### H2
- fontFamily: Geist
- fontSize: 36px (desktop), 24px (mobile)
- fontWeight: 600
- color: rgb(4, 4, 6)
- marginBottom: 32px

### FAQ list
- display: flex
- flexDirection: column
- width: 100%

### FAQ item
- borderTop: 1px solid rgb(230, 232, 240)
- paddingTop: 0
- paddingBottom: 0

### FAQ trigger button
- display: flex
- justifyContent: space-between
- alignItems: center
- width: 100%
- paddingTop: 20px
- paddingBottom: 20px
- background: none
- border: none
- cursor: pointer
- textAlign: left

### FAQ question (h3 in button)
- fontFamily: Geist
- fontSize: 18px
- fontWeight: 500
- color: rgb(4, 4, 6)
- lineHeight: 1.4

### Chevron icon
- width: 20px
- height: 20px
- color: rgb(120, 120, 135)
- transition: transform 0.2s ease
- When open: rotate(180deg)

### FAQ answer
- overflow: hidden
- maxHeight: 0 (closed), auto (open) — use CSS transition or framer-motion
- transition: max-height 0.3s ease
- paddingBottom: 20px (when open)

### FAQ answer text (p)
- fontSize: 16px
- color: rgb(80, 80, 90)
- lineHeight: 1.6
- fontWeight: 400

## FAQ Data (verbatim questions and answers)

1. **Why real-time vs. a regular AI notetaker?**
   Answer: Regular AI notetakers join your call as a bot, record everything, and send you notes after. Cluely is different — it listens in real time and helps you during the meeting, not just after. You get instant answers when you need them, not a summary you read tomorrow.

2. **Who is Cluely for?**
   Answer: Cluely is for anyone who has meetings — sales calls, interviews, investor pitches, team standups, customer support calls, or any situation where you need to be sharp and informed. If you want to show up better in meetings, Cluely is for you.

3. **Is Cluely free?**
   Answer: Cluely offers a free trial so you can experience it before committing. After the trial, there's a paid plan to continue using all features.

4. **How is it undetectable in meetings?**
   Answer: Cluely runs locally on your Mac as a native app. It never joins your meeting as a bot, never shows up in screen recordings or shared screens, and is completely invisible to other participants. It reads your screen and audio directly — no meeting bot required.

5. **What languages and apps are supported?**
   Answer: Cluely supports 12+ languages including English, Chinese, Spanish, and more. It works with any meeting tool that uses audio on your Mac — Zoom, Google Meet, Microsoft Teams, Slack, Webex, and more.

6. **Can I talk to customer support?**
   Answer: Yes! You can reach us at help@cluely.com or visit our Help Center. We also have a community Discord where you can connect with other Cluely users.

*Note: The actual answers may differ from what's visible on the collapsed accordion — these are best estimates. The questions are verbatim.*

## Responsive Behavior
- **Desktop & Mobile:** same accordion layout, full width
- Questions stack vertically with dividers

# CTASection Specification

## Overview
- **Target file:** `src/components/CTASection.tsx`
- **Interaction model:** static

## DOM Structure
```
<div> (relative z-20 overflow-x-hidden pt-32 pb-16 md:pt-[174px] md:pb-[160px] lg:pb-[210px] xl:pt-[220px])
  <!-- Background: lavender/light blue gradient that continues into footer -->
  <div> (mx-auto max-w-7xl px-5 md:px-8)
    <div> (flex items-start justify-between)
      <!-- Left: Text + button -->
      <div>
        <h3> "Meeting AI that helps during the call, not after."
        <p> (blue gradient text) "Try Cluely on your next meeting today."
        <a href="...mac download..."> (CTA button)
          <img src="/images/apple.svg" /> Get for Mac
      </div>
      <!-- Right: Decorative keyboard keys -->
      <div class="keyboard-decoration"> (absolute or relative, right side)
        <!-- Command key (large) -->
        <img src="/images/command-btn.png" /> or command-active.png
        <!-- Return key -->
        <img src="/images/return-btn.png" /> or return-active.png
        <!-- Both keys at angles -->
      </div>
    </div>
  </div>
</div>
```

## Computed Styles

### Outer container
- position: relative
- zIndex: 20
- overflow-x: hidden
- paddingTop: 128px (desktop: 174px, xl: 220px)
- paddingBottom: 64px (desktop: 160px, lg: 210px)
- background: rgb(221, 226, 238) — #DDE2EE lavender
- (This section blends into the footer with same bg)

### Inner container
- maxWidth: 1280px
- margin: 0 auto
- paddingLeft: 20px (md: 32px)
- paddingRight: 20px (md: 32px)

### H3 main heading
- fontFamily: Geist
- fontSize: 40px (desktop), 28px (mobile)
- fontWeight: 700
- color: rgb(4, 4, 6)
- lineHeight: 1.2
- maxWidth: 600px

### P subtitle "Try Cluely on your next meeting today."
- fontFamily: Geist
- fontSize: 24px (desktop), 18px (mobile)
- background: linear-gradient(90deg, #4A9CE0, #A78BFA) or similar blue-to-purple
- -webkit-background-clip: text
- -webkit-text-fill-color: transparent (gradient text)
- fontWeight: 500
- marginTop: 8px

### CTA Button
- Same purple-gradient-button as hero
- padding: 10px 20px
- borderRadius: 12px
- marginTop: 24px
- display: inline-flex
- alignItems: center
- gap: 6px
- color: white
- fontSize: 16px
- fontWeight: 500

### Apple logo in button
- width: 16px
- height: 16px
- filter: brightness(10) (to make it white)

### Keyboard decoration (right side)
- position: absolute (right side of section or relative within flex)
- display: flex or positioned
- The command key image is large (~200px)
- The return key is smaller (~120px)  
- They overlap/stack at slight angles
- Keys appear 3D with rounded corners (like actual Mac keyboard keys)

## Assets
- Apple icon: `/images/apple.svg`
- Command key button: `/images/command-btn.png` (default) / `/images/command-active.png` (active)
- Return key button: `/images/return-btn.png` (default) / `/images/return-active.png` (active)

## Text Content (verbatim)
- H3: "Meeting AI that helps during the call, not after."
- P: "Try Cluely on your next meeting today."
- Button: "Get for Mac"

## Responsive Behavior
- **Desktop:** heading left, keyboard decoration floating right
- **Mobile:** text stacked, keyboard decoration hidden or positioned behind
- **Breakpoint:** ~768px (md)

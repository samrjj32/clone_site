# Footer Specification

## Overview
- **Target file:** `src/components/Footer.tsx`
- **Interaction model:** static

## DOM Structure
```
<footer> (bg: #DDE2EE, relative)
  <div class="border-top"> (1px solid rgba(0,0,0,0.1))
  <div class="footer-inner"> (mx-auto max-w-7xl px-5 md:px-8, pt-8, pb-8)
    <div class="footer-main"> (flex justify-between)
      <!-- Left: Logo -->
      <div class="footer-logo">
        <a href="/">
          <img src="/images/wordmark.svg" alt="Cluely" />
        </a>
      </div>
      <!-- Right: Link columns -->
      <div class="link-columns"> (flex gap-16)
        <div class="column">
          <h4> "Resources"
          <ul>
            <li><a href="/mobile"> Mobile <span class="new-badge">New</span></a></li>
            <li><a href="/manifesto"> Manifesto</a></li>
            <li><a href="/press"> Press</a></li>
            <li><a href="https://cluelyhq.notion.site/bugbounty"> Bug Bounty</a></li>
          </ul>
        </div>
        <div class="column">
          <h4> "Support"
          <ul>
            <li><a href="https://support.cluely.com/en/"> Help Center</a></li>
            <li><a href="mailto:help@cluely.com"> Contact Us</a></li>
          </ul>
        </div>
        <div class="column">
          <h4> "Legal"
          <ul>
            <li><a href="/privacy-policy"> Privacy Policy</a></li>
            <li><a href="/terms"> Terms of Service</a></li>
            <li><a href="/subprocessors"> Subprocessors</a></li>
          </ul>
        </div>
      </div>
    </div>
    <!-- Footer bottom -->
    <div class="footer-bottom"> (flex justify-between items-center, mt-8, pt-6, border-top)
      <div class="footer-bottom-left">
        <!-- All systems operational badge -->
        <div class="status-badge"> (rounded pill, border, inline-flex, gap-2)
          <span class="green-dot"> (8px circle, bg: #22C55E)
          <span> "All systems operational"
        </div>
        <p class="subprocessors-note"> (mt-2, fontSize 12px, color muted)
          "List of " <a href="/subprocessors">subprocessors</a>
        </p>
      </div>
      <div class="footer-bottom-right"> (flex items-center gap-4)
        <!-- Copyright -->
        <span> "© 2026 Cluely. All rights reserved."
        <!-- Social icons (right of copyright) -->
        <div class="social-icons"> (flex gap-3)
          <a href="https://x.com/cluely"> <XIcon /> </a>
          <a href="https://discord.gg/..."> <DiscordIcon /> </a>
          <a href="https://instagram.com/..."> <InstagramIcon /> </a>
          <a href="https://github.com/..."> <GithubIcon /> </a>
        </div>
      </div>
    </div>
  </div>
</footer>
```

## Computed Styles

### Footer
- background: rgb(221, 226, 238) — #DDE2EE (same as CTA section)
- position: relative

### Footer inner
- maxWidth: 1280px
- margin: 0 auto
- paddingLeft: 20px (md: 32px)
- paddingRight: 20px (md: 32px)
- paddingTop: 32px
- paddingBottom: 32px

### Footer main (logo + columns row)
- display: flex
- justifyContent: space-between
- alignItems: flex-start

### Logo image
- width: ~84px (same as header)
- height: auto

### Link columns
- display: flex
- gap: 64px

### Column heading (h4)
- fontSize: 13px
- fontWeight: 600
- color: rgb(80, 80, 90)
- marginBottom: 16px
- textTransform: capitalize

### Column links (a)
- display: block
- fontSize: 14px
- color: rgb(80, 80, 90)
- fontWeight: 400
- marginBottom: 10px
- textDecoration: none
- Hover: color: rgb(4, 4, 6)
- transition: color 0.15s

### "New" badge (on Mobile link)
- background: rgb(59, 130, 246) — blue
- color: white
- fontSize: 10px
- fontWeight: 600
- padding: 2px 6px
- borderRadius: 4px
- marginLeft: 6px
- display: inline

### Footer bottom row
- display: flex
- justifyContent: space-between
- alignItems: flex-end
- marginTop: 32px
- paddingTop: 24px
- borderTop: 1px solid rgba(0,0,0,0.1)

### Status badge
- display: inline-flex
- alignItems: center
- gap: 6px
- border: 1px solid rgba(0,0,0,0.12)
- borderRadius: 9999px
- padding: 4px 12px
- fontSize: 13px
- color: rgb(60, 60, 70)
- background: rgba(255,255,255,0.5)

### Green dot
- width: 8px
- height: 8px
- borderRadius: 50%
- background: rgb(34, 197, 94) — #22C55E
- display: inline-block

### Copyright text
- fontSize: 13px
- color: rgb(100, 100, 115)

### Social icons
- color: rgb(100, 100, 115)
- width: 18px
- height: 18px each
- Hover: color: rgb(4, 4, 6)

## Assets
- Dark logo: `/images/wordmark.svg`

## Text Content (verbatim)
- Resources: Mobile (New badge), Manifesto, Press, Bug Bounty
- Support: Help Center, Contact Us
- Legal: Privacy Policy, Terms of Service, Subprocessors
- Status: "All systems operational"
- Copyright: "© 2026 Cluely. All rights reserved."
- "List of subprocessors."

## Responsive Behavior
- **Desktop:** logo left, 3 columns right; bottom row: status left, copyright + socials right
- **Mobile:** logo top, columns stacked, copyright below
- **Breakpoint:** ~768px

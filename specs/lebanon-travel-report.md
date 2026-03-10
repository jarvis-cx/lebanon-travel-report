# Spec: Lebanon Travel Safety Report — August 2026

**Repo:** jarvis-cx/lebanon-travel-report
**Branch:** feature/travel-report-site
**Deploy:** Vercel (static, free tier)
**URL pattern:** lebanon-travel-report.vercel.app

## Party Details
- 2 Australian adults + 2 children (ages 7 and 9)
- Duration: 2 weeks
- Timing: August 2026
- Region: Northern Lebanon — Byblos, Bcharre, Jounieh, Kesrouan/Metn
- Passports: Australian

## Stack
- Next.js 14 + Tailwind CSS
- Static export (`output: "export"`)
- Single-page with anchor navigation
- Mobile-friendly, clean report format — readable by family members
- Deploy via Vercel CLI (`vercel --prod`)

## Research Input
Before coding begins, a research agent will produce:
`research/findings.md` — comprehensive findings across all sections below.

The coding pipeline reads this file and builds the site from it.

## Site Sections (in order)

### 1. Executive Summary
- One-paragraph verdict
- Traffic-light indicator (🔴 High Risk / 🟡 Moderate / 🟢 Manageable)
- 3 risk profiles: Cautious (don't go), Moderate (go with preparation), Adventurous (go, here's how)

### 2. Current Security Situation
- Lebanon-wide context (political, economic, military)
- Northern Christian regions specifically (Jounieh, Byblos, Bcharre, Kesrouan)
- August 2026 outlook — seasonal factors, events, risk trends
- How northern regions differ from Beirut/south

### 3. Government Travel Advisories
- Australian DFAT — current rating + what it means in practice
- UK FCDO advisory (cross-reference)
- US State Department advisory (cross-reference)
- Practical interpretation for the specific regions

### 4. Entry Requirements
- Australian passport — visa on arrival? eVisa? Requirements
- Beirut airport process
- Any restrictions (Israel stamps etc.)
- Border crossing notes

### 5. Health & Medical
- Recommended vaccinations
- Water safety
- Food safety
- Hospital access in the north (nearest to Jounieh, Byblos, Bcharre)
- Travel insurance — what to look for, Lebanon-specific considerations
- Child health considerations (7 & 9 year olds)

### 6. Family Considerations
- Travelling with children aged 7 & 9 specifically
- Child-friendly activities in the north
- Practical day-to-day (food, heat in August, sun safety)
- Cultural considerations with kids

### 7. Getting Around
- Transport options in northern Lebanon
- Car hire — recommended? Which companies?
- Road conditions and driving safety
- Taxis and ride apps
- Distances between key northern towns

### 8. Where to Stay
- Recommended areas/towns in the north
- Areas to avoid
- Accommodation types available (hotels, apartments, guesthouses)
- Budget guidance (USD)

### 9. Money & Economy
- Currency situation — USD vs Lebanese Pound
- ATM availability and reliability
- Cash vs card
- Approximate daily budget for a family of 4
- Tipping culture

### 10. Emergency Contacts
- Australian Embassy Beirut — address, phone, hours
- Lebanese emergency numbers (police, ambulance, fire)
- Nearest hospitals to Jounieh, Byblos, Bcharre
- Embassy emergency after-hours line

### 11. Verdict by Risk Profile
- 🔴 **Cautious:** Recommendation + reasoning
- 🟡 **Moderate:** Recommendation + what precautions to take
- 🟢 **Adventurous:** Go-ahead + practical tips for making it work

## Design Requirements
- Clean, professional report aesthetic
- NOT a dashboard — this is a document for family members to read
- Anchor nav at top linking to each section
- Mobile-first
- Color coding for risk indicators (red/amber/green)
- Print-friendly (bonus)
- Dark/light mode toggle (optional)

## Acceptance Criteria
- [ ] All 11 sections populated with real researched data
- [ ] Site builds with `npm run build` (no errors)
- [ ] Deployed to Vercel and accessible via public URL
- [ ] Mobile-readable
- [ ] Executive summary is clear and opinionated
- [ ] All government advisory links are real and current
- [ ] Emergency contacts are verified real numbers/addresses

## Model Assignments
- Research agent: anthropic/claude-opus-4-6
- PLAN: anthropic/claude-opus-4-6
- SETUP: anthropic/claude-sonnet-4-6
- IMPLEMENT: anthropic/claude-sonnet-4-6
- VERIFY: anthropic/claude-opus-4-6
- TEST: anthropic/claude-sonnet-4-6
- PR: anthropic/claude-sonnet-4-6
- REVIEW: anthropic/claude-opus-4-6

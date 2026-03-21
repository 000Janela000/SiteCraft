# v0.dev Design Prompts — SiteCraft

## How to Use
1. Go to v0.dev → start a NEW chat
2. Paste the Context Message first (or save it as a v0 Instruction for reuse)
3. Paste the Landing Page prompt
4. Use iteration prompts if results need adjustment
5. Use Design Mode (free) for visual tweaks — colors, spacing, typography
6. Download zip after each generation for backup

## Context Message
```
I'm building "SiteCraft" — a single-page landing site for a Georgian web development service. It's a Next.js app with shadcn/ui + Tailwind CSS.

The app is one scrollable landing page with 8 sections: Hero, Why You Need a Website, Pricing, Portfolio, How It Works, About/Founder, Contact, Footer.

The entire page is in Georgian (Mkhedruli script). Use font-family: "Noto Sans Georgian", sans-serif from Google Fonts. All text I provide is in Georgian — render it exactly as given. Do NOT translate or replace Georgian text with English.

This is a mobile-first design — most visitors open the link from a Facebook message on their phone. Design for 375px baseline, scale up to desktop.

Pick a professional, trustworthy color scheme — blues and dark tones work well. The audience is non-tech-savvy Georgian small business owners (restaurant owners, salon owners, mechanics). The design must feel clean, modern, and simple — not flashy or overly corporate.

Dark mode is NOT needed. Light theme only.

Ready? I'll send the full page prompt now.
```

## Landing Page (single page — all sections)
```
Design a single-page scrollable landing site for "SiteCraft" — a Georgian web development service.

The page has 8 sections. All text is in Georgian using Noto Sans Georgian font. Mobile-first (375px baseline). No dark mode — light theme only.

---

SECTION 1: HERO (full viewport height)

Layout:
- Centered content, generous vertical padding
- Subtle background pattern or gradient — nothing heavy
- No stock images or illustrations of people

Content:
- Brand name top-left or centered: "SiteCraft"
- Navigation anchors top-right (mobile: hamburger menu): "რატომ ვებსაიტი", "ფასები", "პორტფოლიო", "კონტაქტი"
- Headline (large, bold): "შენს ბიზნესს ვებსაიტი სჭირდება"
- Subheadline (medium, muted): "თანამედროვე, სწრაფი და ხელმისაწვდომი ვებსაიტები ქართული ბიზნესისთვის"
- Primary CTA button: "ფასების ნახვა" (scrolls to pricing section)
- Secondary CTA link: "დამიკავშირდით" (scrolls to contact section)

Interactions:
- CTA buttons smooth-scroll to their target sections
- Navigation links smooth-scroll to corresponding sections
- On mobile, nav collapses to hamburger with a Sheet/drawer

---

SECTION 2: WHY YOU NEED A WEBSITE (id: "why")

Layout:
- Section heading centered: "რატომ გჭირდებათ ვებსაიტი?"
- 4 cards in a 2x2 grid on desktop, single column stacked on mobile
- Each card has an icon (lucide-react), heading, and short description

Content (4 cards):

Card 1:
- Icon: Search
- Heading: "Google-ში გიპოვიან"
- Text: "მომხმარებლები Google-ში ეძებენ მომსახურებას — თუ ვებსაიტი არ გაქვთ, კონკურენტს იპოვიან"

Card 2:
- Icon: Clock
- Heading: "24/7 მუშაობს"
- Text: "ვებსაიტი მუშაობს მაშინაც კი, როცა თქვენ დახურული ხართ — კლიენტები ნებისმიერ დროს გიპოვიან"

Card 3:
- Icon: Shield
- Heading: "პროფესიონალური იმიჯი"
- Text: "ვებსაიტი ნდობას აღძრავს — ახალი კლიენტები უფრო მეტად ენდობიან ბიზნესს, რომელსაც ვებსაიტი აქვს"

Card 4:
- Icon: Globe
- Heading: "შენი საკუთარი სივრცე"
- Text: "Facebook-ის წესებზე აღარ ხარ დამოკიდებული — ვებსაიტი მხოლოდ შენია"

Interactions:
- Cards have subtle hover lift effect on desktop (shadow increase)

---

SECTION 3: PRICING (id: "pricing")

Layout:
- Section heading centered: "ფასები"
- Subheading: "სააგენტოები 2,000+ ლარს იხდიან — ჩვენთან გაცილებით ხელმისაწვდომია"
- 4 pricing cards in a horizontal row on desktop, single column on mobile
- One card (the most popular — "ადმინ პანელით") should be visually highlighted with a "პოპულარული" badge

Content (4 pricing cards):

IMPORTANT: Prices are NOT fixed — they are "starting from" prices. Display each price with "დაწყებული" (starting from) label above and "ლარიდან" (from X lari) after the number. Do NOT include free maintenance or free support in any package.

Card 1:
- Title: "სალანდინგო გვერდი"
- Price: "დაწყებული 250 ₾-დან"
- Features list (checkmarks):
  - "ერთგვერდიანი ვებსაიტი"
  - "მობილურზე ადაპტირებული"
  - "თანამედროვე დიზაინი"
  - "SEO ოპტიმიზაცია"
- CTA button: "დამიკავშირდით"

Card 2 (highlighted — "პოპულარული" badge):
- Title: "მრავალგვერდიანი"
- Price: "დაწყებული 350 ₾-დან"
- Features list:
  - "მრავალი გვერდი"
  - "მთავარი, ჩვენს შესახებ, სერვისები, კონტაქტი"
  - "მობილურზე ადაპტირებული"
  - "SEO ოპტიმიზაცია"
- CTA button: "დამიკავშირდით"

Card 3:
- Title: "ადმინ პანელით"
- Price: "დაწყებული 500 ₾-დან"
- Features list:
  - "ყველაფერი Multi-page-დან"
  - "ადმინისტრაციული პანელი"
  - "კონტენტის რედაქტირება"
  - "სურათების ატვირთვა"
  - "დეველოპერი აღარ გჭირდებათ"
- CTA button: "დამიკავშირდით"

Card 4:
- Title: "გადახდის სისტემით"
- Price: "დაწყებული 800 ₾-დან"
- Features list:
  - "ყველაფერი Admin Panel-დან"
  - "ონლაინ გადახდის ინტეგრაცია"
  - "TBC / BOG Pay ინტეგრაცია"
  - "შეკვეთების მართვა"
  - "ელ-ფოსტის შეტყობინებები"
- CTA button: "დამიკავშირდით"

Badge on section: "უფასო კონსულტაცია" (free consultation) — small badge near the section heading

Interactions:
- Highlighted card has a colored border or elevated shadow
- CTA buttons scroll to the contact section
- On hover, cards lift slightly

---

SECTION 4: PORTFOLIO (id: "portfolio")

Layout:
- Section heading centered: "ჩემი ნამუშევრები"
- 3 project cards in a row on desktop, single column on mobile
- Each card: screenshot/mockup area (top), project info (bottom)

Content (3 cards):

Card 1:
- Screenshot placeholder: browser mockup frame with "playtime.ge" text
- Title: "Playtime.ge"
- Description: "გასართობი პლატფორმა ადმინ პანელით"
- Link text: "ნახვა →" (links to playtime.ge)

Card 2:
- Screenshot placeholder: browser mockup frame with "DevNews" text
- Title: "DevNews"
- Description: "ტექნოლოგიური სიახლეების პლატფორმა"
- Link text: "ნახვა →" (links to dev-news-blond.vercel.app)

Card 3:
- Screenshot placeholder: browser mockup frame with "UniHub" text
- Title: "UniHub"
- Description: "საგანმანათლებლო პლატფორმა"
- Link text: "ნახვა →" (links to unihub-edu.vercel.app)

Interactions:
- Cards have hover effect — slight lift + link text underlines
- Screenshot area shows a stylized browser chrome frame (address bar with dots) as placeholder

---

SECTION 5: HOW IT WORKS (id: "process")

Layout:
- Section heading centered: "როგორ მუშაობს?"
- 3 steps in a horizontal row with connecting lines/arrows on desktop
- Vertical timeline on mobile
- Each step: number circle, icon, heading, short text

Content (3 steps):

Step 1:
- Number: "1"
- Icon: MessageCircle
- Heading: "დამიკავშირდით"
- Text: "მოგვწერეთ და აღწერეთ რა სჭირდება თქვენს ბიზნესს"

Step 2:
- Number: "2"
- Icon: Code
- Heading: "ჩვენ ვაშენებთ"
- Text: "1-2 კვირაში თქვენი ვებსაიტი მზად იქნება"

Step 3:
- Number: "3"
- Icon: Rocket
- Heading: "თქვენ ონლაინ ხართ"
- Text: "ვებსაიტი ცოცხალია — კლიენტები უკვე გიპოვიან"

Interactions:
- Steps appear with subtle stagger animation on scroll (optional — v0's choice)

---

SECTION 6: ABOUT / FOUNDER (id: "about")

Layout:
- Two-column on desktop: photo left, text right. Stacked on mobile: photo top, text below.
- Warm, personal feel — this section builds trust

Content:
- Photo: circular avatar placeholder (gray circle with User icon) — 120px on mobile, 180px on desktop
- Name: "საბა ჯანელიძე"
- Role: "დამფუძნებელი, SiteCraft"
- Bio text: "ვარ ვებ დეველოპერი და ვეხმარები ქართულ ბიზნესებს ონლაინ სივრცეში გამოჩენაში. ჩემი მიზანია ხელმისაწვდომ ფასად შევქმნა თანამედროვე, სწრაფი და ლამაზი ვებსაიტები, რომლებიც რეალურ შედეგს მოგიტანთ."
- Social link: Facebook icon + "Facebook" text (links to https://www.facebook.com/janela01)

---

SECTION 7: CONTACT (id: "contact")

Layout:
- Two-column on desktop: contact form left, contact info right. Stacked on mobile.
- Section heading: "დამიკავშირდით"
- Subheading: "გაინტერესებთ? მოგვწერეთ და უფასოდ გაგიწევთ კონსულტაციას"

Content — Form (left):
- Input: "სახელი" (name) — text input, required
- Input: "ტელეფონი" (phone) — tel input, required
- Textarea: "შეტყობინება" (message) — optional, 3 rows
- Submit button: "გაგზავნა"

Content — Contact info (right):
- Facebook: icon + "მოგვწერეთ Facebook-ზე" (Write us on Facebook) — primary CTA, styled as a large button. Links to https://www.facebook.com/janela01
- Phone: icon + "(ტელეფონის ნომერი მალე)" — placeholder
- Email: icon + "(ელფოსტა მალე)" — placeholder

Interactions:
- Form has basic HTML validation (required fields)
- Submit button shows loading state
- Facebook button is the most visually prominent element in this section — large, colored, impossible to miss

---

SECTION 8: FOOTER

Layout:
- Full-width, darker background
- Simple, compact

Content:
- Left: "SiteCraft" brand + "© 2026"
- Right: repeat nav links: "ფასები", "პორტფოლიო", "კონტაქტი"
- Below or inline: Facebook icon link

---

GLOBAL DESIGN REQUIREMENTS:
- Mobile-first: 375px baseline, responsive up to 1280px
- Font: "Noto Sans Georgian" from Google Fonts for all text
- Use shadcn/ui components: Card, Button, Badge, Input, Textarea, Sheet (mobile nav), Separator
- Use lucide-react for all icons
- Use Tailwind CSS for all styling
- Smooth scroll behavior for all anchor navigation
- Sticky/fixed header with transparent-to-solid background on scroll
- No dark mode — light theme only
- All text is Georgian — render exactly as provided, do not translate
- Accessibility: minimum 4.5:1 contrast ratio, focusable interactive elements, touch targets minimum 44px on mobile
- Performance: no heavy images, no complex animations, fast first paint
```

## Iteration Prompts

If the hero feels empty or too minimal:
→ "Add a subtle abstract geometric pattern or soft gradient mesh to the hero background — keep it minimal, not distracting"

If pricing cards look cramped on mobile:
→ "On mobile, make pricing cards full-width with more vertical padding between feature list items. Ensure the highlighted card stands out clearly with a colored top border"

If Georgian text wraps awkwardly:
→ "Georgian text is longer than English — increase card min-height and reduce font size on mobile for the benefit cards and pricing feature lists to prevent overflow"

If the portfolio section feels flat without real screenshots:
→ "Replace the screenshot placeholders with stylized browser chrome frames that show a gradient or colored block with the project name in large text centered — make them visually interesting even without real screenshots"

If the contact section Facebook button isn't prominent enough:
→ "Make the Facebook contact button much larger — full width on mobile, with Facebook brand blue background, white text, and the Facebook icon. This should be the most visible element in the contact section"

If the page feels too long on mobile:
→ "Reduce vertical padding between sections on mobile. Collapse the 'How It Works' section into a compact numbered list instead of cards. Keep pricing and contact as the most spacious sections"

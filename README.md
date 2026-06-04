# Brandel — Israeli Food Law Website

Professional website for **Michal Brandel**, Regulatory Legal Counsel.

---

## Quick Start (for the developer)

### Prerequisites
- [Node.js 20+](https://nodejs.org/) installed

### First time setup
```bash
npm install
npm run dev        # → opens at http://localhost:4321
```

### Build for production
```bash
npm run build      # output goes to /dist
npm run preview    # preview the production build locally
```

---

## For Michal — How to Edit the Website

Once the site is live, go to:
**`https://yourdomain.com/admin`**

Log in with your email and password. You can then:

| What you want to change | Where to find it |
|---|---|
| Main heading, subtitle, button text | **Site Content → Hero Section** |
| Your bio text | **Site Content → About Section** |
| Hero background photo | **Site Content → Hero Section → Background Photo** |
| Your portrait photo | **Site Content → About Section → Portrait Photo** |
| Service titles | **Services** — add, edit, or delete services |
| Client reviews | **Reviews & Testimonials** — add, edit, or delete |
| Contact email & location | **Site Content → Contact Section** |
| Footer copyright | **Site Content → Footer** |

After saving, the website rebuilds automatically (takes ~1 minute on Netlify).

---

## Before Going Live — Checklist

### Replace placeholder images
Two placeholder images need to be replaced with real photos:

| File | Description |
|---|---|
| `public/images/hero-bg.svg` | The background image behind the hero heading — replace with a food/market photo (1600×900px recommended) |
| `public/images/michal-portrait.svg` | Michal's professional portrait (375×440px recommended) |

**Easiest way:** Log in at `/admin`, go to Site Content, and upload photos directly there.

### Wire up the contact form
1. Go to [formspree.io](https://formspree.io) and create a free account
2. Create a new form — set the destination email to `contact@brandel.co.il`
3. Copy your **form ID** (looks like `xpzgkwqr`)
4. Open [`src/components/Contact.astro`](src/components/Contact.astro) and replace `YOUR_FORMSPREE_ID` with your form ID

### Set up Google Analytics
1. Go to [analytics.google.com](https://analytics.google.com) and create a GA4 property
2. Copy your **Measurement ID** (looks like `G-XXXXXXXXXX`)
3. Open [`src/layouts/Layout.astro`](src/layouts/Layout.astro) and replace `G-XXXXXXXXXX` with your ID

### Update the domain
In [`astro.config.mjs`](astro.config.mjs), replace `https://www.brandel.co.il` with the actual live domain.
Also update `robots.txt` sitemap URL.

---

## Deployment on Netlify (recommended)

1. Push to GitHub
2. Connect the repo in [Netlify](https://netlify.com)
3. Build command: `npm run build` | Publish directory: `dist`
4. **Enable Netlify Identity** (Site settings → Identity → Enable)
5. Set registration to **Invite only**, then invite Michal's email
6. Enable **Git Gateway** (Identity → Services → Git Gateway)
7. Done — Michal can log in at `/admin` to edit content

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Astro](https://astro.build) (static output) |
| Styling | [Tailwind CSS](https://tailwindcss.com) |
| CMS | [Decap CMS](https://decapcms.org) (edits at `/admin`) |
| Contact form | [Formspree](https://formspree.io) |
| Analytics | Google Analytics 4 |
| Deployment | [Netlify](https://netlify.com) |

---

## Project Structure

```
src/
  components/     # Header, Hero, Services, About, Testimonials, Contact, Footer
  content/
    services/     # One .md file per service — edit via /admin
    testimonials/ # One .md file per review — edit via /admin
  data/
    site.json     # All main text content — edit via /admin
  layouts/
    Layout.astro  # HTML shell (GA, SEO, fonts, structured data)
  pages/
    index.astro   # Assembles all sections
public/
  admin/          # Decap CMS editor
  images/         # Photos uploaded via CMS or placed here manually
```

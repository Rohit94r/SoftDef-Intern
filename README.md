# FloraVision — Product Listing Page

Frontend internship assignment for **SoftDef**. A responsive plant store landing page built from the provided Figma design.

**Figma:** [Front-end-test](https://www.figma.com/design/U0mtBXWgFim69YDj4pjY8f/Front-end-test)

## Tech Stack

- React.js
- Next.js 15
- Tailwind CSS 4
- JavaScript

## Setup

```bash
git clone <your-repo-url>
cd flora-vision
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Build

```bash
npm run build
npm start
```

## Project Structure

```
flora-vision/
├── public/
│   └── images/          # All static images
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.js
│   │   └── page.js
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── HeroBanner.jsx
│   │   ├── TrendingSection.jsx
│   │   ├── PlantCard.jsx
│   │   ├── SectionTitle.jsx
│   │   ├── TestimonialCard.jsx
│   │   ├── O2Section.jsx
│   │   ├── Footer.jsx
│   │   └── Button.jsx
│   ├── constants/
│   │   └── images.js
│   └── data/
│       ├── plants.js
│       └── reviews.js
├── package.json
└── README.md
```

## Page Sections

| Section | Component |
|---------|-----------|
| Navbar | `Navbar` |
| Hero + Trendy Plants | `HeroBanner` |
| Desk Decoration | `TrendingSection` |
| Top Selling Plants | `PlantCard` + `SectionTitle` |
| Customer Reviews | `TestimonialCard` |
| O₂ Plants | `O2Section` |
| Footer | `Footer` |

## Deploy (Vercel)

1. Push code to GitHub
2. Import repo on [vercel.com](https://vercel.com)
3. Deploy — no extra config needed

## Responsive

- Mobile: 320px+
- Tablet: 768px+
- Desktop: up to 1440px

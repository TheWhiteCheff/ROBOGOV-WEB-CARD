# RoboGov BizCard Landing (React + Vite)

A one-page "business card" landing that looks like a product:
- RTL/LTR + HE/EN toggle
- Light/Dark theme
- 4-layer parallax with a subtle 3D feel
- Glass cards with blur, better contrast, refined animations
- Timeline as cards

## Run
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
npm run preview
```

## Deploy (simple)
- Vercel: import the repo, framework = Vite
- Netlify: build command `npm run build`, publish dir `dist`
- GitHub Pages: build and publish `dist`

## Edit content
Change: `src/content/content.ts`
Replace placeholder phone/email before publishing.

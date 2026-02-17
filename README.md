# Sheryar Javed | Unity Game Developer Portfolio

A cyberpunk-inspired portfolio website for an indie Unity gameplay programmer. Built with Next.js 14, TypeScript, TailwindCSS, and Framer Motion.

## Features

- **Cyberpunk Aesthetic** - Black + purple neon design inspired by Cyberpunk 2077 & Arc Raiders
- **Responsive** - Fully mobile-optimized with smooth animations
- **Performance** - Production-ready with App Router
- **Effects** - Animated particles, mouse glow, glassmorphism panels

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- TailwindCSS
- Framer Motion

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deployment (Vercel)

### Important: Ensure `app` directory is in your repo

The build fails if the `app` directory is missing. Verify your project structure before pushing:

```
Portfolio/
├── app/           ← Must exist at repo root
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
├── package.json
└── ...
```

### Deploy steps

1. **Commit and push everything** to your GitHub repo:
   ```bash
   git add .
   git commit -m "Add portfolio"
   git push origin main
   ```

2. **Connect to Vercel**: Import `github.com/003ZEUS/Portfolio` at [vercel.com/new](https://vercel.com/new)

3. **Project settings**: Leave "Root Directory" blank (use repo root). Vercel auto-detects Next.js.

4. **Deploy**: Click Deploy. Build should succeed.

## Customization

- **Contact Email**: Update the `mailto:` link in `components/Contact.tsx` with your email
- **Projects**: Add real project images and links in `components/Projects.tsx`
- **Colors**: Adjust Tailwind theme in `tailwind.config.ts`

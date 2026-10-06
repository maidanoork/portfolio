# Portfolio

A modern, responsive developer portfolio built with **Next.js 14**, **Tailwind CSS**, and **Framer Motion**.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Personalizing

All your content lives in **`src/data/portfolio.ts`** — update:
- `personalInfo` — name, title, bio, social links, email
- `skills` — skill categories and proficiency levels
- `projects` — your projects with descriptions, tags, and links
- `experience` — work history

### Assets
Place these files in the `public/` folder:
- `public/avatar.jpg` — your profile photo
- `public/resume.pdf` — your resume
- `public/projects/` — project screenshots (optional)

## Deployment

```bash
npm run build
```

Deploy to [Vercel](https://vercel.com) with one click — just push to GitHub and import the repo.

## Stack

- [Next.js 14](https://nextjs.org) (App Router)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/)
- [React Icons](https://react-icons.github.io/react-icons/)
- TypeScript

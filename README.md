# Sushmita Dhandar | Portfolio

A responsive developer portfolio built with React.js and Vite. It presents my skills, projects, internship experience, education and certifications, and includes a configurable contact form.

**Live site:** _add your Vercel link here after deploying_
**GitHub:** https://github.com/Dhandar
**LinkedIn:** https://linkedin.com/in/sush2000

## Features

- Sticky navigation with smooth scrolling and a hamburger menu on small screens
- Hero section with a code-editor style card and a resume download button
- About, Skills, Projects, Experience timeline, Education and Certifications sections
- Content stored in data files, so updates don't need component changes
- Contact form with validation, honeypot field, loading state, and error handling
- Accessible markup: skip link, keyboard focus styles, ARIA labels, `prefers-reduced-motion` support
- SEO basics: page title, meta description, Open Graph tags, theme color, favicon

## Tech Stack

| Area | Technology |
| --- | --- |
| UI | React 18 (functional components, Hooks) |
| Build tool | Vite 5 |
| Language | JavaScript (ES6+), JSX |
| Styling | HTML5, plain CSS3 with CSS variables |
| Icons | Lucide React |
| Fonts | Bricolage Grotesque, Figtree, JetBrains Mono (Google Fonts) |
| Hosting | Vercel |

## Project Structure

```
my-portfolio/
├── public/
│   ├── resume.pdf          # resume served at /resume.pdf
│   ├── favicon.svg
│   └── images/             # project screenshots
├── src/
│   ├── components/         # Navbar, Hero, About, Skills, Projects, ProjectCard,
│   │                       # Experience, Education, Certifications, Contact, Footer
│   ├── data/
│   │   ├── portfolio.js    # personal info, about, experience, education, certifications
│   │   ├── projects.js     # project cards
│   │   └── skills.js       # skill categories
│   ├── styles/             # global, navbar, hero, sections, responsive
│   ├── App.jsx
│   └── main.jsx
├── .env.example
├── index.html
├── package.json
└── README.md
```

## Getting Started

Requires Node.js 18 or newer.

```bash
npm install
npm run dev
```

Open the URL printed in the terminal (usually http://localhost:5173).

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build in `dist/` |
| `npm run preview` | Preview the production build locally |

To test on your phone, run `npm run dev -- --host` and open the Network URL on the same Wi-Fi.

## Updating Content

| What | Where |
| --- | --- |
| Name, email, links, hero text, about, experience, education, certifications | `src/data/portfolio.js` |
| Skills | `src/data/skills.js` |
| Projects | `src/data/projects.js` |
| Resume | Replace `public/resume.pdf` (keep the same file name) |
| Colors and fonts | CSS variables at the top of `src/styles/global.css` |

### Adding a project

Add an object to the array in `src/data/projects.js`:

```js
{
  name: 'Project Name',
  category: 'React.js Web Application',
  description: 'Short description.',
  tech: ['React.js', 'Node.js'],
  features: ['Feature one.', 'Feature two.'],
  github: 'https://github.com/Dhandar/repo',  // optional, button hidden if empty
  live: '',                                   // optional, button hidden if empty
  image: '/images/project.png',               // optional, placeholder shown if empty
}
```

### Adding certification details

In `src/data/portfolio.js`, add `issuer`, `date` or `url` to a certification. They appear only when present.

## Contact Form Setup

The form shows a success message only after a backend returns a 2xx response. Until a backend is configured, the submit button is disabled and a mailto fallback is shown.

1. Copy `.env.example` to `.env`.
2. Set your endpoint:
   ```
   VITE_CONTACT_API_URL=https://your-api.example.com/api/contact
   ```
3. Restart the dev server.

The endpoint must:

- accept `POST` with JSON `{ name, email, subject, message, website }` (`website` is a honeypot and should be empty)
- allow CORS from your site's domain
- return a 2xx status on success, or a non-2xx status with JSON `{ "message": "..." }` on failure

Do not put secrets such as SMTP passwords or database URLs in frontend code or `VITE_` variables. Keep them on the backend.

## Deployment

### Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/Dhandar/<repo-name>.git
git push -u origin main
```

### Deploy on Vercel

1. Sign in at vercel.com with GitHub.
2. Choose **Add New → Project** and import the repository.
3. Confirm the settings: framework **Vite**, build command `npm run build`, output directory `dist`.
4. Add `VITE_CONTACT_API_URL` under **Settings → Environment Variables** if you have a backend.
5. Click **Deploy**. Every push to `main` redeploys automatically.

After deploying, update `portfolioUrl` in `src/data/portfolio.js` and the `og:url` tag in `index.html` to your live URL.

## Testing Checklist

- [ ] `npm run build` completes without errors
- [ ] Layout is correct at 375px, 768px, 1024px and 1440px with no horizontal scrolling
- [ ] Hamburger menu opens, closes after selecting a section, and closes with Esc
- [ ] All navigation links scroll to the right section
- [ ] Resume downloads from the navbar, hero and call-to-action
- [ ] GitHub, LinkedIn and email links work
- [ ] Project GitHub and Live Demo links open the correct pages
- [ ] Form shows errors for empty or invalid input
- [ ] Form shows success only when the backend accepts the message, and an error when it fails or is offline
- [ ] Keyboard navigation shows visible focus on all controls

## License

Personal portfolio. All content belongs to Sushmita Dhandar.
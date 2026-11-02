# Sushmita Dhandar — Portfolio

React + Vite portfolio. Plain CSS, Lucide icons, no other UI dependencies.

## Run
```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build into dist/
npm run preview
```

## Update content
- Personal info, about, experience, education, certifications: `src/data/portfolio.js`
- Skills: `src/data/skills.js`
- Projects (add objects; `github`/`live`/`image` optional, buttons hide when empty): `src/data/projects.js`
- Project screenshots: put files in `public/images/` and set `image: '/images/name.png'`
- Resume: replace `public/resume.pdf` (served at `/resume.pdf`)

## Contact form
The form only reports success when a backend returns a 2xx response.
1. Copy `.env.example` to `.env`
2. Set `VITE_CONTACT_API_URL` to your endpoint (e.g. `https://your-api.onrender.com/api/contact`)
3. The endpoint must accept `POST` JSON `{ name, email, subject, message, website }` (`website` is a honeypot, should be empty),
   allow CORS from your Vercel domain, and return an error JSON `{ message }` on failure.
4. On Vercel, add the same variable under Project Settings → Environment Variables, then redeploy.

Without it, the submit button is disabled and a mailto fallback is shown. I haven't been able to inspect your existing
backend's route or payload, so check it matches the contract above before pointing the form at it.

## Deploy (Vercel)
1. `git init && git add . && git commit -m "Portfolio" && git branch -M main`
2. Create an empty GitHub repo, then `git remote add origin <url> && git push -u origin main`
3. On vercel.com: Add New → Project → import the repo. Framework preset: Vite (build `npm run build`, output `dist`).
4. Add `VITE_CONTACT_API_URL` if you have a backend, then Deploy.

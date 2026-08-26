# LIPIGENOMICS

This repository is a private scaffold for the LIPIGENOMICS website — a dark, mobile-first site with an animated DNA hero and an upload/dashboard scaffold.

What is included
- Next.js app (pages-based)
- Tailwind CSS config and global styles
- Animated DNA hero component (components/DNAAnimation.js)
- Dashboard scaffold (pages/dashboard.js) with instructions to wire Supabase
- Supabase client helper at lib/supabase.js (no keys committed)

Quick setup (local)
1. Clone this private repo to your machine.
2. Install dependencies: `npm install`
3. Create a local env file `.env.local` and add:

```
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=public-anon-key
```

4. Run locally: `npm run dev` and open http://localhost:3000

Supabase and uploads
- The project includes a simple supabase client helper but does not include any keys.
- To enable uploads & auth, create a Supabase project, then set the two env variables above in your hosting provider (Vercel/Netlify) or locally.

Deployment
- Recommended: Vercel. Connect your GitHub account, import the repository, and add the two env variables in Vercel project settings.

Next steps I can do for you (reply if you want any of these):
- Wire full authentication (email sign-in) and upload UI (file listing, private/public toggles).
- Add admin user roles and an approvals workflow for public downloads.
- Create a one-click Vercel deploy configuration and deploy a demo site for review.


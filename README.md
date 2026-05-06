# 🏆 Kidlon Talented Award — by Twimbol

A modern, professional landing page for the **Kidlon Talented Award**, an award program organized by **Twimbol** that celebrates extraordinary talent in children and young people aged 5–25.

## ✨ Features

- **Dark, modern design** — Black, blue & gold color scheme
- **Fully responsive** — Mobile-first, works on all devices
- **Animated hero** — Star field, floating trophy, count-up stats
- **12 Award categories** — Music, Science, Sports, Tech, and more
- **Nomination form** — Full form with validation, saved to Neon (PostgreSQL)
- **Winners showcase** — Hall of fame with past winners
- **Testimonials** — From winners, parents, and educators
- **Newsletter signup** — Email subscription
- **SEO optimized** — Full metadata, Open Graph, Twitter cards

## 🛠 Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Icons | Lucide React |
| Database | Neon (PostgreSQL) via `@neondatabase/serverless` |
| Deployment | Vercel |

## 🚀 Deploy to Vercel

### Step 1 — Set up Neon Database

1. Go to [neon.tech](https://neon.tech) and create a free account
2. Create a new project (e.g., `kidlon-award`)
3. Copy the **Connection String** from the dashboard
   - It looks like: `postgresql://user:pass@ep-xxx.us-east-1.aws.neon.tech/neondb?sslmode=require`

### Step 2 — Deploy to Vercel

1. Push this project to GitHub
2. Go to [vercel.com](https://vercel.com) and import the repository
3. In **Environment Variables**, add:
   ```
   DATABASE_URL = postgresql://your-neon-connection-string
   ```
4. Click **Deploy** — done!

The database table is created automatically on the first nomination submission.

### Step 3 — Local Development

```bash
# Clone and install
npm install

# Create .env.local and add your DATABASE_URL
cp .env.local.example .env.local

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
src/
├── app/
│   ├── api/
│   │   └── nominate/route.ts   # Nomination API endpoint
│   ├── globals.css             # Global styles + animations
│   ├── layout.tsx              # Root layout + metadata
│   └── page.tsx                # Main page
└── components/
    ├── Navbar.tsx              # Sticky navigation
    ├── Hero.tsx                # Hero section with star field
    ├── About.tsx               # About the award + Twimbol
    ├── Stats.tsx               # Animated statistics
    ├── Categories.tsx          # 12 award categories
    ├── HowItWorks.tsx          # Process + timeline
    ├── Winners.tsx             # Past winners hall of fame
    ├── Testimonials.tsx        # Quotes from community
    ├── NominationForm.tsx      # Full nomination form
    ├── Contact.tsx             # Contact info + FAQ
    └── Footer.tsx              # Footer with links
```

## 🗄 Database Schema

```sql
CREATE TABLE nominations (
  id              SERIAL PRIMARY KEY,
  nominator_name  VARCHAR(255) NOT NULL,
  nominator_email VARCHAR(255) NOT NULL,
  nominee_name    VARCHAR(255) NOT NULL,
  nominee_age     INTEGER NOT NULL,
  nominee_country VARCHAR(100) NOT NULL,
  category        VARCHAR(100) NOT NULL,
  achievement     TEXT NOT NULL,
  message         TEXT,
  status          VARCHAR(50) DEFAULT 'pending',
  created_at      TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

## 📝 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/nominate` | Submit a nomination |
| `GET`  | `/api/nominate` | API health check |

---

Built with ❤️ for **Twimbol** · Kidlon Talented Award

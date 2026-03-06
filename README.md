# Next.js 15 + Prisma + PostgreSQL

This project is built with **Next.js 15**, **React 19**, **Prisma ORM**, and **PostgreSQL**.

## Tech Stack

- Next.js 15 (App Router)
- React 19
- Prisma ORM
- PostgreSQL
- TailwindCSS
- HeroUI
- Framer Motion

---

# Getting Started

Follow these steps to run the project locally.

## 1. Clone the repository

```bash
git clone <repository-url>
cd <project-folder>
```

---

## 2. Install dependencies

```bash
npm install
```

---

## 3. Setup environment variables

Create a `.env` file in the root of the project.

Example:

```env
DATABASE_URL="postgresql://postgres:YOUR_PASSWORD@localhost:5432/next15?schema=public"
```

Make sure PostgreSQL is installed and running locally.

---

## 4. Setup the database

Push the Prisma schema to your PostgreSQL database:

```bash
npx prisma db push
```

Optional: open Prisma Studio to inspect the database.

```bash
npx prisma studio
```

---

## 5. Run the development server

```bash
npm run dev
```

The application will be available at:

```
http://localhost:3000
```

---

# Available Scripts

```bash
npm run dev      # Start development server with Turbopack
npm run build    # Build production version
npm run start    # Start production server
npm run lint     # Run ESLint
```

---

# Database

This project uses **Prisma ORM** with **PostgreSQL**.

To regenerate Prisma client:

```bash
npx prisma generate
```

To apply schema changes:

```bash
npx prisma db push
```

---

# Deployment

Recommended platform: **Vercel**.

Make sure to configure the `DATABASE_URL` environment variable in the deployment environment.

---

# License

MIT

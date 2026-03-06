# Next.js 15 + Prisma + PostgreSQL + Auth.js

This project is built with **Next.js 15**, **React 19**, **Prisma ORM**, **PostgreSQL**, and **Auth.js** for authentication.

## Tech Stack

- Next.js 15 (App Router)
- React 19
- Prisma ORM
- PostgreSQL
- Auth.js / NextAuth v5
- Zod (validation)
- bcryptjs (password hashing)
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

# Auth.js secret
AUTH_SECRET=""

AUTH_URL="http://localhost:3000"
```

Make sure PostgreSQL is installed and running locally.

---

## 4. Generate Auth Secret

This project uses **Auth.js (NextAuth v5)** for authentication.

Generate a secret for your local environment:

```bash
npx auth secret
```

Add the generated value to your `.env` file:

```env
AUTH_SECRET="your_generated_secret"
```

⚠️ Do not commit secrets to the repository.

````

---

## 5. Setup the database

Push the Prisma schema to your PostgreSQL database:

```bash
npx prisma db push
````

Optional: open Prisma Studio to inspect the database.

```bash
npx prisma studio
```

---

## 6. Run the development server

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

Optional database GUI:

```bash
npx prisma studio
```

````

---

# Environment Example

Create a `.env` file based on the following template:

```env
DATABASE_URL="postgresql://postgres:PASSWORD@localhost:5432/next15?schema=public"
AUTH_SECRET=""
AUTH_URL="http://localhost:3000"
````

---

# Validation & Security

Form validation is handled with **Zod**.

Passwords are hashed using **bcryptjs** before being stored in the database.

---

# Deployment

Recommended platform: **Vercel**.

Make sure to configure the following environment variables in the deployment environment:

- `DATABASE_URL`
- `AUTH_SECRET`
- `AUTH_URL`

---

# License

MIT

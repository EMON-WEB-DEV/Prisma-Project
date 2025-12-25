Prisma Setup & Usage

Prisma is a modern ORM that turns your database into a type-safe API. It sits cleanly between your app and the database—fast, predictable, and hard to misuse.

This project uses Prisma + Node.js.

Tech Stack

Node.js

Prisma ORM

PostgreSQL / MySQL / SQLite (any Prisma-supported DB)

dotenv for environment variables

Installation

Clone the repo and install dependencies:

npm install


Install Prisma if it’s not already present:

npm install prisma --save-dev
npm install @prisma/client

Initialize Prisma
npx prisma init


This creates:

prisma/schema.prisma

.env

Environment Variables

Update your .env file:

DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE"


Prisma reads directly from this—no magic, no guessing.

Prisma Schema Example
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model User {
  id        Int      @id @default(autoincrement())
  name      String
  email     String   @unique
  password  String
  createdAt DateTime @default(now())
}


Schemas define reality. Migrations make it permanent.

Run Migrations
npx prisma migrate dev --name init


This:

Creates tables

Tracks schema history

Syncs Prisma Client

Generate Prisma Client
npx prisma generate


Runs automatically after migrations, but manual never hurts.

Using Prisma in Code
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const users = await prisma.user.findMany();


Typed queries. Autocomplete everywhere. Fewer bugs, less stress.

Prisma Studio

Visual database UI, zero drama:

npx prisma studio


Runs at http://localhost:5555

Common Commands
npx prisma migrate dev
npx prisma generate
npx prisma studio
npx prisma db push


Learn these once. Use them forever.

Project Structure
prisma/
 └── schema.prisma
src/
 └── index.js
.env
package.json


Simple structure scales better than clever ones.

Notes

Always commit schema.prisma

Never commit .env

Migrations are part of your history—treat them like code

License

MIT

If you want, I can tailor this to Express, Next.js, or your exact schema—same bones, sharper edges.

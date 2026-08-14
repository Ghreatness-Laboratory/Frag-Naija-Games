# Frag Naija

Frag Naija is a Next.js App Router + Supabase MVP for virtual-coin betting on automated TDM 1v1 fighter matchups. WoW 4v4 and team modes are intentionally shown as disabled extension points only.

## Stack

- Next.js, TypeScript, Tailwind CSS, Vercel-ready route handlers
- Supabase Postgres, Auth, Storage, RLS
- Atomic bet placement and fight resolution through `place_and_resolve_bet(...)`

## Local setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Create a Supabase project.
3. Copy `.env.example` to `.env.local` and fill in:
   ```bash
   NEXT_PUBLIC_SUPABASE_URL=...
   NEXT_PUBLIC_SUPABASE_ANON_KEY=...
   SUPABASE_SERVICE_ROLE_KEY=...
   ```
   Never expose the service role key with a `NEXT_PUBLIC_` prefix.
4. Run the SQL in `supabase/migrations/20260814000000_frag_naija_mvp.sql` from the Supabase SQL editor or Supabase CLI.
5. Create a public Supabase Storage bucket named `player-images` for uploaded fighter images.
6. Run `supabase/seed.sql` to add sample TDM fighters.
7. Sign up in the app. To make an admin, update the user's profile:
   ```sql
   update profiles set role = 'ADMIN' where id = '<auth-user-id>';
   ```
8. Start the app:
   ```bash
   npm run dev
   ```

## Vercel deployment

Connect the GitHub repository to Vercel, set the same three environment variables in Project Settings, and deploy. No code changes are required between local and production.

## MVP routes

- `/login`, `/signup` — Supabase email/password authentication
- `/modes` — TDM enabled, future WoW modes disabled
- `/tdm` — select two active TDM players, choose stake/backed player, place instant bet
- `/history` — current user's persisted bets and results
- `/profile` — display name, role, coin balance
- `/admin/players` — admin player creation and soft-delete
- `/admin/dashboard` — basic betting totals and popular player

## API routes

- `GET /api/players`
- `GET /api/me`
- `POST /api/bets`
- `GET /api/bets/me`
- `GET|POST /api/admin/players`
- `PUT|DELETE /api/admin/players/:id`
- `GET /api/admin/stats`

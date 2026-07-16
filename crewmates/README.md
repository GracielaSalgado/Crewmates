# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

## Supabase setup

This app reads/writes a `crewmates` table via [supabase-js](https://supabase.com/docs/reference/javascript). To run it locally:

1. Copy `.env.example` to `.env.local` and fill in your Supabase project's URL and anon/publishable key (Project Settings → Data API).
2. In the Supabase SQL Editor, create the table:

   ```sql
   create table crewmates (
     id bigint generated always as identity primary key,
     created_at timestamptz not null default now(),
     name text not null,
     color text not null default 'red',
     hat text not null default 'none',
     pet text not null default 'none',
     catchphrase text
   );

   alter table crewmates enable row level security;

   create policy "Allow all access to crewmates"
     on crewmates for all
     using (true)
     with check (true);
   ```

3. `npm install && npm run dev`

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.

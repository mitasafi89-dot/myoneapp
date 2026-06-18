# My OneApp

Companion app for **printpesa.com**. Shows the player's live M-PESA-style wallet
balance and withdrawal status, synced in real time from the shared Supabase
project (`yhfxgzfmcwinpgmzcgma`) via Supabase Realtime.

## Stack
Vite + React + TypeScript + Tailwind + `@supabase/supabase-js` (matches printpesa).

## Setup
```bash
npm install
cp .env.example .env   # values already point at the shared project
npm run dev
```

## Architecture
- Reads `wallets` (own balance) and `withdrawal_requests` (own requests) under RLS.
- Subscribes via Realtime so website withdrawals reflect instantly.
- Withdrawals are requested through the `request_withdrawal(amount, phone)` RPC
  (same sanctioned path the website uses).

## Features
- [x] Feature 1 — Home screen (pixel-matched M-PESA dashboard) + live M-PESA balance
- [x] Wallet hooks — realtime balance & withdrawal status from printpesa

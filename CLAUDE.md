# Open Banking Chile

## What is this?
Open source scrapers for Chilean banks. Multi-bank architecture where each bank implements a common `BankScraper` interface. Currently supports Banco Falabella, more banks welcome via PRs.

## Project structure
```
src/
  index.ts            — Registry of all banks, getBank(), listBanks()
  types.ts            — BankScraper interface, BankMovement, ScrapeResult, ScraperOptions
  utils.ts            — Shared utilities (formatRut, findChrome, closePopups, delay)
  cli.ts              — CLI entry point (--bank, --list, --pretty, --movements)
  banks/
    falabella.ts      — Banco Falabella scraper (login, navigation, extraction)
```

## How to help the user

### Setup
1. Node.js >= 18 + Google Chrome or Chromium
2. `npm install && npm run build`
3. Copy `.env.example` → `.env`, fill in credentials

### Running
```bash
source .env && node dist/cli.js --bank falabella --pretty
```

### Adding a new bank
1. Create `src/banks/<bank-id>.ts` implementing `BankScraper`
2. Register in `src/index.ts`
3. Add env vars to `.env.example`
4. See CONTRIBUTING.md for full guide

### Common issues
- Chrome not found → install or set `CHROME_PATH`
- 2FA → can't automate, bank security feature
- 0 movements → use `--screenshots` to debug

import falabella from "./banks/falabella";
import type { BankScraper } from "./types";

/** Registro de todos los bancos disponibles */
export const banks: Record<string, BankScraper> = {
  falabella,
};

/** Lista de bancos soportados */
export function listBanks(): Array<{ id: string; name: string; url: string }> {
  return Object.values(banks).map((b) => ({
    id: b.id,
    name: b.name,
    url: b.url,
  }));
}

/** Obtener un scraper por ID */
export function getBank(id: string): BankScraper | undefined {
  return banks[id];
}

// Re-export types
export type {
  BankMovement,
  BankScraper,
  BankCredentials,
  ScrapeResult,
  ScraperOptions,
} from "./types";

// Re-export individual banks for direct import
export { default as falabella } from "./banks/falabella";

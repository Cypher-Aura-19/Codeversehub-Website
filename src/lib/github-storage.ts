import { logger } from "./appeal-logger";
import fs from "fs";
import path from "path";

interface CacheEntry {
  data: unknown;
  cachedAt: number;
}

interface GitHubCache {
  [key: string]: CacheEntry | undefined;
}

const DATA_DIR = path.join(process.cwd(), "data");
const CACHE_FILE = path.join(DATA_DIR, "github-cache.json");

function ensureDataDir() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
}

function readCache(): GitHubCache {
  try {
    ensureDataDir();
    if (!fs.existsSync(CACHE_FILE)) {
      return {};
    }
    const raw = fs.readFileSync(CACHE_FILE, "utf-8");
    return JSON.parse(raw) as GitHubCache;
  } catch (err) {
    logger.error("Failed to read GitHub cache", { error: String(err) });
    return {};
  }
}

function writeCache(cache: GitHubCache) {
  try {
    ensureDataDir();
    const tmp = CACHE_FILE + ".tmp";
    fs.writeFileSync(tmp, JSON.stringify(cache, null, 2), "utf-8");
    fs.renameSync(tmp, CACHE_FILE);
  } catch (err) {
    logger.error("Failed to write GitHub cache", { error: String(err) });
  }
}

export function getCached<T>(key: string): T | null {
  const cache = readCache();
  const entry = cache[key];
  if (!entry) return null;
  return entry.data as T;
}

export function setCache(key: string, data: unknown) {
  const cache = readCache();
  cache[key] = { data, cachedAt: Date.now() };
  writeCache(cache);
}



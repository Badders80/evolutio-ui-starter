import type { User } from "./types";
import { getUsersMock } from "./mocks";
import { getUsersReal } from "./real";

const isBrowser = typeof window !== "undefined";

function readFlag(name: string, def: string) {
  if (isBrowser) {
    const v = new URLSearchParams(window.location.search).get(name);
    if (v != null) return v;
  }
  return (process.env[`NEXT_PUBLIC_${name.toUpperCase()}`] as string) ?? def;
}

export async function getUsers(): Promise<User[]> {
  const mode = (readFlag("apiMode", "mock") as "mock" | "real") ?? "mock";
  return mode === "real" ? getUsersReal() : getUsersMock();
}

import type { User } from "./types";

/** Why: swap to server route without changing UI */
export async function getUsersReal(): Promise<User[]> {
  const res = await fetch("/api/users", { cache: "no-store" });
  if (!res.ok) throw new Error(`Failed to load users (${res.status})`);
  return (await res.json()) as User[];
}
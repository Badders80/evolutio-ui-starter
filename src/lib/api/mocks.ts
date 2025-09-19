import type { User } from "./types";

export const mockUsers: User[] = [
  { id: "u_1", name: "Ada Lovelace" },
  { id: "u_2", name: "Grace Hopper" },
  { id: "u_3", name: "Alan Turing" }
];

export async function getUsersMock(): Promise<User[]> {
  await new Promise((r) => setTimeout(r, 120));
  return mockUsers;
}
import { NextResponse } from "next/server";
import type { User } from "@/lib/api/types";

// Why: simple server-backed endpoint so "real" mode hits Next Route Handler
const USERS: User[] = [
  { id: "u_1", name: "Ada Lovelace" },
  { id: "u_2", name: "Grace Hopper" },
  { id: "u_3", name: "Alan Turing" }
];

export async function GET() {
  await new Promise((r) => setTimeout(r, 100)); // simulate latency
  return NextResponse.json(USERS);
}
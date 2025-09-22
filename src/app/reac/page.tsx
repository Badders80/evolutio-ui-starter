// ================================================
// FILE: src/app/reac/page.tsx
// Purpose: Redirect typo /reac to /sandbox.
// ================================================
import { redirect } from "next/navigation";

export default function Page() {
  redirect("/sandbox");
}
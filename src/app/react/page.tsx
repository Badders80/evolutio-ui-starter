// ================================================
// FILE: src/app/react/page.tsx
// Purpose: Redirect /react (if people typed it) to /sandbox.
// ================================================
import { redirect } from "next/navigation";

export default function Page() {
  redirect("/sandbox");
}
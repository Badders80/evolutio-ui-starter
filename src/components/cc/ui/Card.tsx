import { ReactNode } from "react";

export function Card({ title, children, className = "" }: { title?: ReactNode; children: ReactNode; className?: string }) {
  return (
    <section className={`rounded-2xl border p-4 shadow-sm ${className}`}>
      {title ? <h2 className="mb-2 text-lg font-semibold">{title}</h2> : null}
      {children}
    </section>
  );
}
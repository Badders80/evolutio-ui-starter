import { ReactNode } from "react";

export function Card({
  title,
  children,
  className = ""
}: {
  title?: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={`card p-5 ${className}`}>
      {title ? <h3 className="mb-2 text-lg font-semibold">{title}</h3> : null}
      {children}
    </section>
  );
}
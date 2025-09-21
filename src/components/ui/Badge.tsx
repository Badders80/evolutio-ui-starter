export function Badge({ children, tone = "accent" }: { children: React.ReactNode; tone?: "accent" | "graphite" | "ok" | "warn" | "danger" }) {
  const map: Record<string, string> = {
    accent: "bg-accent/15 text-accent border-accent/25",
    graphite: "bg-graphite/15 text-graphite border-graphite/25",
    ok: "bg-ok/15 text-ok border-ok/25",
    warn: "bg-warn/15 text-warn border-warn/25",
    danger: "bg-danger/15 text-danger border-danger/25"
  };
  return <span className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-xs ${map[tone]}`}>{children}</span>;
}
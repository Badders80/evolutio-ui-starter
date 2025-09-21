import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

const SW = [
  ["bg", "bg"],
  ["fg", "fg"],
  ["muted", "muted"],
  ["subtle", "subtle"],
  ["border", "border"],
  ["overlay", "overlay"],
  ["surface-1", "surface.1"],
  ["surface-2", "surface.2"],
  ["surface-3", "surface.3"],
  ["accent", "accent"],
  ["accent-strong", "accent.strong"],
  ["accent-soft", "accent.soft"],
  ["graphite", "graphite"],
  ["ok", "ok"],
  ["warn", "warn"],
  ["danger", "danger"]
];

export default function ThemeDebug() {
  return (
    <div className="container-page grid gap-6 py-10">
      <h1>Theme Palette</h1>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {SW.map(([label, token]) => (
          <div key={label} className="rounded-xl border border-border p-3">
            <div className="mb-2 text-xs text-muted">{label}</div>
            <div className="h-16 w-full rounded-lg" style={{ background: `hsl(var(--${token.replace(".", "-")}))` }} />
          </div>
        ))}
        <div className="rounded-xl border border-border p-3">
          <div className="mb-2 text-xs text-muted">accent-gradient</div>
          <div className="bg-accent-gradient h-16 w-full rounded-lg" />
        </div>
      </div>

      <Card title="UI Samples">
        <div className="flex flex-wrap items-center gap-2">
          <Badge>Accent</Badge>
          <Badge tone="graphite">Graphite</Badge>
          <Badge tone="ok">OK</Badge>
          <Badge tone="warn">Warn</Badge>
          <Badge tone="danger">Danger</Badge>
        </div>
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <Button variant="accent">Accent</Button>
          <Button variant="accent" gradient>Accent Gradient</Button>
          <Button variant="neutral">Neutral</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="subtle">Subtle</Button>
          <Button variant="ghost">Ghost</Button>
        </div>
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <Button variant="accent" size="sm">Small</Button>
          <Button variant="accent" size="md">Medium</Button>
          <Button variant="accent" size="lg">Large</Button>
          <Button variant="accent" gradient size="lg">Large Gradient</Button>
        </div>
      </Card>

      <Card title="Gradient Examples">
        <div className="grid gap-4">
          <div className="bg-accent-gradient rounded-2xl p-6 text-black">
            <h3 className="font-bold">Gradient Box</h3>
            <p>This demonstrates the bg-accent-gradient utility class.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button variant="accent" gradient>Join the Revolution</Button>
            <Button variant="accent" gradient size="sm">Small CTA</Button>
            <Button variant="accent" gradient size="lg">Large CTA</Button>
          </div>
        </div>
      </Card>

      <Card title="Typography">
        <h1>Heading 1 (H1)</h1>
        <h2>Heading 2 (H2)</h2>
        <h3>Heading 3 (H3)</h3>
        <p className="lede">This is a lead paragraph with larger text and muted color.</p>
        <p>This is a regular paragraph with body text.</p>
        <p className="text-muted">This is muted text for secondary information.</p>
        <p className="text-subtle">This is subtle text for tertiary information.</p>
        <div className="kicker">This is a kicker (uppercase small text)</div>
      </Card>

      <Card title="Surfaces">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="rounded-lg bg-surface-1 p-4">
            <h4 className="font-semibold">Surface 1</h4>
            <p className="text-sm text-muted">Primary surface level</p>
          </div>
          <div className="rounded-lg bg-surface-2 p-4">
            <h4 className="font-semibold">Surface 2</h4>
            <p className="text-sm text-muted">Secondary surface level</p>
          </div>
          <div className="rounded-lg bg-surface-3 p-4">
            <h4 className="font-semibold">Surface 3</h4>
            <p className="text-sm text-muted">Tertiary surface level</p>
          </div>
        </div>
      </Card>
    </div>
  );
}
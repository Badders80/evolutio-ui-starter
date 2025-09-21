"use client";
import React from "react";

type Props = {
  title?: string;
  ownerTitle?: string;
  ownerPoints?: string;
  investorTitle?: string;
  investorPoints?: string;
  industryTitle?: string;
  industryPoints?: string;
  layout?: "columns" | "cards";
};

function splitBullets(text: string | undefined) {
  return (text ?? "")
    .replace(/\r\n/g, "\n")
    .split("\n")
    .map((s) => s.trim())
    .filter(Boolean);
}

export function DigitalSyndicationFramer({
  title = "Digital-Syndication",
  ownerTitle = "FOR OWNERS",
  ownerPoints = `Reliable income while keeping full control over your horse’s future.\nLease terms set by you, ensuring stability and long-term value.`,
  investorTitle = "FOR INVESTORS",
  investorPoints = `Experience racehorse ownership with flexibility that fits your lifestyle.\nBuy in, enjoy the thrill, and share in potential returns—without the usual barriers.`,
  industryTitle = "FOR THE INDUSTRY",
  industryPoints = `More engagement. More investment. A stronger, more sustainable future for racing.\nBringing new owners, new energy, and new opportunities into the sport.`,
  layout = "columns"
}: Props) {
  const cols = [
    { title: ownerTitle, bullets: splitBullets(ownerPoints) },
    { title: investorTitle, bullets: splitBullets(investorPoints) },
    { title: industryTitle, bullets: splitBullets(industryPoints) }
  ];

  return (
    <section className="relative w-full bg-bg text-fg">
      <div className="container-page py-16 md:py-24">
        <h2 className="mb-10 text-center text-accent" style={{ fontSize: "clamp(2.25rem,4vw,4rem)" }}>
          {title}
        </h2>

        {layout === "cards" ? (
          <div className="grid gap-6 md:grid-cols-3">
            {cols.map((c) => (
              <section key={c.title} className="rounded-xl border border-border bg-surface-1 p-6 shadow-brand1">
                <div className="mb-3 h-1 w-10 rounded bg-accent" />
                <h3 className="mb-2 font-semibold uppercase tracking-wide text-accent">{c.title}</h3>
                <ul className="list-disc space-y-2 pl-5 text-sm text-muted">
                  {c.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        ) : (
          <div className="grid gap-10 md:grid-cols-3">
            {cols.map((c) => (
              <div key={c.title} className="min-w-[260px] text-left">
                <h3 className="mb-2 font-semibold uppercase tracking-wide text-accent">{c.title}</h3>
                <ul className="list-disc space-y-2 pl-5 text-sm text-muted">
                  {c.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

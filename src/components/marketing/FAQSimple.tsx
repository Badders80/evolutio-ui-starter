import * as React from "react";

type QA = { q: string; a: string };

const items: QA[] = [
  {
    q: "What do investors or racing fans get out of it?",
    a: "The thrill of ownership without the long-term commitment. Transparent costs and flexible stake sharing make it accessible to everyone.",
  },
  {
    q: "What’s in it for owners, syndicators, or breeders?",
    a: "Access to new investors while keeping full control and ownership, with flexible terms that suit your model.",
  },
  {
    q: "How does this benefit clubs, organisations, and governing bodies?",
    a: "New revenue streams for current participants, while guiding the next generation into ownership.",
  },
  {
    q: "Why is the model different?",
    a: "No heavy commitments. Flexible, transparent, and accessible — ownership for all.",
  },
  {
    q: "How is Evolution Stables different?",
    a: "Focus on transparency and liquidity removes barriers for first-time owners and creates new revenue streams for the industry—futureproofing racing.",
  },
];

export default function FAQSimple() {
  return (
    <div>
      <h2 className="text-center font-heading text-3xl font-bold sm:text-4xl">Frequently Asked Questions</h2>
      <div className="mt-8 divide-y divide-white/10 overflow-hidden rounded-2xl bg-surface-2 shadow-2">
        {items.map((item) => (
          <details key={item.q} className="group">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-4 px-6 py-5 text-left text-lg font-medium">
              <span>{item.q}</span>
              <span className="text-muted transition-transform duration-200 group-open:rotate-45">+</span>
            </summary>
            <div className="px-6 pb-5 text-muted">{item.a}</div>
          </details>
        ))}
      </div>
    </div>
  );
}


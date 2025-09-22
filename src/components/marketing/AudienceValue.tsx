import * as React from "react";

export default function AudienceValue() {
  return (
    <div>
      <h2 className="text-center font-heading text-3xl font-bold sm:text-4xl">Who It’s For</h2>
      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
        <article className="rounded-2xl bg-surface-2 p-6 shadow-2">
          <h3 className="font-heading text-xl text-accent">For Investors & Fans</h3>
          <p className="mt-3 text-muted">Experience racehorse ownership without long-term commitments.</p>
          <ul className="mt-3 list-disc pl-5 text-muted">
            <li>Transparent costs and stake sharing—choose what works for you.</li>
            <li>Join the community and enjoy the thrill of racing on your terms.</li>
          </ul>
        </article>

        <article className="rounded-2xl bg-surface-2 p-6 shadow-2">
          <h3 className="font-heading text-xl text-accent">For Breeders & Syndicators</h3>
          <p className="mt-3 text-muted">Unlock a new market of participants and income streams.</p>
          <ul className="mt-3 list-disc pl-5 text-muted">
            <li>Set your own terms — length, price, and stakes.</li>
            <li>Maintain full control and ownership.</li>
          </ul>
        </article>

        <article className="rounded-2xl bg-surface-2 p-6 shadow-2">
          <h3 className="font-heading text-xl text-accent">For Clubs & Governing Bodies</h3>
          <ul className="mt-3 list-disc pl-5 text-muted">
            <li>Generate new revenue streams for current participants.</li>
            <li>Attract the next generation into the industry.</li>
            <li>Futureproof racing through inclusivity and participation.</li>
          </ul>
        </article>
      </div>
    </div>
  );
}


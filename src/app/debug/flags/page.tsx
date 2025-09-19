"use client";

import { useFeatureFlags } from "@/lib/featureFlags";
import { Card } from "@/components/cc/ui/Card";
import { Button } from "@/components/cc/ui/Button";
import { getUsers } from "@/lib/api";
import { useEffect, useState } from "react";

export default function FlagsDebug() {
  const flags = useFeatureFlags();
  const [users, setUsers] = useState<any[]>([]);
  useEffect(() => {
    getUsers().then(setUsers).catch(() => setUsers([]));
  }, []);
  const qs = new URLSearchParams({
    enableHeavy: String(!flags.enableHeavy),
    apiMode: flags.apiMode === "mock" ? "real" : "mock"
  }).toString();

  return (
    <div className="grid gap-6">
      <Card title="Flags">
        <pre className="overflow-auto rounded-lg bg-zinc-950 p-4 text-xs text-zinc-100">
{JSON.stringify(flags, null, 2)}
        </pre>
        <div className="mt-3 flex flex-wrap gap-2">
          <Button href={`?${qs}`} variant="primary">Toggle via URL</Button>
          <Button href="/cc" variant="ghost">Open /cc demo</Button>
        </div>
        <p className="mt-2 text-xs text-zinc-500">
          Use <code>?apiMode=mock|real&enableHeavy=true|false</code> or <code>NEXT_PUBLIC_*</code> envs.
        </p>
      </Card>

      <Card title="Mock Data Preview">
        <pre className="overflow-auto rounded-lg bg-zinc-950 p-4 text-xs text-zinc-100">
{JSON.stringify(users, null, 2)}
        </pre>
      </Card>
    </div>
  );
}
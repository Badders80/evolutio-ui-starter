"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { useFeatureFlags } from "@/lib/featureFlags";
import { Card } from "@/components/cc/ui/Card";
import { Button } from "@/components/cc/ui/Button";
import { getUsers } from "@/lib/api";
import { useEffect, useState } from "react";

const HeavyWidget = dynamic(() => import("@/components/cc/HeavyWidget"), {
  ssr: false,
  loading: () => <div className="animate-pulse text-sm">Loading widget…</div>
});

export default function CcHome() {
  const { enableHeavy } = useFeatureFlags();
  const [users, setUsers] = useState<{ id: string; name: string }[]>([]);

  useEffect(() => {
    getUsers().then(setUsers).catch(() => setUsers([]));
  }, []);

  return (
    <div className="grid gap-6">
      <motion.h1 layout className="text-3xl font-semibold tracking-tight">Evolution UI (cc)</motion.h1>

      <Card title="Quick Actions" className="flex items-center gap-3">
        <Button href="/debug/flags" variant="primary">Open Flags</Button>
        <Button onClick={() => location.reload()} variant="ghost">Reload</Button>
      </Card>

      <Card title="Users (mocked)">
        <ul className="list-inside list-disc text-sm">
          {users.map((u) => (<li key={u.id}>{u.name}</li>))}
        </ul>
      </Card>

      {enableHeavy && (
        <Card title="Heavy Widget (code-split)">
          <HeavyWidget />
        </Card>
      )}
    </div>
  );
}
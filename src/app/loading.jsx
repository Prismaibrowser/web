"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

// Dynamically import the PrismLoader from the components folder to avoid
// any server-side import issues. Keep it client-only.
const PrismLoader = dynamic(() => import("@/components/PrismLoader"), {
  ssr: false,
});

export default function Loading() {
  const [done, setDone] = useState(false);

  // The loader component will auto-hide itself when loading completes.
  // We still render it here to respect Next.js App Router loading convention.
  if (done) return null;

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <PrismLoader onLoadComplete={() => setDone(true)} />
    </div>
  );
}

"use client";

import { Tldraw } from "tldraw";
import "tldraw/tldraw.css";

export default function Home() {
  return (
    <div className="h-screen w-screen">
      <Tldraw />
    </div>
  );
}

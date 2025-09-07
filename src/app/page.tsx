"use client";

import { Tldraw, createTLStore, loadSnapshot, defaultShapeUtils } from "tldraw";
import "tldraw/tldraw.css";
import { useEffect, useState } from "react";

const STORAGE_KEY = "tldraw-diagram-data";

export default function Home() {
  const [store] = useState(() => {
    const newStore = createTLStore({ shapeUtils: defaultShapeUtils });
    
    if (typeof window !== "undefined") {
      const savedData = localStorage.getItem(STORAGE_KEY);
      if (savedData) {
        try {
          const snapshot = JSON.parse(savedData);
          loadSnapshot(newStore, snapshot);
        } catch (error) {
          console.error("Failed to load saved diagram:", error);
        }
      }
    }
    
    return newStore;
  });

  useEffect(() => {
    const handleChange = () => {
      const snapshot = store.getStoreSnapshot();
      localStorage.setItem(STORAGE_KEY, JSON.stringify(snapshot));
    };

    const unsubscribe = store.listen(handleChange, { source: "user", scope: "document" });

    return () => {
      unsubscribe();
    };
  }, [store]);

  return (
    <div className="h-screen w-screen">
      <Tldraw store={store} />
    </div>
  );
}

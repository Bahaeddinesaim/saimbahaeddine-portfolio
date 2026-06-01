"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type Props = {
  basePath?: string;
  count?: number;
  prefix?: string;
};

export default function GalleryCarousel({
  basePath = "",
  count = 18,
  prefix = "Parascolaire"
}: Props) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % count), 4000);
    return () => clearInterval(t);
  }, [count]);

  const prev = () => setIndex((i) => (i - 1 + count) % count);
  const next = () => setIndex((i) => (i + 1) % count);

  const src = `${basePath}/img/${prefix}-${index + 1}.jpg`;

  return (
    <div className="mt-4">
      <div className="relative mx-auto w-full max-w-3xl overflow-hidden rounded-xl border border-slate-200/80 bg-white p-2 shadow-sm dark:border-slate-800/80 dark:bg-slate-950/80">
        <div className="relative h-64 sm:h-80">
          <Image
            src={src}
            alt={`Photo ${index + 1}`}
            fill
            sizes="(max-width: 768px) 100vw, 800px"
            className="object-cover rounded-md"
          />
        </div>

        <button
          aria-label="Précédent"
          onClick={prev}
          className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow-md hover:bg-white"
        >
          ◀
        </button>

        <button
          aria-label="Suivant"
          onClick={next}
          className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow-md hover:bg-white"
        >
          ▶
        </button>

        <div className="mt-3 flex items-center justify-center gap-2 overflow-x-auto py-2">
          {Array.from({ length: count }).map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`relative h-12 w-20 flex-shrink-0 overflow-hidden rounded-md border ${
                i === index
                  ? "border-sky-500 shadow-md"
                  : "border-slate-200/80"
              }`}
              aria-label={`Voir la photo ${i + 1}`}
            >
              <Image
                src={`${basePath}/img/${prefix}-${i + 1}.jpg`}
                alt={`Thumb ${i + 1}`}
                fill
                sizes="80px"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

type Variant = "hero" | "cards";

type Props = {
  basePath?: string;
  count?: number;
  prefix?: string;
  variant?: Variant;
  intervalMs?: number;
};

export default function GalleryCarousel({
  basePath = "",
  count = 18,
  prefix = "Parascolaire",
  variant = "hero",
  intervalMs = 4500
}: Props) {
  const [index, setIndex] = useState(0);
  const [natural, setNatural] = useState<{ w: number; h: number } | null>(
    null
  );
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % count), intervalMs);
    return () => clearInterval(t);
  }, [count, intervalMs]);

  // load natural size of current image to adapt container height
  useEffect(() => {
    let cancelled = false;
    const img = new window.Image();
    img.src = `${basePath}/img/${prefix}-${index + 1}.jpg`;
    img.onload = () => {
      if (!cancelled) setNatural({ w: img.naturalWidth, h: img.naturalHeight });
    };
    img.onerror = () => {
      if (!cancelled) setNatural(null);
    };
    return () => {
      cancelled = true;
    };
  }, [basePath, prefix, index]);

  // compute adaptive height based on container width and natural ratio
  const [heightPx, setHeightPx] = useState<number | undefined>(undefined);
  useEffect(() => {
    function update() {
      const cont = containerRef.current;
      if (!cont || !natural) return setHeightPx(undefined);
      const contW = cont.clientWidth;
      const h = Math.min(
        Math.round((natural.h / natural.w) * contW),
        Math.round(window.innerHeight * 0.8)
      );
      setHeightPx(h);
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [natural]);

  const prev = () => setIndex((i) => (i - 1 + count) % count);
  const next = () => setIndex((i) => (i + 1) % count);

  const src = `${basePath}/img/${prefix}-${index + 1}.jpg`;

  return (
    <div className="mt-4">
      <div
        ref={containerRef}
        className="relative mx-auto w-full max-w-full overflow-visible rounded-[1.25rem]"
        style={{
          // allow adaptive height when we know the image ratio
          height: heightPx ? `${heightPx}px` : undefined
        }}
      >
        {/* soft blurred background to reduce empty space */}
        <div
          className="absolute inset-0 -z-10 bg-center bg-no-repeat bg-cover filter blur-2xl opacity-30"
          style={{ backgroundImage: `url('${src}')`, transform: "scale(1.06)" }}
        />

        {/* Slides (stacked) */}
        <div className="relative h-full w-full">
          {Array.from({ length: count }).map((_, i) => {
            const s = `${basePath}/img/${prefix}-${i + 1}.jpg`;
            const isActive = i === index;
            return (
              <div
                key={i}
                className={`absolute inset-0 flex items-center justify-center transition-opacity duration-600 ease-in-out ${
                  isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                }`}
                style={{ willChange: "opacity, transform" }}
              >
                <img
                  src={s}
                  alt={`Photo ${i + 1}`}
                  style={{
                    maxWidth: "100%",
                    maxHeight: "80vh",
                    objectFit: "contain"
                  }}
                  className="inline-block"
                />
              </div>
            );
          })}
        </div>

        {/* Arrows */}
        <button
          aria-label="Précédent"
          onClick={prev}
          className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/30 p-3 shadow-lg backdrop-blur hover:bg-white/60 hover:scale-105 transition-transform"
          style={{ width: 64, height: 64 }}
        >
          <span className="text-2xl text-white">‹</span>
        </button>

        <button
          aria-label="Suivant"
          onClick={next}
          className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/30 p-3 shadow-lg backdrop-blur hover:bg-white/60 hover:scale-105 transition-transform"
          style={{ width: 64, height: 64 }}
        >
          <span className="text-2xl text-white">›</span>
        </button>

        {/* Dots */}
        <div className="absolute left-1/2 bottom-3 z-20 flex -translate-x-1/2 gap-2">
          {Array.from({ length: count }).map((_, i) => (
            <button
              key={i}
              aria-label={`Aller à la slide ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-2 w-2 rounded-full transition-all duration-300 ${
                i === index
                  ? "w-3 bg-sky-600 shadow-md"
                  : "w-2 bg-white/80 hover:bg-white"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

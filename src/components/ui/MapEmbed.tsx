"use client";

import { useEffect, useState } from "react";

type MapEmbedProps = {
  title: string;
  src: string;
  className?: string;
};

export function MapEmbed({ title, src, className = "" }: MapEmbedProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        className={`bg-slate-100 animate-pulse min-h-[360px] ${className}`}
        aria-hidden
      />
    );
  }

  return (
    <iframe
      title={title}
      src={src}
      width="100%"
      height="100%"
      style={{ border: 0, minHeight: 360 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className={`w-full h-full min-h-[360px] ${className}`}
    />
  );
}
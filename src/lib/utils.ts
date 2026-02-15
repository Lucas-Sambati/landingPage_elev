import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import React from "react";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Replaces standalone "Elev" occurrences in text with a branded <span>.
 * Does NOT match "Eleve", "Elevar", etc. (word-boundary aware).
 */
export function renderWithElevBrand(text: string): React.ReactNode {
  const parts = text.split(/\b(Elev)\b/gi);
  if (parts.length === 1) return text;

  return parts.map((part, i) =>
    /^elev$/i.test(part)
      ? React.createElement("span", { key: i, className: "elev-brand" }, "ELEV")
      : part
  );
}

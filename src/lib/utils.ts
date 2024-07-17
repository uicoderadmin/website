import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { serviceItems } from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getServiceLabels(selectedIds: string[]): string[] {
  return serviceItems
    .filter((item) => selectedIds.includes(item.id))
    .map((item) => item.label);
}

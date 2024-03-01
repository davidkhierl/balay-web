import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Combines class names using the tailwindcss class name generator.
 *
 * @param {...ClassValue[]} inputs - The class names to be combined.
 * @return {string} - The combined class names.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs))
}

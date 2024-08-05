import { cn } from '@/lib/utils';
import React from 'react'

type BadgeVariant = "primary" | "gray" | "teal" | "blue" | "red" | "yellow" | "secondary"
const Badge = ({ text, variant }: { text: string, variant?: BadgeVariant }) => {
  let className = "bg-gray-100 text-gray-800 dark:bg-white/10 dark:text-white";
  switch (variant) {
    case "gray":
      className = "bg-gray-50 text-gray-500 dark:bg-white/10 dark:text-white"
      break;
    case "teal":
      className = "bg-teal-100 text-teal-800 dark:bg-teal-800/30 dark:text-teal-500"
      break;
    case "blue":
      className = "bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-500"
      break;
    case "red":
      className = "bg-red-100 text-red-800 dark:bg-red-800/30 dark:text-red-500"
      break;
    case "yellow":
      className = "bg-yellow-100 text-yellow-800 dark:bg-yellow-800/30 dark:text-yellow-500"
      break;
    case "secondary":
      className = "bg-white/10 text-white"
      break;
    default:
      className = "bg-gray-100 text-gray-800 dark:bg-white/10 dark:text-white";
      break;
  }
  return (
    <span className={cn("inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium", className)}>
      {text}
    </span>
  )
}

export default Badge
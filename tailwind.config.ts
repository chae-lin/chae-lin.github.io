import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [],
  theme: {
    extend: {
      colors: {
        "surface-default": "var(--color-surface-default)",
        "surface-subtle": "var(--color-surface-subtle)",
        "border-default": "var(--color-border-default)",
        "fg-default": "var(--color-fg-default)",
        "fg-subtle": "var(--color-fg-subtle)",
        "fg-muted": "var(--color-fg-muted)",
      },
    },
  },
} satisfies Config;

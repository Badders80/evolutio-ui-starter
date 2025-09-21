import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["var(--font-heading)"]
      },
      colors: {
        bg: "hsl(var(--bg)/<alpha-value>)",
        fg: "hsl(var(--fg)/<alpha-value>)",
        muted: "hsl(var(--muted)/<alpha-value>)",
        subtle: "hsl(var(--subtle)/<alpha-value>)",
        border: "hsl(var(--border)/<alpha-value>)",
        overlay: "hsl(var(--overlay)/<alpha-value>)",
        surface: {
          1: "hsl(var(--surface-1)/<alpha-value>)",
          2: "hsl(var(--surface-2)/<alpha-value>)",
          3: "hsl(var(--surface-3)/<alpha-value>)"
        },
        accent: {
          DEFAULT: "hsl(var(--accent)/<alpha-value>)",
          strong: "hsl(var(--accent-strong)/<alpha-value>)",
          soft: "hsl(var(--accent-soft)/<alpha-value>)"
        },
        graphite: "hsl(var(--graphite)/<alpha-value>)",
        ok: "hsl(var(--ok)/<alpha-value>)",
        warn: "hsl(var(--warn)/<alpha-value>)",
        danger: "hsl(var(--danger)/<alpha-value>)"
      },
      borderRadius: { xl: "var(--radius)" },
      boxShadow: {
        brand1: "var(--shadow-1)",
        brand2: "var(--shadow-2)"
      }
    }
  },
  plugins: []
} satisfies Config;
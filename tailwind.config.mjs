/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // === GLOBAL THEME TOKENS ===
        // To change the entire theme, only update CSS variables in globals.css
        primary: "var(--color-primary)",
        "primary-dark": "var(--color-primary-dark)",
        accent: "var(--color-accent)",
        "accent-2": "var(--color-accent-2)",
        surface: "var(--color-surface)",
        "surface-2": "var(--color-surface-2)",
        "bg-base": "var(--color-bg)",
        "text-main": "var(--color-text-primary)",
        "text-muted": "var(--color-text-muted)",
        "theme-border": "var(--color-border)",
      },
      backgroundImage: {
        "hero-gradient": "var(--gradient-hero)",
        "card-gradient": "var(--gradient-card)",
        "btn-gradient": "var(--gradient-button)",
        "section-gradient": "var(--gradient-section)",
      },
      boxShadow: {
        "glow-blue": "0 0 20px rgba(96, 165, 250, 0.3)",
        "glow-cyan": "0 0 20px rgba(6, 182, 212, 0.3)",
        "glow-lg": "0 0 40px rgba(96, 165, 250, 0.5)",
        "card-dark": "0 4px 32px rgba(0, 0, 0, 0.5)",
        "inner-glow": "inset 0 0 20px rgba(96, 165, 250, 0.1)",
      },
      keyframes: {
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(96, 165, 250, 0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(96, 165, 250, 0.6)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        slideInRight: {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        fadeInUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      animation: {
        "glow-pulse": "glowPulse 2s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 2.5s linear infinite",
        "slide-in-right": "slideInRight 0.3s ease-out",
        "fade-in-up": "fadeInUp 0.5s ease-out",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      borderRadius: {
        xl: "0.75rem",
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
    },
  },
  plugins: [],
};

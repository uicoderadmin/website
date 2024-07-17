import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}"
  ],
  prefix: "",
  theme: {
    screens: {
      tab: "766px",
      lap: "1440px",
      desk: "1920px"
    },
    container: {
      center: true,
      padding: "2rem"
    },
    extend: {
      boxShadow: {
        "custom-inset": "inset 0px 0px 23px 16px rgba(255, 255, 255, 0.5)"
      },
      backgroundImage: {
        "square-pattern": "url('/squares.png')",
        "black-gradient":
          "linear-gradient(rgba(25, 25, 25, 0), rgba(25, 25, 25, 1))",
        "white-overlay":
          "linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.3))"
      },
      colors: {
        "custom-green": "rgba(172, 255, 36, 0.2)",
        absolute: {
          white: "#FFF",
          black: "#000"
        },
        green: {
          50: "#9EFF00",
          60: "#B1FF33",
          70: "#C5FF66",
          80: "#D8FF99",
          90: "#ECFFCC",
          95: "#F5FFE5",
          97: "#F9FFFO",
          99: "#FDFFFA"
        },
        grey: {
          10: "#191919",
          15: "#262626",
          20: "#333333",
          30: "#4C4C4D",
          35: "#59595A",
          40: "#656567",
          60: "#98989A",
          90: "#E6E6E6"
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))"
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))"
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))"
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))"
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))"
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))"
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))"
        }
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" }
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out"
      }
    }
  },
  plugins: [require("tailwindcss-animate")]
} satisfies Config;

export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class", "class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    extend: {
      colors: {
        "background-primary-light": "#FFFFFF",
        "background-primary-dark": "#1F1F1F",
        "accent-primary": "#FF7300",
        "accent-secondary": "#141925",
        "accent-tertiary": "#F7F7F7",
        "button-primary": "#141925",
        "button-secondary": "#FFEBDA",
        "button-tertiary": "#F5F5F5",
        "orange-accent-primary": "#332920",
        "text-white-secondary": "#EAEAEA",
        "text-primary": "#7A7A7A",
        "text-secondary": "#344054",
        "text-tertiary": "#BC988C",
        "text-links": "#FF6734",
        shadow: "#EC796B33",
        backdrop: "#ffffff4d",
        "green-primary": "#CDFFD2",
        "green-secondary": "#10A41F",
        "red-primary": "#FFCDCD",
        "red-secondary": "#FE4E4E",
        "yellow-primary": "#FD9332",
        "yellow-secondary": "#FFEECD",
        "grey-light-primary": "#F9FAFB",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },

      fontSize: {
        "3xl": ["4em", "1.09"],
        "2xl": ["3em", "1.18"],
        base: ["1em", "1.5"],
        xl: ["2.25em", "1.1"],
        l: ["1.5em", "1.2"],
        md: ["1.1em", "1.18"],
        sm: [".875em", "1.2"],
      },
      backgroundImage: {
        "footer-image": "url('/assets/footer-bg.svg')",
        "burner-wallet-bg": "url('/assets/burnerWalletBg.svg')",
        "burner-wallet-bg-dark": "url('/assets/burnerWalletBgDark.svg')",
        "primary-gradient":
          "linear-gradient(180deg, #FF8D4E -9.12%, #FF6734 39.7%)",
        "onboarding-bg": "url('/assets/meta_bg.png')",
      },
      fontFamily: {
        coolvetica: ["coolvetica", "sans-serif"],
      },
      boxShadow: {
        "popover-shadow": "0px 0px 50px 2px #EC796B33",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;

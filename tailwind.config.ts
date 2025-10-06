/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
        lg: "2rem",
        xl: "2rem",
        "2xl": "2rem",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1400px",
      },
    },
    screens: {
      'xs': '475px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-poppins)", "Poppins", "Arial", "Helvetica Neue", "Helvetica", "sans-serif"],
        serif: ["var(--font-playfair)", "Playfair Display", "Times New Roman", "serif"],
        poppins: ["var(--font-poppins)", "Poppins", "Arial", "Helvetica Neue", "Helvetica", "sans-serif"],
        playfair: ["var(--font-playfair)", "Playfair Display", "Times New Roman", "serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",

        primary: {
          50:  "#fefce8", // Very light golden
          100: "#fef9c3", // Light golden
          200: "#fef08a", // Lighter golden
          300: "#fde047", // Light golden yellow
          400: "#facc15", // Golden yellow
          500: "#c8b180", // Main golden color (rgb(200 177 128))
          600: "#a68b5b", // Darker golden
          700: "#8b7350", // Dark golden
          800: "#6b5a3f", // Very dark golden
          900: "#4a3f2c", // Darkest golden
          950: "#2d2419", // Almost black golden
          DEFAULT: "#c8b180", // Main brand color
          foreground: "#ffffff",
        },
        
        // Additional golden palette for variety
        gold: {
          50:  "#fefce8",
          100: "#fef9c3", 
          200: "#fef08a",
          300: "#fde047",
          400: "#facc15",
          500: "#eab308", // Bright gold
          600: "#ca8a04", // Medium gold
          700: "#a16207", // Dark gold
          800: "#854d0e", // Very dark gold
          900: "#713f12", // Darkest gold
          950: "#422006",
        },
        
        // Luxury golden accents
        luxury: {
          50:  "#fefce8",
          100: "#fef9c3",
          200: "#fef08a", 
          300: "#fde047",
          400: "#facc15",
          500: "#c8b180", // Main luxury gold
          600: "#a68b5b",
          700: "#8b7350",
          800: "#6b5a3f",
          900: "#4a3f2c",
          950: "#2d2419",
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

      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },

      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },

      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.5s ease-out",
        "slide-up": "slide-up 0.5s ease-out",
        "scale-in": "scale-in 0.3s ease-out",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slide-up": {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "scale-in": {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

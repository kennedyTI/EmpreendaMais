/** @type {import('tailwindcss').Config} */
module.exports = {
  // ------------------------------
  // Modo dark ativado via classe
  // ------------------------------
  darkMode: ["class"],

  // ------------------------------
  // Arquivos que o Tailwind deve escanear para classes CSS
  // ------------------------------
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],

  // ------------------------------
  // Configurações gerais do tema
  // ------------------------------
  theme: {
    // ------------------------------
    // Centraliza o container com padding personalizado e breakpoint customizado
    // ------------------------------
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },

    // ------------------------------
    // Extensões do tema padrão do Tailwind
    // ------------------------------
    extend: {
      // ------------------------------
      // Paleta de cores personalizadas usando variáveis CSS
      // ------------------------------
      colors: {
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

      // ------------------------------
      // Raio de bordas customizados com variáveis CSS
      // ------------------------------
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },

      // ------------------------------
      // Animações customizadas (keyframes)
      // ------------------------------
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },

      // ------------------------------
      // Declaração das animações com duração e easing
      // ------------------------------
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",

        // Animação de spin lenta para loaders (2 segundos por volta)
        "spin-slow": "spin 2s linear infinite",
      },

      // ------------------------------
      // Imagens de fundo customizadas com gradientes
      // ------------------------------
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },

  // ------------------------------
  // Plugins adicionais usados pelo Tailwind
  // ------------------------------
  plugins: [require("tailwindcss-animate")],
};

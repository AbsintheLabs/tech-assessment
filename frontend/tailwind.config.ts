import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      colors: {
        elevation: {
          background: {
            dark: '#080A0B',
            light: '#F9F9F9',
          },
          1: {
            dark: '#0C0E10',
            light: '#F1F1F1',
          },
          2: {
            dark: '#111315',
            light: '#E8E8E8',
          },
          3: {
            dark: '#16181A',
            light: '#DFDFDF',
          },
        },
        text: {
          primary: {
            dark: '#F7F7F8',
            light: '#0C0F0E',
          },
          secondary: {
            dark: '#ABAFB4',
            light: '#3B3B3B',
          },
          disabled: {
            dark: '#ABAFB4',
            light: '#ABAFB4',
          },
          buttonText: {
            dark: '#FFFFFF',
            light: '#FFFFFF',
          },
        },
        brands: {
          primary: {
            dark: '#006258',
            light: '#006258',
          },
          hover: {
            dark: '#8AB7B2',
            light: '#3E8F77',
          },
          disabled: {
            dark: '#006258',
            light: '#3E8F77',
          },
        },

        states: {
          success: {
            main: {
              dark: '#27D17F',
              light: '#28A745',
            },
            elevation1: {
              dark: '#27D17F10',  // 10% opacity
              light: '#3E8F77',
            },
            elevation2: {
              dark: '#27D17F40',  // 50% opacity
              light: '#27D17F',
            },
          },
          error: {
            main: {
              dark: '#F44336',
              light: '#F44336',
            },
          },
          warning: {
            main: {
              dark: '#FFC107',
              light: '#FFC107',
            },
          },
        },


      },
    },
    plugins: [],
  }
};
export default config;

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "1024px",
      lg: "1280px",
      xl: "1536px",
      "2xl": "1920px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        md: "2rem",
        lg: "2rem",
        xl: "4rem",
        "2xl": "4rem",
      },
    },
    extend: {
      colors: {
        theme: "var(--theme-color)",
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
        accent: "var(--accent-color)",
        body: {
          light: "var(--body-light-color)",
          lighter: "var(--body-lighter-color)",
          normal: "var(--body-normal-color)",
          dark: "var(--body-dark-color)",
          darker: "var(--body-darker-color)",
        },
        card: {
          header: "var(--card-header-color)",
          body: "var(--card-body-color)",
          footer: "var(--card-footer-color)",
        },
        border: {
          light: "var(--border-light-color)",
          normal: "var(--border-normal-color)",
          dark: "var(--border-dark-color)",
        },

        button: {
          normal: "var(--button-normal-color)",
          light: "var(--button-light-color)",
          dark: "var(--button-dark-color)",
          active: "var(--button-active-color)",
          "hover-light": "var(--button-hover-light)",
          "hover-dark": "var(--button-hover-dark)",
        },
      },
      opacity: {
        light: "var(--opacity-value-light)",
        normal: "var(--opacity-value-normal)",
        dark: "var(--opacity-value-dark)",
      },
      boxShadow: {
        small: "var(--box-shadow-small)",
        normal: "var(--box-shadow-normal)",
        large: "var(--box-shadow-large)",
      },
      fontFamily: {
        header: ["var(--header-font-family)", "serif"],
        body: ["var(--body-font-family)", "sans-serif"],
      },
      fontSize: {
        "header-small": [
          "var(--header-font-size-small)",
          {
            lineHeight: "var(--header-font-line-height-small)",
            fontWeight: "var(--header-font-weight)",
          },
        ],
        "header-medium": [
          "var(--header-font-size-medium)",
          {
            lineHeight: "var(--header-font-line-height-medium)",
            fontWeight: "var(--header-font-weight)",
          },
        ],
        "header-large": [
          "var(--header-font-size-large)",
          {
            lineHeight: "var(--header-font-line-height-large)",
            fontWeight: "var(--header-font-weight)",
          },
        ],

        "sub-header-small": [
          "var(--sub-header-font-size-small)",
          {
            lineHeight: "var(--sub-header-font-line-height-small)",
            fontWeight: "var(--sub-header-font-weight)",
          },
        ],
        "sub-header-medium": [
          "var(--sub-header-font-size-medium)",
          {
            lineHeight: "var(--sub-header-font-line-height-medium)",
            fontWeight: "var(--sub-header-font-weight)",
          },
        ],
        "sub-header-large": [
          "var(--sub-header-font-size-large)",
          {
            lineHeight: "var(--sub-header-font-line-height-large)",
            fontWeight: "var(--sub-header-font-weight)",
          },
        ],

        "button-small": [
          "var(--button-font-size-small)",
          {
            lineHeight: "var(--button-font-line-height-small)",
            fontWeight: "var(--button-font-weight-normal)",
          },
        ],
        "button-medium": [
          "var(--button-font-size-medium)",
          {
            lineHeight: "var(--button-font-line-height-medium)",
            fontWeight: "var(--button-font-weight-medium)",
          },
        ],
        "button-large": [
          "var(--button-font-size-large)",
          {
            lineHeight: "var(--button-font-line-height-large)",
            fontWeight: "var(--button-font-weight-normal)",
          },
        ],

        "body-large": [
          "var(--body-font-size-large)",
          {
            lineHeight: "var(--body-font-line-height-large)",
            fontWeight: "var(--body-font-weight-medium)",
          },
        ],
        "body-medium": [
          "var(--body-font-size-medium)",
          {
            lineHeight: "var(--body-font-line-height-medium)",
            fontWeight: "var(--body-font-weight-medium)",
          },
        ],
        "body-small": [
          "var(--body-font-size-small)",
          {
            lineHeight: "var(--body-font-line-height-small)",
            fontWeight: "var(--body-font-weight-normal)",
          },
        ],
        "body-extra-small": [
          "var(--body-font-size-extra-small)",
          {
            lineHeight: "var(--body-font-line-height-extra-small)",
            fontWeight: "var(--body-font-weight-normal)",
          },
        ],
      },
      backgroundImage: {
        "gradient-radial": `linear-gradient(0deg, rgba(21,36,55,1) 0%, rgba(38,75,83,1) 50%, rgba(21,36,55,1) 100%);`,
      },
    },
  },
  plugins: [],
};

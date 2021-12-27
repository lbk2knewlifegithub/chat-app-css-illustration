const defaultTheme = require("tailwindcss/defaultTheme");
const { join } = require("path");

function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `hsla(var(${variableName}), ${opacityValue})`;
    }
    return `hsl(var(${variableName}))`;
  };
}

module.exports = {
  content: [join(__dirname, "src/**/*.{html,ts}")],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "2rem",
        lg: "3rem",
      },
    },
    // create custom fonts here
    fontFamily: {
      mono: ["'Rubik'", ...defaultTheme.fontFamily.mono],
    },
    extend: {
      // create custom text colors here
      textColor: {
        "chat-left": withOpacity("--text-chat-left"),
        "chat-right": withOpacity("--text-chat-right"),
        placeholder: withOpacity("--text-placeholder"),
        heading: withOpacity("--text-heading"),
        "sub-heading": withOpacity("--text-sub-heading"),
        fill: withOpacity("--text-fill"),
      },
      // create custom background colors here
      backgroundColor: {
        fill: withOpacity("--bg-fill"),
        "button-submit": withOpacity("--bg-button-submit"),
        "radio-outline": withOpacity("--bg-radio-outline"),
        "chat-left": withOpacity("--bg-chat-left"),
      },
      // create custom gradient color here
      gradientColorStops: {
        "light-violet": withOpacity("--light-violet"),
        "light-magenta": withOpacity("--light-magenta"),
      },
    },
  },
  // custom variants
  variants: {},
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "1440px",
        },
      });
    },
  ],
};

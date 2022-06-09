const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    colors: {
      inherit: defaultTheme.colors.inherit,
      white: "#FFFFFF",
      zinc: {
        1: "#E4E4E7",
        2: "#A1A1AA",
        3: "#52525B",
        4: "#18181B",
      },
      amber: {
        1: "#FCD34D",
        2: "#F59E0B",
        3: "#B45309",
      },
      red: {
        0: "#FCA5A5",
        1: "#da3633",
        2: "#8e1519;",
        3: "#490202;",
      },
      green: {
        0: "#86EFAC",
        1: "#238636",
        2: "#0f5323",
        3: "#04260f",
      },
      foo: "var(--foo)",
    },
    extend: {
      maxWidth: {
        "8xl": "90rem",
        "9xl": "100rem",
        "10xl": "112rem",
      },
      borderWidth: {
        1: "1px",
      },
    },
  },
};

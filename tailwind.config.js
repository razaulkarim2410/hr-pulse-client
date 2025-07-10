module.exports = {
  theme: {
    extend: {
      animation: {
        dashLine: "dashLine 4s linear forwards",
      },
      keyframes: {
        dashLine: {
          "0%": { height: "0%" },
          "100%": { height: "100%" },
        },
      },
    },
  },
};

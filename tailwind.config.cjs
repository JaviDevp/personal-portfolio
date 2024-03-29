/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        heroName: "#C1DFF9",
        sectionTitle: "#65B5FF",
        sectionSubtitle: "#E0F1FE",
        pText: "#C9E8FF",
        textProject: "#8BA8C2",
        circleGradient: "#001F3F",
        smallCircleGradient: "#F0A500",
        smallCircleGradientMoving: "#C70039",
        textFooter: "#8BA8C2",
        circleMouse: "#5F89AF",
      },
    },
  },
  plugins: [],
};

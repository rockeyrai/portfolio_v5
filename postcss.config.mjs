const config = {
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        normalBg: "var(--NormalBackgroundColor)",
        loadingBg: "var(--LoadingBackgroundColor)",
        text: "var(--Text)",
      },
      fontSize: {
        p: "var(--NormalSize_p)",
        h1: "var(--NormalSize_h1)",
        h2: "var(--NormalSize_h2)",
        h3: "var(--NormalSize_h3)",
        h4: "var(--NormalSize_h4)",
        h5: "var(--NormalSize_h5)",
        h6: "var(--NormalSize_h6)",
      },
      fontWeight: {
        normal: "var(--NormalFontWeight)",
        small: "var(--SmallFontWeight)",
        big: "var(--BigFontWeight)",
      },
      letterSpacing: {
        normal: "var(--NormalLetterSpacing)",
        tight: "var(--TightLetterSpacing)",
        loose: "var(--LooseLetterSpacing)",
      },
    },
  },
  plugins: ["@tailwindcss/postcss"],
};

export default config;

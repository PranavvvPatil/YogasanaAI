/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        shadowDown: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
        down: "0px 1.349px 1.349px 0px rgba(0, 0, 0, 0.25)",
      },
      fontFamily: {
        spaceGrotesk: ['"Space Grotesk"', 'sans-serif'],
        Inter: ["Inter", "sans-serif"],
        Philosopher: ["Philosopher", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"],
      },
      keyframes: {
        slide: {
          "100%": {
            transform: "translateX(calc(-50% - 2rem))",
          },
        },
        slideRight: {
          "100%": {
            transform: "translateX(calc(50% + 2rem))",
          },
        },
        mobileSlide: {
          "100%": {
            transform: "translateX(calc(-50% - 0.5rem))",
          },
        },
        slideArrow: {
          "100%": {
            transform: "translateX(calc(-50% - 2.3rem))",
          },
        },
        toastIn: {
          // "0%": { transform: "translateY(30px)", opacity: "0" },
          // "100%": { transform: "translateY(0)", opacity: "1" },
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "10%": { transform: "translateY(0)", opacity: "1" },
          "80%": { transform: "translateY(0)", opacity: "1" },
          "100%": { transform: "translateY(20px)", opacity: "0" },
        },
        flicker: {
          "0%, 100%": { transform: "translateX(0)", border:"4px solid red" },
          "50%": { transform: "translateX(-10px)" },
        },
      },
      animation: {
        flicker: "flicker 0.2s ease-in-out 2",
        toastUp: "toastIn 3s ease-out",
        autoScrollInfinite: "slide 20s infinite linear",
        autoScrollInfiniteRight: "slideRight 20s infinite linear",
        autoScrollInfinite10: "slide 10s infinite linear",
        autoScrollInfinite15: "slide 15s infinite linear",
        autoScrollInfinite20: "slide 20s infinite linear",
        autoScrollInfiniteMobile10: "mobileSlide 10s infinite linear",
        autoScrollInfiniteMobile15: "mobileSlide 15s infinite linear",
        autoScrollInfiniteMobile20: "mobileSlide 20s infinite linear",
        scrollLeft: "slide 5s linear",
        animateArrowInfinte: " slideArrow 20s infinite linear",
      },
    },
  },
  plugins: [],
};

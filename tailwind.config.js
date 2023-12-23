/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        orange: "hsl(26, 100%, 55%)",
        paleOrange: "hsl(25, 100%, 94%)",
        verydarkblue: "hsl(220, 13%, 13%)",
        darkgrayishblue: " hsl(219, 9%, 45%)",
        grayishblue: "hsl(220, 14%, 75%)",
        lightgrayishblue: " hsl(223, 64%, 98%)",
        white: " hsl(0, 0%, 100%)",
      },
      fontFamily: {
        kumbhSans: "Kumbh Sans",
      },
    },
  },
  plugins: [],
};

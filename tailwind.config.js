/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#007EA7",
        "primary-dark": "#005F7D",
        "primary-dark-transparent": "rgba(0,50,73,0.1)",
        "primary-background": "rgba(0,126,167,0.08)",
        "primary-light": "#F4FBFC",
        "secondary-light": "#9AD1D4",
        "light-gray-hover": "#D9D9D925",
        white: "#FFFFFF",
        "light-gray": "#D9D9D9",
        gray: "#676767",
        "gray-light": "#C4CAD0",
        black: "#3D3D3D",
        placeholder: "#919EAB",
        "background-color": "#FAFBFB",
        contrast: "#4A9E68",
        shape: "#C1C1C1",
        success: "#58AE30",
        error: "#C92A2A",
        warning: "#E1A917",
        "ultra-violet": "#52489C",
        coffee: "#6D4C3D",
        orange: "#FF8600",
        "ultra-violet-transparent": "rgba(82,72,156,0.1)",
        "coffee-transparent": "rgba(109,76,61,0.1)",
        "orange-transparent": "rgba(255,134,0,0.1)",
        "success-transparent": "rgba(88,174,48,0.1)",
        "error-transparent": "rgba(201, 42, 42, 0.1)",
        "warning-transparent": "rgba(225,169,23,0.1)",
        "background-black-transparent": "rgba(0,0,0,0.6)",
      },
    },
  },
  plugins: [],
};

const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    // app content
    `src/**/*.{js,ts,jsx,tsx}`,
    `pages/**/*.{js,ts,jsx,tsx}`,
    `stories/**/*.{js,ts,jsx,tsx}`,
    `./**/*.{js,ts,jsx,tsx}`,
    // '../../packages/ui/**/*.{js,ts,jsx,tsx}',
    // include packages if not transpiling
    // "../../packages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brandblue: colors.blue[500],
        brandred: colors.red[500],
        electric: '#db00ff',
        ribbon: '#0047ff',
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
export default {
  important: true,
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navigation: {
          text: 'rgba(254, 254, 255, 0.8)',
          headerBg: 'rgba(46, 46, 48, 1)',
          sidebarBg: 'rgba(46, 46, 48, 1)',
          contentBg: 'rgba(37, 38, 40, 1)'
        },

        btn: {
          bgHover: 'rgba(255, 255, 255, 0.1)',
          bgActive: 'rgba(255, 255, 255, 0.2)',
          border: 'rgba(106, 105, 106, 0.5)',
          borderHover: 'rgba(106, 105, 106, 1)'
        },

        bg: {
          inputModal: 'rgba(37, 38, 40, 1)',
          success: 'rgba(29, 55, 51, 1)',
          mess: 'rgba(173, 104, 0, 1)',
          weak: 'rgba(30, 31, 33, 1)',
          active: 'rgba(255, 255, 255, 0.11)',
          card: 'rgba(42, 43, 45, 1)',
          divider: 'rgb(60, 65, 74, 1)'
        },

        divider: 'rgba(0, 0, 0, 0.06)',
        icon: 'rgba(162, 160, 162, 0.85)',
        iconActive: 'rgba(255, 255, 255, 1)',
        borderBottom: 'rgba(66, 66, 68, 1)',
        text: 'rgba(245, 244, 243, 1)',
        textWeak: 'rgba(162, 160, 162, 1)',
        iconSuccess: 'rgba(93, 162, 131, 1)',

        projectItemHover: 'rgba(43, 44, 46, 0.5)',

        'primary-1': 'rgba(230, 247, 255, 1)',
        'primary-6': 'rgba(24, 144, 255, 1)'
      }
    }
  },
  plugins: [
    plugin(function ({ addComponents, theme }) {
      addComponents({
        '.container': {
          maxWidth: theme('columns.7xl'),
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingRight: theme('spacing.4'),
          paddingLeft: theme('spacing.4')
        }
      })
    })
  ]
}

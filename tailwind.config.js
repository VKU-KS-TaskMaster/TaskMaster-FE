/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
export default {
  important: true,
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'selector',
  theme: {
    extend: {
      colors: {
        bg: {
          navigationHeader: 'rgba(46, 46, 48, 1)',
          navigationSidebar: 'rgba(46, 46, 48, 1)',
          navigationContent: 'rgba(37, 38, 40, 1)',
          btn: 'transparent',
          btnHover: 'rgba(255, 255, 255, 0.1)',
          btnActive: 'rgba(255, 255, 255, 0.2)',
          inputModal: 'rgba(37, 38, 40, 1)',
          success: 'rgba(29, 55, 51, 1)',
          mess: 'rgba(173, 104, 0, 1)',
          weak: 'rgba(30, 31, 33, 1)',
          active: 'rgba(255, 255, 255, 0.11)',
          card: 'rgba(42, 43, 45, 1)',
          divider: 'rgb(60, 65, 74, 1)',
          itemHover: 'rgba(43, 44, 46, 0.5)'
        },
        text: {
          navigation: 'rgba(254, 254, 255, 0.8)',
          weak: 'rgba(162, 160, 162, 1)',
          active: 'rgba(245, 244, 243, 1)',
          disabled: '#AFABAC'
        },
        border: {
          bottom: 'rgba(66, 66, 68, 1)',
          btn: 'rgba(106, 105, 106, 0.5)',
          btnHover: 'rgba(106, 105, 106, 1)'
        },
        icon: {
          weak: 'rgba(162, 160, 162, 0.85)',
          active: 'rgba(255, 255, 255, 1)',
          success: 'rgba(93, 162, 131, 1)',
          successHover: '#368E6A',
          disabled: '#AFABAC'
        },
        primary1: 'rgba(230, 247, 255, 1)',
        primary6: 'rgba(24, 144, 255, 1)',

        //Light mode
        light: {
          bg: {
            navigationHeader: '#F9F8F8',
            navigationSidebar: '#F9F8F8',
            navigationContent: '#FFFFFF',
            btn: '#ffffff',
            btnHover: '#E8E6E6',
            btnActive: '#E0DDDD',
            inputModal: '#F9F8F8',
            success: 'rgba(29, 55, 51, 1)',
            mess: 'rgba(173, 104, 0, 1)',
            weak: '#FFFFFF',
            active: '#FFFFFF',
            card: '#FFFFFF',
            divider: 'rgb(200, 205, 215, 1)',
            itemHover: '#E0DDDD'
          },
          text: {
            navigation: '#1E1F21',
            weak: '#5A5A5A',
            active: '#1E1F21',
            disabled: '#AFABAC'
          },
          border: {
            bottom: 'rgb(200, 205, 215, 1)',
            btn: '#CFCBCB',
            btnHover: '#AFABAC'
          },
          icon: {
            weak: '#6D6E6F',
            active: '#1E1F21',
            success: 'rgba(93, 162, 131, 1)',
            successHover: '#368E6A',
            disabled: '#AFABAC'
          },

          primary1: 'rgba(230, 247, 255, 1)',
          primary6: 'rgba(24, 144, 255, 1)'
        }
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

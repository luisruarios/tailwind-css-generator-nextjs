module.exports = {
  mode: '',
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {

    boxShadow: {
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      none: 'none',
      'custom-1': '6px 7px 12px rgba(49, 89, 211, 0.12)',
      'custom-2': '14px 41px 100px rgba(49, 89, 211, 0.12)',
    },

    fontFamily: {
      montserrat: ['Montserrat', 'sans-serif'],
      'manrope': 'Manrope',
    },
    extend: {
      lineHeight: {
        '10': '3.938rem',
      },
      fontSize: {
        'head-7': '8rem', //66px Head 1
        'head-6': '6rem', //66px Head 1
        'head-5': '4.5rem', //66px Head 1
        'head-4': '3.75rem', //56px Head 2
        'head-3': '3rem', //48px Head 3
        'head-2': '2.25rem', //30px Head 4
        'head-1': '2rem', //32px Head 5  
        'title-1': '1.5rem', //24px Title 1
        'title-2': '1.25rem', //20px Title 2
        'subtitle': '1rem', //16px Subtitle
        'paragraph-1': "0.875rem", //14px Paragraph 1
        'paragraph-2': "0.813rem", //13px Paragraph 2
        'note-1': "0.75rem", //12px Note 1
        'note-2': "0.688rem" //11px Note 2cd
      },

      colors: {
        "dark-green": "#0A3D30",
        "light-green": "#A6D968",
        "brown": "#101F35",
        "link": "#7373F9",
        "gray": "#515151",
        "light-gray": "#A8A8A8",
        "confirmation-state": "#5EB132",
        "error-state": "#E62245",
        "gradient-left": "#1477BD",
        "gradient-right:": "3191D4"
      },
      backgroundImage: {
        'purple-gradient':
          "linear-gradient(214.77deg, #7C40B8 16.39%, #5432A0 82.87%)",

        'cream-radient':
          "linear-gradient(214.77deg, #FFF3DD 16.39%, #FAE7C7 82.87%)",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '2rem',
        sm: '2rem',
        lg: '4rem',
        xl: '4rem',
        '2xl': '5rem',
      },
      screens: {
        xl: "1420px",
        lg: "1345px",
        md: "1275px",
        sm: "1260px"
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};


















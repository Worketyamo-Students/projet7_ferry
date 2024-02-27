tailwind.config = {
    theme: {
      extend: {

        fontFamily:{
            
            roboto: ['"Roboto"', 'sans-serif;']
         },
        fontSize: {
            'sm': '0.625rem', // 6.25px
            'base': '1rem',   // 10px
            'lg': '1.25rem',  // 12.5px
            
          },
        colors: {
          clifford: '#da373d',
          Amber900:'#78350F',
          Amber100:'#FEF3C7',
          bgcolor100:'#FFFBEB',
          jaune_ch:'#FBBF24',
          bleu_triangle:'#0369A1',
          session3bg:'#0F172A',
          session3text:'#E2E8F0',
          white:'#FFFFFF',

               },
         dropShadow: {
                'md': '0 0 10px #fafaf6c3',
                '4xl': [
                    '0 35px 35px rgba(0, 0, 0, 0.25)',
                    '0 45px 65px rgba(0, 0, 0, 0.15)'
                ]
              }
               

      }
    }
  }
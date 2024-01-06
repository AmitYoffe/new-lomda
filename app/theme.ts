import { createTheme } from '@mui/material/styles';
// import heroImage from '~/images/רסאן_עליאן.jpg'
// import AmaticWoff2 from '~/fonts/amatic-sc-v24-hebrew_latin-regular.woff2'
import HeeboWoff2 from '~/fonts/heebo-v21-hebrew_latin-regular.woff2'
export const theme = createTheme({
    direction: 'rtl',
    palette: {
        mode: 'dark',
        // primary: {
        //     main: '#fc8803#'
        // },
        background: {
            // default: "#efefef",
            // default: "#f2f8ff",
            // paper: 'rgba(245, 247, 250, 0.5)',
        },
        // primary: {
        //     main: '#23272F'
        // },
    },
    typography: {
        fontFamily: [
            'heebo', 'san-serif',
            'arial', 'sans-serif'
            // 'Amatic SC', 'normal'
        ].join(','),
    },
    components: {
        MuiPaper: {
            defaultProps: {
                elevation: 4
            }
        },
        MuiCssBaseline: {
            styleOverrides: {
                "@font-face": {
                    fontDisplay: 'swap',
                    fontFamily: 'Heebo',
                    fontStyle: 'normal',
                    fontWeight: 200,
                    src: `url(${HeeboWoff2}) format('woff2')`
                },
                // "@font-face": {
                //     fontDisplay: 'swap',
                //     fontFamily: 'Amatic SC',
                //     fontStyle: 'normal',
                //     fontWeight: 400,
                //     src: `url(${AmaticWoff2}) format('woff2')`
                // },
                ":root": {
                },
                body: {
                    '& ::-webkit-scrollbar': {
                        width: '20px'
                    },
                    '& ::-webkit-scrollbar-track': {
                        backgroundColor: 'transparent'
                    },
                    '& ::-webkit-scrollbar-thumb': {
                        backgroundColor: '#d6dee1',
                        borderRadius: '20px',
                        border: '6px solid transparent',
                        backgroundClip: 'content-box'
                    },
                    '& ::-webkit-scrollbar-thumb:hover': {
                        backgroundColor: '#a8bbbf'
                    },
                    // width: '100%', height: '100%'
                }
            }
        }
    }
});
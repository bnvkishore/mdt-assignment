import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
    palette: {
        primary: {
            main: '#000000',
        },
        secondary: {
            main: '##bfbfbf',
        },
        success: {
            light: '#4caf50',
            main: '#2e7d32',
            dark: '#1b5e20'
        },
        error: {
            light: '#ef5350',
            main: '#d32f2f',
            dark: '#c62828'
        }
    }
});
theme = responsiveFontSizes(theme);
export default theme;
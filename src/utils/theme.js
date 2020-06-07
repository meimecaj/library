import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#004d40',
      light: '#39796b',
      dark: '#00251a',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#e1bee7',
      light: '#fff1ff',
      dark: '#af8eb5',
      contrastText: '#000000',
    },
    error: {
        main: '#f44336',
    }
  },
});

export default theme;
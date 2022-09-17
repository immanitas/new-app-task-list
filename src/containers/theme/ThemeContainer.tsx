import { ThemeProvider, createTheme } from "@mui/material/styles"
import { CssBaseline } from "@mui/material"
import { ThemeContainerProps } from "./ThemeContainerProps"

export const APP_BAR_SIZE_MD = 64
export const APP_BAR_SIZE_SM = 48

const defaultTheme = createTheme();
const theme = createTheme({
  variables: {
    components: {
      AppBar: {
        height: {
          lg: APP_BAR_SIZE_MD,
          md: APP_BAR_SIZE_MD,
          sm: APP_BAR_SIZE_SM,
          xs: APP_BAR_SIZE_SM,
          xl: APP_BAR_SIZE_MD
        }
      }
    }
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          height: `${APP_BAR_SIZE_MD}px`,
          [defaultTheme.breakpoints.down('sm')]: {
            maxHeight: `${APP_BAR_SIZE_SM}px`,
          }
        }
      }
    }
  },
});

export const ThemeContainer: React.FC<ThemeContainerProps> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline data-testid="cssbaseline" />
      {children}
    </ThemeProvider>
  )
} 
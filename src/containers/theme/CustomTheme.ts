import { Theme, ThemeOptions } from '@mui/material/styles'


declare module '@mui/material/styles' {
  interface CustomTheme {
    variables: {
      components: {
        AppBar: {
          height: { xs: number, sm: number, md: number, lg: number, xl: number }
        }
      }
    };
  }

  interface Theme extends CustomTheme { }
  interface ThemeOptions extends CustomTheme { }
}
import {PaletteColor, ThemeOptions} from '@mui/material'

declare module '@mui/material' {
    interface PaletteColor {
        light?: string;
        main: string;
        dark?: string;
        contrastText?: string;
      }
    interface Palette {
        neutral? :PaletteColor
    }
    interface PaletteOptions {
        neutral?: PaletteColorOptions
    }
}
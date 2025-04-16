"use client";
import React from 'react'
import { createTheme, ThemeOptions, ThemeProvider } from '@mui/material'
const palette:ThemeOptions = {
    palette:{
        mode:"light",
        primary:{
            main:"#0c2d48",
            contrastText:"#FFFFFF",
        },
        secondary:{
            main:"#145da0",
            contrastText:"#003344",
        },
        background:{
            default:"#ffffffDD",
            paper:"#DDDDDDEE",
        },
        warning:{
            main:"#FFA500",
            contrastText:"#333333",
        }
    }
    

}
const darkTheme:ThemeOptions = createTheme({
    palette: {
      mode: 'dark',
      background: {
        default: '#121212',
        paper: '#1E1E2F',
      },
      primary: {
        main: '#2E3A8C',
        contrastText: '#FFFFFF',
      },
      secondary: {
        main: '#4EC7E9',
        contrastText: '#1E1E2F',
      },
      warning: {
        main: '#EEC643',
        contrastText: '#1E1E2F',
      },
      text: {
        primary: '#FFFFFF',
        secondary: '#B0B0B0',
      },
      divider: '#2A2A3C',
    },
  });
  
const theme = createTheme(palette);

interface ThemeProps{
    children: React.ReactNode
}

const Theme:React.FC<ThemeProps> = ({children}) => {
  return (
    <ThemeProvider theme={ theme }>
         {children}
    </ThemeProvider>
  )
}

export default Theme

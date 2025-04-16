import { Box } from '@mui/material'
import React from 'react'
import SettingsIcon from '@mui/icons-material/Settings';
const loading = () => {
  return (
    <main>
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
        >
            <SettingsIcon />
            Cargando
        </Box>
    </main>
  )
}

export default loading

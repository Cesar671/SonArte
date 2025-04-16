import { SvgIconComponent } from '@mui/icons-material'
import { Box, Typography } from '@mui/material'
import React from 'react'

interface ItemFooterIconProps {
    name:string
    Icon: SvgIconComponent
}

const ItemFooterIcon:React.FC<ItemFooterIconProps> = ({ name, Icon }) => {
  return (
    <Box
        sx={{
            display:"flex",
            flexDirection:"column",
            alignItems:"center",
            color:"warning.main",
        }}
    >
        <Icon sx={{ fontSize:"50px" }}/>
        <Typography>
            {name}
        </Typography>
    </Box>
  )
}

export default ItemFooterIcon

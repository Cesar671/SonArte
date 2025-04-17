import { SvgIconComponent } from '@mui/icons-material'
import { Box, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'

interface MenuButtonProps{
    Icon:SvgIconComponent
    name:string
    href:string
}

const MenuButton:React.FC<MenuButtonProps> = ({ Icon, name, href }) => {
  return (
    <Link href={href}
        style={{
            textDecoration:"none",
            width:"100%",
        }}
    >
      <Box
        display="flex"
        justifyContent="start"
        gap="10px"
        alignItems="center"
        sx={{
          
                        color:"primary.contrastText",
                        transition:"all 0.4s ease",
                        borderRadius:0,
                        '&::before':{
                            content: "''",
                            bottom: '0',
                            right: '50%,', 
                            width: '0', 
                            height: '2px', 
                            bgcolor: 'warning.main', 
                            transform: 'translateX(50%)', 
                            transition: 'width 0.3s ease',
                        },
                        '&:hover::before':{
                            width:"50%",
                        },
                        '&::after':{
                            content: "''",
                            bottom: '0',
                            left: '50%,', 
                            width: '0', 
                            height: '0', 
                            bgcolor: 'warning.main', 
                            transform: 'translateX(-50%)', 
                            transition: 'width 0.3s ease', 
                        },
                        '&:hover::after':{
                            width:"50%",
                        }
                    
        }}
      >
        <Icon sx={{ color:"warning.main", fontSize:"40px" }}/>
        <Typography
            component="span"
            color='primary.contrastText'
            fontSize={"25px"}
        >
            {name}
        </Typography>
      </Box>
    </Link>
  )
}

export default MenuButton

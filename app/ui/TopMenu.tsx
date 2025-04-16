import { Container, Box, AppBar, Button, Drawer } from '@mui/material';
import React, { useState } from 'react';
import Image from 'next/image';
import { Menu, Piano } from '@mui/icons-material';
import HomeIcon from '@mui/icons-material/Home';
import StraightenIcon from '@mui/icons-material/Straighten';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
const TopMenu:React.FC = () => {
   const [open, setOpen] = useState(false);
  return (
    <AppBar
        sx={{
            display:"flex",
            justifyContent:"space-between",
            flexDirection:"row",
            padding:1,
            alignItems:"center",
            paddingLeft:"30px",
            paddingRight:"30px",
            
        }}
    >
        <Box
            sx={{
                display:"flex",
                alignItems:"center",
                gap:"20px",
            }}
        >
            <Button
                onClick={ () => {setOpen(true)} }
                sx={{
                    display:"none",
                    '@media (max-width:900px)':{
                        display:"flex"
                    }
                }}
            >
                <Menu sx={{ color:"warning.main", fontSize:"40px" }}/>
            </Button>
            <Drawer
                open={open}
                anchor='left'
                onClose={ () => { setOpen(false) } }
                
            >
                <Box sx={{
                    display:"flex",
                    padding:"30px",
                    gap:"10px",
                    flexDirection:"column",
                    justifyContent:"start",
                    alignItems:"center",
                    bgcolor:"primary.main",
                    width:"350px",
                    height:"100%",
                    '& .MuiButton-root':{
                        color:"primary.contrastText",
                    }
                }}>
                    <Box sx={{
                    display:"flex",
                    gap:"20px",
                    flexDirection:"column",
                    justifyContent:"start",
                    alignItems:"center",
                    bgcolor:"primary.main",
                    
                    height:"100%",
                    '& .MuiButton-root':{
                        color:"primary.contrastText",
                        width:"100%",
                    }
                }}>
                        <Image src="/nombre.png" width={100} height={30} alt='' />
                        <Button startIcon={<HomeIcon />}> 
                                Inicio
                        
                        </Button>
                        <Button startIcon={<StraightenIcon />}>
                            Instrumentos
                        </Button>
                        <Button startIcon={<MenuBookIcon/>}>
                            Lecciones
                        </Button>
                        <Button startIcon={<ContactPhoneIcon />}>
                            Contacto
                        </Button>
                    </Box>
                <Box
                    sx={{
                        display:"flex",
                        flexDirection:"column",
                        gap:"20px"
                    }}
                >
                    <Button
            sx={{
                bgcolor:"warning.main",
                color:"warning.contrasText"
            }}
           >
               Crear Cuenta
            </Button>
            <Button
                sx={{
                    bgcolor:"warning.main",
                    color:"warning.contrasText"
                }}
            >
                Iniciar Session
            </Button>
                    </Box>
                </Box>
                
            </Drawer>
            <Box
                sx={{
                    display:"flex",
                    justifyContent:"center",
                    alignItems:"center",
                    
                }}
            >
                <Image src="/icono.png" width={50} height={50} alt='' />
                <Image src="/nombre.png" width={80} height={30} alt='' />
            </Box>
            <Box
                sx={{
                    display:"flex",
                    gap:"20px",
                    '@media (max-width:900px)':{
                        display:"none"
                    }
                }}
            >
                <Box> Inicio
               
            </Box>
            <Box>
                Instrumentos
            </Box>
            <Box>
                Lecciones
            </Box>
            <Box>
                Contacto
            </Box>
            </Box>
            
        </Box>
        <Box
            sx={{
                display:"flex",
                gap:2,
                '@media (max-width:900px)':{
                        display:"none"
                    }
            }}
        >
           <Button
            sx={{
                bgcolor:"warning.main",
                color:"warning.contrasText"
            }}
           >
               Crear Cuenta
            </Button>
            <Button
                sx={{
                    bgcolor:"warning.main",
                    color:"warning.contrasText"
                }}
            >
                Iniciar Session
            </Button>
        </Box>
    </AppBar>
  )
}

export default TopMenu

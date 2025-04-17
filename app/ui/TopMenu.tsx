'use client';
import { Container, Box, AppBar, Button, Drawer } from '@mui/material';
import React, { useState } from 'react';
import Image from 'next/image';
import { Menu, Piano,ArrowBack } from '@mui/icons-material';
import HomeIcon from '@mui/icons-material/Home';
import StraightenIcon from '@mui/icons-material/Straighten';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import styles from './ui.module.css';
import MenuButton from './MenuButton';
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
            height:{
                xs:"80px",
                sm: "75px",
                md: "70px",
                lg: "60px"
            },
        }}
    >
        <Box
            sx={{
                display:"flex",
                alignItems:"center",
                gap:"20px",
                width:"100%",
            }}
        >
            <Box
                sx={{
                    display:"none",
                    alignItems:"center",
                    justifyContent:"space-between",
                    width:"100%",
                    '@media (max-width:900px)':{
                        display:"flex"
                    }
                }}
            >
                <Button
                    onClick={ () => {setOpen(true)} }
                >
                    <Menu sx={{ 
                        color:"warning.main", 
                        fontSize:{
                            xs:"50px",
                            sm: "40px",
                        } }}/>
                </Button>
                <Image src="/nombre.png" width={100} height={30} alt='' />
            </Box>
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
                    width:{
                        xs:"250px",
                        sm:"350px",
                    },
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
                    alignItems:"start",
                    bgcolor:"primary.main",
                    width:"100%",
                    height:"100%",
                    
                }}>
                        <Box
                            display="flex"
                            justifyContent="space-between"
                            width="100%"
                            alignItems="center"
                        >
                            <Image src="/nombre.png" width={100} height={30} alt='' />
                            <Button
                                onClick={() => { setOpen(false) }}
                                sx={{
                                    width:"50px !important",
                                    height:"50px !important",
                                }}
                            >
                                <ArrowBack sx={{
                                    width:"50px",
                                    height:"50px",
                                    color:"warning.main",
                                }}/>
                            </Button>  
                        </Box>
                        <Box
                            display="flex"
                            flexDirection="column"
                            gap="25px"
                            width="100%"
                            sx={{
                                '& .MuiButton-root':{
                                color:"primary.contrastText",

                                textAlign:"start !important",
                            }
                            }}  
                        >
                            <MenuButton href='' name='Inicio' Icon={ HomeIcon }/>
                            <MenuButton href='' name='Instrumentos' Icon={ StraightenIcon }/>
                            <MenuButton href='' name='Lecciones' Icon={ MenuBookIcon }/>
                            <MenuButton href='' name='Contacto' Icon={ ContactPhoneIcon }/>
                        </Box>
                        
                    </Box>
                    <Box
                        sx={{
                            display:"flex",
                            flexDirection:"column",
                            gap:"20px",
                            '& .MuiButton-root':{
                                bgcolor:"warning.main",
                                color:"warning.contrastText"
                            }
                        }}
                    >
                        <Button>
                        Crear Cuenta
                        </Button>
                        <Button>
                            Iniciar Session
                        </Button>
                    </Box>
                </Box>
                
            </Drawer>
            <Box
                sx={{
                    display:"flex",

                    color:"primary.contrastText",
                    '@media (max-width:900px)':{
                        display:"none"
                    },
                    '& .MuiButton-root':{
                        color:"primary.contrastText",
                        transition:"all 0.4s ease",
                        borderRadius:0,
                        '&::before':{
                            content: "''",
                            position: 'absolute',
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
                            position: 'absolute',
                            bottom: '0',
                            left: '50%,', 
                            width: '0', 
                            height: '2px', 
                            bgcolor: 'warning.main', 
                            transform: 'translateX(-50%)', 
                            transition: 'width 0.3s ease', 
                        },
                        '&:hover::after':{
                            width:"50%",
                        }
                    }
                }}
            >
                <Image src="/nombre.png" width={80} height={30} alt='' />
                <Button> 
                    Inicio         
                </Button>
                <Button>
                    Instrumentos
                </Button>
                <Button>
                    Lecciones
                </Button>
                <Button>
                    Contacto
                </Button>
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
                color:"warning.contrasText",
                height:"35px",
                width:"140px",
            }}
           >
               Registrarse
            </Button>
            <Button
                sx={{
                    bgcolor:"warning.main",
                    color:"warning.contrasText",
                    height:"35px",
                    width:"140px",
                }}
            >
                Iniciar Session
            </Button>
        </Box>
    </AppBar>
  )
}

export default TopMenu

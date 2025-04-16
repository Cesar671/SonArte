import React from 'react'
import { Box, Button, Container, Typography } from '@mui/material'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import ItemFooterIcon from './ItemFooterIcon';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Image from 'next/image';
import { ArrowForward } from '@mui/icons-material';
const footer = () => {
  return (
    <Container
        sx={{
            maxWidth: "none !important",
            display:"grid",
            gridTemplateColumns:"1fr 1fr 1fr",
            alignItems:"center",
            justifyContent:"center",
            bgcolor:"primary.main",
            color:"primary.contrastText",
            padding:"30px",
            gap:"20px",
            "@media (max-width:900px)":{
                gridTemplateColumns: "1fr",
            }
        }}
    ><Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap="20px"
        justifyContent="center"
        height="100%"
    >
         <Box
            sx={{
                display:"flex",
                gap:"15px",
                justifyContent:"center",
            }}
        >
            <ItemFooterIcon Icon={ FacebookRoundedIcon } name='Facebook'/>
            <ItemFooterIcon Icon={ InstagramIcon } name='Instagram'/>
            <ItemFooterIcon Icon={ WhatsAppIcon } name='WhatsApp'/>
            <ItemFooterIcon Icon={ LinkedInIcon } name='LinkedIn'/>
        </Box>
        <Typography>
            Conéctate con nosotros
            📧 contacto@sonarte.com
        </Typography>
    </Box>
       
        <Box
            borderLeft={1}
            borderRight={1}
            paddingRight={2}
            paddingLeft={2}
            sx={{
                height:"100%",
                gap:"20px",
                display:"flex",
                flexDirection:"column",
                alignItems:"center",
            }}
        >
            <Container
                
                sx={{
                    fontWeight:900,
                    display:"flex",
                    alignItems:"center",
                    justifyContent:"start",
                    gap:5
                }}
            >
                <Box
                    bgcolor="warning.main"
                    width="56px"
                    height="56px"
                    borderRadius={2}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <Image src="/MacrosoftIcon.png" width={ 50} height={ 50} alt='Macrosoft Icono' />
                </Box>
                <Typography
                    variant="h5"
                >
                    Acerca de Macrosoft
                </Typography>
            </Container>
            <Typography
                sx={{
                    fontSize:"13px",
                }}
            >
                Somos Macrosoft, un equipo universitario apasionado por la innovación, la tecnología y el trabajo colaborativo. <br/>Nuestra misión es fusionar creatividad y conocimiento técnico para desarrollar soluciones inteligentes que marquen la diferencia.
                Desde código hasta estrategias. 
                <br/>
                <br/>
                ¡Conectando el futuro, un proyecto a la vez!
            </Typography>
    </Box>
        <Box
            sx={{
                display:"flex",
                flexDirection:"column",
                gap:"10px",
            }}
        >
            <Box
                sx={{
                    display:"flex",
                    alignItems:"center",
                    gap:"20px"
                }}
            >
                <Image src="/icono.png" width={80} height={80} alt=''/>
                <Image src="/nombre.png" width={150} height={40} alt=''/>
            </Box>
            <Box>
                <Button
                    sx={{
                        color:"primary.contrastText",

                    }}
                >
                    Inicio
                </Button>
            <Button
                    sx={{
                        color:"primary.contrastText",
                        
                    }}
                >
                     Cursos
                </Button>
                <Button
                    sx={{
                        color:"primary.contrastText",
                        
                    }}
                >
                    Ejercicios interactivos
                </Button>
                <Button
                    sx={{
                        color:"primary.contrastText",
                        
                    }}
                >
                    Teoría musical
                </Button>
                <Button
                    sx={{
                        color:"primary.contrastText",
                        
                    }}
                >
                    Recursos
                </Button>
                <Button
                    sx={{
                        color:"primary.contrastText",
                        
                    }}
                >
                    Blog
                </Button>
                <Button
                    sx={{
                        color:"primary.contrastText",
                        
                    }}
                >
                    Tutoriales
                </Button><Button
                    sx={{
                        color:"primary.contrastText",
                        
                    }}
                >
                    Explora
                </Button>
            </Box>
            <Box
                sx={{
                    fontSize:13
                }}
            >
            <br/>
            <Box
                sx={{
                    display:"flex",
                    alignItems:"center",
                    gap:"5px",
                }}
            >
                <strong>¡Aprende música hoy!</strong>
                <br/>
                <Button sx={{
                    bgcolor:"warning.main",
                    color:"warning.contrastText",
                    width:"170px",height:"30px",
                    }}
                    endIcon={ <ArrowForward /> }            >
                    Empieza Ahora
                </Button>
            </Box>
        


<br/>
<br/>
© 2025 Todos los derechos reservados.
            </Box>
        </Box>
    </Container>
  )
}

export default footer

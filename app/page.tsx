'use client';
import { Box, Button, Grid, Typography } from "@mui/material";
import ParallaxCustom from "./ui/ParallaxCustom";
import { ArrowForward,MenuBook as BookOnline } from "@mui/icons-material";
import CardData from "./ui/CardData";
import PersonIcon from '@mui/icons-material/Person';
import WalletIcon from '@mui/icons-material/Wallet';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import { useState } from "react";
export default function Home() {
  const [loading, isLoading] = useState(false)

  return (
    <div>
      <main>
      
          <ParallaxCustom img="/home.webp" vh="80vh" opacity={0.8}
            > 
            <Box
              sx={{
                justifyContent:"center",
                display:"flex",
                flexDirection:"column",
                alignItems:"center",

              }}
            >
                <Typography variant="h4">
                    Aprende a usar Instrumentos Musicales Gratis
                </Typography>
                <Typography
                  sx={{
                    maxWidth:"600px",
                  }}
                >
                SonArte mejora tu capacidad para leer, escribir y tocar música a través de ejercicios efectivos y contenido atractivo. Gratis, para siempre.
                </Typography>
            </Box>
            <Button 
              
              sx={{
              bgcolor:"warning.main",
              color:"warning.contrastText",
              width:"250px",height:"60px",
            }}
              endIcon={ <ArrowForward /> }            >
              Empieza Ahora
            </Button>
          </ParallaxCustom>
          
          <CardData 
            num={0}
            title="Divertido y efectivo"
            img="/img3.webp"
          >
            <Typography>
                SonArte te permite mejorar tus habilidades musicales de una manera divertida y estimulante al agregar elementos de juego al proceso de aprendizaje. Aprender es más fácil y más efectivo cuando te diviertes. Crea una cuenta gratuita para acceder a todo el contenido y eliminar la publicidad.
            </Typography>
            <Button
                            startIcon={<PersonIcon />}
                            endIcon={<ArrowForward />}
                        sx={{
                            bgcolor:"warning.main",
                            color:"warning.contrasText"
                        }}
                       >
                           Crear Cuenta
                        </Button>
          </CardData>
          <ParallaxCustom img="/img2.webp" vh="30vh" mw={1500} opacity={0.2}> 
            .
          </ParallaxCustom>
          <CardData num={1} title="Hecho para escuelas" img="/img2.webp"
          >
            <Typography>

                SonArte te ayuda a enseñar teoría musical. Gratis. Potencia tu enseñanza con nuestros efectivos ejercicios y contenido atractivo, que permite a tus estudiantes aprender a su propio ritmo, tanto en la escuela como en casa. 
                                      
            </Typography>
            <Button
                            startIcon={<BookOnline />}
                            endIcon={<ArrowForward />}
                        sx={{
                            bgcolor:"warning.main",
                            color:"warning.contrasText"
                        }}
                       >
                           Ver Lecciones
                        </Button>
          </CardData>
          <ParallaxCustom img="/img3.webp" vh="30vh" mw={1500} opacity={0.2}> 
            .
          </ParallaxCustom>
          <CardData 
            title="Gratis para todos"
            num={0}
            img="/img3.webp"
          >
            <Typography>
                La música es esencial a lo largo y ancho del globo. Hemos diseñado SonArte para todos aquellos que quieran aprender teoría musical. Gratis, para siempre. Hoy, millones de personas provenientes de más de 150 países utilizan SonArte todos los meses.
                </Typography>
                <Button
                            startIcon={<WalletIcon />}
                            endIcon={<ArrowForward />}
                        sx={{
                            bgcolor:"warning.main",
                            color:"warning.contrasText"
                        }}
                       >
                           Nuestra Misión
                        </Button>
          </CardData>
          <ParallaxCustom img="/img4.webp" vh="30vh" mw={1500} opacity={0.2}> 
            .
          </ParallaxCustom>
          <CardData 
          title="Divertido y efectivo"
          num={1}
          img="/img4.webp"
          >
            <Typography>

           
                SonArte te permite mejorar tus habilidades musicales de una manera divertida y estimulante al agregar elementos de juego al proceso de aprendizaje. Aprender es más fácil y más efectivo cuando te diviertes. Crea una cuenta gratuita para acceder a todo el contenido y eliminar la publicidad. 
                </Typography>
                <Button
                            startIcon={<ContactPhoneIcon />}
                            endIcon={<ArrowForward />}
                        sx={{
                            bgcolor:"warning.main",
                            color:"warning.contrasText"
                        }}
                       >
                          Contactanos
                        </Button>
          </CardData>
      </main>
    </div>
  );
}

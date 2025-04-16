'use client';
import { Box,Container, Paper, Typography, Grid } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import MusicNoteIcon from '@mui/icons-material/MusicNote';
interface CardDataProps{
    children: React.ReactNode
    title: string
    num:number
    img:string
}

const UnPair = ({img, name, children} : { img:string, name:string, children:React.ReactNode }) => {
return (
            <Grid container
             
            >
              <Grid size={6}
                sx={{
                  display:"flex",
                  flexDirection:"column",
                  justifyContent:"center",
                  maxWidth:"600px",
                  width:{ xs:'100%', md: '50%' },
                  gap:"20px"
                }}
              >
                <Typography
                  variant="h4"
                >
                  <MusicNoteIcon />{name} <MusicNoteIcon />
                </Typography>
                {children}
              </Grid>
              <Grid size={6}
                sx={{
                  display:"flex",
                  justifyContent:"center",
                  '@media (max-width:900px)':{
                    display:'none',
                  }
                }}
              >
                <Image src={img} width={400} height={250} alt="" />
              </Grid>
            </Grid>
            
         )
}

const Pair = ({img, name, children} : { img:string, name:string, children:React.ReactNode }) => {
return(<Grid container>
    <Grid size={6}
      sx={{
        display:"flex",
        justifyContent:"center",
        '@media (max-width:900px)':{
          display:'none',
        },
        
      }}
    >
      <Image src={img} width={400} height={250} alt="" style={{
        justifySelf:"end",
        
      }}/>
    </Grid>
    <Grid size={6}
      sx={{
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        maxWidth:"600px",
        width:{ xs:'100%', md: '50%' },
        gap:"20px"
      }}
    >
      <Typography
        variant="h4"
      >
         <MusicNoteIcon />{name} <MusicNoteIcon />
      </Typography>
      {children}
    </Grid>
  </Grid>)
}

const CardData:React.FC<CardDataProps> = ({ children,num, title, img}) => {
  return (
    <Box
        sx={{
            width:"100%",

        }}
    >
        <Container  
                sx={{
                    bgcolor:"background.paper",
                    display:"flex",
                    color:"warning.contrastText",
                    alignItems:"center",
                    justifySelf:"center",
                    gap:"30px",
                    width:"100%",
                    paddingTop:"80px",
                  paddingBottom:"80px",
                  maxWidth:"none !important"
                }}
            >
            
            <Box
                sx={{
                    width:"100%",
                    zIndex:100,
                    display:"flex",
                    justifyContent:"center",
                }}
            >
                {(num%2==0) ? (<Pair name={title} img={img}>
                         {children}
                </Pair>):(<UnPair name={title} img={img}>
                        {children}
                </UnPair>)}
            </Box>
            </Container>
    </Box>
    
  )
}

export default CardData

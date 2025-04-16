import React from 'react'
import { Parallax } from 'react-parallax'
import { Box, Typography } from '@mui/material'

interface ParallaxProps{
  children: React.ReactNode
  img:string
  vh:string
  mw?: number
  opacity?: number
}

const ParallaxCustom:React.FC<ParallaxProps> = ({ children, img, vh, mw, opacity }) => {
  return (
 <div>
    <Parallax style={{
            }} bgImageStyle={{
              maxWidth:mw
            }} bgImage={img} strength={300} > 
              <Box
              sx={{
                display:"flex",
                height:vh,
                position:"relative",
                bgcolor:`rgba(255,255,255,${opacity})`,
                justifyContent:"center",
                alignItems:"end",
                alignSelf:"center",
              }}
                >
                 <Box
                  sx={{
                    display:"flex",
                    position:"absolute",
                    justifyContent:"center",
                    justifySelf:"center",
                    padding:"100px",
                    opacity:1,
                    flexDirection:"column",
                    alignItems:"center",
                    gap:"20px",
                  }}
                >
                  
                {children}
                </Box>
                </Box>
                
          </Parallax>
          
          </div>
  )
}

export default ParallaxCustom

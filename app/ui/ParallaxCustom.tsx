import React, { useState } from 'react'
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
  const [opacity1, setOpacity] = useState(0);
  return (
 <div>
    <Parallax 
            style={{
              opacity: opacity1,
              transition:"opacity 0.2s ease-out",
              willChange: 'opacity',
            }}
            bgImageStyle={{
              maxWidth:mw
            }} 
            bgImage={img} 
            strength={300} 
            onLoad={() => { setOpacity(1) }}
            > 
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

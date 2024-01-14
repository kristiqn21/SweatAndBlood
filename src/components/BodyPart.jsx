import { Stack, Typography } from '@mui/material'
import React from 'react'

import Icon from '../assets/assets/icons/bodybuilder_cropped (1).png'

const BodyPart = ({item, setBodyPart, bodyPart}) => {
  return (
    <Stack 
      type='button'
      alignItems='center'
      justifyContent='centre'
      className='bodyPart-card'
      sx={{
        borderTop: bodyPart === item ? '4px solid #6B7280' : '',
          borderBottomLeftRadius: '20px',
          width: '270px',
          height: '280px',
          cursor: 'pointer',
          gap: '40px',

        }}
        onClick= {() => {
          setBodyPart(item);
          window.scrollTo({top: 1800, left: 100, behavior: 'smooth'})
        }}
    >
      <img src={Icon} alt="dumbbell" style={{width: '100px', height: '100px'}}/>

      <Typography fontSize="24px" fontWeight='bold' color='#6B7280' textTransform='capitalize'>{item}</Typography>
    </Stack>
  )
}

export default BodyPart

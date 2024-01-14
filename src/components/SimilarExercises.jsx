import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import HorizontalScrollbar from './HorizontalScrollbar'
import Loader from './Loader'

const SimilarExercises = ({targetMuscleExercises, equipmentMuscleExercises}) => {
  return (
    <Box sx={{mt: {lg: '100px', xs:"0"}}} >
      <Typography variant='h3' mb='30px' >
        Exercises that target the same muscle group
      </Typography>
      <Stack direction='row' mb='50px' sx={{p:"2", position: 'relative'}}>
          {targetMuscleExercises.length ? <HorizontalScrollbar data={targetMuscleExercises}/>
          : <Loader/>}
      </Stack>
    </Box>
  )
}

export default SimilarExercises

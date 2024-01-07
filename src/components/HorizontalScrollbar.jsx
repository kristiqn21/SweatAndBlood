import { Box } from '@mui/material'
import React from 'react'
import BodyPart from './BodyPart'

const HorizontalScrollbar = ({data, bodyPart, setBodyPart}) => {
  return (
    <div>
        {data.map((item) => 
        <Box key={item.id || item}
        itemID={item.id || item}
        title={item.id || item}
        m="0 40px">
            <BodyPart item={item} bodyPart={BodyPart} setBodyPart={setBodyPart}/>
        </Box>)}
    </div>
  )
}

export default HorizontalScrollbar

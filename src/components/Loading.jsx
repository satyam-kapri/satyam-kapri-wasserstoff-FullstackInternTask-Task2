import { LinearProgress ,Box} from '@mui/material'

import React from 'react'

function Loading() {
  return (
    <div className='flex flex-col items-center justify-center w-screen h-screen bg-base'>
        <span className='mb-2'>Loading data for the Ultimate Visualisation</span>
        <Box sx={{ width: '50%' }}>
      <LinearProgress />
    </Box>
    </div>
  )
}

export default Loading

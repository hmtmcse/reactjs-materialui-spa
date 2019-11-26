import React from 'react';
import Box from '@material-ui/core/Box';

const BoxExample: React.FC = () => {
    return (
        <div style={{ width: '100%' }}>
         <Box>
            <Box component="div" display="block">Display Inline</Box>
            <Box component="div" display="inline">Name </Box>
            <Box component="div" display="inline">Touhid Mia</Box>
         </Box>
      </div>
    );
  }
  
  export default BoxExample;
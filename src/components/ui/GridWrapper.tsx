import { Box } from '@mui/material';
import React, { FC } from 'react';

interface GridWrapperProps {
  gridColumns: number;
  child: React.ReactNode;
}

const GridWrapper: FC<GridWrapperProps> = ({
  gridColumns,
  child,
}): React.ReactElement => {
  return (
    <div style={{ width: '100%' }}>
      <Box
        sx={{
          display: 'grid',
          gap: 1,
          gridTemplateColumns: `repeat(${gridColumns}, 1fr)`,
        }}
      >
        {child}
      </Box>
    </div>
  );
};

export default GridWrapper;

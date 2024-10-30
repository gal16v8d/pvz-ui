import { Box } from '@mui/material';
import React, { FC } from 'react';

interface GridWrapperProps {
  gridColumns: number;
  gridId: string;
  child: React.ReactNode;
}

const GridWrapper: FC<GridWrapperProps> = ({
  gridColumns,
  gridId,
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
        data-testid={`gridWrapper-${gridId}`}
      >
        {child}
      </Box>
    </div>
  );
};

export default GridWrapper;

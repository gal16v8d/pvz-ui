import type { SxProps } from '@mui/material';
import { Typography } from '@mui/material';
import GridWrapper from '../GridWrapper';
import type { ReactNode } from 'react';

const keyValueText = (
  data: unknown,
  param: string,
  themeProps: { key: SxProps; value: SxProps }
): ReactNode | null =>
  data ? (
    <GridWrapper
      key={param}
      gridColumns={2}
      gridId={`kv-${data}`}
      child={
        <>
          <Typography sx={themeProps.key} key={param}>{`${param}:`}</Typography>
          <Typography
            sx={themeProps.value}
            key={`${param}-data`}
            data-testid={`${param}-data`}
          >
            {data as string}
          </Typography>
        </>
      }
    />
  ) : null;

export { keyValueText };

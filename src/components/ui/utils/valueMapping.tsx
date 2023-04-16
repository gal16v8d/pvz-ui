import { SxProps, Typography } from '@mui/material';
import GridWrapper from '../GridWrapper';

const keyValueText = (
  data: unknown,
  param: string,
  themeProps: { key: SxProps; value: SxProps }
): JSX.Element | null =>
  data ? (
    <GridWrapper
      key={param}
      gridColumns={2}
      child={
        <>
          <Typography sx={themeProps.key} key={param}>{`${param}:`}</Typography>
          <Typography sx={themeProps.value} key={`${param}-data`}>
            {data as string}
          </Typography>
        </>
      }
    />
  ) : null;

export { keyValueText };

import { SxProps, Typography } from '@mui/material';
import GridWrapper from '../GridWrapper';

const keyValueText = (
  data: unknown,
  param: string,
  themeProps: { key: SxProps; value: SxProps }
): JSX.Element | null =>
  data ? (
    <GridWrapper
      gridColumns={2}
      child={
        <>
          <Typography sx={themeProps.key}>{`${param}:`}</Typography>
          <Typography sx={themeProps.value}>{data as string}</Typography>
        </>
      }
    />
  ) : null;

export { keyValueText };

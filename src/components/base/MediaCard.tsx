import type { FC, ReactElement } from 'react';
import type { SxProps } from '@mui/system';
import type { Theme } from '@mui/material/styles';
import { CardMedia } from '@mui/material';

type MediaCardProps = {
  images: Record<string, { default: string }>;
  data: unknown & { _id?: string };
  dataType: string;
  sx?: SxProps<Theme>;
  testId?: string;
  customId?: string;
};

const MediaCard: FC<MediaCardProps> = ({
  images,
  data,
  dataType,
  sx,
  testId,
  customId,
}): ReactElement => (
  <CardMedia
    sx={sx}
    component={'img'}
    image={
      images[`/src/assets/${dataType}/${customId ?? data._id + '.png'}`]
        ?.default
    }
    title={`${dataType}-${data._id}`}
    data-testid={testId ? `${testId}-${data._id}` : undefined}
  />
);

export default MediaCard;

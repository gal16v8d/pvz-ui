import { Card, CardContent, CardMedia, Chip, Typography } from '@mui/material';
import { FC } from 'react';
import { Garden } from '../../api/models';

interface GardenCardProps {
  data: unknown;
}

const GardenCard: FC<GardenCardProps> = ({ data }) => {
  const garden = data as Garden;

  return (
    <Card
      sx={{
        backgroundColor: 'rgb(102,51,0)',
        maxWidth: '350',
        fontSize: '0.875rem',
        fontWeight: '700',
      }}
    >
      <CardMedia
        sx={{ height: 280 }}
        image={`/assets/gardens/${garden._id}.png`}
        title={`garden-${garden._id}`}
      />
      <CardContent>
        <Typography
          sx={{
            color: 'green',
            textTransform: 'uppercase',
            typography: 'title',
          }}
          component={'div'}
        >
          {garden.name}
        </Typography>
        <Typography sx={{ color: 'white', typography: 'body1' }}>
          {`Max Plants: ${garden.max_plants}`}
        </Typography>
        {garden.coin_helper && <Chip label={'Coin Helper'} color="primary" />}
      </CardContent>
    </Card>
  );
};

export default GardenCard;

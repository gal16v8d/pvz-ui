import { Card, CardContent, Typography } from '@mui/material';
import { FC } from 'react';
import { Item } from '../../api/models';

interface ItemCardProps {
  data: unknown;
}

const ItemCard: FC<ItemCardProps> = ({ data }) => {
  const item = data as Item;

  return (
    <Card
      sx={{
        backgroundColor: 'rgb(102,51,0)',
        maxWidth: '350',
        fontSize: '0.875rem',
        fontWeight: '700',
      }}
    >
      <CardContent>
        <Typography
          sx={{
            color: 'green',
            textTransform: 'uppercase',
            typography: 'title',
          }}
          component={'div'}
        >
          {item.name}
        </Typography>
        <Typography sx={{ color: 'white', typography: 'body1' }}>
          {item.note}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ItemCard;

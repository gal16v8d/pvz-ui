import { Card, CardContent, Typography } from '@mui/material';
import { FC } from 'react';
import { Item } from '../../api/models';
import { cardThemeBrownSx } from '../../constants/theme';

interface ItemCardProps {
  data: unknown;
}

const ItemCard: FC<ItemCardProps> = ({ data }): JSX.Element => {
  const item = data as Item;

  return (
    <Card sx={cardThemeBrownSx.base}>
      <CardContent>
        <Typography sx={cardThemeBrownSx.title} component={'div'}>
          {item.name}
        </Typography>
        <Typography sx={cardThemeBrownSx.body}>{item.note}</Typography>
      </CardContent>
    </Card>
  );
};

export default ItemCard;

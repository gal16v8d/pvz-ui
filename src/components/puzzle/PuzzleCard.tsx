import { VASEBREAKER, type Puzzle } from '@/api/models';
import { PUZZLE_IMAGES } from '@/constants/constants';
import { cardThemeGraySx } from '@/constants/theme';
import { usePvZContext } from '@/provider/PvZContext';
import { Card, CardContent, Chip, Typography } from '@mui/material';
import type { FC, ReactElement } from 'react';
import MediaCard from '../base/MediaCard';

interface PuzzleCardProps {
  data: unknown;
}

const PuzzleCard: FC<PuzzleCardProps> = ({ data }): ReactElement => {
  const { t } = usePvZContext();
  const puzzle = data as Puzzle;

  const getCardMedia = (dataInfo: Puzzle): string => {
    if (dataInfo.category === VASEBREAKER) {
      return `vasebreak${dataInfo.with_streak ? '_inf' : ''}.png`;
    } else {
      return `I_zombie${dataInfo.with_streak ? '_inf' : ''}.png`;
    }
  };

  return (
    <Card sx={cardThemeGraySx.base}>
      <MediaCard
        images={PUZZLE_IMAGES}
        data={puzzle}
        dataType="puzzles"
        sx={cardThemeGraySx.media}
        customId={getCardMedia(puzzle)}
      />
      <CardContent>
        <Typography sx={cardThemeGraySx.title} component={'div'}>
          {puzzle.name}
        </Typography>
        <Chip label={puzzle.category} color="primary" />
        {puzzle.with_streak && (
          <Chip label={t('components.puzzle.streak')} color="primary" />
        )}
      </CardContent>
    </Card>
  );
};

export default PuzzleCard;

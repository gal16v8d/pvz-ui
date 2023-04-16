import { Puzzle, PuzzleCategory } from '@/api/models';
import { cardThemeGraySx } from '@/constants/theme';
import { usePvZContext } from '@/provider/PvZProvider';
import { Card, CardContent, CardMedia, Chip, Typography } from '@mui/material';
import { FC } from 'react';

interface PuzzleCardProps {
  data: unknown;
}

const PuzzleCard: FC<PuzzleCardProps> = ({ data }): JSX.Element => {
  const { t } = usePvZContext();
  const puzzle = data as Puzzle;

  const getCardMedia = (puzzle: Puzzle): string => {
    if (puzzle.category === PuzzleCategory.Vasebreaker) {
      return `vasebreak${puzzle.with_streak ? '_inf' : ''}.png`;
    } else {
      return `I_zombie${puzzle.with_streak ? '_inf' : ''}.png`;
    }
  };

  return (
    <Card sx={cardThemeGraySx.base}>
      <CardMedia
        sx={cardThemeGraySx.media}
        image={`/assets/puzzles/${getCardMedia(puzzle)}`}
        title={`puzzle-${puzzle._id}`}
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

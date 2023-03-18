import { Card, CardContent, CardMedia, Chip, Typography } from '@mui/material';
import { FC } from 'react';
import { Puzzle, PuzzleCategory } from '../../api/models';

interface PuzzleCardProps {
  data: unknown;
}

const PuzzleCard: FC<PuzzleCardProps> = ({ data }) => {
  const puzzle = data as Puzzle;

  const getCardMedia = (puzzle: Puzzle) => {
    if (puzzle.category === PuzzleCategory.Vasebreaker) {
      return `vasebreak${puzzle.with_streak ? '_inf' : ''}.png`;
    } else {
      return `I_zombie${puzzle.with_streak ? '_inf' : ''}.png`;
    }
  };

  return (
    <Card
      sx={{
        backgroundColor: 'rgb(192,192,192)',
        maxWidth: '350',
        fontSize: '0.875rem',
        fontWeight: '700',
      }}
    >
      <CardMedia
        sx={{ height: 180, border: 'solid 2px rgb(192,192,192)' }}
        image={`/assets/puzzles/${getCardMedia(puzzle)}`}
        title={`puzzle-${puzzle._id}`}
      />
      <CardContent>
        <Typography
          sx={{
            backgroundColor: 'rgb(211,211,211)',
            typography: 'title',
            border: 'solid 2px rgb(211,211,211)',
            padding: '0.2rem',
            color: 'rgb(75,104,184)',
          }}
          component={'div'}
        >
          {puzzle.name}
        </Typography>
        <Chip label={puzzle.category} color="primary" />
        {puzzle.with_streak && <Chip label={'Streak'} color="primary" />}
      </CardContent>
    </Card>
  );
};

export default PuzzleCard;

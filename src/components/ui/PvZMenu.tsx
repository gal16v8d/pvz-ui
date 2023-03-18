import { ArrowForward, FormatListBulleted } from '@mui/icons-material';
import {
  Box,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  SwipeableDrawer,
} from '@mui/material';
import { TFunction } from 'i18next';
import { FC, useState } from 'react';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { API_BASE_CONFIG } from '../../config/ApiBaseConfig';
import { usePvZContext } from '../../provider/PvZProvider';

const DEFAULT_ANCHOR = 'left';

const mapApiToMenu = (
  t: TFunction<'translation', undefined>,
  navigate: NavigateFunction
) =>
  API_BASE_CONFIG.map((data) => {
    return {
      label: t(`menu.${data.name}`),
      command: () => navigate(data.route),
    };
  });

type SwipeableAnchorType = 'left' | 'right' | 'top' | 'bottom';

const PvZMenu: FC = () => {
  const { t } = usePvZContext();
  const navigate = useNavigate();
  const options = mapApiToMenu(t, navigate);
  const [anchorState, setAnchorState] = useState({ left: false });

  const toggleDrawer =
    (anchor: SwipeableAnchorType, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setAnchorState({ ...anchorState, [anchor]: open });
    };

  const menuOptions = (anchor: SwipeableAnchorType) => (
    <Box
      sx={{
        background: 'var(--gray-900)',
        backgroundColor: 'var(--gray-900)',
        color: '#fff',
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {options.map((option) => (
          <ListItem key={option.label} onClick={option.command}>
            <ListItemIcon>
              <ArrowForward sx={{ color: '#fff' }} />
            </ListItemIcon>
            <ListItemText primary={option.label} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <IconButton
        className="menuButton"
        aria-label="more"
        id="menu-button"
        aria-haspopup="true"
        onClick={toggleDrawer(DEFAULT_ANCHOR, true)}
        sx={{
          background: 'var(--primary-color)',
          color: 'var(--primary-color-text)',
          border: '1px solid var(--primary-color)',
        }}
      >
        <FormatListBulleted />
      </IconButton>
      <SwipeableDrawer
        sx={{ backgroundColor: '#fff0' }}
        anchor={DEFAULT_ANCHOR}
        open={anchorState[DEFAULT_ANCHOR]}
        onClose={toggleDrawer(DEFAULT_ANCHOR, false)}
        onOpen={toggleDrawer(DEFAULT_ANCHOR, true)}
      >
        {menuOptions(DEFAULT_ANCHOR)}
      </SwipeableDrawer>
    </div>
  );
};

export default PvZMenu;

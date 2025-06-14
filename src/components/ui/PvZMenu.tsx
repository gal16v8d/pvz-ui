import { API_BASE_CONFIG } from '@/config/ApiBaseConfig';
import { menuTheme } from '@/constants/theme';
import { usePvZContext } from '@/provider/PvZContext';
import type { PvZSwipeableAnchorType } from '@/types/anchor';
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
import type { TFunction } from 'i18next';
import type { FC, ReactElement } from 'react';
import { useState } from 'react';
import type { NavigateFunction } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

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

const PvZMenu: FC = (): ReactElement => {
  const { t } = usePvZContext();
  const navigate = useNavigate();
  const options = mapApiToMenu(t, navigate);
  const [anchorState, setAnchorState] = useState({ left: false });

  const toggleDrawer =
    (anchor: PvZSwipeableAnchorType, open: boolean) => () => {
      setAnchorState({ ...anchorState, [anchor]: open });
    };

  const menuOptions = (anchor: PvZSwipeableAnchorType) => (
    <Box
      sx={menuTheme.body}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
    >
      <List>
        {options.map((option) => (
          <ListItem key={option.label} onClick={option.command}>
            <ListItemIcon>
              <ArrowForward sx={menuTheme.body} />
            </ListItemIcon>
            <ListItemText primary={option.label} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <IconButton
        className="menuButton"
        aria-label="more"
        id="menu-button"
        aria-haspopup="true"
        onClick={toggleDrawer(DEFAULT_ANCHOR, true)}
        sx={menuTheme.button}
      >
        <FormatListBulleted />
      </IconButton>
      <SwipeableDrawer
        PaperProps={{ sx: menuTheme.drawer }}
        anchor={DEFAULT_ANCHOR}
        open={anchorState[DEFAULT_ANCHOR]}
        onClose={toggleDrawer(DEFAULT_ANCHOR, false)}
        onOpen={toggleDrawer(DEFAULT_ANCHOR, true)}
      >
        {menuOptions(DEFAULT_ANCHOR)}
      </SwipeableDrawer>
    </>
  );
};

export default PvZMenu;

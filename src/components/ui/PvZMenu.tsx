import { FormatListBulleted } from '@mui/icons-material';
import { IconButton, Menu, MenuItem } from '@mui/material';
import { TFunction } from 'i18next';
import { FC, useState } from 'react';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { API_BASE_CONFIG } from '../../config/ApiBaseConfig';
import { usePvZContext } from '../../provider/PvZProvider';

const ITEM_HEIGHT = 48;

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

const PvZMenu: FC = () => {
  const { t } = usePvZContext();
  const navigate = useNavigate();
  const options = mapApiToMenu(t, navigate);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        className="menuButton"
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
        sx={{
          background: 'var(--primary-color)',
          color: 'var(--primary-color-text)',
          border: '1px solid var(--primary-color)',
        }}
      >
        <FormatListBulleted />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
        {options.map((option) => (
          <MenuItem
            key={option.label}
            onClick={() => {
              handleClose();
              option.command();
            }}
          >
            {option.label}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default PvZMenu;

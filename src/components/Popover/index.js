import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import { IconButton, Popover } from "@mui/material";
import { useState } from 'react';


export function BasicPopover() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      {/* <Button aria-describedby={id} variant="contained" onClick={handleClick}> */}
      <IconButton aria-label="thumbUp" size="large" onClick={handleClick}>
        <ThumbUpOffAltIcon color='secondary' fontSize="inherit" />
      </IconButton>
      {/* </Button> */}

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <p>sign in to interact.</p>
      </Popover>
    </div>
  );
}

import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import InfoIcon from '@material-ui/icons/Info';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import ChromeReaderModeIcon from '@material-ui/icons/ChromeReaderMode';
import AssignmentIcon from '@material-ui/icons/Assignment';

import Link from '@material-ui/core/Link';

import './css/listItems.css';

export const mainListItems = (
  <div>
    <ListSubheader inset>M E N U</ListSubheader>
    <Link color="inherit" href="/">
      <ListItem button>
        <ListItemIcon>
          <InfoIcon />
        </ListItemIcon>
        <ListItemText primary="Information" />
      </ListItem>
    </Link>
    <Link color="inherit" href="/order">
      <ListItem button>
        <ListItemIcon>
          <RestaurantIcon />
        </ListItemIcon>
        <ListItemText primary="Order" />
      </ListItem>
    </Link>
    <Link color="inherit" href="/management">
      <ListItem button>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Order Management" />
      </ListItem>
    </Link>
    <Link color="inherit" href="/report">
      <ListItem button>
        <ListItemIcon>
          <ChromeReaderModeIcon />
        </ListItemIcon>
        <ListItemText primary="Order Report" />
      </ListItem>
    </Link>
  </div>
);

import * as React from "react";
import { ListItem, ListItemText } from "@mui/material";
import { Dashboard as DashboardIcon, ListItemIcon } from "@mui/icons-material";

export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
  </div>
);

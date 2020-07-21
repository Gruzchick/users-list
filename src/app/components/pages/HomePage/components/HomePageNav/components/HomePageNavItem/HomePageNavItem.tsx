import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import React, { FC } from 'react';
import { useRouteMatch } from 'react-router';
import { Link as RouterLink } from 'react-router-dom';

type Props = {
  item: {
    label: string;
    to: string;
  };
};

export const HomePageNavItem: FC<Props> = ({ item }) => {
  const { label, to } = item;

  const match = useRouteMatch({
    path: to,
    exact: false,
  });

  return (
    <ListItem to={to} component={RouterLink} button selected={Boolean(match)}>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary={label} />
    </ListItem>
  );
};

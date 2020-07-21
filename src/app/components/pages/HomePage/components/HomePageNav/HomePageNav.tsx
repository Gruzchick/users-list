import List from '@material-ui/core/List';
import React, { FC } from 'react';

import { AnotherSection } from '../sections/AnotherSection';
import { UsersListSection } from '../sections/UsersListSection';
import { HomePageNavItem } from './components/HomePageNavItem';

export const listOfAppLayoutNavItems = [
  { to: '/users-list', label: 'Users List', component: UsersListSection },
  {
    to: '/another-section',
    label: 'Another Section',
    component: AnotherSection,
  },
];

export const HomePageNav: FC = () => {
  return (
    <List>
      {listOfAppLayoutNavItems.map((item) => (
        <HomePageNavItem key={item.to} item={item} />
      ))}
    </List>
  );
};

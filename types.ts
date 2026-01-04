
import React from 'react';

export enum NavTab {
  HOME = 'Home',
  SERVICE = 'Service',
  MENU = 'Menu',
  RECORD = 'Record',
  MINE = 'Mine'
}

export interface MenuItem {
  id: string;
  label: string;
  // Fix: Import React to resolve 'React' namespace for ReactNode
  icon: React.ReactNode;
  path: string;
}

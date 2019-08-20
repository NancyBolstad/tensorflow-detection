import * as React from 'react';
import {Routes} from 'universal-router';

const routes: Routes<any, {default: React.ComponentType}> = [
  {
    path: '/',
    action: () => import('../views/screen/EyeTracking'),
  },
];

export default routes;

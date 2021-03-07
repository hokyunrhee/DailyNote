import React from 'react';
import {
  Scene,
  Router,
  ActionConst,
  Tabs,
  Stack,
} from 'react-native-router-flux';

import Intro from '../screens/Intro';
import Login from '../screens/Login';

const router = () => {
  return (
    <Router>
      <Stack key="root">
        <Scene
          key="login"
          hideNavBar
          component={Login}
          getstureSEnabled={false}
          panHandlers={null}
        />
      </Stack>
    </Router>
  );
};

export default router;

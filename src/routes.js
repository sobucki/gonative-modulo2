import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Welcome from '~/pages/Welcome';
import Repository from '~/pages/Repository';

const Routes = (userLogged = false) => createAppContainer(
  createSwitchNavigator(
    {
      Welcome,
      Repository,
    },
    {
      initialRouteName: userLogged ? 'Repository' : 'Welcome',
    },
  ),
);

export default Routes;

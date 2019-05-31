import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Welcome from '~/pages/Welcome';
import Repository from '~/pages/Repository';

const Routes = createAppContainer(
  createSwitchNavigator({
    Welcome,
    Repository,
  }),
);

export default Routes;

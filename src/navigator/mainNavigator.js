import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import NotificationList200575Navigator from '../features/NotificationList200575/navigator';
import Settings200574Navigator from '../features/Settings200574/navigator';
import Settings200566Navigator from '../features/Settings200566/navigator';
import UserProfile200564Navigator from '../features/UserProfile200564/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
NotificationList200575: { screen: NotificationList200575Navigator },
Settings200574: { screen: Settings200574Navigator },
Settings200566: { screen: Settings200566Navigator },
UserProfile200564: { screen: UserProfile200564Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;

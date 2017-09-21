// import { DrawerNavigator, StackNavigator } from 'react-navigation';
//
// import Landing from '../screens/Landing';
// import MyHomeScreen from '../screens/Home';
// import CallUber from '../screens/CallUber';
// import Contacts from '../screens/Contacts';
// import About from '../screens/About';
// import Tutorial from '../screens/Tutorial';
// import MyNineOneOne from '../screens/NineOneOne';
//
// import Profile from '../components/icons/Profile';
// import OrderUber from '../components/icons/Uber';
// import Call911 from '../components/icons/Call911';
// import EmergencyContacts from '../components/icons/EmergencyContacts';
// import AboutIcon from '../components/icons/About';
// import LogoutIcon from '../components/icons/Logout';
// import TutorialIcon from '../components/icons/Tutorial';
//
// import Logout from '../components/buttons/Logout';
//
// export const HomeScreen = DrawerNavigator({
//   Home: {
//     screen: MyHomeScreen,
//     navigationOptions: {
//       drawerLabel: Profile,
//     },
//   },
//   Uber: {
//     screen: CallUber,
//     navigationOptions: {
//       drawerLabel: OrderUber
//     },
//   },
//   NineOneOne: {
//     screen: MyNineOneOne,
//     navigationOptions: {
//       drawerLabel: Call911,
//     },
//   },
//   Contacts: {
//     screen: Contacts,
//     navigationOptions: {
//       drawerLabel: EmergencyContacts,
//     },
//   },
//   About: {
//     screen: About,
//     navigationOptions: {
//       drawerLabel: AboutIcon,
//     },
//   },
//   Tutorial: {
//     screen: Tutorial,
//     navigationOptions: {
//       drawerLabel: TutorialIcon,
//     },
//   },
//   Logout: {
//     screen: Logout,
//     navigationOptions: {
//       drawerLabel: LogoutIcon,
//     },
//   },
// });
//
// export const Root = StackNavigator({
//   Landing: {
//     screen: Landing,
//   },
//   Home: {
//     screen: HomeScreen,
//     navigationOptions: {
//       gesturesEnabled: false,
//     },
//   },
// }, {
//   headerMode: 'none',
// });

import { DrawerNavigator, StackNavigator } from 'react-navigation';

import Landing from '../screens/Landing';
import MyHomeScreen from '../screens/Home';
import CallUber from '../screens/CallUber';
import Contacts from '../screens/Contacts';
import About from '../screens/About';
import Tutorial from '../screens/Tutorial';
import MyNineOneOne from '../screens/NineOneOne';

import TutorialAbout from '../screens/tutorial/About';
import Heatmap from '../screens/tutorial/Heatmap';
import Legend from '../screens/tutorial/Legend';
import CrimeIcons from '../screens/tutorial/CrimeIcons';

import Profile from '../components/icons/Profile';
import OrderUber from '../components/icons/Uber';
import Call911 from '../components/icons/Call911';
import EmergencyContacts from '../components/icons/EmergencyContacts';
import AboutIcon from '../components/icons/About';
import LogoutIcon from '../components/icons/Logout';
import TutorialIcon from '../components/icons/Tutorial';

import Logout from '../components/buttons/Logout';

import DrawerMenu from '../screens/Menu';

// const contactNavigator = StackNavigator({
//   Contacts: {
//     screen: Contacts,
//     navigationOptions: ({navigation}) => ({
//       headerStyle: {backgroundColor: 'red'},
//       title: 'Contacts',
//       headerTintColor: 'white'
//     })
//   },
// });

const tutorialNavigator = StackNavigator({
  About: {
    screen: TutorialAbout
  },
  Heatmap: {
    screen: Heatmap
  },
  Legend: {
    screen: Legend
  },
  CrimeIcons: {
    screen: CrimeIcons
  }
}, {
  headerMode: 'none'
});

const stackNavigator = DrawerNavigator({
  Home: {
    screen: MyHomeScreen
  },
  Uber: {
    screen: CallUber
  },
  Contacts: {
    screen: Contacts
  },
  About: {
    screen: About
  },
  Tutorial: {
    screen: tutorialNavigator,
    navigationOptions: {
      gesturesEnabled: false,
    },
  },
  Logout: {
    screen: Logout
  },
}, {
  contentComponent: DrawerMenu,
});



export const Root = StackNavigator({
  Landing: {
    screen: Landing
  },
  Stack: {
    screen: stackNavigator
  }
}, {
  headerMode: 'none'
});

// export const Root = DrawerNavigator({
//   Landing: {
//     screen: Landing,
//     navigationOptions: {
//       drawerLockMode: 'locked-closed'
//     }
//   },
//   Home: {
//     screen: MyHomeScreen,
//     navigationOptions: {
//       gesturesEnabled: false,
//       header: null
//     },
//   },
//   Stack: {
//     screen: stackNavigator
//   }
// }, {
//   contentComponent: DrawerMenu,
// });

import { createAppContainer } from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer'
import {createStackNavigator} from 'react-navigation-stack'
/* import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'
import {createDrawerNavigator} from '@react-navigation/drawer' */
import HomeScreen from '../screens/Home/HomeScreen';
import CategoriesScreen from '../screens/Categories/CategoriesScreen';
import MenuItemScreen from '../screens/MenuItem/MenuItemScreen';
import MenuScreen from '../screens/Menu/MenuScreen';
import DrawerContainer from '../screens/DrawerContainer/DrawerContainer';
import IngredientScreen from '../screens/Ingredient/IngredientScreen';
import SearchScreen from '../screens/Search/SearchScreen';
import IngredientsDetailsScreen from '../screens/IngredientsDetails/IngredientsDetailsScreen';
import FeedBackScreen from '../screens/FeedBack/FeedBackScreen';
import WelcomeScreen from '../screens/Welcome/WelcomeScreen';
import LoginScreen from '../screens/Login/LoginScreen';
import SignUpScreen from '../screens/SignUp/SignUpScreen';
import ResetPasswordScreen from '../screens/ResetPassword/ResetPasswordScreen';

/* const Stack = createStackNavigator();

function MainNavigator() {
  return(
    <Stack.Navigator
      screenOptions={{
          headerTitleStyle: {
            fontWeight: 'bold',
            textAlign: 'center',
            alignSelf: 'center',
            flex: 1,
          }
      }}
    >
      <Stack.Screen name='Home' component={HomeScreen} />
      <Stack.Screen name='Categories' component={CategoriesScreen}/>
      <Stack.Screen name='Recipe' component={RecipeScreen}/>
      <Stack.Screen name='RecipesList' component={MenuScreen} />
      <Stack.Screen name='Ingredient' component={IngredientScreen} />
      <Stack.Screen name='Search' component={SearchScreen} />
      <Stack.Screen name='IngredientsDetails' component={IngredientsDetailsScreen} />
    </Stack.Navigator>
  )
} */

const MainNavigator = createStackNavigator(
  {
    
    // Welcome:WelcomeScreen,
    Home: HomeScreen,
    Categories: CategoriesScreen,
    MenuItem: MenuItemScreen,
    Menu: MenuScreen,
    Ingredient: IngredientScreen,
    Search: SearchScreen,
    IngredientsDetails: IngredientsDetailsScreen,
    FeedBack: FeedBackScreen,

  },
  {
    initialRouteName: 'Home',
    // headerMode: 'float',
    // defaultNavigationOptions: ({ navigation }) => ({
    //   headerTitleStyle: {
    //     fontWeight: 'bold',
    //     textAlign: 'center',
    //     alignSelf: 'center',
    //     flex: 1,
    //   }
    // })
  }
); 

const AuthStack = createStackNavigator(
  {
    
    Welcome:WelcomeScreen,
    Login: LoginScreen,
    SignUp: SignUpScreen,
    ResetPassword: ResetPasswordScreen,

  },
  {
    initialRouteName: 'Welcome',
   
  }
); 

/* const Drawer = createDrawerNavigator();

function DrawerStack() {
  return(
    <Drawer.Navigator
      drawerPosition='left'
      initialRouteName='Main'
      drawerStyle={{
        width: 250
      }}
      drawerContent={props=> DrawerContainer}
    >
      <Drawer.Screen name='Main' component={MainNavigator} />
    </Drawer.Navigator>
  )
} */

const DrawerStack = createDrawerNavigator(
  {
    Main: MainNavigator,
    // Welcome: {
    //   screen: WelcomeScreen,
    //     navigationOptions:{
    //       drawerLockMode: 'locked-closed'
    //     },
    // },
    // Login: {
    //   screen: LoginScreen,
    //     navigationOptions:{
    //       drawerLockMode: 'locked-closed'
    //     },
    // },
    // SignUp: {
    //   screen: SignUpScreen,
    //     navigationOptions:{
    //       drawerLockMode: 'locked-closed'
    //     },
    // },
    // ResetPassword: {
    //   screen: ResetPasswordScreen,
    //     navigationOptions:{
    //       drawerLockMode: 'locked-closed'
    //     },
    // },
  },
  {
    drawerPosition: 'left',
    initialRouteName: 'Main',
    // initialRouteName: 'Welcome',
    drawerWidth: 250,
    contentComponent: DrawerContainer
  }
);

/* export default function AppContainer() {
  return(
    <NavigationContainer>
      <DrawerStack/>
    </NavigationContainer>
  )
} */
 
export default AppContainer = createAppContainer(DrawerStack);
export default AuthContainer = createAppContainer(AuthStack);

console.disableYellowBox = true;
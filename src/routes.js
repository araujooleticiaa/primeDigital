import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './pages/Login';
import Escolher from './pages/Escolher';
import Details from './pages/Details';
import Store from './pages/Stores';
import Locker from './pages/Locker';
import Cart from './pages/Cart';
import Schedule from './pages/Schedule';



const AppStack = createStackNavigator();

export default function Routes() {
   return(
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
         <AppStack.Screen name="Login" component={Login} />
         <AppStack.Screen name="Escolher" component={Escolher} />
         <AppStack.Screen name="Details" component={Details} />
         <AppStack.Screen name="Store" component={Store} />
         <AppStack.Screen name="Locker" component={Locker} />
         <AppStack.Screen name="Cart" component={Cart} />
         <AppStack.Screen name="Schedule" component={Schedule} />
      </AppStack.Navigator>
   )
}

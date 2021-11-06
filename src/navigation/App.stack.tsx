import {calcFont} from '@constants/style/sizes';
import {createStackNavigator} from '@react-navigation/stack';
import {Details} from '@screens';
import React from 'react';
import {I18nManager} from 'react-native';
import {IconButton} from 'react-native-paper';
import TabNavigation from './TabNavigation';
const Stack = createStackNavigator();
interface Props {}

const AppStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="Tabs"
        component={TabNavigation}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
};

export default AppStack;

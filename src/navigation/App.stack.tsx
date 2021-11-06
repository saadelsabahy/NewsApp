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
    <Stack.Navigator>
      <Stack.Screen
        name="Tabs"
        component={TabNavigation}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{
          headerLeft: props => (
            <IconButton
              icon={I18nManager.isRTL ? 'chevron-right' : 'chevron-left'}
              size={calcFont(25)}
              style={{padding: 0}}
              {...props}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default AppStack;

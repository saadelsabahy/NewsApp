import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useTheme} from '@react-navigation/native';
import {Explore, SettingsScreen} from '@screens';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

interface Props {}

const TabNavigation = () => {
  const {
    colors: {background},
  } = useTheme();
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: background},
        tabBarStyle: {backgroundColor: background},
      }} /* screenOptions={{headerShown: false}} */
    >
      <Tab.Screen
        name="News"
        component={Explore}
        options={{
          tabBarIcon: props => <Icon name="ios-home-outline" {...props} />,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: props => <Icon name="ios-settings-outline" {...props} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;

import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {useTheme} from '@react-navigation/native';
import {Explore, SettingsScreen} from '@screens';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

interface Props {}

const tabBarOPtions = ({
  label,
}: tabBarOPtionsProps): BottomTabNavigationOptions => {
  return {
    tabBarLabel: ({focused, color}) => <Text style={[{color}]}>{label}</Text>,
  };
};
const TabNavigation = () => {
  const {
    colors: {background},
  } = useTheme();
  const {t} = useTranslation();
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: background},
        tabBarStyle: {backgroundColor: background},
        headerShown: false,
      }}>
      <Tab.Screen
        name="News"
        component={Explore}
        options={{
          tabBarIcon: props => <Icon name="ios-home-outline" {...props} />,
          ...tabBarOPtions({label: t('tabs:news')}),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: props => <Icon name="ios-settings-outline" {...props} />,
          ...tabBarOPtions({label: t('tabs:settings')}),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;

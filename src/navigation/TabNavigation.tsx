import {calcFont} from '@constants/style/sizes';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {useTheme} from '@react-navigation/native';
import {Explore, SettingsScreen} from '@screens';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

interface tabBarOPtionsProps {
  label: string;
}

const tabBarOPtions = ({
  label,
}: tabBarOPtionsProps): BottomTabNavigationOptions => {
  return {
    tabBarLabel: ({color}) => (
      <Text style={[styles.tabLabel, {color}]}>{label}</Text>
    ),
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
const styles = StyleSheet.create({
  tabLabel: {
    fontSize: calcFont(12),
    textTransform: 'capitalize',
  },
});

export default TabNavigation;

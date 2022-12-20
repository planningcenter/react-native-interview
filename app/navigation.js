import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { DefaultTheme, NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { StatusBar } from 'react-native'
import { Icon, ICON_PATHS } from './components/icon'
import { Leaderboard } from './screens/leaderboard'
import { Dashboard } from './screens/dashboard'

const TabNavigator = createBottomTabNavigator()
const { Screen, Navigator } = TabNavigator

const colors = {
  ...DefaultTheme.colors,
  primary: '#fff',
}

export const NavigationTheme = {
  colors,
}

export const MainNavigation = () => {
  return (
    <NavigationContainer theme={NavigationTheme}>
      <StatusBar barStyle={'light-content'} translucent={true} />
      <Navigator
        initialRouteName="Dashboard"
        screenOptions={() => ({ tabBarStyle: { backgroundColor: '#323842' } })}>
        <Screen
          name="Dashboard"
          component={Dashboard}
          options={({ route }) => ({
            title: route.params?.name || 'PCO React Native Interview',
            tabBarLabel: 'Dashboard',
            tabBarIcon: () => (
              <Icon
                path={ICON_PATHS.general.pico}
                height={16}
                width={16}
                fill={'white'}
              />
            ),
          })}
        />
        <Screen
          name="Leaderboard"
          component={Leaderboard}
          options={({ route }) => ({
            title: route.params?.name || 'Top scores',
            tabBarLabel: 'Leaderboard',
            tabBarIcon: () => (
              <Icon
                path={ICON_PATHS.general.cog}
                height={16}
                width={16}
                fill={'white'}
              />
            ),
          })}
        />
      </Navigator>
    </NavigationContainer>
  )
}

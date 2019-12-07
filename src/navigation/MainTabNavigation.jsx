import React from 'react';
import { Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import watchlists from '../watchlists';
import investments from '../investments';
import account from '../account';
import playground from '../playground';

import accountIcon from '../../assets/icons/bottom-tab/me.png';
import watchlistsIcon from '../../assets/icons/bottom-tab/watchlists.png';
import investmentsIconActive from '../../assets/icons/bottom-tab/investments-active.png';
import stockDetails from '../stockDetails';

const InvestmentsStack = createStackNavigator({
  Investments: {
    screen: investments,
    path: 'investments/',
  },
});

const WatchlistsStack = createStackNavigator({
  Watchlists: {
    screen: watchlists,
    path: 'watchlists/',
  },
});

const AccountStack = createStackNavigator({
  Account: {
    screen: account,
    path: 'account/',
  },
});

const PlaygroundStack = createStackNavigator({
  Playground: playground,
  StockDetails: stockDetails,
});

const renderIcon = (icon, tintColor) => (<Image source={icon} style={{ tintColor }} />);

const tabs = {
  ...(process.env.NODE_ENV === 'development' && { Playground: PlaygroundStack }),
  Investments: {
    screen: InvestmentsStack,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => renderIcon(investmentsIconActive, tintColor),
    },
  },
  Watchlists: {
    screen: WatchlistsStack,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => renderIcon(watchlistsIcon, tintColor),
    },
  },
  Me: {
    screen: AccountStack,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => renderIcon(accountIcon, tintColor),
    },
  },
};

const BottomTabNavigatorConfig = {
  tabBarOptions: {
    activeTintColor: '#566ed3',
    inactiveTintColor: '#999999',
  },
};

const TabNavigator = createBottomTabNavigator(tabs, BottomTabNavigatorConfig);
export default createAppContainer(TabNavigator);

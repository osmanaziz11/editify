/* eslint-disable prettier/prettier */
import React from 'react';
import {CustomText} from './';
import * as icons from '../assets/icons';
import GradientContainer from './GradientContainer';
import {GradientColor, PoppinsSemiBold, PrimaryColor} from '../theme';
import {View, Pressable, StyleSheet} from 'react-native';
import {responsiveFontSize} from 'react-native-responsive-dimensions';

const TAB_CONFIG = {
  Home: {
    icon: icons.Home,
  },
  Search: {
    icon: icons.Search,
  },
  Editor: {
    icon: icons.Box,
  },
  Profile: {
    icon: icons.Profile,
  },
};

export default function Tabs({navigation, state}) {
  return (
    <View style={[styles.parentContainer]}>
      <GradientContainer containerStyle={styles.container}>
        {state.routes.map(route => {
          const Icon = TAB_CONFIG[route.name].icon;
          const isFocused = state.routes[state.index].name === route.name;

          const onPress = () => {
            if (isFocused) {
              return;
            }
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          return (
            <Pressable
              key={route.key}
              style={[styles.tab, isFocused && styles.tabActive]}
              onPress={onPress}>
              <Icon
                size={responsiveFontSize(isFocused ? 3.5 : 3)}
                color={isFocused ? GradientColor : '#FFF'}
              />
              {isFocused && (
                <CustomText
                  size={responsiveFontSize(2)}
                  style={[
                    styles.tabText,
                    {color: isFocused ? GradientColor : ''},
                  ]}>
                  {route.name}
                </CustomText>
              )}
            </Pressable>
          );
        })}
      </GradientContainer>
    </View>
  );
}

export const styles = StyleSheet.create({
  parentContainer: {
    bottom: 20,
    position: 'absolute',
    width: '100%',
    paddingHorizontal: 20,
  },

  container: {
    height: 60,
    borderRadius: 100,

    padding: 5,
    elevation: 15,

    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  tab: {
    height: '100%',
    paddingHorizontal: 19,

    borderRadius: 5,
    borderColor: '#33C5EC',

    flexDirection: 'row',

    alignItems: 'center',
    justifyContent: 'center',
  },

  tabText: {
    marginTop: 7,
    marginRight: 3,
    fontFamily: PoppinsSemiBold,
  },

  tabActive: {
    width: '35%',
    elevation: 3,
    borderRadius: 40,
    backgroundColor: '#FFF',
  },
});

/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Bell, Box, Drawer, Home} from '../assets/icons';
import GradientText from './GradientText';
import {GradientColor, PrimaryColor} from '../theme';
import {responsiveFontSize} from 'react-native-responsive-dimensions';

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <Drawer size={35} />
      </View>
      <View style={styles.text}>
        <GradientText size={3} />
      </View>
      <View style={styles.icon}>
        <Bell size={20} />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 20,
    backgroundColor: PrimaryColor,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  text: {
    marginTop: 15,
  },
  icon: {
    borderWidth: 1,
    borderRadius: 50,
    width: responsiveFontSize(6),
    height: responsiveFontSize(6),
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: GradientColor,
  },
});

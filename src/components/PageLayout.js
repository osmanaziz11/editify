/* eslint-disable prettier/prettier */
import React from 'react';
import {PrimaryColor} from '../theme';
import {StyleSheet, View} from 'react-native';

const PageLayout = ({children}) => {
  return <View style={styles.container}>{children}</View>;
};

export default PageLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: PrimaryColor,
  },
});

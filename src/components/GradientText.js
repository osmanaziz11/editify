/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import {PoppinsSemiBold} from '../theme';
import {StarFour} from '../assets/icons';

const GradientEffect = ({colors, text, size}) => {
  const renderGradientText = () => {
    return text.split('').map((char, index) => {
      const colorIndex = Math.round(
        (index / (text.length - 1)) * (colors.length - 1),
      );
      const color = colors[colorIndex];
      return (
        <Text
          key={index}
          style={[
            {color},
            {fontSize: responsiveFontSize(size), fontFamily: PoppinsSemiBold},
          ]}>
          {char}
        </Text>
      );
    });
  };

  return (
    <View style={{flexDirection: 'row', justifyContent: 'center'}}>
      {renderGradientText()}
    </View>
  );
};

const GradientText = ({size = 4}) => {
  const axis = {
    top: responsiveFontSize(-0.3),
    left: responsiveFontSize(size - 0.5),
  };

  return (
    <View style={styles.container}>
      <GradientEffect
        colors={['#536DFE', '#6743EA', '#6A3DE8']}
        text="AI  Design"
        size={size}
      />
      <View style={[styles.icon, axis]}>
        <StarFour size={responsiveFontSize(size - 1)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },

  icon: {
    position: 'absolute',
  },
});
export default GradientText;

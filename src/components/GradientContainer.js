/* eslint-disable prettier/prettier */
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const GradientContainer = ({children, containerStyle}) => {
  return (
    <LinearGradient
      colors={['#536DFE', '#6743EA', '#6A3DE8']}
      style={containerStyle}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}>
      {children}
    </LinearGradient>
  );
};

export default GradientContainer;

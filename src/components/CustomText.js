/* eslint-disable prettier/prettier */
import React from 'react';
import {Text} from 'react-native';

const CustomText = ({
  children,
  color = '#333',
  size = 12,
  weight = 700,
  italic,
  center,
  style,
  ...props
}) => {
  const styles = {
    fontSize: size,
    color: color,
    textAlign: center ? 'center' : 'left',
  };
  return (
    <Text style={[styles, style]} {...props}>
      {children}
    </Text>
  );
};

export default CustomText;

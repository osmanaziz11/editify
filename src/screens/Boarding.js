/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {PoppinsMedium, PoppinsSemiBold, PrimaryColor} from '../theme';
import {CustomText} from '../components';
import LinearGradient from 'react-native-linear-gradient';
import {
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  ActivityIndicator,
} from 'react-native';
import {
  responsiveHeight,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import GradientText from '../components/GradientText';

const ActionBtn = ({isLoading = false, onPress = undefined}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <LinearGradient
        colors={['#536DFE', '#6743EA', '#6A3DE8']}
        style={styles.btn}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}>
        {isLoading ? (
          <ActivityIndicator size={15} color="#FFF" />
        ) : (
          <CustomText color="white" center style={styles.btnText}>
            Get Started
          </CustomText>
        )}
      </LinearGradient>
    </TouchableWithoutFeedback>
  );
};

const Boarding = ({navigation}) => {
  const [isLoading, setLoading] = useState(false);

  const handlePress = () => {
    setLoading(true);
    setLoading(false);
    navigation.navigate('tabs');
  };

  return (
    <View style={styles.container}>
      <CustomText size={responsiveFontSize(5)} center style={styles.topHeading}>
        The Wonders of Generative
      </CustomText>
      <GradientText />
      <CustomText center style={styles.bottomText}>
        There Are Many Variations Of Passages Of Lorem ispum available.{' '}
      </CustomText>
      <ActionBtn onPress={handlePress} isLoading={isLoading} />
    </View>
  );
};

export default Boarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'start',

    paddingHorizontal: 25,
    backgroundColor: PrimaryColor,
  },

  topHeading: {
    marginTop: responsiveHeight(10),
    fontFamily: 'Poppins-SemiBold',
  },

  bottomText: {
    fontFamily: PoppinsMedium,
    fontSize: responsiveFontSize(1.8),
  },

  btn: {
    borderRadius: 50,

    width: '60%',
    height: 54,

    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',

    bottom: 40,
    position: 'absolute',
  },

  btnText: {
    fontFamily: PoppinsSemiBold,
    fontSize: responsiveFontSize(2),
  },
});

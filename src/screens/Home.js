/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  GradientColor,
  PoppinsMedium,
  PoppinsRegular,
  PoppinsSemiBold,
  PrimaryColor,
  SecondaryColor,
} from '../theme';
import {CustomText} from '../components';
import {
  responsiveFontSize,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import {Arrow} from '../assets/icons';
import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
import {ImageBackground} from 'react-native';
import PageLayout from '../components/PageLayout';

const ImageBox = ({uri = ''}) => {
  return (
    <ImageBackground
      source={require('../assets/images/boarding.png')}
      style={styles.card}
    />
  );
};
export default function Home() {
  return (
    <PageLayout>
      <CustomText style={styles.heading} size={responsiveFontSize(3)} center>
        Search To Generate New Image With AI
      </CustomText>
      <View style={styles.uploadContainer}>
        <CustomText center color={GradientColor} size={responsiveFontSize(2)}>
          click,paste, or drop a file here to start
        </CustomText>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 10,
        }}>
        <Arrow color="#333" size={responsiveFontSize(2.5)} />
        <CustomText
          style={styles.bottomText}
          center
          color="#1E243F"
          size={responsiveFontSize(1.5)}>
          Or Click On An Example Below
        </CustomText>
      </View>
      <View style={styles.grid}>
        <ImageBox />
        <ImageBox />
        <ImageBox />
        <ImageBox />
      </View>
    </PageLayout>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontFamily: PoppinsMedium,
    marginTop: 30,
  },

  uploadContainer: {
    borderRadius: 11,
    borderWidth: 2,
    width: '100%',
    height: 85,
    marginTop: 20,
    borderStyle: 'dotted',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 70,
    borderColor: SecondaryColor,
  },

  bottomText: {
    marginTop: 6,
    fontFamily: PoppinsMedium,
  },

  grid: {
    marginTop: 10,
    height: height - 100 - 250,
    width: '100%',
    paddingVertical: 10,
    flexWrap: 'wrap',
    paddingHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  card: {
    height: responsiveScreenWidth(40),
    width: (width - 60) / 2,
    borderRadius: 10,
    backgroundColor: '#FFF',
    marginBottom: 15,
    elevation: 4,

    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
  },
});

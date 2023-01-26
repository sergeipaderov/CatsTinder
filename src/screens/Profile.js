import React from 'react';
import {SafeAreaView, StyleSheet, useColorScheme, View} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import NavBar from '../components/NavBar';

function Profile({navigation}) {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <View style={styles.homeContainer}></View>
      <NavBar navigation={navigation} screen="Profile" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  homeContainer: {
    height: '90%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: 40,
  },
});

export default Profile;

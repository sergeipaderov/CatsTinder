import React from 'react';
import {
  SafeAreaView,
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';

// Add SVG icons and add color's fill

const NavBar = ({navigation, screen = 'Home'}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.btnGroup}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('Home')}>
          <Image
            source={
              screen === 'Home'
                ? require('../assets/icons/home-active.png')
                : require('../assets/icons/home.png')
            }
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('Chat')}>
          <Image
            source={
              screen === 'Chat'
                ? require('../assets/icons/chat-active.png')
                : require('../assets/icons/chat.png')
            }
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('Profile')}>
          <Image
            source={
              screen === 'Profile'
                ? require('../assets/icons/profile-active.png')
                : require('../assets/icons/profile.png')
            }
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '10%',
    width: '100%',
  },
  btnGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 156,
    height: 44,
    borderRadius: 36,
    paddingVertical: 12,
    paddingHorizontal: 24,
    backgroundColor: '#FFFFFF',
    shadowColor: '#bfbfc0',
    shadowOffset: {width: 0, height: 10},
    shadowOpacity: 12,
    shadowRadius: 16,
    elevation: 5,
  },
  btn: {
    marginHorizontal: 10,
  },
});

module.exports = NavBar;

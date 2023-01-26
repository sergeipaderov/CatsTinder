import React from 'react';
import {
  SafeAreaView,
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';

// Add SVG icons and add color's fill

const CustomButton = ({icon = 'heart', handler}) => {
  return (
    <TouchableOpacity style={styles.btn} onPress={() => handler()}>
      <View style={styles.btnGroup}>
        <Image
          style={styles.img}
          source={
            icon === 'heart'
              ? require('../assets/icons/heart.png')
              : require('../assets/icons/close.png')
          }
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 48,
    height: 48,
    borderRadius: 36,
    paddingVertical: 19,
    paddingHorizontal: 19,
    backgroundColor: '#FFFFFF',
    shadowColor: '#bfbfc0',
    shadowOffset: {width: 0, height: 10},
    shadowOpacity: 12,
    shadowRadius: 16,
    elevation: 5,
  },
  img: {
    width: 26,
    height: 26,
  },
});

module.exports = CustomButton;

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const HomeScreen = () => {
  return (
    <LinearGradient colors={['#FDFFF4', '#BBC1AD']} style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.text}>Welcome to the Home Screen!</Text>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    color: 'black',
    fontSize: 28,
  },
});

export default HomeScreen;

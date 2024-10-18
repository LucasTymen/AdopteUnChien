/* eslint-disable react-native/no-inline-styles */
import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import LottieView from 'lottie-react-native'
import { useNavigation } from '@react-navigation/native'

const BasicInfo = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{flex:1, backgroundColor: "white"}}>
      <View>
        <Text
          style={{
            fontSize: 35,
            fontWeight: 'bold',
            fontFamily: 'GeezPro-Bold',
            marginLeft: 20,
          }}
        >
          You're one of kind.
        </Text>

        <Text
          style={{
            fontSize: 33,
            fontWeight: 'bold',
            fontFamily: 'GeezPro-Bold',
            marginLeft: 20,
            marginTop: 10,
          }}
        >
          You're profile should be too.
        </Text>
      </View>

      <View>
        <LottieView
          source={require('../assets/love.json')}
          style={{
            height: 260,
            width: 300,
            alignSelf: 'center',
            marginTop: 40,
            justifyContent: 'center',
          }}
          autoPlay
          loop={true}
          speed={0.7}
        />
      </View>

      <Pressable
        onPress={() => navigation.navigate('Name')}
        style={{ backgroundColor: "#900C3F", padding: 15, marginTop: 'auto' }}
      >
        <Text
          style={{ fontSize: 15, fontWeight: '600', color: 'white', textAlign: 'center' }}
        >
          Enter basic info
        </Text>
      </Pressable>
    </SafeAreaView>
  )
}

export default BasicInfo

const styles = StyleSheet.create({})
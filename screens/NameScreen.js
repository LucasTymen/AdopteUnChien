/* eslint-disable jsx-quotes */
import { Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

const NameScreen = () => {
  const [firstName, setFirstName] = useState('');
  const navigation = useNavigation();

  const handleNext = () => {
    if (firstName.trim() !== '') {
      // TODO: Save the current progress data including the name
    }

    navigation.navigate('Email');
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <Text style={{ marginTop: 50, textAlign: 'center', color: 'gray' }}>
        NO BACKGROUND CHECKS ARE CONDUCTED
      </Text>

      <View style={{ marginTop: 30, marginHorizontal: 20 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View style={{ width: 44, height: 44, borderRadius: 22, borderWidth: 2, borderColor: 'black', justifyContent: 'center', alignItems: 'center' }}>
            <MaterialCommunityIcons name='newspaper-variant-outline' size={35} color='black' />
          </View>

          <Image
            style={{ width: 100, height: 40 }}
            source={{ uri: 'https://cdn-icons-png.flaticon.com/128/10613/10613685.png' }}
          />
        </View>

        <View style={{ marginTop: 30 }}>
          <Text style={{ fontSize: 25, fontWeight: 'bold', fontFamily: 'GeezPro-Bold' }}>
            What's your name?
          </Text>

          <TextInput
            autoFocus
            value={firstName}
            onChangeText={text => setFirstName(text)}
            style={{
              width: 340,
              marginVertical: 10,
              fontSize: firstName ? 22 : 22,
              marginTop: 25,
              borderBottomColor: 'black',
              borderBottomWidth: 1,
              paddingBottom: 10,
              fontFamily: 'GeezPro-Bold',
            }}
            placeholder='FirstName'
            placeholderTextColor={'#BEBEBE'}
          />

          <TextInput
            style={{
              width: 340,
              marginVertical: 10,
              fontSize: firstName ? 22 : 22,
              marginTop: 25,
              borderBottomColor: 'black',
              borderBottomWidth: 1,
              paddingBottom: 10,
              fontFamily: 'GeezPro-Bold',
            }}
            placeholder='LastName'
            placeholderTextColor={'#BEBEBE'}
          />

          <Text style={{ fontSize: 15, color: 'gray', fontWeight: '500' }}>
            Last match is optionnal.
          </Text>
        </View>

        <TouchableOpacity
          onPress={handleNext}
          activeOpacity={0.8}
          style={{ marginTop: 30, marginLeft: 'auto' }}
        >
          <MaterialCommunityIcons
            name='arrow-right-circle'
            size={45}
            color={'#581845'}
            style={{ alignSelf: 'center', marginTop: 20 }}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default NameScreen

const styles = StyleSheet.create({})
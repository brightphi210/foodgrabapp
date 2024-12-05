import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Image, Text, View } from 'react-native'
import Animated, { FadeInDown } from 'react-native-reanimated'
import { SafeAreaView } from 'react-native-safe-area-context'
import Button from './Button'
import { router } from 'expo-router'


export const EmptyCartItem = () => {
  return (
    <SafeAreaView className='flex-1 bg-white px-5 py-5'>
      <StatusBar />
      <View className='flex-row items-center gap-2' >
          <Text className='text-lg' style={{fontFamily: 'SoraBold'}}>My Cart</Text>
      </View>

      <View className='flex-1 justify-center items-center m-auto'>
        <View className=''>
          <Animated.View className='flex-row m-auto justify-center' entering={FadeInDown.duration(100).delay(200).springify()}>
              <Image source={require('../assets/images/Box.png')} />
          </Animated.View>

          <Animated.View className='my-5' entering={FadeInDown.duration(300).delay(300).springify()}>
            <Text className='text-sm py-4 text-center' style={{fontFamily : 'SoraRegular'}}>Your Cart is Empty</Text>
          </Animated.View>

          <Animated.View className='flex-row m-auto justify-center' entering={FadeInDown.duration(400).delay(400).springify()}>
            <Button title='Add items to cart' action={()=>router.replace('/(tabs)')}/>
          </Animated.View>
        </View>
      </View>
    </SafeAreaView>
  )
}


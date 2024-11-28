import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { Image, Pressable, SafeAreaView, Text, View } from 'react-native'


const DashHeader = () => {
  return (
    <View className='flex-row items-center py-5'>

      <Pressable className='flex-row gap-3 items-center'>
        <Image source={require('../assets/images/profilepics.png')} className='w-7 h-7'/>
        <Text className='texl-lg' style={{fontFamily : 'SoraMedium'}}>Bright Philip</Text>
        <Ionicons name='chevron-down' size={15}/>
      </Pressable>

      <Pressable className='ml-auto bg-neutral-200 p-2 rounded-full flex justify-center items-center'>
        <Ionicons name='notifications-outline' size={20} color={''} className='text-green-600'/>
      </Pressable>
    </View>
  )
}

export default DashHeader

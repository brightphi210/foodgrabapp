
import { Ionicons } from '@expo/vector-icons'
import { router } from 'expo-router'
import { goBack } from 'expo-router/build/global-state/routing'
import React from 'react'
import { Pressable } from 'react-native'
import { Text, View } from 'react-native'

const BackArror = () => {
    
  return (
    <Pressable onPress={router.back} className='my-5 rounded-full bg-neutral-200 flex-row items-center justify-center w-10 h-10'>
      <Ionicons name='arrow-back' size={20} />
    </Pressable>
  )
}

export default BackArror

import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Image, View } from 'react-native'
import DashHeader from '~/components/DashHeader'
import { SafeAreaView } from 'react-native-safe-area-context'


const HomeDashboard = () => {
  return (
    <SafeAreaView className='flex-1 px-5'>
      <StatusBar />

      <View>
        <DashHeader />

        <View className=''>
          <Image source={require('../assets/images/banner.png')} className='w-[fit] h-[113px] object-cover'/>
        </View>
      </View>
      
    </SafeAreaView>
  )
}

export default HomeDashboard

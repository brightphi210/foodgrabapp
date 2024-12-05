import React, { useState } from 'react'
import { Image, Text, View } from 'react-native'
import BackArror from '~/components/BackArror'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { EmptyCartItem } from '~/components/EmptyCartItem'

const Cart = () => {

  const [isEmpty, setIsEmpty] = useState(false)
  return (

    <>
      {isEmpty ? <EmptyCartItem /> : 

      <SafeAreaView className='flex-1 bg-white px-5'>
        <BackArror />
        <StatusBar />

        <View className='flex-1'>
          <View>
          </View>

        </View>
      </SafeAreaView>
      }
    </>
  )
}

export default Cart

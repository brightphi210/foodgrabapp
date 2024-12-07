import React, { useContext, useState } from 'react'
import { Image, Pressable, Text, View } from 'react-native'
import BackArror from '~/components/BackArror'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { EmptyCartItem } from '~/components/EmptyCartItem'
import { useCart } from '../AuthContext'
import { ScrollView } from 'react-native-virtualized-view'
import GreenButton from '~/components/GreenButton'
import { Ionicons } from '@expo/vector-icons'
import { FlatList } from 'react-native'

const Cart = () => {

  const {cart} = useCart()
  const {clearCart} = useCart()

  // console.log('This is Carts', cart[0].items);

  const calculateTotalPrice = (items: any[]) => {
    const total = items.reduce((total, item) => {
      const price = parseFloat(item.price)
      return total + price
    }, 0)
    
    // Format the total with commas
    return total.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  }

  
  return (

    <>
      {cart.length === 0 ? <EmptyCartItem /> : 

      <SafeAreaView className='flex-1 bg-white px-5'>
        <StatusBar />

        <View className='flex-1'>
          <View className='flex-row items-center gap-3 w-full'>
            <BackArror />
            <Text style={{fontFamily : 'SoraSemiBold'}} className='text-base'>My Cart</Text>
            
            <Pressable onPress={clearCart} className='ml-auto bg-neutral-200 py-2 px-6 rounded-full'>
              <Text style={{fontFamily : 'SoraRegular text-sm'}}>Clear Cart</Text>
            </Pressable>
          </View>

          <ScrollView showsVerticalScrollIndicator={false}>

            <View className='flex-col gap-4 pb-10 pt-5'>
            {cart.map((item, index)=>(
              <View key={index} className='border border-neutral-200 p-6 rounded-md'>
                <View className='flex-row gap-3 ' >

                  <View className='flex-row gap-2 '>

                    <View className='w-14 h-14 overflow-hidden rounded-full  justify-center items-center flex-row'>
                      <Image source={item.items[0].icon} className='w-full h-full object-cover'/>
                    </View>

                    <View className=''>
                      {item.items.slice(0, 1).map((item, index) =>(
                        <Text key={index} style={{fontFamily : 'SoraSemiBold'}} className='text-sm'>{item.name}</Text>
                      )) }

                      <Text style={{fontFamily : 'SoraRegular'}} className='text-xs py-1'>{item.restaurant}</Text>
                      <Text key={index} style={{fontFamily : 'SoraRegular'}} className='text-xs text-neutral-500'>&#8358;{calculateTotalPrice(item.items)}</Text>
                    </View>
                  </View>

                  <Text className='ml-auto text-xs text-neutral-500' style={{fontFamily : 'SoraRegular'}}>{item.items.length} items</Text>
                </View>

                <View className='flex-col gap-4 items-center justify-center mt-4'>
                  <View className='flex-row gap-3'>
                    <GreenButton title='Checkout'/>
                    <Pressable className=' border border-green-800 rounded-md justify-center flex flex-row gap-1 items-center py-3 w-[50%]'>
                      <Text className='text-green-900 font-bold text-xs'>View Selection</Text>
                      <Ionicons name='chevron-down' color={'green'}/>
                    </Pressable>
                  </View>
                  <Pressable className='flex-row items-center gap-2 bg-ne'>
                    <Text style={{fontFamily : 'SoraRegular'}} className='text-center text-sm text-green-800'>Remove Item</Text>
                    <Ionicons name='arrow-forward' color={'green'}/>
                  </Pressable>
                </View>
              </View>
            ))}
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
      }
    </>
  )
}

export default Cart

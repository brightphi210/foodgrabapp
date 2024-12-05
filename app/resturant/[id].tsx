import React, { useState } from 'react'
import { Alert, FlatList, Image, Pressable, Text, View } from 'react-native'

import { useLocalSearchParams } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import BackArror from '~/components/BackArror'
import { StatusBar } from 'expo-status-bar'
import { myData } from '~/components/Data'
import { Ionicons } from '@expo/vector-icons'
import { Cusines } from '~/components/Cuisines'
import { ScrollView } from 'react-native-virtualized-view';
import Button from '~/components/Button'
import AsyncStorage from '@react-native-async-storage/async-storage';


const SingleResturant = () => {
  
  const {id} = useLocalSearchParams()
  const restaurant = myData.find((r) => r.id === id);
  console.log('This is the restaurant', restaurant?.cuisine);

  const [isAll, setIsAll] = useState(true)
  const [isNew, setIsNew] = useState(false)
  const [selectedItems, setSelectedItems] = useState<any>([])


  const handleIsAll = ()=>{
    setIsAll(true)
    setIsNew(false)
  }

  const handleIsNew = ()=>{
    setIsNew(true)
    setIsAll(false)
  }


  const addToCart = async () => {
    if (selectedItems.length === 0) {
      Alert.alert('Error', 'Please select items to add to cart')
      return
    }

    try {
      const cartData = await AsyncStorage.getItem('cart')
      let cart = cartData ? JSON.parse(cartData) : []
      
      cart = [...cart, ...selectedItems]
      await AsyncStorage.setItem('cart', JSON.stringify(cart))
      
      Alert.alert('Success', 'Items added to cart')
      setSelectedItems([])
    } catch (error) {
      console.error('Error adding to cart:', error)
      Alert.alert('Error', 'Failed to add items to cart')
    }
  }

  const toggleItemSelection = (item: any) => {
    setSelectedItems((prevItems :any) => {
      const itemIndex = prevItems.findIndex((i:any) => i.id === item.id)
      if (itemIndex > -1) {
        return prevItems.filter((i:any) => i.id !== item.id)
      } else {
        // Item is not selected, add it
        return [...prevItems, item]
      }
    })
  }

  const ItemSeparator = () => <View style={{ height: 5 }} />;

  const renderHeader = () => (
    <>
      <StatusBar />

      <View className='flex-row justify-between items-center'>
        <Text className='text-sm' style={{fontFamily: 'SoraBold'}}>Kilimanjaro - Big Tree</Text>
        <Text className='ml-auto text-xs text-green-700' style={{fontFamily : 'SoraRegular'}}>Open till 06:300 pm</Text>
      </View>

      <View className='py-3'>
        <View className='rounded-md' style={{ height: 110 }}>
          <Image source={restaurant?.image} className=''          
            style={{ 
              width: '100%', 
              height: '100%', 
              resizeMode: 'cover' ,
              borderRadius: 5
            }}/>
        </View>
        
        <View className='flex-row items-center justify-between mt-5 gap-5 border-b border-neutral-300 pb-3 '>
          <View className='border-r border-neutral-300 pr-7'>
            <Text className='text-xs text-neutral-600' style={{fontFamily : 'SoraRegular'}}>Preparation Time</Text>
            <Text className='text-sm pt-1' style={{fontFamily : 'SoraMedium'}}>5-20 minutes</Text>
          </View>

          <View className='border-r border-neutral-300 pr-7'>
            <Text className='text-xs text-neutral-600' style={{fontFamily : 'SoraRegular'}}>Delivery Type</Text>
            <Text className='text-sm pt-1' style={{fontFamily : 'SoraMedium'}}>Instant Delivery</Text>
          </View>

          <View className=''>
            <Text className='text-xs text-neutral-600' style={{fontFamily : 'SoraRegular'}}>Rating</Text>
            <Text className='text-sm pt-1' style={{fontFamily : 'SoraMedium'}}>5.0</Text>
          </View>
        </View>

        <View className='flex-row w-full items-center gap-3 mt-5'>

          <Pressable onPress={handleIsAll} 
            className={`flex-row items-center gap-3 py-2.5 px-7 justify-center ${isAll === true ? 'bg-green-800' : 'bg-white border border-green-800'} rounded-full`}>
            <Text className={`${isAll === true ? 'text-white ' : 'text-green-800 '} text-xs`} style={{fontFamily : 'SoraSemiBold'}}>All</Text>
          </Pressable>

          <Pressable onPress={handleIsNew} className={`flex-row items-center gap-3 py-2.5 px-7 justify-center 
            ${isNew !== true ? 'bg-white border border-green-800' : 'bg-green-800 '} rounded-full`}>
            <Text className={`${isNew !== true ? 'text-green-800 ' : 'text-white '} text-xs`} style={{fontFamily : 'SoraSemiBold'}}>What's New</Text>
          </Pressable>

          <Pressable className='ml-auto text-green-800 rounded-full bg-neutral-100 flex-row items-center justify-center w-12 h-12'>
            <Ionicons name='search' size={20}/>
          </Pressable>
        </View>
      </View>
    </>
  )


  const renderItem = ({ item }: any) => (
    <Pressable onPress={() => toggleItemSelection(item)}>
      <Cusines 
        name={item?.name}
        price={item?.price}
        description={item?.description}
        icon={item?.icon}
        selected={selectedItems.some((i:any) => i.id === item.id)}
      />
    </Pressable>
  )
  
  return (
    <SafeAreaView className='flex-1 px-5 bg-white'>
      <BackArror />
      <StatusBar />
      <FlatList 
        data={restaurant?.cuisine}
        horizontal={false}
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        keyExtractor={(item)=>item.id}
        contentContainerStyle={{ paddingBottom: 30}}
        ItemSeparatorComponent={ItemSeparator}
        ListHeaderComponent={renderHeader}
        showsVerticalScrollIndicator={false}
      />

      <View className='my-5 w-full justify-center m-auto flex-row'>
        <Button title='Add to Cart' />
      </View>
    </SafeAreaView>
  )
}

export default SingleResturant
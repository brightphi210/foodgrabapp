import { AntDesign, FontAwesome, Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import React from 'react'
import {Image, Pressable, StatusBar, StyleSheet, Text, ToastAndroid, View } from 'react-native'

interface RestaurantProps {
  id: string;
  name: string;
  price: string;
  description: string;
  image: any;
  prepationTime: string;
  rating: number;
  reviews: number;
  openTime: string;
  cuisine: {
    name: string;
    icon: any;
    description: string;
    price: string;
  }[];
}

const Resturants: React.FC<RestaurantProps> = ({id, name, price, description, image, rating}) => {

  function showToast() {
    ToastAndroid.show('Restuarant has been added successfully!', ToastAndroid.TOP);
  }

  // console.log('This is Data', name, price, description, image);
  
  return (

    <Link href={`/resturant/${id}` as any}>
      <View  className='w-full '>
        <View className='rounded-md' style={{ height: 150 }}>
          <Image source={image} className=''          
            style={{ 
              width: '100%', 
              height: '100%', 
              resizeMode: 'cover' ,
              borderRadius: 5
            }}/>
        </View>

        <View className='mt-3 w-full'>
          <View className='flex-row justify-between w-full'>
            <Text className='text-sm' style={{fontFamily : 'SoraSemiBold'}}>{name}</Text>
            <Text className='text-sm text-neutral-400' style={{fontFamily : 'SoraMedium'}}>{rating}</Text>
          </View>

          <View className='flex-row justify-between w-full mt-3'>
            <Text className='text-sm ' style={{fontFamily : 'SoraMedium'}}><Text className='text-neutral-500' style={{fontFamily : 'SoraRegular'}}>From:</Text> {price}</Text>
            <Pressable onPress={showToast}>
              <Ionicons name='heart-outline' size={18}/>
            </Pressable>
          </View>
        </View>
      </View>
    </Link>
  )
}


export default Resturants


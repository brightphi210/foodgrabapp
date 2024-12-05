import { AntDesign, FontAwesome, Ionicons } from '@expo/vector-icons';
import React from 'react'
import {Image, Pressable, StatusBar, StyleSheet, Text, ToastAndroid, View } from 'react-native'

interface PrivateChefProps {
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

const PrivateChef: React.FC<PrivateChefProps> = ({name, price, description, image, rating}) => {

  function showToast() {
    ToastAndroid.show('Restuarant has been added successfully!', ToastAndroid.TOP);
  }

  console.log('This is Data', name, price, description, image);
  
  return (
    <View  className='w-full '>
      <View className='mt-3 w-full'>
        <View className='flex-row w-full items-center gap-3 border-b border-neutral-200 pb-6'>

            <View className=''>
                <View className='rounded-md w-20 h-20'>
                    <Image source={image} className=''          
                    style={{ 
                        width: '100%', 
                        height: '100%', 
                        resizeMode: 'cover' ,
                        borderRadius: 6
                    }}/>
                </View>

            </View>
            <View className='w-[70%]'>
                <Text className='text-sm' style={{fontFamily : 'SoraSemiBold'}}>{name}</Text>
                <Text className='text-xs py-2 text-neutral-500' style={{fontFamily : 'SoraRegular'}}>{description}</Text>
                <Text className='text-xs ' style={{fontFamily : 'SoraMedium'}}><Text style={{fontFamily : 'SoraRegular'}}>From:</Text> {price}</Text>
            </View>
        </View>
      </View>
    </View>
  )
}


export default PrivateChef


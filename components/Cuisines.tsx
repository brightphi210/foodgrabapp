import React, { useState } from "react"
import { Pressable, Text, View } from "react-native"
import { Image } from "react-native"
import Checkbox from 'expo-checkbox';

interface CuisineProps{
    name: string,
    icon: string,
    description: string,
    price: string,
    selected: any
}

export const Cusines: React.FC<CuisineProps> = ({name, icon, description, price} : any) => {

    const [isChecked, setIschecked] = useState(false)

    const handleCheck = () =>{
        setIschecked(!isChecked)
    }
    return (
    <Pressable className="mt-5 flex-row justify-between gap-4 items-center border-b border-neutral-200 pb-5" onPress={handleCheck}>
        <View className='w-20 h-20 rounded-md overflow-hidden bg-neutral-200'>
            <Image source={icon} className='object-cover w-full h-full'/>
        </View>
    
        <View className="w-[50%]">
            <Text style={{fontFamily : 'SoraMedium'}} className="text-sm ">{name}</Text>
            <Text className='text-xs text-neutral-500 pt-1'>{description}</Text>
            <Text className='text-sm text-green-800 pt-3' style={{fontFamily : 'SoraMedium'}}>{price}</Text>
        </View>

        <View className="ml-auto">
            <Checkbox value={isChecked}/>
        </View>
    </Pressable>
  )
}

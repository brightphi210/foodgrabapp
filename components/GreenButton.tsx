
import { Ionicons } from '@expo/vector-icons';
import React from 'react'
import { Pressable, Text } from 'react-native'

interface ButtonProps {
    title : string;
    action?: () => void;
}

export const GreenButton : React.FC<ButtonProps> = ({title, action} : ButtonProps) => {
    return (
      <Pressable onPress={action} className='bg-green-950 rounded-md justify-center flex flex-row gap-3 items-center py-3 w-[50%]'>
        <Text className='text-white font-bold text-xs'>{title}</Text>
      </Pressable>
    )
}

export default GreenButton
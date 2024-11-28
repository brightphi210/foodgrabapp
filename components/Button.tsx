
import { Ionicons } from '@expo/vector-icons';
import React from 'react'
import { Pressable, Text } from 'react-native'

interface ButtonProps {
    title : string;
    action?: () => void;
}

const Button : React.FC<ButtonProps> = ({title, action} : ButtonProps) => {
    return (
      <Pressable onPress={action} className='bg-[#EC1C23] rounded-lg justify-center flex flex-row gap-3 items-center py-4 w-[90%]'>
        <Text className='text-white font-bold text-lg'>{title}</Text>
        <Ionicons name='arrow-forward' size={15} color={'white'}/>
      </Pressable>
    )
}

export default Button
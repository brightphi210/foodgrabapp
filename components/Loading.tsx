import { StatusBar } from 'expo-status-bar'
import { Image, View } from 'react-native'
import { Text } from 'react-native'
import { ActivityIndicator } from 'react-native'
import Animated, { FadeInDown } from 'react-native-reanimated'
import { SafeAreaView } from 'react-native-safe-area-context'


const Loading = () =>{


    return (
      <SafeAreaView className='bg-white gap-4 p-4 flex-1 w-full items-center justify-center'>
        <StatusBar />
        <View className='flex-row items-center gap-2' >
            <Text className='text-lg' style={{fontFamily: 'SoraRegular'}}>Getting Data</Text>
            <ActivityIndicator size={'small'} color={'red'}/>
        </View>
      </SafeAreaView>
    )
}

export default Loading
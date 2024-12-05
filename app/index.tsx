import { Ionicons } from '@expo/vector-icons'
import { router } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'
import { Image, Pressable } from 'react-native'
import { Text, View, } from 'react-native'
import Animated, { FadeInDown } from 'react-native-reanimated'
import { SafeAreaView } from 'react-native-safe-area-context'
import Button from '~/components/Button'

const Welcome = () =>{

    const [screen, setScreen] = useState(1)

    const handleScreenTwo = () => {
      setScreen(2)
    }

    const handleScreenThree = () => {
      setScreen(3)
    }


    return (
      <SafeAreaView className='bg-white flex-1'>
        <StatusBar />

        {screen === 1 &&
          <View className='relative gap-4 p-4 flex-1 w-full items-center justify-center'>
              <Pressable className='absolute right-10 top-10 flex flex-row items-center gap-2' onPress={()=>{router.replace('/(tabs)')}}>
                <Text style={{fontFamily : 'SoraMedium'}} className='text-sm'>Skip</Text>
                <Ionicons name='arrow-forward' size={12}/>
              </Pressable>

              <Animated.View className='w-full justify-center items-center '
                  entering={FadeInDown.duration(300).springify()}
              >
                <Image 
                  className='w-[18rem] h-[18rem]'
                  source={require('../assets/images/onboard1.png')}
                />
              </Animated.View>

              <Animated.View className='w-full mt-10'
                  entering={FadeInDown.duration(300).delay(200).springify()}
              >
                <Text 
                    className='text-2xl text-center leading-[2rem] px-10'
                    style={{fontFamily: 'SoraBold'}}
                    >Quench your craving
                </Text>
              </Animated.View>

              <Animated.View className='w-full'
                  entering={FadeInDown.duration(300).delay(400).springify()}
              >
                <Text 
                  className='text-base text-center leading-[2rem] w-[90%] flex m-auto justify-center'
                  style={{fontFamily: 'SoraRegular'}}
                  >Find your favorite meal from your favorite restaurants and we will deliver it to your door step  🚀.
                </Text>
              </Animated.View>

              <Animated.View className='w-full justify-center items-center mt-8'
                  entering={FadeInDown.duration(300).delay(600).springify()}
              >
                <Button title='Next' action={handleScreenTwo}/>
              </Animated.View>
          </View>
        }

        {screen === 2 &&
          <View className='gap-4 p-4 flex-1 w-full items-center justify-center'>

              <Pressable className='absolute right-10 top-10 flex flex-row items-center gap-2' onPress={()=>{router.replace('/(tabs)')}}>
                <Text style={{fontFamily : 'SoraMedium'}} className='text-sm'>Skip</Text>
                <Ionicons name='arrow-forward' size={12}/>
              </Pressable>

              <Animated.View className='w-full justify-center items-center '
                  entering={FadeInDown.duration(300).springify()}
              >
                <Image 
                  className='w-[18rem] h-[18rem]'
                  source={require('../assets/images/onboard2.png')}
                />
              </Animated.View>

              <Animated.View className='w-full mt-10'
                  entering={FadeInDown.duration(300).delay(200).springify()}
              >
                  <Text 
                      className='text-2xl text-center leading-[2rem] px-10'
                      style={{fontFamily: 'SoraBold'}}
                      >Quench your craving
                  </Text>
              </Animated.View>

              <Animated.View className='w-full'
                  entering={FadeInDown.duration(300).delay(400).springify()}
              >
                  <Text 
                      className='text-sm text-center leading-[2rem] w-[90%] flex m-auto justify-center'
                      style={{fontFamily: 'SoraRegular'}}
                      >Find your favorite meal from your favorite restaurants and we will deliver it to your door step  🚀.
                  </Text>
              </Animated.View>

              <Animated.View className='w-full justify-center items-center mt-8'
                  entering={FadeInDown.duration(300).delay(600).springify()}
              >
                  <Button title='Next' action={handleScreenThree}/>
              </Animated.View>
          </View>
        }


        {screen === 3 &&
            <View className='gap-4 p-4 flex-1 w-full items-center relative justify-center'>

              <Pressable className='absolute right-10 top-10 flex flex-row items-center gap-2'>
                <Text style={{fontFamily : 'SoraMedium'}} className='text-sm'>Skip</Text>
                <Ionicons name='arrow-forward' size={12}/>
              </Pressable>

                <Animated.View className='w-full justify-center items-center '
                    entering={FadeInDown.duration(300).springify()}
                >
                  <Image 
                    className='w-[18rem] h-[18rem]'
                    source={require('../assets/images/onboard3.png')}
                  />
                </Animated.View>

                <Animated.View className='w-full mt-10'
                    entering={FadeInDown.duration(300).delay(200).springify()}
                >
                    <Text 
                        className='text-2xl text-center leading-[2rem] px-10'
                        style={{fontFamily: 'SoraBold'}}
                        >Quench your craving
                    </Text>
                </Animated.View>

                <Animated.View className='w-full'
                    entering={FadeInDown.duration(300).delay(400).springify()}
                >
                    <Text 
                        className='text-sm text-center leading-[2rem] w-[90%] flex m-auto justify-center'
                        style={{fontFamily: 'SoraRegular'}}
                        >Find your favorite meal from your favorite restaurants and we will deliver it to your door step  🚀.
                    </Text>
                </Animated.View>

                <Animated.View className='w-full justify-center items-center mt-8'
                    entering={FadeInDown.duration(300).delay(600).springify()}
                >
                    <Button title='Next' action={()=>{router.replace('/(tabs)')}}/>
                </Animated.View>
            </View>
        }

      </SafeAreaView>
    )
}

export default Welcome



export const WelcomeTwo = ()=>{
    
}
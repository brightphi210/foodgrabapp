import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Image, Pressable, TextInput, View, FlatList, Dimensions } from 'react-native';
import DashHeader from '~/components/DashHeader';
import { SafeAreaView } from 'react-native-safe-area-context'
import { Text } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import Resturants from '~/components/Resturants';
import { myData, myDataChef } from '~/components/Data';
import { ScrollView } from 'react-native-virtualized-view';
import PrivateChef from '~/components/PrivateChef';

const { height } = Dimensions.get('window');

const Home = () => {
  const [show, setShow] = useState(false)

  const handleShow = () =>{
    setShow(true);
  }

  const ItemSeparator = () => <View style={{ height: 30 }} />;
  const ItemSeparatorNew = () => <View style={{ height: 10 }} />;


  const [isResturant, setResturant] = useState(1)

  const handleSetResturant = ()=>{
    setResturant(1)
  }

  const handleSetChef = ()=>{
    setResturant(2)
  }

  return (
    <SafeAreaView className='flex-1 px-5 bg-white'>
      <StatusBar />
      {/* <Stack.Screen options={{ headerShown: false}} /> */}


      {/* ========= Home Dashboard ============== */}
      <View className='flex-1'>
        <DashHeader />

        {show === false ? 
        
          <View>
            <Animated.View className=''>
              <Image source={require('../../assets/images/bannera.png')} className='w-[fit] h-[113px] object-cover'/>
            </Animated.View>

            <Animated.View className='flex-row justify-between mt-10 w-full' entering={FadeInDown.duration(300).delay(300).springify()}>
              <Pressable onPress={handleShow} className='border border-neutral-300 w-[48%] rounded-xl flex justify-center items-center p-4'>
                <Image source={require('../../assets/images/category1.png')} className='w-[120px] h-[85px]'/>
                <Text className='text-sm pt-5' style={{fontFamily : 'SoraMedium'}}>Food</Text>
              </Pressable>

              <Pressable onPress={handleShow} className='border border-neutral-300 w-[48%] rounded-xl flex justify-center items-center p-4'>
                <Image source={require('../../assets/images/category2.png')} className='w-[80px] h-[80px]'/>
                <Text className='text-sm pt-5' style={{fontFamily : 'SoraMedium'}}>Resturant</Text>
              </Pressable>
            </Animated.View>

            <Animated.View entering={FadeInDown.duration(300).delay(500).springify()}>
                <Pressable onPress={handleShow} className='border border-neutral-300 mt-5 p-6 rounded-xl w-full flex justify-center items-center'>
                  <Image source={require('../../assets/images/category3.png')} className='w-[100px] h-[80px]'/>
                  <Text className='text-sm pt-5' style={{fontFamily : 'SoraMedium'}}>Explore App</Text>
                </Pressable>
            </Animated.View>
          </View> : 

          <View className='flex-1'>
              <View className='relative'>
                  <Ionicons name='search' size={18} className='absolute left-4 top-6'/>
                  <TextInput style={{fontFamily : 'SoraMedium'}} placeholder='Search for your favorites food' 
                    className='border border-neutral-300 mb-3 text-sm py-5 px-10 rounded-md'/>
              </View>

              <ScrollView className='' showsVerticalScrollIndicator={false} >
                  <Animated.View className='' >
                    <Image source={require('../../assets/images/bannera.png')} className='w-[fit] h-[113px] object-cover'/>
                  </Animated.View>


                  <Animated.View className='flex-row w-full items-center justify-between mt-3'>
                    <Pressable onPress={handleSetResturant} 
                      className={`flex-row items-center w-[48%] gap-3 py-3 px-10 justify-center ${isResturant === 1 ? 'bg-green-800' : 'bg-white border border-green-800'} rounded-full`}>
                      <Ionicons name='fast-food' size={15} color={isResturant === 1 ? 'white' : 'green'}/>
                      <Text className={`${isResturant === 1 ? 'text-white ' : 'text-green-800 '} text-sm`} style={{fontFamily : 'SoraBold'}}>Restuarant</Text>
                    </Pressable>

                    <Pressable onPress={handleSetChef} className={`flex-row items-center w-[48%] gap-3 py-3 px-10 justify-center 
                      ${isResturant !== 2 ? 'bg-white border border-green-800' : 'bg-green-800 '} rounded-full`}>
                      <Ionicons name='restaurant' size={15} color={isResturant !== 1 ? 'white' : 'green'} className='text-green-800'/>
                      <Text className={`${isResturant !== 2 ? 'text-green-800 ' : 'text-white '} text-sm`} style={{fontFamily : 'SoraBold'}}>Private Chef</Text>
                    </Pressable>
                  </Animated.View>

                  
                  {/* =================== Restuarant ======================== */}
                  {isResturant ===1 && 
                    <Animated.View className={'my-8'} entering={FadeInDown.duration(100).delay(200).springify()}>
                      <Text className="text-base font-bold mb-4 text-neutral-600">Restaurants <Ionicons name='fast-food'/></Text>
                      <FlatList
                        horizontal={false}
                        data={myData}
                        keyExtractor={(item) => item.id.toString()}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) => (
                          <Resturants
                            id={item.id.toString()}
                            name={item.name}
                            price={item.price}
                            image={item.image}
                            rating={item.rating}
                            description={item.description}
                            prepationTime={item.prepationTime}
                            reviews={item.reviews}
                            openTime={item.openTime}
                            cuisine={item.cuisine}
                          />
                        )}
                        contentContainerStyle={{ paddingBottom: 20 }}
                        ItemSeparatorComponent={ItemSeparator}
                      />
                    </Animated.View>
                  }


                  {/* =================== Chef ======================== */}
                  {isResturant === 2 && 
                    <Animated.View className={'my-8'} entering={FadeInDown.duration(100).delay(200).springify()}>
                      <Text className="font-bold mb-4 pb-3 border-b border-neutral-200 text-base text-neutral-500">Recommend Chef <Ionicons name='restaurant'/></Text>
                      <FlatList
                        horizontal={false}
                        data={myDataChef}
                        keyExtractor={(item) => item.id.toString()}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) => (
                          <PrivateChef
                            id={item.id.toString()}
                            name={item.name}
                            price={item.price}
                            image={item.image}
                            rating={item.rating}
                            description={item.description}
                            prepationTime={item.prepationTime}
                            reviews={item.reviews}
                            openTime={item.openTime}
                            cuisine={item.cuisine}
                          />
                        )}
                        contentContainerStyle={{ paddingBottom: 20 }}
                        ItemSeparatorComponent={ItemSeparatorNew}
                      />
                    </Animated.View>
                  }
              </ScrollView>
          </View>
        }
      </View>
    </SafeAreaView>
  );
}


export default Home
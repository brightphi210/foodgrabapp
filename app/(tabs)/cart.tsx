import React, { useCallback, useMemo, useRef, useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity, Image, Pressable } from 'react-native';
import BackArror from '~/components/BackArror'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { EmptyCartItem } from '~/components/EmptyCartItem'
import { useCart } from '../AuthContext'
import { ScrollView } from 'react-native-virtualized-view'
import GreenButton from '~/components/GreenButton'
import { Ionicons } from '@expo/vector-icons'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import {
  BottomSheetModal,
  BottomSheetView,
  BottomSheetModalProvider,
  BottomSheetScrollView,
  BottomSheetBackdrop,
} from '@gorhom/bottom-sheet';

interface Item {
  id: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  icon: string | any;
}

const Cart = () => {
  const { cart, clearCart } = useCart()

  const calculateTotalPrice = (items: any[]) => {
    const total = items.reduce((total, item) => {
      const price = parseFloat(item.price)
      return total + price
    }, 0)
    
    return total.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  }

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState<any>(null);


  console.log('This is selected data', selectedItem);
  
  // const data: Item[] = [
  //   { id: '1', title: 'Item 1', description: 'Description for Item 1' },
  //   { id: '2', title: 'Item 2', description: 'Description for Item 2' },
  //   { id: '3', title: 'Item 3', description: 'Description for Item 3' },
  //   { id: '4', title: 'Item 4', description: 'Description for Item 4' },
  //   { id: '5', title: 'Item 5', description: 'Description for Item 5' },
  // ];

  const snapPoints = useMemo(() => ["25%", "50%", "90%", "100%"], []);

  const handlePresentModalPress = useCallback((items: any[]) => {
    setSelectedItem(items);
    bottomSheetModalRef.current?.present();
  }, []);

  const handleItemPress = useCallback((item: Item) => {
    setSelectedItem(item);
    bottomSheetModalRef.current?.dismiss();
  }, []);

  const renderItem = useCallback((item: Item, index:any) => (
    <View key={index}>
      <Text>{item.name}</Text>
    </View>
  ), []);

  const renderBackdrop = useCallback(
    (props:any) => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
        onPress={() => bottomSheetModalRef.current?.dismiss()}
      />
    ),
    []
  );

  return (
    <>
      {cart.length === 0 ? <EmptyCartItem /> : 
       <GestureHandlerRootView className='flex-1 justify-center items-center bg-white'>
       <BottomSheetModalProvider>
         <View className='flex-1 px-5 bg-white'>
            <SafeAreaView className='flex-1 bg-white'>
              <StatusBar />

              <View className='flex-1'>
                <View className='flex-row items-center gap-3 w-full'>
                  <BackArror />
                  <Text style={{fontFamily : 'SoraSemiBold'}} className='text-base'>My Cart</Text>
                  
                  <Pressable onPress={clearCart} className='ml-auto bg-neutral-200 py-2 px-6 rounded-full'>
                    <Text style={{fontFamily : 'SoraRegular'}} className='text-sm'>Clear Cart</Text>
                  </Pressable>
                </View>

                <ScrollView showsVerticalScrollIndicator={false}>
                  <View className='flex-col gap-4 pb-10 pt-5'>
                  {cart.map((item, index) => (
                    <View key={index} className='border border-neutral-200 p-6 rounded-md'>
                      <View className='flex-row gap-3'>
                        <View className='flex-row gap-2'>
                          <View className='w-14 h-14 overflow-hidden rounded-full justify-center items-center flex-row'>
                            <Image source={item.items[0].icon} className='w-full h-full object-cover'/>
                          </View>
                          <View>
                            {item.items.slice(0, 1).map((item, index) => (
                              <Text key={index} style={{fontFamily : 'SoraSemiBold'}} className='text-sm'>{item.name}</Text>
                            ))}
                            <Text style={{fontFamily : 'SoraRegular'}} className='text-xs py-1'>{item.restaurant}</Text>
                            <Text style={{fontFamily : 'SoraRegular'}} className='text-xs text-neutral-500'>&#8358;{calculateTotalPrice(item.items)}</Text>
                          </View>
                        </View>
                        <Text className='ml-auto text-xs text-neutral-500' style={{fontFamily : 'SoraRegular'}}>{item.items.length} items</Text>
                      </View>

                      <View className='flex-col gap-4 items-center justify-center mt-4'>
                        <View className='flex-row gap-3'>
                          <GreenButton title='Checkout'/>
                          <Pressable onPress={()=>handlePresentModalPress(item.items)} className='border border-green-800 rounded-md justify-center flex flex-row gap-1 items-center py-3 w-[50%]'>
                            <Text className='text-green-900 font-bold text-xs'>View Selection</Text>
                            <Ionicons name='chevron-down' color={'green'}/>
                          </Pressable>
                        </View>
                        <Pressable className='flex-row items-center gap-2'>
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
         </View>

         <BottomSheetModal
           ref={bottomSheetModalRef}
           index={3}
           snapPoints={snapPoints}
           backdropComponent={renderBackdrop}
           backgroundStyle={styles.bottomSheetBackground}
         >
           <BottomSheetScrollView contentContainerStyle={styles.contentContainer}>
            <View>
              <Text className='text-lg pb-10' style={{fontFamily : 'SoraMedium'}}>View Orders</Text>
              {selectedItem && selectedItem.map(renderItem)}
            </View>
           </BottomSheetScrollView>
         </BottomSheetModal>
       </BottomSheetModalProvider>
     </GestureHandlerRootView>
      }
    </>
  ) 
}

export default Cart

const styles = StyleSheet.create({
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  bottomSheetText: {
    fontSize: 18,
  },
  contentContainer: {
    padding: 24,
  },
  bottomSheetBackground: {
    backgroundColor: 'white',
  },
});


import { Link, Tabs } from 'expo-router';
import { TabBarIcon } from '../../components/TabBarIcon';
import { Text, View } from 'react-native';
import { useCart } from '../AuthContext';

export default function TabLayout() {
  const {cart} = useCart()

  return (
    <Tabs
      
      screenOptions={{
        tabBarActiveTintColor: '#54804D',
        headerShown : false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <TabBarIcon name="home-outline" color={color} />,
       
        }}
      />

      <Tabs.Screen
        name="cart"
        options={{
          title: 'Cart',
          tabBarIcon: ({ color }) => (
          <View className='relative'>
            <TabBarIcon name="cart-outline" color={color} />
            {cart.length > 0 && 
              <Text style={{fontFamily : 'SoraBold'}} className='absolute text-[8px] p-0 text-white right-[-5px] top-0 bg-red-600 rounded-full flex-row items-center justify-center  w-2 h-2'></Text>
            }
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="order"
        options={{
          title: 'Order',
          tabBarIcon: ({ color }) => <TabBarIcon name="basket-outline" color={color} />,
        }}
      />

      <Tabs.Screen
        name="account"
        options={{
          title: 'Account',
          tabBarIcon: ({ color }) => <TabBarIcon name="person-outline" color={color}/>,
        }}
      />
    </Tabs>
  );
}

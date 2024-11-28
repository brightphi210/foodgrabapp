import { Link, Tabs } from 'expo-router';
import { TabBarIcon } from '../../components/TabBarIcon';

export default function TabLayout() {
  return (
    <Tabs
      
      screenOptions={{
        tabBarActiveTintColor: '#54804D',
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
          tabBarIcon: ({ color }) => <TabBarIcon name="cart-outline" color={color} />,
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
        name="two"
        options={{
          title: 'Account',
          tabBarIcon: ({ color }) => <TabBarIcon name="person-outline" color={color}/>,
        }}
      />
    </Tabs>
  );
}

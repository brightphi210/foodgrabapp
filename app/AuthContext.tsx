import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useContext, useEffect, useState } from 'react'
import { View } from 'react-native'


interface CartItem {
    id: string,
    name: string,
    price: number,
    quantity: number,
    icon: string | any,
    restaurant: string
  
} 


interface Combo {
    id: string;
    restaurant: string;
    items: CartItem[];
  }

interface CartContextType {
    cart: Combo[],
    addToCart: (item: CartItem[]) => Promise<void>,
    clearCart: () => void,
}


const AllContext = createContext<CartContextType | undefined>(undefined)

export const AuthContext: React.FC<{ children: React.ReactNode }> = ({children}) => {

    const [cart, setCart] = useState<Combo[]>([]);

    useEffect(() => {
        loadCart();
    }, []);
    
    const loadCart = async () => {
        try {
          const storedCart = await AsyncStorage.getItem('cart');
          if (storedCart) {
            setCart(JSON.parse(storedCart));
          }
        } catch (error) {
          console.error('Error loading cart:', error);
        }
      };
    
      const saveCart = async (newCart: Combo[]) => {
        try {
          await AsyncStorage.setItem('cart', JSON.stringify(newCart));
        } catch (error) {
          console.error('Error saving cart:', error);
        }
      };
    
      const addToCart = async (items: CartItem[]) => {
        if (items.length === 0) return;
    
        const newCart = [...cart];
        const comboId = Date.now().toString(); // Generate a unique ID for the combo
        const newCombo: Combo = {
          id: comboId,
          restaurant: items[0].restaurant,
          items: items,
        };
    
        newCart.push(newCombo);
        setCart(newCart);
        await saveCart(newCart);
      };
    
      const clearCart = async () => {
        setCart([]);
        await AsyncStorage.removeItem('cart');
      };


  return (
    <AllContext.Provider value={{cart, clearCart, addToCart}}>
        {children}
    </AllContext.Provider>
  )
}


export const useCart = () => {
    const context = useContext(AllContext);
    if (context === undefined) {
      throw new Error('useCart must be used within a AuthContext');
    }
    return context;
  };
  
import { useEffect } from 'react';
import '../global.css';

import {Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { AuthContext } from './AuthContext';


SplashScreen.preventAutoHideAsync();

export default function RootLayout() {


	const [loaded] = useFonts({
		SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
		SoraLight: require('../assets/fonts/Sora-Light.ttf'),
		SoraRegular: require('../assets/fonts/Sora-Regular.ttf'),
		SoraMedium: require('../assets/fonts/Sora-Medium.ttf'),
		SoraSemiBold: require('../assets/fonts/Sora-SemiBold.ttf'),
		SoraExtraBold: require('../assets/fonts/Sora-ExtraBold.ttf'),
		SoraThin: require('../assets/fonts/Sora-Thin.ttf'),
		SoraBold: require('../assets/fonts/Sora-Bold.ttf'),
	  });
	
	
	  useEffect(() => {
		if (loaded) {
		  SplashScreen.hideAsync();
		}
	  }, [loaded]);
	
	  if (!loaded) {
		return null;
	  }

	  

  return (
	<AuthContext>
		<Stack screenOptions={{headerShown : false}}>
		<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
		</Stack>
	</AuthContext>
  );
}

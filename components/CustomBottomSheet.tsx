'use client'

import React, { useCallback, useMemo, useRef, useState } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import {
  BottomSheetModal,
  BottomSheetView,
  BottomSheetModalProvider,
  BottomSheetScrollView,
} from '@gorhom/bottom-sheet';

interface Item {
  id: string;
  title: string;
  description: string;
}

const CustomBottomSheetModal = () => {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);

  // Real data
  const data: Item[] = [
    { id: '1', title: 'Item 1', description: 'Description for Item 1' },
    { id: '2', title: 'Item 2', description: 'Description for Item 2' },
    { id: '3', title: 'Item 3', description: 'Description for Item 3' },
    { id: '4', title: 'Item 4', description: 'Description for Item 4' },
    { id: '5', title: 'Item 5', description: 'Description for Item 5' },
  ];

  const snapPoints = useMemo(() => ["25%", "50%", "90%"], []);

  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
    setModalVisible(index !== -1);
  }, []);

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const handleItemPress = useCallback((item: Item) => {
    setSelectedItem(item);
    bottomSheetModalRef.current?.dismiss();
  }, []);

  const renderItem = useCallback((item: Item) => (
    <TouchableOpacity key={item.id} onPress={() => handleItemPress(item)} style={styles.item}>
      <Text>{item.title}</Text>
    </TouchableOpacity>
  ), []);

  return (
    <GestureHandlerRootView style={styles.container}>
      <BottomSheetModalProvider>
        <View style={styles.content}>
          <Button title="Present Modal" onPress={handlePresentModalPress} />
        </View>
        <BottomSheetModal
          ref={bottomSheetModalRef}
          index={1}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}
          backgroundStyle={styles.bottomSheetBackground}
        >
          <BottomSheetScrollView contentContainerStyle={styles.contentContainer}>
            {data.map(renderItem)}
          </BottomSheetScrollView>
        </BottomSheetModal>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  contentContainer: {
    padding: 24,
  },
  bottomSheetBackground: {
    backgroundColor: 'white',
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  selectedItem: {
    marginTop: 20,
    padding: 16,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
});

export default CustomBottomSheetModal;


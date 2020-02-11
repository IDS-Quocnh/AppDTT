import * as React from 'react';
import { View, Text, Button } from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

export default function CustomDrawerContent(props) {
    return (
  
      <DrawerContentScrollView {...props}>
        <Text>Text</Text>
        <DrawerItemList {...props} />
        <DrawerItem label="Help" onPress={() => alert('Link to help')} />
        <DrawerItem label="Help1" onPress={() => alert('Link to help')} />
  
      </DrawerContentScrollView>
    );
  }
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { Toast } from "react-native-toast-message/lib/src/Toast";

export default function Layout() {
  return (
    <>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Drawer screenOptions={{ headerShown: false }} >
          <Drawer.Screen
            name="index"
            options={{
              drawerLabel: 'TRI Financial Services',
              title: 'TRI Financial Services',
            }} />

          <Drawer.Screen
            name="about"
            options={{
              drawerLabel: 'About TRI',
              title: 'About TRI Financial Services',
            }}
          />

          <Drawer.Screen
            name="services"
            options={{
              drawerLabel: 'Services',
              title: 'Service',
            }}
          />

          <Drawer.Screen
            name="books"
            options={{
              drawerLabel: 'Books',
              title: 'Books',
            }}
          />

          <Drawer.Screen
            name="videos"
            options={{
              drawerLabel: 'Videos',
              title: 'Videos',
            }}
          />

          <Drawer.Screen
            name="contact"
            options={{
              drawerLabel: 'Contact TRI',
              title: 'Contact TRI',
            }}
          />

          <Drawer.Screen
            name="join-our-team"
            options={{
              drawerLabel: 'Join Our Team',
              title: 'Join Our Team',
            }}
          />
        </Drawer>
      </GestureHandlerRootView >
      <Toast />
    </>
  );
}

import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import '@expo/match-media';
import { FontAwesome } from '@expo/vector-icons';
import Logo from '../images/tri-logo.png';
import * as Linking from 'expo-linking';
import { useMediaQuery } from "react-responsive";
import { router, useNavigation, } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';

const menu = [
  {
    id: '1',
    page: '/',
    name: 'TRI Financial Services',
  },
  {
    id: '2',
    page: '/about',
    name: 'About TRI',
  },
  {
    id: '3',
    page: '/service',
    name: 'Service',
  },
  {
    id: '3',
    page: '/books',
    name: 'Books',
  },
  {
    id: '4',
    page: '/videos',
    name: 'Videos',
  },
  {
    id: '5',
    page: '/blogs',
    name: 'Blogs',
  },
  {
    id: '6',
    page: '/contact',
    name: 'Contact Us',
  },
]
const Header = ({ pageTitle,back }) => {
  const navigation = useNavigation();

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  });

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });

  return (
    <SafeAreaView>

      {isTabletOrMobile &&
        <View style={styles.container}>

          {/* Email and Call buttons */}
          <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingVertical: 10, }}>
            <TouchableOpacity
              onPress={() => Linking.openURL('tel:+14108804680')}
              style={{ flexDirection: 'row', alignContent: 'center', justifyContent: 'space-between' }}>
              <FontAwesome name="volume-control-phone" size={20} color="#800000" />
              <Text style={{ fontSize: 18, color: '#800000', fontWeight: 'bold', paddingHorizontal: 5 }}>Call</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => Linking.openURL('mailto:trifinancialservices@gmail.com')}
              style={{ flexDirection: 'row', alignContent: 'center', justifyContent: 'space-between' }}>
              <FontAwesome name="envelope" size={20} color="#800000" />
              <Text style={{ fontSize: 18, color: '#800000', paddingHorizontal: 5, fontWeight: 'bold', }}>Email</Text>
            </TouchableOpacity>
          </View>


          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => router.navigate('/')}>
            <View style={{ height: 160, }}>
              <Image source={Logo} resizeMode='contain'
                height={100}
                style={{ height: "80%", width: '80%', alignSelf: 'center', margin: 0 }} />
            </View>
          </TouchableOpacity>

          <View style={{ flexDirection: 'row', justifyContent: 'flex-end', backgroundColor: 'black', paddingVertical: 10, width: '100%' }}>
            <TouchableOpacity style={{ paddingHorizontal: 20 }} onPress={() => navigation.openDrawer()}>
              <MaterialIcons name="menu" size={32} color="#800000" />
            </TouchableOpacity>
          </View>

          {/* Page Title */}

          {pageTitle && <Text style={styles.h1}>{pageTitle}</Text>}
          {back && <Text onPress={() => navigation.goBack()}>back</Text>}
        </View>
      }

      {isDesktopOrLaptop &&
        <View style={styles.container}>

          {/* Email and Call buttons */}
          <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingVertical: 10, }}>
            <TouchableOpacity
              onPress={() => Linking.openURL('tel:+14108804680')}
              style={{ flexDirection: 'row', alignContent: 'center', justifyContent: 'space-between' }}>
              <FontAwesome name="volume-control-phone" size={20} color="#800000" />
              <Text style={{ fontSize: 18, color: '#800000', fontWeight: 'bold', paddingHorizontal: 5 }}>Call</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => Linking.openURL('mailto:trifinancialservices@gmail.com')}
              style={{ flexDirection: 'row', alignContent: 'center', justifyContent: 'space-between' }}>
              <FontAwesome name="envelope" size={20} color="#800000" />
              <Text style={{ fontSize: 18, color: '#800000', paddingHorizontal: 5, fontWeight: 'bold', }}>Email</Text>
            </TouchableOpacity>
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', }}>

            <View style={{
              flexDirection: 'row',
              backgroundColor: 'black', width: '70%',
            }}>
              {
                menu.map((item, index) => (
                  <Text
                    onPress={() => router.navigate(item.page)} style={{ padding: 20, color: 'white', fontSize: 18, fontWeight: 'bold', }} key={index}>{item.name}</Text>
                ))
              }
            </View>
            <View style={{ width: '30%', }}>
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => router.navigate('/')}>
                <Image source={Logo} resizeMode='contain'
                  style={{ height: 160, width: '100%', }} />
              </TouchableOpacity>
            </View>

          </View>


          {/* Page Title */}

          {pageTitle && <Text style={styles.h1}>{pageTitle}</Text>}

        </View>
      }

    </SafeAreaView>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {

  },
  h1: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  text: {
    fontSize: 16,
  },
  links: {
    color: '#800000',
  }
})
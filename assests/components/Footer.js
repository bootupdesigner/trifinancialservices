import { Linking, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from 'expo-router'
import Hours from './Hours';
import SocialLinks from './SocialLinks';
import Menu from './Menu';

import '@expo/match-media';
import { useMediaQuery } from "react-responsive";

const Footer = () => {
    const navigation = useNavigation();

     const isMobile = useMediaQuery({
        maxDeviceWidth: 480,
    })

    const isTablet = useMediaQuery({
        minDeviceWidth: 480,
        maxDeviceWidth: 1224,
    });

    const isDesktopOrLaptop = useMediaQuery({
        minDeviceWidth: 1224,
    });

    return (
        <>
        {isMobile && (
            <View style={{justifyContent:'space-between', backgroundColor: 'black', padding: 30,}}>
            <Menu/>
  
              <Hours/>
  
             <SocialLinks/>
          </View>
        )}
        {isTablet && (
            <View style={{justifyContent:'space-between', backgroundColor: 'black', padding: 30,}}>
            <Menu/>
  
              <Hours />
  
             <SocialLinks/>
          </View>
        )}

        {isDesktopOrLaptop && (
            <View style={{ backgroundColor: 'black', padding: 30, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around', }}>
          <Menu/>

            <Hours />

           <SocialLinks/>
        </View>
        )}
        
        </>
    )
}

export default Footer

const styles = StyleSheet.create({})
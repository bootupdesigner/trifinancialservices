import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { menu } from './Header'
import { useRouter } from 'expo-router'

const Menu = () => {
  const router =useRouter();
    return (
        <View style={{paddingTop:10,justifyContent:'space-between',height:300}}>
        <Text style={{ fontFamily:'Times New Roman',color: 'white', fontSize: 18.75, fontWeight: 'bold', }}>Quick Links</Text>

        {
                menu.map((item, index) => (
                  <Text
                    onPress={() => router.navigate(item.page)} style={{ fontFamily:'Times New Roman', color: 'white', fontSize: 16, fontWeight: 'bold', }} key={index}>{item.name}</Text>
                ))
              }
        </View>
    )
}

export default Menu

const styles = StyleSheet.create({})
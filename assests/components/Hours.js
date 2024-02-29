import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Hours = () => {
  return (
   
    <View style={{paddingTop:10,justifyContent:'space-between',height:300}}>
    <Text style={{ color: 'white', fontSize: 18.75, fontWeight: 'bold', }}>Hours & Location</Text>
    <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold', }}>Laurel, Maryland 20724</Text>
    <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold', }}>Monday - Friday: 9:00am - 8:00pm</Text>
    <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold', }}>Saturday: 9:00am – 1:00pm</Text>
    <Text
    onPress={()=>Linking.openURL('tel:+14108804680')} 
    style={{ color: 'white', fontSize: 16, fontWeight: 'bold', }}>Call: (410)880-4680</Text>
    <Text 
    onPress={()=>Linking.openURL('mailto:trifinancialservices@gmail.com')}
    style={{ color: 'white', fontSize: 16, fontWeight: 'bold', }}>Email: trifinancialservices@gmail.com</Text>
</View>
  )
}

export default Hours

const styles = StyleSheet.create({})
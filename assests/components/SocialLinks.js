import { StyleSheet, Text, View, TouchableOpacity, Linking } from 'react-native';
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';


const SocialLinks = () => {
    return (
        <View style={{ paddingTop: 20, justifyContent: 'space-between', height: 300 }}>
            <Text style={{ color: 'white', fontSize: 18.75, fontWeight: 'bold', }}>Stay Connected</Text>

            <TouchableOpacity onPress={() => Linking.openURL('https://www.youtube.com/channel/UCyjmGgjaYc9gCEbMhRYTk-w')} style={{
                flexDirection: 'row',
                alignContent: 'center',
                paddingHorizontal: 10,
            }}>
                <FontAwesome name="youtube" size={24} color="white" />

                <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white', padding: 10 }}>YouTube</Text>

            </TouchableOpacity >

            <TouchableOpacity onPress={() => Linking.openURL('https://www.linkedin.com/in/renee-ilesanmi-8a618a41/')} style={{
                flexDirection: 'row',
                alignContent: 'center',
                paddingHorizontal: 10,
            }}>
                <FontAwesome name="linkedin" size={24} color="white" />

                <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white', padding: 10 }}>LinkedIn</Text>

            </TouchableOpacity >
            <TouchableOpacity onPress={() => Linking.openURL('https://www.facebook.com/TriFinancialCo')} style={{
                flexDirection: 'row',
                alignContent: 'center',
                paddingHorizontal: 10,
            }}>
                <FontAwesome name="facebook" size={24} color="white" />

                <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white', padding: 10 }}>Facebook</Text>

            </TouchableOpacity >

            <TouchableOpacity onPress={() => Linking.openURL('https://twitter.com/trifinancialco')} style={{
                flexDirection: 'row',
                alignContent: 'center',
                paddingHorizontal: 10,
            }}>
                <FontAwesome name="twitter" size={24} color="white" />

                <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white', padding: 10 }}>Twitter</Text>

            </TouchableOpacity >

        </View>
    )
}

export default SocialLinks

const styles = StyleSheet.create({})
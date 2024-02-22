import { StyleSheet, Text, View, Platform, StatusBar, SafeAreaView } from 'react-native'
import React from 'react'
import Header from '../assests/components/Header'

const About = () => {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Header pageTitle={"About TRI Financial Services"} />
            </View>
        </SafeAreaView>
    )
}

export default About

const styles = StyleSheet.create({
    container: {
        paddingTop: Platform.OS === "android" ?
            StatusBar.currentHeight : 0,
    },
})
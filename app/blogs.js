import { StyleSheet, Text, View, Platform, StatusBar, SafeAreaView } from 'react-native'
import React from 'react'
import Header from '../assests/components/Header';

const Blogs = () => {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Header pageTitle={"Blogs"} />
            </View>
        </SafeAreaView>
    )
}

export default Blogs

const styles = StyleSheet.create({
    container: {
        paddingTop: Platform.OS === "android" ?
            StatusBar.currentHeight : 0,
    },
})
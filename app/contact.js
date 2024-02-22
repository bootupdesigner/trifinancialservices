import { StyleSheet, Text, View, Platform, StatusBar, SafeAreaView } from 'react-native';
import React from 'react';
import Header from '../assests/components/Header';

const Contact = () => {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Header
                    pageTitle={'Contact TRI Financial Services'} />
            </View>
        </SafeAreaView >
    )
}

export default Contact

const styles = StyleSheet.create({
    container: {
        paddingTop: Platform.OS === "android" ?
            StatusBar.currentHeight : 0,
    },
})
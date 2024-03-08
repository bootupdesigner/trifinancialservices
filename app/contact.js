import { StyleSheet, Text, View, ScrollView,Platform, StatusBar, SafeAreaView } from 'react-native';
import React from 'react';
import Header from '../assests/components/Header';
import Form from '../assests/components/Form';
import Footer from '../assests/components/Footer';
import GoogleMap from '../assests/components/Map';

const Contact = () => {
    return (
        <SafeAreaView style={{flex:1,}}>
            <View style={styles.container}>
                <ScrollView>
                    <Header
                        pageTitle={'Contact TRI Financial Services'} />
                    <View>
                        <Form />
                    </View>
                    <GoogleMap/>
                    <Footer/>
                </ScrollView>
            </View>
        </SafeAreaView >
    )
}

export default Contact

const styles = StyleSheet.create({
    container: {
        flex:1,
        paddingTop: Platform.OS === "android" ?
            StatusBar.currentHeight : 0,
            backgroundColor:'#ffffff'
    },
})
import { StyleSheet, Text, View, Platform, StatusBar, SafeAreaView, ScrollView, Image } from 'react-native'
import React from 'react'
import Header from '../assests/components/Header';
import '@expo/match-media';
import { useMediaQuery } from "react-responsive";
import * as Linking from 'expo-linking';
import Book1 from '../assests/images/sma.jpg';
import Book2 from '../assests/images/srl.jpg';

const readings = [
    {
        id: '1',
        title: 'Saving Middle America, Securing Financial Dreams',
        author: `By Rich Rossi with Barbara Bolcavage and Anthony Stewart`,
        description: `This book provides readers with the knowledge necessary to help secure their financial futures with safety and security.`,
        image: Book1,
    }, {
        id: '2',
        title: `Stay Rich for Life!: Growing & Protecting Your Money in Turbulent Times`,
        author: `By Ed Slott`,
        description: `Given the challenging economic times, we will all welcome Ed Slott’s concrete advice for generating enormous wealth.`,
        image: Book2,
    }
]
const Books = () => {

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
    });

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <ScrollView>
                    <Header
                        pageTitle={'Books'} />

                    {isDesktopOrLaptop &&
                        <View style={{ alignItems: 'center' }}>
                            <ScrollView
                                horizontal
                                showsHorizontalScrollIndicator={false}>

                                {
                                    readings.map((book, id) => (
                                        <View
                                            key={id}
                                            style={{ justifyContent: 'space-between', alignItems: 'center', width: 350, padding: 15, borderWidth: 1, borderColor: '#800000', elevation: 10, borderRadius: 25, margin: 5 }}>

                                            <Text style={{ paddingVertical: 3, fontSize: 24, fontWeight: 'bold', color: '#800000', textAlign: 'center', }}>{book.title}</Text>

                                            <Text style={{ paddingVertical: 3, fontSize: 18.75, fontWeight: 'bold', textAlign: 'center', }}>{book.author}</Text>

                                            <Image source={book.image} resizeMode='contain'
                                                style={{ paddingVertical: 3, height: 200, width: '100%', }} />

                                            <Text style={{ paddingVertical: 3, fontSize: 16, fontWeight: 'normal', textAlign: 'center', }}>{book.description}</Text>

                                        </View>
                                    ))
                                }
                            </ScrollView>
                        </View>
                    }

                    {isTabletOrMobile &&
                        <ScrollView
                            horizontal
                            showsHorizontalScrollIndicator={false}>

                            {
                                readings.map((book, id) => (
                                    <View
                                        key={id}
                                        style={{ justifyContent: 'space-between', alignItems: 'center', width: 350, padding: 15, borderWidth: 1, borderColor: '#800000', elevation: 10, borderRadius: 25, margin: 5 }}>

                                        <Text style={{ paddingVertical: 3, fontSize: 24, fontWeight: 'bold', color: '#800000', textAlign: 'center', }}>{book.title}</Text>

                                        <Text style={{ paddingVertical: 3, fontSize: 18.75, fontWeight: 'bold', textAlign: 'center', }}>{book.author}</Text>

                                        <Image source={book.image} resizeMode='contain'
                                            style={{ paddingVertical: 3, height: 200, width: '100%', }} />

                                        <Text style={{ paddingVertical: 3, fontSize: 16, fontWeight: 'normal', textAlign: 'center', }}>{book.description}</Text>

                                    </View>
                                ))
                            }
                        </ScrollView>
                    }

                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

export default Books

const styles = StyleSheet.create({
    container: {
        height:'100%',
        paddingTop: Platform.OS === "android" ?
            StatusBar.currentHeight : 0,
    },
})
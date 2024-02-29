import { StyleSheet, Text, View, Platform, StatusBar, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Header from '../assests/components/Header';
import '@expo/match-media';
import { useMediaQuery } from "react-responsive";
import * as Linking from 'expo-linking';
import Footer from '../assests/components/Footer';
const readings = [
    {
        id: '1',
        title: 'Saving Middle America, Securing Financial Dreams',
        author: `By Rich Rossi with Barbara Bolcavage and Anthony Stewart`,
        description: `This book provides readers with the knowledge necessary to help secure their financial futures with safety and security.`,
        image: 'https://res.cloudinary.com/daj06anmm/image/upload/v1708910071/sma_kccdvu.jpg',
        link: 'https://www.amazon.com/Saving-Middle-America-Securing-Financial/dp/0615468497/ref=sr_1_1?dchild=1&keywords=saving+middle+america&qid=1600891880&s=books&sr=1-1',
    },
    {
        id: '2',
        title: `Stay Rich for Life!: Growing & Protecting Your Money in Turbulent Times`,
        author: `By Ed Slott`,
        description: `Given the challenging economic times, we will all welcome Ed Slott’s concrete advice for generating enormous wealth.`,
        image: 'https://res.cloudinary.com/daj06anmm/image/upload/v1708910071/srl_qmrsx4.jpg',
        link: 'https://www.amazon.com/Stay-Rich-Life-Protecting-Turbulent/dp/0345514424'
    }
]
const Books = () => {

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
    });

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });

    return (
        <SafeAreaView style={{ flex: 1, }}>
            <View style={styles.container}>
                <ScrollView>
                    <Header
                        pageTitle={'Books'} />

                    {isDesktopOrLaptop &&
                        <View style={{ alignItems: 'center', paddingVertical: 30 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', flexWrap: 'wrap', }}>

                                {
                                    readings.map((book, id) => (
                                        <TouchableOpacity
                                            onPress={() => Linking.openURL(book.link)}
                                            key={id}
                                            style={styles.bookCard}>

                                            <Text style={{ paddingVertical: 3, fontSize: 24, fontWeight: 'bold', color: '#800000', textAlign: 'center', }}>{book.title}</Text>

                                            <Text style={{ paddingVertical: 3, fontSize: 18.75, fontWeight: 'bold', textAlign: 'center', }}>{book.author}</Text>

                                            <Image source={{ uri: book.image }} resizeMode='contain'
                                                style={{ paddingVertical: 3, height: 200, width: '100%', }} />

                                            <Text style={{ paddingVertical: 3, fontSize: 16, fontWeight: 'normal', textAlign: 'center', }}>{book.description}</Text>

                                        </TouchableOpacity>
                                    ))
                                }
                            </View>
                        </View>
                    }

                    {isTabletOrMobile &&
                        <ScrollView
                            horizontal
                            showsHorizontalScrollIndicator={false}>

                            {
                                readings.map((book, id) => (
                                    <TouchableOpacity
                                        onPress={() => Linking.openURL(book.link)}
                                        key={id}
                                        style={{ ...styles.bookCard, marginVertical: 30 }}>

                                        <Text style={{ paddingVertical: 3, fontSize: 24, fontWeight: 'bold', color: '#800000', textAlign: 'center', }}>{book.title}</Text>

                                        <Text style={{ paddingVertical: 3, fontSize: 18.75, fontWeight: 'bold', textAlign: 'center', }}>{book.author}</Text>

                                        <Image source={{ uri: book.image }} resizeMode='contain'
                                            style={{ paddingVertical: 3, height: 200, width: '100%', }} />

                                        <Text style={{ paddingVertical: 3, fontSize: 16, fontWeight: 'normal', textAlign: 'center', }}>{book.description}</Text>

                                    </TouchableOpacity>
                                ))
                            }
                        </ScrollView>
                    }

                    <Footer />

                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

export default Books

const styles = StyleSheet.create({
    container: {
        height: '100%',
        paddingTop: Platform.OS === "android" ?
            StatusBar.currentHeight : 0,
        backgroundColor: 'white',
    },
    bookCard: {
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 350,
        padding: 15,
        borderWidth: 1,
        borderColor: '#800000',
        borderRadius: 25,
        paddingTop: 10, backgroundColor: 'white',
        elevation: 13,
        shadowColor: Platform.OS === 'web' || 'ios' ? '#00000090' : null,
        shadowOffset: {
            height: Platform.OS === 'web' || 'ios' ? 2 : null,
            width: Platform.OS === 'web' || 'ios' ? 2 : null
        },
        shadowRadius: Platform.OS === 'web' || 'ios' ? 10 : null,
        margin: 5,
    },

})
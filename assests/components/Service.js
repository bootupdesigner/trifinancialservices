import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { useNavigation } from 'expo-router';
import '@expo/match-media';
import { useMediaQuery } from "react-responsive";
import { List } from 'react-native-paper';

const Service = ({
    id,
    blog,
    serviceName,
    prevImg,
    image
}) => {

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
    });

    const isMobile = useMediaQuery({ query: '(max-width: 1224px)' });

    const navigation = useNavigation();

    const navigateToService = (service) => {
        navigation.navigate('services', { service: id });
    };


    return (
        <View style={{ paddingVertical: 30, paddingHorizontal: 10 }}>

            <Image
                source={{ uri: prevImg }}
                resizeMode='contain'
                style={{ width: 300, height: 169, alignSelf: 'center', }} />
            <View>
                {blog && blog.map((blog, index) => (
                    <View key={index}>
                        {blog.subHeading ? (<Text style={{ textAlign: 'left', fontFamily: 'Times New Roman', fontSize: 24, fontWeight: 'bold', color: '#800000', lineHeight: '150%', }}>{blog.subHeading}</Text>) : null}

                        {blog.summary && blog.summary.map((summaryItem, index) => (
                            <View key={index}>
                                {summaryItem.paragraph ? summaryItem.paragraph.map((paragraph, index) => (
                                    <Text key={index} style={{ fontFamily: 'Times New Roman', fontSize: 18, lineHeight: '150%', paddingBottom: 5 }} >{paragraph}</Text>
                                )) : null}

                                {summaryItem.bulletPoints ? summaryItem.bulletPoints.map((bullet, index) => (
                                    <View key={index} style={{ flexDirection: 'row', paddingHorizontal: 30, alignItems: 'center' }}>
                                        <Text style={{ fontSize: 18, lineHeight: '150%' }}>{'\u2022'}</Text>
                                        <Text style={{ fontFamily: 'Times New Roman', fontSize: 18, lineHeight: '150%', paddingVertical: 5, paddingLeft: 30 }} >{bullet}</Text>
                                    </View>
                                )) : null}

                                {summaryItem.subParagraph ? summaryItem.subParagraph.map((paragraph, index) => (
                                    <Text key={index} style={{fontFamily: 'Times New Roman', fontSize: 18, lineHeight: '150%', paddingBottom: 5}}>{paragraph}</Text>
                                )) : null}
                            </View>
                        ))}



                    </View>
                ))}
            </View>

            <Image
                source={{ uri: image }}
                resizeMode='contain'
                style={{ width: 300, height: 169, alignSelf: 'center', }} />
        </View>

        // <View style={{ alignItems: 'center',paddingHorizontal:100, }}>
        //     <Image
        //         source={{ uri: prevImg }}
        //         resizeMode='contain'
        //         style={{ width: 560, height: 315, }} />


        //     <Image
        //         source={{ uri: prevImg }}
        //         resizeMode='contain'
        //         style={{ width: 560, height: 315, }} />
        // </View>

    )
}

export default Service

const styles = StyleSheet.create({

})
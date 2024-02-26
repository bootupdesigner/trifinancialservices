import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { useNavigation } from 'expo-router';
import '@expo/match-media';
import { useMediaQuery } from "react-responsive";

const Service = ({
    id,
    blog,
    serviceName,
    prevImg,
    image
}) => {

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 480px)'
    });

    const isMobile = useMediaQuery({ query: '(max-width: 480px)' });

    const navigation = useNavigation();

    const navigateToService = (service) => {
        navigation.navigate('service', { service: id });
    };

    return (
        <View>
            <Text onPress={navigateToService}>{serviceName}</Text>
            <View style={{ alignItems: 'center' }}>

                {isMobile ? (

                    <Image
                        source={{uri:prevImg}}
                        resizeMode='contain'
                        style={{ width: 300, height: 169, }} />
                ) : (

                    <Image
                    source={{uri:prevImg}}
                    resizeMode='contain'
                        style={{ width: 560, height: 315, }} />
                )}
            </View>

            {blog && Array.isArray(blog) && blog.map((blogItem, index) => (
                <View key={index} style={{ padding: 10, }}>

                    {blogItem.subHeading && <Text style={{ fontSize: 18.75, fontWeight: 'bold', color: '#800000', }}>{blogItem.subHeading}</Text>}

                    {blogItem.summary && Array.isArray(blogItem.summary) && blogItem.summary.map((paragraph, index) => (
                        <Text style={{ fontSize: 16, paddingBottom: 10 }} key={index}>{paragraph}</Text>
                    ))}
                </View>
            ))
            }
            <View style={{ alignItems: 'center' }}>

                {isMobile ? (

                    <Image
                        source={{uri:image}}
                        resizeMode='contain'
                        style={{ width: 300, height: 169, }} />
                ) : (

                    <Image
                        source={{uri:image}}
                        resizeMode='contain'
                        style={{ width: 560, height: 315, }} />
                )}
            </View>
        </View >
    )
}

export default Service

const styles = StyleSheet.create({

})
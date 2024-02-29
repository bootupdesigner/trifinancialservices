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
        query: '(min-width: 1224px)'
    });

    const isMobile = useMediaQuery({ query: '(max-width: 1224px)' });

    const navigation = useNavigation();

    const navigateToService = (service) => {
        navigation.navigate('service', { service: id });
    };

    return (
        <View style={{ paddingVertical: 30 }}>

            {isMobile ? (
                <View style={{ alignItems: 'center' }}>

                    <Image
                        source={{ uri: prevImg }}
                        resizeMode='contain'
                        style={{ width: 300, height: 169, }} />

                    {blog && Array.isArray(blog) && blog.map((blogItem, index) => (
                        <View key={index} style={{ padding: 10, }}>

                            {blogItem.subHeading && <Text style={{ fontSize: 18.75, fontWeight: 'bold', color: '#800000', }}>{blogItem.subHeading}</Text>}

                            {blogItem.summary && Array.isArray(blogItem.summary) && blogItem.summary.map((paragraph, index) => (
                                <Text style={{ fontSize: 16, paddingBottom: 10 }} key={index}>{paragraph}</Text>
                            ))}
                        </View>
                    ))
                    }
                    <Image
                        source={{ uri: image }}
                        resizeMode='contain'
                        style={{ width: 300, height: 169, }} />
                </View>
            ) : (
                <View style={{ alignItems: 'center' }}>
                    <Image
                        source={{ uri: prevImg }}
                        resizeMode='contain'
                        style={{ width: 560, height: 315, }} />

                    {blog && Array.isArray(blog) && blog.map((blogItem, index) => (
                        <View key={index} style={{ paddingVertical: 30,paddingHorizontal:100 }}>

                            {blogItem.subHeading && <Text style={{ fontSize: 18.75, fontWeight: 'bold', color: '#800000', }}>{blogItem.subHeading}</Text>}

                            {blogItem.summary && Array.isArray(blogItem.summary) && blogItem.summary.map((paragraph, index) => (
                                <Text style={{ fontSize: 16, paddingBottom: 10 }} key={index}>{paragraph}</Text>
                            ))}
                        </View>
                    ))
                    }
                    <Image
                        source={{ uri: prevImg }}
                        resizeMode='contain'
                        style={{ width: 560, height: 315, }} />
                </View>
            )}
    </View>
    )
}

export default Service

const styles = StyleSheet.create({

})
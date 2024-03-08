import { StyleSheet, Text, View, Image, TouchableOpacity, Platform } from 'react-native';
import React from 'react';
const ServiceDescription = ({
    navigation, id, serviceName, prevImg, blog }) => {

    const navigateToService = (service) => {
        navigation.navigate('services', { service: id });
    };
    return (
        <TouchableOpacity onPress={navigateToService} style={styles.container}>
            <Text style={styles.cardHeading}>{serviceName}</Text>
            <View style={{ alignItems: 'center', backgroundColor: 'white', }}>
                <Image
                    source={{ uri: prevImg }}
                    resizeMode='contain'
                    style={{ width: 300, height: 169, }} />

            </View>

            {blog && Array.isArray(blog) && blog.length > 0 && (
                <Text numberOfLines={2} style={{ fontFamily:'Times New Roman', lineHeight:'150%',fontSize: 18, color: 'black', backgroundColor: 'white', paddingHorizontal: 10 }}>
                    {blog[0].summary && Array.isArray(blog[0].summary) && blog[0].summary.length > 0
                        ? blog[0].summary[0].paragraph.join(' ')
                        : ''}
                </Text>
            )}

            <Text
                numberOfLines={1}
                style={styles.learnButton}>Learn more about {serviceName}</Text>
        </TouchableOpacity>
    )
}

export default ServiceDescription

const styles = StyleSheet.create({
    container: {
        width: 300,
        height: 300,
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: '#800000',
        borderRadius: 25,
        paddingTop: 10, backgroundColor: 'white',
        elevation: 10,
        shadowColor: Platform.OS === 'web' || 'ios' ? '#00000090' : null,
        shadowOffset: {
            height: Platform.OS === 'web' || 'ios' ? 2 : null,
            width: Platform.OS === 'web' || 'ios' ? 2 : null
        },
        shadowRadius: Platform.OS === 'web' || 'ios' ? 10 : null,
    },
    learnButton: {fontFamily:'Times New Roman',
        fontSize: 16, fontWeight: 'bold', textAlign: 'center', color: '#ffffff', backgroundColor: '#000000', padding: 12,
        borderColor: '#800000',
        borderBottomLeftRadius: 25, borderBottomRightRadius: 25,
    },
    cardHeading: {fontFamily:'Times New Roman',
        fontWeight: 'bold', fontSize: 18.75, textAlign: 'center', backgroundColor: 'white', borderTopRightRadius: 25, borderTopLeftRadius: 25,
    },
})
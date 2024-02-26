import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'
import prevImg from require('https://res.cloudinary.com/daj06anmm/image/upload/v1708901215/disabiltyPrev_t4iafv.jpg');

const TestImage = () => {
    return (
        <View>
            <Image
                source={{uri:prevImg}}
                resizeMode='contain'
                style={{ width: 300, height: 169, }} />    </View>
    )
}

export default TestImage

const styles = StyleSheet.create({})
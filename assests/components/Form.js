import { StyleSheet, Text, View, Platform, } from 'react-native';
import React, { useState, } from 'react';
import axios from 'axios';
import { TextInput,Button } from 'react-native-paper';


const Form = () => {

    const [mailerState, setMailerState] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleStateChange = (name, value) => {
        setMailerState((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const submitEmail = async () => {
        console.log({ mailerState });

        try {
            const response = await axios.post("https://tri-server.onrender.com/send", {
                mailerState,
            });

            const resData = response.data;
            console.log(resData);

            if (resData.status === "success") {
                alert("Message Sent");
            } else if (resData.status === "fail") {
                alert("Message failed to send");
            }
            setMailerState({
                email: "",
                name: "",
                message: "",
            });
        } catch (error) {
            console.error('Error submitting email:', error);
        }
    };

    return (
        <View style={{ padding: 30,  height: 450, backgroundColor: 'white', }}>

            <View style={{
                borderWidth: 1,
                borderColor: '#ffffff',
                borderRadius: 25,justifyContent:'space-evenly',
                padding: 30, height: 400,backgroundColor: 'white',
                elevation: 10,
                shadowColor: Platform.OS === 'web' || 'ios' ? '#00000090' : null,
                shadowOffset: {
                    height: Platform.OS === 'web' || 'ios' ? 2 : null,
                    width: Platform.OS === 'web' || 'ios' ? 2 : null
                },
                shadowRadius: Platform.OS === 'web' || 'ios' ? 10 : null,
            }}>

                <Text style={{ textAlign: 'center', fontSize: 24, fontWeight: 'bold', color: '#800000' }} >Contact TRI Financial Services for a Quote</Text>
                <TextInput
                    mode='outlined'
                    label='Name'
                    placeholder="Name"
                    value={mailerState.name}
                    onChangeText={(text) => handleStateChange('name', text)}
                />
                <TextInput
                    label='Email'
                    mode='outlined'
                    placeholder="Email"
                    value={mailerState.email}
                    onChangeText={(text) => handleStateChange('email', text)}
                />
                <TextInput
                    mode='outlined'
                    Label='Message'
                    placeholder="Message"
                    value={mailerState.message}
                    onChangeText={(text) => handleStateChange('message', text)}
                    multiline
                    numberOfLines={4}
                />
                {/* Add a submit button or any other components as needed */}
                <Button 
                icon='send'
                mode='text'
                 onPress={submitEmail}>Send</Button>
            </View></View>
    );
};

export default Form;

const styles = StyleSheet.create({
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        margin: 10,
        padding: 8,
    },
});
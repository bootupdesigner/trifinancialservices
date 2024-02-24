import { StyleSheet, Text, View, Platform, } from 'react-native';
import React, { useState, } from 'react';
import axios from 'axios';
import { TextInput, Button } from 'react-native-paper';
import '@expo/match-media';
import { useMediaQuery } from "react-responsive";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import ReCAPTCHA from "react-google-recaptcha";

const Form = () => {

    const isMobile = useMediaQuery({
        maxDeviceWidth: 480,
    })

    const isTablet = useMediaQuery({
        minDeviceWidth: 480,
        maxDeviceWidth: 1224,
    });

    const isDesktopOrLaptop = useMediaQuery({
        minDeviceWidth: 1224,
    });

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

    const [loading, setLoading] = useState(false);
    const [recaptchaValue, setRecaptchaValue] = useState('');

    const onChange = (value) => {
        setRecaptchaValue(value);
    };

    const submitEmail = async () => {
        if (!recaptchaValue) {
            Toast.show({
                type: 'error',
                text1: 'Please complete the reCAPTCHA before submitting.'
            });
            return;
        }

        if (!mailerState.name || !mailerState.email || !mailerState.message) {
            Toast.show({
                type: 'error',
                text1: 'Validation Error',
                text2: 'Please fill in all required fields.',
            });
            return;
        }

        try {
            setLoading(true);

            const response = await axios.post("http://localhost:8080/send", {
                mailerState,
            }, {
                timeout: 10000, 
            });

            const resData = response.data;
            console.log(resData);

            if (resData.status === 'success') {
                Toast.show({
                    type: 'success',
                    text1: 'Message Sent',
                });


            } else if (resData.status === 'fail') {
                Toast.show({
                    type: 'error',
                    text1: 'Message failed to send',
                });
            }
            setMailerState({
                email: "",
                name: "",
                message: "",
            });
        } catch (error) {
            console.error('Error submitting email:', error);
            Toast.show({
                type: 'error',
                text1: 'Submission Error',
                text2: 'An error occurred while submitting the form. Please try again later.',
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <View>
            {isMobile && (
                  <View style={{ alignItems: 'center', paddingVertical: 30, height: 500, backgroundColor: 'white', paddingHorizontal:10. }}>
                  <View style={{
                      borderWidth: 1,
                      borderColor: '#ffffff',
                      borderRadius: 25, justifyContent: 'space-evenly',
                      paddingHorizontal: 10, height: 450, backgroundColor: 'white',
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
                      <ReCAPTCHA
                          sitekey={process.env.RECAPTCHA_SITE_KEY}
                          url='localhost'
                      />

                      <Button
                          icon='send'
                          mode='text'
                          onPress={submitEmail}
                          disabled={loading}
                          textColor='#800000'>
                          {loading ? 'Sending...' : 'Send'}
                      </Button>
                  </View>
              </View>
            )}

            {isTablet && (

                <View style={{ alignItems: 'center', paddingVertical: 30, height: 500, backgroundColor: 'white', }}>
                    <View style={{
                        borderWidth: 1,
                        borderColor: '#ffffff',
                        borderRadius: 25, justifyContent: 'space-evenly',
                        paddingHorizontal: 30, height: 450, backgroundColor: 'white',
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
                        <ReCAPTCHA
                            sitekey={process.env.RECAPTCHA_SITE_KEY}
                            url='localhost'
                        />
                        {/* Add a submit button or any other components as needed */}
                        <Button
                            icon='send'
                            mode='text'
                            onPress={submitEmail}
                            disabled={loading}
                            textColor='#800000'>
                            {loading ? 'Sending...' : 'Send'}
                        </Button>
                    </View>
                </View>
            )}
             {isDesktopOrLaptop && (
                <View style={{ alignItems: 'center', padding: 30, height: 600, backgroundColor: 'white', }}>
                    <View style={{
                        borderWidth: 1,
                        borderColor: '#ffffff',
                        borderRadius: 25, justifyContent: 'space-evenly',
                        padding: 30, height: 550, width: 600, backgroundColor: 'white',
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
                        <ReCAPTCHA
                            sitekey={process.env.RECAPTCHA_SITE_KEY}
                            onChange={onChange}
                        />,
                        {/* Add a submit button or any other components as needed */}
                        <Button
                            icon='send'
                            mode='text'
                            onPress={submitEmail}
                            disabled={loading}
                            textColor='#800000'>
                            {loading ? 'Sending...' : 'Send'}
                        </Button>
                    </View>
                </View>
            )}
        </View>
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
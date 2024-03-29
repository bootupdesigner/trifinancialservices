import { StyleSheet, Text, View, Platform, StatusBar, SafeAreaView, Alert, ScrollView, TouchableOpacity, } from 'react-native'
import React, { useState, useEffect, useCallback } from 'react'
import Header from '../assests/components/Header';
import axios from 'axios';
import YoutubePlayer from "react-native-youtube-iframe";
import { FontAwesome } from '@expo/vector-icons';
import * as Linking from 'expo-linking';
import '@expo/match-media';
import { useMediaQuery } from "react-responsive";
import Footer from '../assests/components/Footer';


const Videos = () => {

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
    });

    const isMobileOrTablet = useMediaQuery({ query: '(max-width: 1224px)' });

    const [videoBlogs, setVideoBlogs] = useState([]);

    const [playing, setPlaying] = useState(false);

    const onStateChange = useCallback((state) => {
        if (state === "ended") {
            setPlaying(false);
            Alert.alert("video has finished playing!");
        }
    }, []);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    'https://youtube.googleapis.com/youtube/v3/search',
                    {
                        params: {
                            part: 'id,snippet',
                            channelId: 'UCyjmGgjaYc9gCEbMhRYTk-w',
                            type: 'video',
                            key: `${process.env.GOOGLE_YOUTUBE_API}`,
                        },
                    }
                );
                console.log(response)

                const videoblogs = response.data.items;

                setVideoBlogs(videoblogs);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <SafeAreaView style={{ flex: 1, }}>
            <View style={styles.container}>
                <ScrollView>
                    <Header
                        pageTitle={'Videos'} />

                    {isMobileOrTablet ?
                        (
                            <View>
                                <ScrollView horizontal showsHorizontalScrollIndicator={false} >
                                    {videoBlogs.map((blog) => (
                                        <View key={blog.id.videoId} style={{ paddingVertical: 30, marginHorizontal: 10, width: 315, height: 350, justifyContent: 'space-between', }}>
                                            <Text numberOfLines={2} style={{ textAlign: 'center', fontSize: 24, fontWeight: 'bold', }}>{blog.snippet.title}</Text>

                                            <View>
                                                <YoutubePlayer
                                                    height={169}
                                                    width={300}
                                                    play={playing}
                                                    videoId={blog.id.videoId}
                                                    onChangeState={onStateChange}
                                                />
                                            </View>
                                            <Text numberOfLines={2} style={{ fontSize: 16 }}>{blog.snippet.description}</Text>

                                        </View>
                                    ))}
                                </ScrollView>

                                <TouchableOpacity onPress={() => Linking.openURL('https://www.youtube.com/channel/UCyjmGgjaYc9gCEbMhRYTk-w')} style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    paddingHorizontal: 10,
                                }}>
                                    <FontAwesome name="youtube" size={24} color="black" />

                                    <Text style={{ fontSize: 18.75, fontWeight: 'bold', color: '#800000', padding: 10 }}>Follow Us On YouTube!</Text>

                                </TouchableOpacity >
                                <Footer/>
                            </View>
                        ) : (
                            <>
                                <View style={{ paddingHorizontal: 100, }}>

                                    <View style={{ flexDirection: "row", flexWrap: 'wrap', }}>
                                        {videoBlogs.map((blog) => (
                                            <View key={blog.id.videoId} style={{ paddingVertical: 30, marginHorizontal: 20, width: 315, height: 350, justifyContent: 'space-evenly', }}>
                                                <Text numberOfLines={2} style={{ textAlign: 'center', fontSize: 24, fontWeight: 'bold', }}>{blog.snippet.title}</Text>

                                                <View>
                                                    <YoutubePlayer
                                                        height={169}
                                                        width={300}
                                                        play={playing}
                                                        videoId={blog.id.videoId}
                                                        onChangeState={onStateChange}
                                                    />
                                                </View>
                                                <Text numberOfLines={2} style={{ fontSize: 16 }}>{blog.snippet.description}</Text>

                                            </View>
                                        ))}

                                    </View>
                                    <TouchableOpacity onPress={() => Linking.openURL('https://www.youtube.com/channel/UCyjmGgjaYc9gCEbMhRYTk-w')} style={{
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        paddingHorizontal: 10,
                                    }}>
                                        <FontAwesome name="youtube" size={24} color="black" />

                                        <Text style={{ fontSize: 18.75, fontWeight: 'bold', color: '#800000', padding: 10 }}>Follow Us On YouTube!</Text>

                                    </TouchableOpacity >
                                </View>
                                <Footer />
                            </>
                        )
                    }

                </ScrollView>
            </View>

        </SafeAreaView>
    )
}

export default Videos

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === "android" ?
            StatusBar.currentHeight : 0,
    },
    videoContainer: {
        marginBottom: 20,
    },
    video: {
        width: '100%',
        height: 200,
    },
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },

})
import { StyleSheet, Text, View, Platform, StatusBar, SafeAreaView, Alert, ScrollView, TouchableOpacity, } from 'react-native'
import React, { useState, useEffect, useCallback } from 'react'
import Header from '../assests/components/Header';
import axios from 'axios';
import YoutubePlayer from "react-native-youtube-iframe";
import { FontAwesome } from '@expo/vector-icons';
import * as Linking from 'expo-linking';

const Videos = () => {

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
                            channelId: 'UCyjmGgjaYc9gCEbMhRYTk-w', // 'UClrwWrJ3er3i_IyudlpdCRw' belongs to me
                            type: 'video',
                            key: `${process.env.GOOGLE_YOUTUBE_API}`, // Replace with your actual YouTube API key
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
    }, []); // Empty dependency array ensures the effect runs only once, similar to componentDidMount

    //  `https://www.youtube.com/watch?v=${blog.id.videoId}`

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <ScrollView>
                    <Header
                        pageTitle={'Videos'} />
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} >
                        {videoBlogs.map((blog) => (
                            <View key={blog.id.videoId} style={{ padding: 10, width: 315, justifyContent: 'space-evenly',  }}>
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
                    <TouchableOpacity onPress={()=>Linking.openURL('https://www.youtube.com/channel/UCyjmGgjaYc9gCEbMhRYTk-w')} style={{
                        flexDirection: 'row',
                        paddingHorizontal: 10
                    }}>
                        <Text style={{ fontSize: 18.75, fontWeight: 'bold', color: '#800000', }}>Follow Us On YouTube!</Text>
                        <FontAwesome name="youtube" size={24} color="black" />
                    </TouchableOpacity >
                </ScrollView>
            </View>

        </SafeAreaView>
    )
}

export default Videos

const styles = StyleSheet.create({
    container: {
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
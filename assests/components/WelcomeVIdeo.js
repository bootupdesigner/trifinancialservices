import { StyleSheet, Text, Alert, View,  } from "react-native";
import '@expo/match-media';
import { useMediaQuery } from "react-responsive";
import { useCallback, useState } from "react";
import YoutubePlayer from "react-native-youtube-iframe";


export default function WelcomVideo() {

    const isMobile = useMediaQuery({ query: '(max-width: 480px)' });

    const [playing, setPlaying] = useState(false);

    const onStateChange = useCallback((state) => {
        if (state === "ended") {
            setPlaying(false);
            Alert.alert("video has finished playing!");
        }
    }, []);

    return (

        <View style={{ marginVertical:20,alignItems: 'center',justifyContent:'space-evenly', backgroundColor: 'black', paddingVertical: 20,height:400, }}>
            <Text style={{ color: 'white', paddingVertical: 10, fontSize: 24, fontWeight: 'bold', }}>Follow Us On YouTube</Text>
            {isMobile ? (
                <YoutubePlayer
                    height={169}
                    width={300}
                    play={playing}
                    videoId={'H_bTToAeYbA'}
                    onChangeState={onStateChange}
                />
            ) : (
                <YoutubePlayer
                    height={315}
                    width={560}
                    play={playing}
                    videoId={'H_bTToAeYbA'}
                    onChangeState={onStateChange}
                />
            )
            }
        </View>
    );
}

const styles = StyleSheet.create({});

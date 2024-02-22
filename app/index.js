import { useNavigation } from "expo-router";
import { ScrollView, StyleSheet, Text, Platform, StatusBar, View, ImageBackground, SafeAreaView } from "react-native";
import Header from '.././assests/components/Header';
import ServiceDescription from "../assests/components/ServiceDescription";
import { triServices } from "./service";
import '@expo/match-media';
import { useMediaQuery } from "react-responsive";
import WelcomeVideo from "../assests/components/WelcomeVIdeo";
import family from '../assests/images/family.jpg';
import Form from "../assests/components/Form";

export default function Page() {

  const navigation = useNavigation();

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  });

  const isMobileOrTablet = useMediaQuery({ query: '(max-width: 1224px)' });

  const financialFuture = `Enroll in Medicare or change plan today! Contact Renee to learn about better life insurance policies. We’re Ready to answer any questions you may have about your 401K Rollover. Call Renee Today!`

  return (
    <SafeAreaView style={{ flex: 1, }}>
      <View style={styles.container}>
        <ScrollView>

          <Header
          />
          <View>
            <View style={{ height: 300, }}>
              <ImageBackground style={styles.image}
                source={family}
                resizeMode="='cover'">
                <Text style={{ color: 'white', textAlign: 'center', fontWeight: 'bold', fontSize: 24 }}>Secure Your Financial Future</Text>
                <Text style={{ color: 'white', textAlign: 'center', fontWeight: 'bold', fontSize: 16 }}>Contact us today to get your Free Insurance Assessment.</Text>
              </ImageBackground>
            </View>

            <Text
              style={{ fontSize: 24, fontWeight: 'bold', color: '#800000', padding: 10, }}>Plan Your Financial Future</Text>
            <Text
              style={{ fontSize: 16, color: 'black', paddingHorizontal: 10, paddingBottom: 10, }}>{financialFuture}</Text>

            <Text
              onPress={() => navigation.navigate('service')}
              style={{ fontSize: 24, fontWeight: 'bold', color: '#800000', padding: 10, }}>Financial Services</Text>

            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {triServices.map((i, index) => (
                <View key={index} style={{ padding: 10, justifyContent: 'space-evenly', }}>
                  <ServiceDescription
                    id={i.id}
                    serviceName={i.serviceName}
                    prevImg={i.prevImg}
                    navigation={navigation}
                    blog={i.blog}
                  />
                </View>
              ))}
            </ScrollView>

            {/* youtube video  */}

            <WelcomeVideo />
            
            {/* email form  */}
            <Form />

          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ?
      StatusBar.currentHeight : 0,
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
  image: {
    height: 300,
    width: '100%',
    justifyContent: 'center',
  }
});

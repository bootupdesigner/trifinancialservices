import { useNavigation } from "expo-router";
import { ScrollView, StyleSheet, Text, Platform, StatusBar, View, ImageBackground, SafeAreaView, TouchableOpacity } from "react-native";
import Header from '.././assests/components/Header';
import ServiceDescription from "../assests/components/ServiceDescription";
import '@expo/match-media';
import { useMediaQuery } from "react-responsive";
import WelcomeVideo from "../assests/components/WelcomeVIdeo";
import Form from "../assests/components/Form";
import { triServices } from "../assests/data";
import Footer from "../assests/components/Footer";
import Slider from "../assests/components/Slider";

export default function Page() {

  const navigation = useNavigation();

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
                source={{ uri: 'https://res.cloudinary.com/daj06anmm/image/upload/v1708909951/family_gngszc.jpg' }}
                resizeMode='cover'>
                <Text style={{ color: 'white', textAlign: 'center', fontWeight: 'bold', fontSize: 24 }}>Secure Your Financial Future</Text>
                <Text style={{ color: 'white', textAlign: 'center', fontWeight: 'bold', fontSize: 16 }}>Contact us today to get your Free Insurance Assessment.</Text>
              </ImageBackground>
            </View>

            {isMobile &&
              (
                <View>
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
                  <TouchableOpacity
                    style={{ margin: 10, padding: 10, width: 180, backgroundColor: 'black', alignItems: 'center', justifyContent: 'center', borderColor: '#800000', borderWidth: 1, borderRadius: 25 }}
                    onPress={() => navigation.navigate('service')}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white', }}>View All</Text>
                  </TouchableOpacity>
                </View>

              )}

            {isTablet &&
              (
                <View>
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
                  <TouchableOpacity
                    style={{ margin: 10, padding: 10, width: 180, backgroundColor: 'black', alignItems: 'center', justifyContent: 'center', borderColor: '#800000', borderWidth: 1, borderRadius: 25 }}
                    onPress={() => navigation.navigate('service')}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white', }}>View All</Text>
                  </TouchableOpacity>
                </View>

              )}

            {isDesktopOrLaptop && (
              <View style={{ paddingHorizontal: 100, }}>
                <Text
                  style={{ fontSize: 24, fontWeight: 'bold', color: '#800000', padding: 10, }}>Plan Your Financial Future</Text>
                <Text
                  style={{ fontSize: 16, color: 'black', paddingHorizontal: 10, paddingBottom: 10, }}>{financialFuture}</Text>
                <Text
                  style={{ fontSize: 24, fontWeight: 'bold', color: '#800000', padding: 10, }}>Financial Services</Text>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap', }}>

                  {triServices && triServices.slice(0, 6).map((i, index) => (
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
                </View>
                <TouchableOpacity
                  style={{ margin: 30, padding: 10, width: 180, backgroundColor: 'black', alignItems: 'center', justifyContent: 'center', borderColor: '#800000', borderWidth: 1, borderRadius: 25 }}
                  onPress={() => navigation.navigate('service')}>
                  <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white', }}>View All</Text>
                </TouchableOpacity>
              </View>
            )}

            {/* youtube video  */}

            <WelcomeVideo />
            <Slider />
            {/* email form  */}
            <Form />
            <Footer />

          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
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

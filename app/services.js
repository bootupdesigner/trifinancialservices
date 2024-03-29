import { Platform, StatusBar, ScrollView, StyleSheet, Text, View, SafeAreaView, } from 'react-native';

import React from 'react'
import Header from '../assests/components/Header'
import Service from '../assests/components/Service'
import { useGlobalSearchParams, useNavigation } from 'expo-router';
import '@expo/match-media';
import { useMediaQuery } from "react-responsive";
import ServiceDescription from '../assests/components/ServiceDescription';

import { triServices } from '../assests/data';
import Footer from '../assests/components/Footer';

const Services = () => {
  const navigation = useNavigation();

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  });

  const isMobileOrTablet = useMediaQuery({ query: '(max-width: 1224px)' });


  const glob = useGlobalSearchParams();
  const service = glob.service;

  const selectedService = triServices.find(tri => tri.id === service);


  if (!service) {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <ScrollView>
            <Header pageTitle={
              'TRI Financial Services'
            } />

            {isMobileOrTablet ?
              (
                <View style={{ paddingHorizontal: 10, }}>

                  <Text
                    style={{ fontFamily: 'Times New Roman', lineHeight: '150%', fontSize: 24, fontWeight: 'bold', color: '#800000', padding: 10, }}>Financial Services</Text>
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
                </View>
              ) : (
                <View style={{ paddingHorizontal: 100, }}>
                  <Text
                    style={{ fontSize: 24, fontWeight: 'bold', color: '#800000', padding: 10, }}>Financial Services</Text>

                  <View style={{ flexDirection: 'row', flexWrap: 'wrap', }}>

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
                  </View>
                </View>
              )}
            <Footer />

          </ScrollView>
        </View>
      </SafeAreaView>

    )
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <ScrollView >

          <Header
            pageTitle={selectedService.serviceName} />

          {isMobileOrTablet && (
            <View style={{ paddingHorizontal: 10, }}>
              <Service
                id={selectedService.id}
                blog={selectedService.blog}
                serviceName={selectedService.serviceName}
                prevImg={selectedService.prevImg}
                image={selectedService.image}
              />
            </View>
          )}

          {isDesktopOrLaptop && (
            <View style={{ paddingHorizontal: 100, }}>
              <Service
                id={selectedService.id}
                blog={selectedService.blog}
                serviceName={selectedService.serviceName}
                prevImg={selectedService.prevImg}
                image={selectedService.image}
              />
            </View>
          )}

          <Footer />

        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

export default Services

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: Platform.OS === "android" ?
      StatusBar.currentHeight : 0,
  },
})
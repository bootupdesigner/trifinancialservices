import { StyleSheet, Text, View, Platform, StatusBar, SafeAreaView, ScrollView, Image } from 'react-native';
import React from 'react';
import Header from '../assests/components/Header';
import '@expo/match-media';
import { useMediaQuery } from "react-responsive";
import { Fontisto } from '@expo/vector-icons';
import Footer from '../assests/components/Footer';


const aboutTri = {
    mission: [
        `TRI Financial Services is committed to providing individuals and families with the necessary tools to plan for a secure financial future so they can leave a financial legacy to their heirs. We are based in Laurel, Maryland.`
    ],
    vision: [
        `Our vision is to help individuals and families, of all income levels, establish a plan that will provide for their families upon death, disability or long-term care illness and to help provide for them a stream of tax-free income at retirement.`,

        `We want to create a more financially literate society, a society that can look forward to being financially independent, enjoy a carefree and fun retirement and leave a financial legacy for generations to come.`
    ],
    testimonials: [
        {
            id: '1',
            person: 'Erica Hall',
            testimonial: [
                `Renee Ilesanmi has been my insurance agent for over 10 years. When I purchased my first home in May 2000, she was instrumental in helping me decide what type of insurance I needed to be able to pay off my house in case of my death. She also helped me do an assessment of my current life insurance policies to determine which ones I should keep and which policies to replace in light of my current situation. Renee is very professional, knowledgeable, responsive and patient. She also meets with me yearly to discuss any changes in my professional or personal status that may affect my current policies. I am so thankful to have Renee as my insurance agent.`
            ],
        },
        {
            id: '2',
            person: 'Charles & Kathleen Culver',
            testimonial: [
                `My family and I would like to thank you for the wonderful services you have given us over these past 10 years. You have shown us the importance of saving money for our twins’ college tuition and having a retirement plan for my wife and me. You have also planted the information and knowledge of financial planning in my son, and he has purchased a life insurance policy with you. Again, thank you, and we wish you the best in your business and in your future.`
            ],
        },
        {
            id: '3',
            person: 'Dale Parker',
            testimonial: [
                `I have enjoyed the service rendered by Ms. Renee. She is very professional and always has the best interest of her clients. I would recommend her to others.`
            ],
        },
        {
            id: '4',
            person: 'Brenda Figueroa',
            testimonial: [
                `Ms. Ilesanmi is knowledgeable, efficient and provides my husband and me with excellent customer service on our insurance policies.`
            ],
        },
        {
            id: '5',
            person: 'Osita Osagbue',
            testimonial: [
                `The Women, Wellness and Wealth Conference was an awesome event and offered comprehensive, lifelong lessons.`
            ],

        },
    ],
    meetRenee: {
        person: `Renee Ilesanmi, Founder`,
        summary: [
            `Renee Ilesanmi is a financial solution specialist based in Laurel, Maryland. She has a Bachelor’s degree in Finance from the University of Maryland. Since 1993, she has helped families with their life insurance and retirement planning needs and currently serves over 800 clients in the Washington D.C. metropolitan area. Renee has been recognized with numerous awards for her outstanding achievements in the financial service industry during her affiliation with the American Classic Agency.`,

            `Renee Ilesanmi believes in giving back to the community and does so by conducting free financial literacy workshops and seminars at churches, civic organizations, and sororities. She also donates to various charities and feeds the homeless. Additionally, Renee is a contributing editor for the fact-filled and educational book, “Saving Middle America; Securing Financial Dreams.” A masterpiece of experiences, case studies, and analysis, the guide is easy to read, understand and use as a resource.`,

            `Ultimately, Renee’s goal is to help families and individuals, of all income levels, become financially independent and to show them how to leave a financial legacy to their families.`,
        ],
        image: 'https://res.cloudinary.com/daj06anmm/image/upload/v1709312978/Renee_ikihix.jpg',
    },
    affiliations: {
        person: `Affiliations`,
        summary: [
            `Renee has been happily affiliated with American Classic Agency  (ACA ) since 1998. ACA was established in 1995. At a time when the insurance industry’s top players were cutting back on customer service and sales support, ACA emerged as a fresh new player, bridging the gap with more personal attention and dedicated support, harnessing the power of e-commerce and meeting the needs of a changing marketplace.`,

            `ACA celebrates the entrepreneurial spirit of thousands of independent life insurance agents across the country. ACA provides the training and opportunities for committed professionals to provide our customers with personalized insurance and annuity products to help them attain their long-term goals.`,

            `ACA has helped hundreds of thousands of hard-working American families protect against the unexpected with life, disability, and long-term care insurance, and plan their financial futures with cash accumulation vehicles such as Universal Life Insurance Policies and Annuities.`,
        ],
        image: 'https://res.cloudinary.com/daj06anmm/image/upload/v1708910071/sma_kccdvu.jpg',
    }

}


const Summaries = ({ summary, index }) => (
    Array.isArray(summary) &&
    summary.map((paragraph, paragraphIndex) => (
        <View key={paragraphIndex} style={{ paddingVertical: 5 }}>
            <Text style={{fontFamily:'Times New Roman', lineHeight:'150%',
                fontSize: 18,
                color: index % 2 === 0 ? '#ffffff' : 'black'
            }}>
                {paragraph}
            </Text>
        </View>
    ))
);


const Testimonial = ({ testimonial, index }) => (
    <View
        style={{
            marginVertical: 10,
            padding: 20,
            elevation: index % 2 === 0 ? 0 : 10,
            backgroundColor: index % 2 === 0 ? '#800000' : 'white',
            shadowColor: index % 2 === 0 ? 'transparent' : (Platform.OS === 'web' || Platform.OS === 'ios' ? '#000000' : 'transparent'),
            shadowOffset: {
                height: index % 2 === 0 ? 0 : (Platform.OS === 'web' || Platform.OS === 'ios' ? 10 : 0),
                width: index % 2 === 0 ? 0 : (Platform.OS === 'web' || Platform.OS === 'ios' ? 10 : 0),
            },
            shadowOpacity: index % 2 === 0 ? 0 : (Platform.OS === 'web' || Platform.OS === 'ios' ? 0.5 : 0),

            shadowRadius: index % 2 === 0 ? 0 : (Platform.OS === 'web' || Platform.OS === 'ios' ? 10 : 0),


            borderRadius: 10,

        }}
        key={testimonial.id}
    >
        <Fontisto style={styles.quoteLeft} name="quote-a-right" size={24} color="#800000" />

        <Summaries summary={testimonial.testimonial} index={index} />

        <Text style={{ fontFamily:'Times New Roman', lineHeight:'150%',color: index % 2 === 0 ? '#ffffff' : 'black', fontSize: 18, fontWeight: 'bold' }}>-- {testimonial.person}</Text>
        <Fontisto style={styles.quoteRight} name="quote-a-left" size={24} color="#800000" />
    </View>
);


const About = () => {

  
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
      });
    
      const isMobileOrTablet = useMediaQuery({ query: '(max-width: 1224px)' });
    

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white', }}>
            <View style={styles.container}>
                <ScrollView>
                    <Header pageTitle={"About TRI Financial Services"} />
                    {isMobileOrTablet && (
                        <View style={{ paddingHorizontal: 10 }}>

                            <Text style={styles.sectionTitle}>Mission</Text>

                            <Summaries summary={aboutTri.mission} />

                            <Text style={styles.sectionTitle}>Vision</Text>

                            <Summaries summary={aboutTri.vision} />


                            <Text style={styles.sectionTitle}>Meet Renee</Text>
                            <Image resizeMethod='contain' style={{ width: '100%', }} source={aboutTri.meetRenee.image} />
                            <Summaries summary={aboutTri.meetRenee.summary} />

                            <Text style={styles.sectionTitle}>Affiliations</Text>
                            <Image
                                source={{ uri: aboutTri.affiliations.image }}
                                resizeMode='contain'
                                style={{ width: '100%', height: 400 }} />
                            <Summaries summary={aboutTri.affiliations.summary} />

                            <View style={{ paddingHorizontal: 40 }}>
                                <Text style={{ fontFamily:'Times New Roman', lineHeight:'150%',fontSize: 18.75, fontWeight: 'bold', textAlign: 'center', }}>Testimonials</Text>
                                {aboutTri.testimonials.map((testimonial, index) => (
                                    <Testimonial key={testimonial.id} testimonial={testimonial} index={index} />
                                ))}
                            </View>
                        </View>

                    )}
                    {isDesktopOrLaptop && (
                        <View style={{ paddingHorizontal: 100, }}>

                            <Text style={styles.sectionTitle}>Mission</Text>

                            <Summaries summary={aboutTri.mission} />

                            <Text style={styles.sectionTitle}>Vision</Text>

                            <Summaries summary={aboutTri.vision} />

                            <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around', alignItems: 'center', paddingVertical: 30, }}>

                                <View style={{ width: 450 }}>
                                    <Image resizeMethod='contain' style={{ width: '100%', height: 400 }} source={aboutTri.meetRenee.image} />
                                </View>

                                <View style={{ width: 450 }}>
                                    <Text style={styles.sectionTitle}>Meet Renee</Text>
                                    <Summaries summary={aboutTri.meetRenee.summary} />
                                </View>

                            </View>

                            <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around', alignItems: 'center', paddingVertical: 30, }}>

                                <View style={{ width: 450 }}>
                                    <Image
                                        source={{ uri: aboutTri.affiliations.image }}
                                        resizeMode='contain'
                                        style={{ width: '100%', height: 400 }} />
                                </View>

                                <View style={{ width: 450 }}>
                                    <Text style={styles.sectionTitle}>Affiliations</Text>
                                    <Summaries summary={aboutTri.affiliations.summary} />
                                </View>

                            </View>
                            <Text style={{ fontSize: 18.75, fontWeight: 'bold', textAlign: 'center', }}>Testimonials</Text>
                            {aboutTri.testimonials.map((testimonial, index) => (
                                <Testimonial key={testimonial.id} testimonial={testimonial} index={index} />
                            ))}
                        </View>
                    )}
                    <Footer />
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

export default About

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: Platform.OS === "android" ?
            StatusBar.currentHeight : 0,
    },

    sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 10,
        fontFamily:'Times New Roman', 
        lineHeight:'150%',
    },
    quoteLeft: {
        position: 'absolute',
        top: 0,
        left: -40
    },
    quoteRight: {
        position: 'absolute',
        bottom: 0,
        right: -40
    }
})
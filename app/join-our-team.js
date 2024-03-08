import { StyleSheet, Text, ScrollView, View, Platform, Image, SafeAreaView } from 'react-native';
import React from 'react';
import Header from '../assests/components/Header';


const team = {
  blog: [
    `A career in financial services is very rewarding. Where else can you choose your income, the type of work you do and help people? If you are seeking to advance in a financial services career and desire greater control over your professional and personal life, TRI Financial Services can open up a broad range of new opportunities and a host of tangible benefits.`,

    `We understand what it means to take hold of your destiny. TRI Financial Services helps you build your own business in the financial services industry by giving you the necessary tools to be successful. You will be in business for yourself but not by yourself. Interested? Open positions include marketing representatives and life insurance professionals.`,

    `TRI Financial Services helps you tailor a comprehensive plan that provides a solution for your unique financial needs. Want to learn more about how we can assist you? Call us today to schedule a complimentary consultation. Or take a few moments to complete the complimentary consultation form, provide us with the best phone number and e-mail address at which to reach you, and we’ll be in touch soon to help you best determine how our products and services can provide the greatest coverage at the most affordable rates.`,

    `Once you’ve selected your plan, we offer a variety of payment options, all of which are customizable and convenient for you to use. We also do government allotments for federal employees. Get started below; we look forward to hearing from you!`,
  ],
  bullets: [
    `Weekly pay`,
    `Better-than-average industry commissions`,
    `Phenomenal Products`,
    `Monthly, quarterly and annual bonuses`,
    `Club rings and diamonds`,
    `Trips to Mexico, Hawaii, Cayman Islands, Switzerland, Puerto Rico, and other exotic destinations`,
    `Exclusive lead territories`,],
  summary: [
    `We also offer ongoing training and support. Learn how to educate, sell and manage customer accounts from one of our financial service experts.`,

    `We’ll help you take your next step. Call us today at (410) 880-4680 or email us at renee@trifinancialservices.com.`,

    `Learn more about our affiliate American Classic Agency.`
  ],
  image: 'https://res.cloudinary.com/daj06anmm/image/upload/v1709359065/Business-Meeting_ul1fhp.jpg'
}

const JoinOurTeam = () => {

  const email = 'renee@trifinancialservices.com';
 
  const handleEmailPress = async () => {
    const mailtoLink = `mailto:${email}`;
    try {
      await Linking.openURL(mailtoLink);
    } catch (error) {
      console.error(`Error opening email: ${error}`);
    }
  };


  return (
    <SafeAreaView style={{ flex: 1, }}>
      <View style={styles.container}>
        <ScrollView>
          <Header pageTitle={
            'Join Our Team'
          } />

          <View style={{ padding: 30, }}>
            <View style={{ alignItems: 'center', }}>
              {team.blog.map((paragraph, index) => (
                <Text
                  key={index}
                  style={{fontFamily:'Times New Roman', lineHeight:'150%',
                    fontSize: 18,
                    paddingVertical: 5
                  }}>
                  {paragraph}
                </Text>
              ))}
            </View>

            <View style={{ paddingVertical: 10, }}>
              <Text style={{fontFamily:'Times New Roman', lineHeight:'150%',
                textAlign: 'left',
                fontWeight: 'bold',
                fontSize: 24,
              }}>What do you get when you join our team?</Text>
              <View style={styles.bulletContainer}>
                {team.bullets.map((bullet, index) => (
                  <Text key={index} style={styles.bullet}>
                    {'\u2022'} {bullet}
                  </Text>
                ))}
              </View>
            </View>

            <View style={{}}>

            {team.summary.map((paragraph, index) => {
          const parts = paragraph.split(email);
          return (
            <Text key={index} style={{fontFamily:'Times New Roman',fontSize:18,lineHeight:'150%',paddingVertical:5}}>
              {parts[0]}
              {parts.length > 1 && (
                <Text>
                  <Text style={styles.emailLink} onPress={handleEmailPress}>
                    {email}
                  </Text>
                  {parts[1]}
                </Text>
              )}
            </Text>
          );
        })}


            </View>

            <View style={{ alignItems: 'center', }}>
              <Image resizeMethod='contain' style={{ height: 315, width: 560, marginVertical: 30 }} source={{ uri: team.image }} />
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

export default JoinOurTeam

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: Platform.OS === "android" ?
      StatusBar.currentHeight : 0,
  },
  bulletContainer: {
    marginLeft: 20,
    paddingVertical: 10
  },
  bullet: {
    fontSize: 18,
    fontFamily:'Times New Roman', 
    lineHeight:'150%',
    marginBottom: 4,
  },
  emailLink: {
    color: 'blue',
    textDecorationLine: 'underline',
    fontFamily:'Times New Roman', 
    lineHeight:'150%',
    fontSize:18
  },
})
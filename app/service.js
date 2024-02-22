import { Platform, StatusBar, ScrollView, StyleSheet, Text, View, SafeAreaView, } from 'react-native';

import React from 'react'
import Header from '../assests/components/Header'
import Service from '../assests/components/Service'
import { useGlobalSearchParams } from 'expo-router';
import lifeInsurancePrev from '../assests/images/life-insurance-prev.jpg';
import lifeInsurance from '../assests/images/life-insurance.jpg';
import rollovers from '../assests/images/rollovers.jpg';
import rolloversPrev from '../assests/images/rollovers-prev.jpg';
import ServiceDescription from '../assests/components/ServiceDescription';

export const triServices = [
  {
    id: '401k-ollovers',
    serviceName: `401K Rollovers`,
    prevImg: rolloversPrev,
    image: rollovers,
    blog: [
      {
        id: '1',
        summary: [
          `Once upon a time, being employed in the same career our entire work lives was standard. However, the lifetime employment our grandparents experienced no longer exists. Whether you wanted to pursue new opportunities, were downsized, fired or just couldn’t face the prospect of going to work anymore, the odds are that at some point in your life, you will leave your current employer.`,
          `And when that happens, you have a few options regarding the assets in your company’s retirement plan. For example, 401(k), 403b, 457 or TSP. These options are:`,
        ]
      }, {
        id: '2',
        subHeading: `1. Leave your assets in the old employer’s 401k retirement plan`,
        summary: [`Many 401k plan administrators charge record keeping and other fees to manage your account, regardless of whether you are still with the company. These fees can take a significant bite out of your future net worth, especially if you have accounts maintained at several different employers.`],
      }, {
        id: '3',
        subHeading: `2. Complete a 401k rollover to the new employer’s 401k plan`,
        summary: [`Moving the money from your current employer’s plan to your new employer’s 401(k) plan is easy because it keeps your assets consolidated but at the same time, you will be subject to the choices provided by your new employer. If you are unsatisfied with the choices available to you, completing a 401k rollover to an IRA may be a better option.`],
      }, {
        id: '4',
        subHeading: `3. Complete a 401k rollover and move the assets to an Individual Retirement Account (IRA)`,
        summary: [`Completing a 401k rollover is almost always the best choice for those interested in providing for a comfortable retirement because it allows the investor’s capital to continue compounding tax-deferred while providing maximum control over asset allocation (i.e., you aren’t limited to the investments offered by the 401k plan provider.)`],
      }, {
        id: '5',
        subHeading: `4. Cash out the proceeds, paying taxes and the 10% penalty fee`,
        summary: [`It’s almost always a huge mistake to cash out your 401k or retirement account. The tragedy is far greater than the taxes and penalty fee. The greater financial loss comes from the decades of tax-deferred compounding that your capital could have earned had you chosen to initiate a 401k rollover.`,

          `If you left money in an old 401k, 403b, TSP or 457 let’s get together to discuss the best course of action.`],
      }
    ]
  },
  {
    id: 'life-insurance',
    serviceName: 'Life Insurance',
    prevImg: lifeInsurancePrev,
    image: lifeInsurance,
    blog: [
      {
        id: '1',
        summary: [`Are you concerned about how your family and loved ones will be left to handle your financial affairs in the event of your death? Are you concerned that your parents, adult children or siblings don’t have enough insurance to cover funeral expenses? Having life insurance ensures that your loved ones will continue to enjoy a good quality of life against any unexpected event.  Generally, life insurance falls into two categories, term (provides coverage at a fixed rate of payments for a limited period of time) and permanent (provides death protection for the insured’s entire lifetime). TRI Financial Services is here to help you choose the right life insurance plan.`],
      },
      {
        id: '2',
        subHeading: `What is term insurance?
    `,
        summary: [`This type of insurance is meant to help you meet your needs for temporary coverage. The concept term means that it provides protection for a specific period of time. It usually only pays out if you die. It’s also usually very affordable. If you’re in the family planning phase, just bought a house, or even paying for your children’s college education, this type of insurance might be the best fit for you. `],
      },
      {
        id: '3',
        subHeading: `What is permanent insurance? 
    `,
        summary: [
          `This type of insurance is designed to last a lifetime. Permanent life insurance accumulates cash value and is priced for you to keep over a long period of time.`,

          `The kind of coverage that’s right for you depends on your unique circumstances and financial goals. The best way to figure out the amount and type of life insurance that makes sense for your particular situation is to speak with us.`
        ],
      },
    ]
  }
];

const Services = ({ navigation }) => {



  const glob = useGlobalSearchParams();
  const service = glob.service;

  const selectedService = triServices.find(tri => tri.id === service);


  if (!service) {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <ScrollView>
            <Header pageTitle={
              'Services'
            } />

            {triServices.map((i, id) => (
              <View key={id}>

                <ServiceDescription
                  id={i.id}
                  blog={i.blog}
                  serviceName={i.serviceName}
                  prevImg={i.prevImg}
                />
              </View>
            ))}
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

          <Service
            id={selectedService.id}
            blog={selectedService.blog}
            serviceName={selectedService.serviceName}
            prevImg={selectedService.prevImg}
            image={selectedService.image}
          />

        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

export default Services

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ?
      StatusBar.currentHeight : 0,
  },
})
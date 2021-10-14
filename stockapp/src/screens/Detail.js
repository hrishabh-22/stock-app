import React, {useState, useEffect} from 'react';
import CustomHeader from '../layout/CustomHeader';
import {fetchDetails} from '../utils/ApiCalls';
import {
  ScrollView,
  HStack,
  Text,
  VStack,
  Heading,
  Center,
  Spinner,
} from 'native-base';
import {Dimensions} from 'react-native';
import {LineChart} from 'react-native-chart-kit';

const Detail = ({navigation, route}) => {
  const [details, setDetails] = useState(null);

  const loadData = () => {
    const {stockid} = route.params;
    fetchDetails(stockid)
      .then(data => setDetails(data))
      .catch(err => console.log(err));
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <CustomHeader displayAllBtn={false} />
      {details ? (
        <ScrollView>
          <Center flex={1} m="4">
            <Heading size="sm">{details.meta.scheme_name}</Heading>
            <Heading size="sm">by-{details.meta.fund_house}</Heading>
            <LineChart
              data={{
                labels: [
                  details.data[0].date.slice(0, 2),
                  details.data[1].date.slice(0, 2),
                  details.data[2].date.slice(0, 2),
                  details.data[3].date.slice(0, 2),
                  details.data[4].date.slice(0, 2),
                  details.data[5].date.slice(0, 2),
                  details.data[6].date.slice(0, 2),
                ],
                datasets: [
                  {
                    data: [
                      details.data[0].nav,
                      details.data[1].nav,
                      details.data[2].nav,
                      details.data[3].nav,
                      details.data[4].nav,
                      details.data[5].nav,
                      details.data[6].nav,
                    ],
                  },
                ],
              }}
              width={Dimensions.get('window').width}
              height={320}
              yAxisInterval={1}
              chartConfig={{
                backgroundColor: '#46B2E0',
                backgroundGradientFrom: '#538FFB',
                backgroundGradientTo: '#5B54FA',
                decimalPlaces: 5,
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                style: {
                  borderRadius: 16,
                },
                propsForDots: {
                  r: '6',
                  strokeWidth: '2',
                  stroke: '#ffa726',
                },
              }}
              bezier
              style={{
                marginVertical: 8,
                borderRadius: 16,
              }}
            />
            <Heading size="sm">7 Days (Gain/Loss) Graph</Heading>
            <VStack m="4" mt="16" space={4}>
              <HStack space="2">
                <Text fontWeight="600">MF Type: </Text>
                <Heading size="sm">{details.meta.scheme_type}</Heading>
              </HStack>
              <HStack space="2">
                <Text fontWeight="600">MF Category: </Text>
                <Heading size="sm">{details.meta.scheme_category}</Heading>
              </HStack>
              <HStack space="2">
                <Text fontWeight="600">MF Code: </Text>
                <Heading size="sm">{details.meta.scheme_code}</Heading>
              </HStack>
            </VStack>
          </Center>
        </ScrollView>
      ) : (
        <Center flex={1}>
          <Spinner color="red.700" size="lg" />
        </Center>
      )}
    </>
  );
};

export default Detail;

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
    </>
  );
};

export default Detail;

import React, {useState} from 'react';
import {
  Input,
  VStack,
  Link,
  Center,
  Box,
  Heading,
  ScrollView,
  IconButton,
  Icon,
} from 'native-base';
import CustomHeader from '../layout/CustomHeader';
import MatIcon from 'react-native-vector-icons/MaterialIcons';

const MFARRAY = [
  {id: '100121', name: 'HDFC BALANCED FUND- DIVIDEND OPTION'},
  {id: '147648', name: 'ICICI GROW DIRECT PLAN - DIVIDEND OPTION'},
  {id: '100915', name: 'SBI - CONTRA REGULAR PLAN DIVIDEND'},
  {id: '147888', name: 'AXIS ALL SEASON FUND - REGULAR'},
  {id: '100262', name: 'KOTAK GLIT SAVINGS GROWTH'},
];

const Home = props => {
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [mutualFunds, setMutualFunds] = useState(MFARRAY);

  const handleSearch = () => {
    if (!searchValue) {
      setMutualFunds(MFARRAY);
      return;
    }
    let ans = MFARRAY.filter(mf => mf.name.includes(searchValue));
    setMutualFunds(ans);
  };

  const handleSearchBarState = () => {
    setShowSearchBar(!showSearchBar);
    setSearchValue('');
    setMutualFunds(MFARRAY);
  };

  return (
    <>
      <CustomHeader onClick={handleSearchBarState} displayAllBtn={true} />
      <ScrollView>
        {showSearchBar ? (
          <Input
            placeholder="Search"
            size="xl"
            value={searchValue}
            m="4"
            onChangeText={text => setSearchValue(text)}
            InputRightElement={
              <IconButton
                icon={<Icon size="sm" as={<MatIcon name="search" />} />}
                onPress={handleSearch}
              />
            }
          />
        ) : null}
        <Center>
          <Heading mt="4" size="xl">
            Welcome To Stock App
          </Heading>
          <Heading size="xs" color="gray.600">
            Your One Step Solution To Every Stock
          </Heading>
        </Center>
        <Center flex={1} mt="8">
          <VStack space="4">
            {mutualFunds.map((mf, index) => {
              return (
                <Link
                  key={index}
                  onPress={() => {
                    props.navigation.navigate('Detail', {
                      stockid: mf.id,
                    });
                  }}>
                  <Box
                    borderColor="blue.100"
                    borderWidth="1"
                    width="90%"
                    backgroundColor="blue.100"
                    p="4"
                    m="4"
                    overflow="hidden"
                    rounded="lg">
                    <Heading size="xs">{mf.name}</Heading>
                  </Box>
                </Link>
              );
            })}
          </VStack>
        </Center>
      </ScrollView>
    </>
  );
};

export default Home;

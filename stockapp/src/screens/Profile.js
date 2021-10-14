import React, {useState} from 'react';
import {
  Text,
  Heading,
  Center,
  VStack,
  Input,
  Icon,
  IconButton,
  Box,
  ScrollView,
  Button,
} from 'native-base';
import CustomHeader from '../layout/CustomHeader';
import {setUser} from '../action/user';
import {connect} from 'react-redux';
import MatIcon from 'react-native-vector-icons/MaterialIcons';

const Profile = ({navigation, setUser, userListState}) => {
  const [name, setName] = useState(userListState.name);
  const [email, setEmail] = useState(userListState.email);
  const [password, setPassword] = useState(userListState.password);
  const [dob, setDob] = useState(userListState.dob);

  const updateHandler = async () => {
    const userDetail = {
      name,
      email,
      password,
      dob,
    };
    setUser(userDetail);
    navigation.navigate('Home');
  };

  return (
    <>
      <CustomHeader />
      <ScrollView>
        <Center mt='8'>
          <Heading>Dashboard</Heading>
        </Center>
        <Box mt="30%">
          <VStack flex={1} space="4" m="8">
            <Input
              placeholder="Name"
              size="xl"
              value={name}
              onChangeText={text => setName(text)}
            />
            <Input
              placeholder="Email"
              size="xl"
              value={email}
              onChangeText={text => setEmail(text)}
            />
            <Input
              placeholder="Password"
              size="xl"
              value={password}
              onChangeText={text => setPassword(text)}
            />
            <Input
              placeholder="DOB AS YYYY-MM-DD"
              size="xl"
              value={dob}
              onChangeText={text => setDob(text)}
            />
            <Button onPress={updateHandler}>Update</Button>
          </VStack>
        </Box>
      </ScrollView>
    </>
  );
};

const mapStateToProps = state => ({
  userListState: state.user,
});

const mapDispatchToProps = {
  setUser: data => setUser(data),
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

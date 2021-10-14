import React, {useState} from 'react';
import {
  VStack,
  Input,
  Button,
  Heading,
  Box,
  Link,
  HStack,
  Text,
  Icon,
  Center,
  PresenceTransition,
  ScrollView,
} from 'native-base';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {connect} from 'react-redux';

const SignIn = ({userListState, navigation}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const showPasswordHandler = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async () => {
    if (!email || !password) {
      return alert('Enter All Fields');
    }
    const registerEmail = userListState.email;
    const registerPassword = userListState.password;

    if (email === registerEmail && password === registerPassword) {
      navigation.navigate('Home');
    } else {
      alert('Invalid Credintials');
    }
  };

  return (
    <>
      <ScrollView>
        <Center>
          <Heading mt="4" mb="2" fontSize="50" pl="6" fontFamily="festive">
            Welcome
          </Heading>
          <Heading size="xs" fontWeight="600" pl="6" color="gray.500">
            Your One Step Solution to Stocks
          </Heading>
        </Center>
        <PresenceTransition
          visible={true}
          initial={{
            opacity: 0,
            scale: 0,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            transition: {
              duration: 500,
            },
          }}>
          <VStack flex={1} space="4" mt="30%">
            <Box
              p="2"
              py="8"
              w="90%"
              mx="auto"
              borderWidth="1"
              borderRadius="xl"
              overflow="hidden"
              borderColor="coolGray.500">
              <Input
                placeholder="Email"
                m="2"
                size="xl"
                value={email}
                onChangeText={text => setEmail(text)}
                InputLeftElement={
                  <Icon
                    as={<MaterialIcon name="email" />}
                    size={7}
                    ml={2}
                    color="muted.400"
                  />
                }
              />
              <Input
                placeholder="Password"
                m="2"
                size="xl"
                value={password}
                onChangeText={text => setPassword(text)}
                type={showPassword ? 'text' : 'password'}
                InputRightElement={
                  <Icon
                    onPress={showPasswordHandler}
                    as={
                      <MaterialIcon
                        name={showPassword ? 'visibility' : 'visibility-off'}
                      />
                    }
                    size={7}
                    mr={2}
                    color="muted.400"
                  />
                }
              />
              <Button mt="4" size="lg" onPress={handleLogin}>
                Login
              </Button>
              <Center>
                <HStack space={2} flex={1} mt="4">
                  <Text fontSize="sm" color="muted.700" fontWeight={400}>
                    New User
                  </Text>
                  <Link
                    _text={{
                      color: 'indigo.500',
                    }}
                    _hover={{
                      cursor: 'pointer',
                    }}
                    cursor="pointer"
                    onPress={() => {
                      navigation.navigate('SignUp');
                    }}>
                    Signup
                  </Link>
                </HStack>
              </Center>
            </Box>
          </VStack>
        </PresenceTransition>
      </ScrollView>
    </>
  );
};

const mapStateToProps = state => ({
  userListState: state.user,
});

export default connect(mapStateToProps, null)(SignIn);

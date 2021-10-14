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
  IconButton,
  Center,
  ScrollView,
  Select,
  CheckIcon,
} from 'native-base';
import {connect} from 'react-redux';
import {setUser} from '../action/user';
import DatePicker from 'react-native-date-picker';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

const SignUp = ({navigation, setUser}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [date, setDate] = useState(new Date());
  const [isBtnClicked, setIsBtnClicked] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [gender, setGender] = useState('');
  const [openDatePicker, setOpenDatePicker] = useState(false);

  const handleSignUp = async () => {
    if (!name || !email || !password || !confirmPassword || !gender) {
      return alert('Fill All Fields');
    }
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return alert('Enter Valid Email');
    }

    if (password !== confirmPassword) {
      return alert('Password Does Not Match');
    }

    const userData = {
      name,
      email,
      password,
      gender,
      dob: date.toISOString().split('T')[0],
    };
    setUser(userData);
    navigation.navigate('SignIn');
  };

  return (
    <>
      <ScrollView>
        <Center>
          <Heading mt="4" mb="2" fontSize="50" pl="6">
            Signup
          </Heading>
        </Center>
        <VStack flex={1} space="4" mt="10%">
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
              placeholder="Name"
              m="2"
              size="xl"
              value={name}
              onChangeText={text => setName(text)}
              InputLeftElement={
                <Icon
                  as={<MaterialIcon name="person" />}
                  size={7}
                  ml={2}
                  color="muted.400"
                />
              }
            />
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
                  onPress={() => {
                    setShowPassword(!showPassword);
                  }}
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
            <Input
              placeholder="Confirm Password"
              m="2"
              size="xl"
              value={confirmPassword}
              onChangeText={text => setConfirmPassword(text)}
              type={showConfirmPassword ? 'text' : 'password'}
              InputRightElement={
                <Icon
                  onPress={() => {
                    setShowConfirmPassword(!showConfirmPassword);
                  }}
                  as={
                    <MaterialIcon
                      name={
                        showConfirmPassword ? 'visibility' : 'visibility-off'
                      }
                    />
                  }
                  size={7}
                  mr={2}
                  color="muted.400"
                />
              }
            />
            <Select
              m="2"
              fontSize="18"
              selectedValue={gender}
              minWidth="200"
              accessibilityLabel="Choose Gender"
              placeholder="Choose Gender"
              _selectedItem={{
                bg: 'teal.600',
                endIcon: <CheckIcon size="5" />,
              }}
              mt={1}
              onValueChange={itemValue => setGender(itemValue)}>
              <Select.Item label="Female" value="female" />
              <Select.Item label="Male" value="male" />
              <Select.Item label="Other" value="other" />
            </Select>
            <Input
              placeholder="DOB"
              isDisabled={true}
              m="2"
              size="xl"
              value={isBtnClicked ? date.toISOString().split('T')[0] : ''}
              InputRightElement={
                <IconButton
                  icon={
                    <Icon
                      size={7}
                      as={<MaterialIcon name="date-range" />}
                      color="muted.400"
                    />
                  }
                  onPress={() => setOpenDatePicker(true)}
                />
              }
            />
            <DatePicker
              modal
              mode="date"
              open={openDatePicker}
              date={date}
              onConfirm={date => {
                setOpenDatePicker(false);
                setDate(date);
                setIsBtnClicked(true);
              }}
              onCancel={() => {
                setOpenDatePicker(false);
              }}
            />
            <Button mt="4" size="lg" onPress={handleSignUp}>
              Signup
            </Button>
            <Center>
              <HStack space={2} flex={1} mt="4">
                <Text fontSize="sm" color="muted.700" fontWeight={400}>
                  Existing User
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
                    navigation.navigate('SignIn');
                  }}>
                  SignIn
                </Link>
              </HStack>
            </Center>
          </Box>
        </VStack>
      </ScrollView>
    </>
  );
};

const mapDispatchToProps = {
  setUser: data => setUser(data),
};

export default connect(null, mapDispatchToProps)(SignUp);

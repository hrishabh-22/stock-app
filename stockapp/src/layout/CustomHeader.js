import React from 'react';
import {HStack, IconButton, Icon, Text} from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';

const CustomHeader = props => {
  const navigation = useNavigation();

  return (
    <>
      <HStack
        bg="#6200ee"
        px="1"
        py="3"
        justifyContent="space-between"
        alignItems="center">
        <HStack space="4" alignItems="center">
          {props.displayAllBtn ? (
            <IconButton
              onPress={() => {
                navigation.navigate('Profile');
              }}
              icon={
                <Icon
                  size="sm"
                  as={<MaterialIcons name="account-circle" />}
                  color="white"
                />
              }
            />
          ) : (
            <IconButton
              onPress={() => {
                navigation.navigate('Home');
              }}
              icon={
                <Icon
                  size="sm"
                  as={<MaterialIcons name="arrow-back" />}
                  color="white"
                />
              }
            />
          )}
          <Text color="white" fontSize="20" fontWeight="bold">
            Stock App
          </Text>
        </HStack>
        {props.displayAllBtn ? (
          <HStack space="2">
            <IconButton
              mr="4"
              onPress={props.onClick}
              icon={
                <Icon
                  as={<MaterialIcons name="search" />}
                  color="white"
                  size="sm"
                />
              }
            />
          </HStack>
        ) : null}
      </HStack>
    </>
  );
};

export default CustomHeader;

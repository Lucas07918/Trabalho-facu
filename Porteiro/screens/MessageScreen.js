import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { 
    Container,
    Card,
    UserInfo,
    UserImgWrapper,
    UserImg,
    UserInfoText,
    UserName,
    PostTime,
    MessageText,
    TextSection,
 } from "../styles/MessageStyles";
import { useNavigation } from "@react-navigation/native";

 const Messages = [
  {
    id: '1',
    userName: 'Tracy Mcconell',
    userImg: require('../assets/users/tracy-mcconnell.jpg'),
    messageTime: '4 mins ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '2',
    userName: 'Marshall Eriksen',
    userImg: require('../assets/users/marshall-eriksen.jpg'),
    messageTime: '1 hours ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '3',
    userName: 'Barney Stinson',
    userImg: require('../assets/users/barney-stinson.jpg'),
    messageTime: '2 hours ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '4',
    userName: 'Lily Audrin',
    userImg: require('../assets/users/lily-aldrin.jpg'),
    messageTime: '1 day ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '5',
    userName: 'Robin Scherbatsky',
    userImg: require('../assets/users/robin-scherbatsky.jpg'),
    messageTime: '2 days ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
];

const MessageScreen = () => {
  const navigation = useNavigation();

    return(
        <Container>
            <FlatList
                data={Messages}
                keyExtractor={item=>item.id}
                renderItem={({item}) => (
                    <Card onPress={() => navigation.navigate('Chat', {userName:item.userName})} >
                      <UserInfo>
                        <UserImgWrapper>
                          <UserImg source={item.userImg} />
                        </UserImgWrapper>
                        <TextSection>
                          <UserInfoText>
                            <UserName>{item.userName}</UserName>
                            <PostTime>{item.messageTime}</PostTime>
                          </UserInfoText>
                          <MessageText>{item.messageText}</MessageText>
                        </TextSection>
                      </UserInfo>
                    </Card>
                )}
            />
        </Container>
    );
}


export default MessageScreen;
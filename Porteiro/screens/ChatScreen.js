import React, { useCallback, useEffect, useState } from "react";
import { View, Text } from "react-native";
import { Bubble, GiftedChat, Send } from "react-native-gifted-chat";
import  Icon  from "react-native-vector-icons/MaterialCommunityIcons";
import  FontAwesome  from "react-native-vector-icons/FontAwesome";

const ChatScreen = () => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
      setMessages([
        {
          _id: 1,
          text: 'Tô bem, obrigado por perguntar!',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
          },
        },
        {
            _id: 2,
            text: 'Eai, como vc tá?',
            createdAt: new Date(),
            user: {
              _id: 1,
              name: 'React Native',
              avatar: 'https://placeimg.com/140/140/any',
            },
          },
      ]);
    }, []);

    const renderSend = (props) => {
        return(
            <Send {...props} >
                <View>
                    <Icon name='send-circle' size={40} style={{marginBottom: 1, marginRight: 5}} color="#a9ceea" />
                </View>
            </Send>
        )
    }
  
    const onSend = useCallback((messages = []) => {
      setMessages((previousMessages) =>
        GiftedChat.append(previousMessages, messages),
      );
    }, []);

    const renderBubble = (props) => {
        return(
        <Bubble 
            {...props}
            textStyle={{ right: {color: '#000'}}}
            wrapperStyle={{
                right: {
                    backgroundColor: '#a9ceea'
                },
                left: {
                    backgroundColor: '#fff'
                }
            }}
        />
        );
    }

    const scrollToBottomComponent = () => {
        return(
          <FontAwesome name='angle-double-down' size={22} color='#333' />
        );
      }

    return(
        <View style={{backgroundColor: '#e4e4e4', flex: 1}}>
        <GiftedChat
      messages={messages}
      onSend={(messages) => onSend(messages)}
      user={{
        _id: 1,
      }}
      renderBubble={renderBubble}
      alwaysShowSend
      renderSend={renderSend}
      scrollToBottom
      scrollToBottomComponent={scrollToBottomComponent}
      timeTextStyle={{right: {color: '#000'}}}
      showAvatarForEveryMessage={true}
    />
        </View>
    );
}


export default ChatScreen;
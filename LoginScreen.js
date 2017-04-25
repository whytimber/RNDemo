import React,{ Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
} from 'react-native';

class LoginScreen extends Component {
  static navigationOptions = {
    title: '登陆',
  };
  render() {
    return (
      <View>
        <Text> 登陆页面 </Text>
      </View>
    );
  }
}

export default LoginScreen = {};

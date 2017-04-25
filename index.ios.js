import React,{Component} from 'react';
import {
  AppRegistry,
  Text,
  View,
  SegmentedControlIOS,
  FlatList,
  StyleSheet,
  ScrollView,
  TextInput,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Button from 'apsl-react-native-button'

import LoginScreen from './LoginScreen';

class HomeScreen extends React.Component {
  constructor(props){
      super(props);
      this.state = {
          selectedIndex: 0,
          firstRowTip: '手机号',
          secondRowTip: '验证码',
          firstRowHolder: '请输入手机号',
          secondRowHolder: '请输入验证码',
      };
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView style = {{backgroundColor: '#f5f8fd'}}>
        <LoginSegmentedControl />
        <LoginInputVerifyCode/>
        <Button style={styles.loginButton} textStyle={{color: 'white'}} >
          登录
        </Button>
      </ScrollView>
    );
  }
}

class LoginSegmentedControl extends Component {

  render() {
    return (
      <View style={{marginBottom: 10}}>
        <SegmentedControlIOS
          style={{margin: 10 ,height: 35}}
          tintColor="#30cccc"
          values={['短信验证码登录', '账号登录']}
          selectedIndex={this.state.selectedIndex}
          onChange={this._onChange.bind(this)}
          // onValueChange={this._onValueChange}
        />
      </View>
    );
  };
  _onChange(event) {
    this.setState({
      selectedIndex: event.nativeEvent.selectedSegmentIndex,
    });
  };

  // _onValueChange(value) {
  //   this.setState({
  //     value: value,
  //   });
  // }
}

class LoginInputVerifyCode extends Component {
  render() {
    return (
      <View>
          <View style = {styles.inputVertical}>
            <View style = {styles.longLine} />
            <View style = {styles.inputHorizontal}>
              <Text  style={styles.textLabel}>
                {this.props.firstRowTip}
              </Text>
              <TextInput underlineColorAndroid='transparent' style={styles.textinput} placeholder='请输入手机号'/>
            </View>
            <View style = {styles.shortLine} />
            <View style = {styles.inputHorizontal}>
              <Text style={styles.textLabel}>
                {this.props.secondRowTip}
              </Text>
              <TextInput underlineColorAndroid='transparent' style={styles.textinput} placeholder='请输入验证码'/>
              <Button style={styles.verifyCodeButton} textStyle={{color: 'gray',fontSize: 12,}} >
                获取验证码
              </Button>
            </View>
            <View style = {styles.longLine} />
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textLabel: {
    marginLeft: 10,
    color: '#30cccc',
    fontSize: 16,
    // backgroundColor: 'blue',
  },
  textinput: {
    marginLeft: 20,
    flex: 1,
    fontSize: 16,
    // backgroundColor: 'red',
  },
  shortLine: {
    height: 1,
    backgroundColor: 'gray',
    marginLeft:10,
  },
  longLine: {
    height: 1,
    backgroundColor: 'gray',
  },
  inputVertical: {
    flexDirection:'column',
    justifyContent: 'flex-start',
  },
  inputHorizontal: {
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    height: 44,
  },
  verifyCodeButton: {
    borderRadius: 3,
    borderColor: 'gray',
    marginTop:10,
    marginRight:10,
    height:25,
    width:95,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButton: {
    borderRadius: 3,
    borderColor: '#30cccc',
    height:50,
    margin: 10,
    backgroundColor: '#30cccc',
  },
  registerButton: {
    backgroundColor: '#30cccc',
    borderWidth: 0,
    marginTop: 15,
    height: 25,
    width: 60,
  },
  left: {
    flex:1,
    marginLeft:10,
    width:100,
    height:45,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff0000',
  },
  item2: {
    width: 40,
    height: 40,
    backgroundColor: '#00ff00',
  },
  item3: {
    width: 40,
    height: 40,
    backgroundColor: '#0000ff',
  },
  textContent: {
    color: '#ffffff',
    fontSize: 15,
  },
});

const RNDemos = StackNavigator({

  Home: {
    screen: HomeScreen,
    navigationOptions: {
      title: '登录',
      headerTintColor: 'white',
      headerRight: <Button style={styles.registerButton} textStyle={{color: 'white'}}>注册</Button>,
    }},
});

AppRegistry.registerComponent('RNDemos', () => RNDemos);

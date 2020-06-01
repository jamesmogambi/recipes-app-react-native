import React from "react";
import { Text, View, StyleSheet,Image, ImageBackground } from "react-native";
// import Button from "react-native-button";
import styles from './styles';
import LoginButton from '../../components/LoginButton/LoginButton';
import SignUpButton from '../../components/SignUpButton/SignUpButton';

export default class WelcomeScreen extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
            headerTransparent: 'true',
            title:'',

        };
      };

  constructor(props) {
    super(props);
    this.state = {
      isLoading: false
    };
  }

  render() {
    const bg = 'https://www.texanerin.com/content/uploads/2019/06/nobake-chocolate-cookies-1-650x975.jpg';


    return (
      <View style={styles.container} >
            <ImageBackground source={{ uri: bg }} style={styles.image}>

      {/* <Image source={require('../../../assets/cookie100.png')} style={styles.logo} /> */}
       <View style={styles.card}>
        <Text style={styles.title}>MessGuide</Text>
        <LoginButton
          onPress={() => this.props.navigation.navigate('Login')}
          text='Log In'
        />
         <SignUpButton
          onPress={() => this.props.navigation.navigate('SignUp')}
         />


        {/* <Button
          containerStyle={styles.loginContainer}
          style={styles.loginText}
          onPress={() => this.props.navigation.navigate('Main')}
        >
          Log In
        </Button> */}
        {/* <Button
         containerStyle={styles.signupContainer}
         style={styles.signupText}
         onPress={() => this.props.navigation.navigate('Main')}
        >
          Sign Up
        </Button> */}
        </View>
      </ImageBackground>
       </View>
    );
  }

}


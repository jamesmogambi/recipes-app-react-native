import React from "react";
import { Text, View, StyleSheet,Image, ImageBackground } from "react-native";
// import Button from "react-native-button";
import styles from './styles';
import AuthButton from '../../components/AuthButton/AuthButton';
import TintButton from '../../components/TintButton/TintButton';

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
        <Text style={styles.title}>MessGuide App</Text>
        <AuthButton
          onPress={() => this.props.navigation.navigate('Login')}
          text='Log In'
        />
         <TintButton
          onPress={() => this.props.navigation.navigate('SignUp')}
          text='Sign Up'
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


import React from 'react';
import {
  FlatList,
  Alert,
  Text,
  View,
  TouchableHighlight,
  Image,
  ImageBackground
} from 'react-native';
import styles from './styles';
import { connect } from 'react-redux';
import { startSignUp } from '../../actions/auth';
import { TextField, } from 'react-native-material-textfield';
import BackButton from '../../components/BackButton/BackButton';
import { Card } from 'react-native-elements'
import AuthButton from '../../components/AuthButton/AuthButton';
import Spinner from '../../components/Spinner/Spinner';

export  class SignUpScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTransparent: 'true',
      title: 'Sign Up',
      headerLeft: (
        <BackButton
          onPress={() => {
            navigation.goBack();
          }}
        />
      )
    };
  };

  constructor(props) {
    super(props);

    this.state = {
      email:'',
      password1: '',
      password2: '',
      error:"",
      loading:false
    };
  }

 
  onButtonPress() {

    if (this.state.email && this.state.password1  && this.state.password2)
     {
       if (this.state.password1 === this.state.password2 ) {
        this.setState({ error: '', loading: true });
        const user =  {
          email: this.state.email,
          password:this.state.password1
        };
        this.props.startSignUp(user)
        .then((result) => {
          if (result === 'success') {
           
        this.setState({
          // email: '',
          // password1: '',
          // password2: '',
          loading: false,
          error: ''
        });

             Alert.alert("Success!!!");
          } else {
             
        this.setState({
          error: 'Authentication Failed!',
          loading: false
        });
              // Alert.alert("Error!!!");
          }
    
        }
        )
       } else {
        Alert.alert("Passwords do not match.");
         
       }
    

   
    // .catch((error) => {
    //   this.onLoginFail.bind(this)
    //   Alert.alert("Error!!!");

    // });

     } ;

   
    // firebase.auth().signInWithEmailAndPassword(email, password)
    //   .then(this.onLoginSuccess.bind(this))
    //   .catch(() => {
    //     firebase.auth().createUserWithEmailAndPassword(email, password)
    //       .then(this.onLoginSuccess.bind(this))
    //       .catch(this.onLoginFail.bind(this));
    //   });
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner size="large" />;
    }

    return (
       <AuthButton
       onPress={this.onButtonPress.bind(this)}
      //  onPress={() => this.props.navigation.navigate('Main')}
       text = 'Sign Up'
     />
    );

  }

  render() {
    // const { navigation,menu } = this.props;
    // const item = navigation.getParam('category');
    const bg = 'https://www.texanerin.com/content/uploads/2019/06/nobake-chocolate-cookies-1-650x975.jpg';

    return (
      <View style={styles.container}>
        <ImageBackground source={{ uri: bg }} style={styles.image}>
        <Card>
         <Text style={styles.header}>Sign Up</Text>
       <TextField
        label='Email'
        tintColor='#2cd18a'
        value={this.state.email}
        onChangeText={ (email) => this.setState({ email }) }
      />
       <TextField
        label='Password'
        tintColor='#2cd18a'
        value={this.state.password1}
        onChangeText={ (password1) => this.setState({ password1 }) }
      />
        <TextField
        label='Confirm Password'
        tintColor='#2cd18a'
        value={this.state.password2}
        onChangeText={ (password2) => this.setState({ password2 }) }
      />
      {/* <FeedBackButton/> */}
      <View style={styles.card}>
          {this.renderButton()}
         </View>

      </Card>
      </ImageBackground>
      </View>
    );
  }
}

// const mapStateToProps = (state,props) => {
//   // const item = props.navigation.getParam('category');
//   return {
//      menu: state.menu,
//     //  category: item.name,
//     }; 
// };

const mapDispatchToProps = (dispatch, props) => ({
  startSignUp: (user) => dispatch(startSignUp(user)),
});
export default connect(undefined,mapDispatchToProps)(SignUpScreen);

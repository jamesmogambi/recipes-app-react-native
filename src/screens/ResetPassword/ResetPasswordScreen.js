import React from 'react';
import {
  FlatList,
  Text,
  View,
  TouchableHighlight,
  Image,
  ImageBackground
} from 'react-native';
import styles from './styles';
import { getMenu, getCategoryName } from '../../data/MockDataAPI';
import { connect } from 'react-redux';
import FeedBackButton from '../../components/FeedBackButton/FeedBackButton';
import { startSetMenu } from '../../actions/menu';
import { TextField, } from 'react-native-material-textfield';
import BackButton from '../../components/BackButton/BackButton';
import { Card } from 'react-native-elements'
import LoginButton from '../../components/LoginButton/LoginButton';

export default class ResetPasswordScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTransparent: 'true',
      title: 'Reset Password',
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
      error:"",
      loading:false
    };
  }

  render() {
    // const { navigation,menu } = this.props;
    // const item = navigation.getParam('category');
    const bg = 'https://www.texanerin.com/content/uploads/2019/06/nobake-chocolate-cookies-1-650x975.jpg';

    return (
      <View style={styles.container}>
        <ImageBackground source={{ uri: bg }} style={styles.image}>
        <Card>
       <TextField
        label='E-mail'
        tintColor='#2cd18a'
        value={this.state.email}
        onChangeText={ (email) => this.setState({ email}) }
      />
      
      {/* <FeedBackButton/> */}
      <View style={styles.card}>
      <LoginButton
          onPress={() => this.props.navigation.navigate('Main')}
          text ='Reset Password'
        />
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

// const mapDispatchToProps = (dispatch, props) => ({
//   startSetMenu: () => dispatch(startSetMenu()),
// });
// export default connect(mapStateToProps,mapDispatchToProps)(LoginScreen);

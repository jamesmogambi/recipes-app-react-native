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

export class FeedBackScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTransparent: 'true',
      title: 'send app feedback',
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
      subject: '',
      message: '',
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
        onChangeText={ (email) => this.setState({ email }) }
      />
       <TextField
        label='Subject'
        tintColor='#2cd18a'
        value={this.state.subject}
        onChangeText={ (subject) => this.setState({ subject }) }
      />
        <TextField
        label='Message'
        tintColor='#2cd18a'
        multiline={true}
        value={this.state.message}
        onChangeText={ (message) => this.setState({ message }) }
      />
      <FeedBackButton/>
      </Card>
      </ImageBackground>
      </View>
    );
  }
}

const mapStateToProps = (state,props) => {
  // const item = props.navigation.getParam('category');
  return {
     menu: state.menu,
    //  category: item.name,
    }; 
};

const mapDispatchToProps = (dispatch, props) => ({
  startSetMenu: () => dispatch(startSetMenu()),
});
export default connect(mapStateToProps,mapDispatchToProps)(FeedBackScreen);

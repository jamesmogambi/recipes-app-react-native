import React from 'react';
import { TouchableHighlight, Image, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
// import { Button } from 'react-native-elements';
import Button from "react-native-button";


export default class AuthButton extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <Button
          containerStyle={styles.loginContainer}
          style={styles.loginText}
          onPress={this.props.onPress}
        >
          {this.props.text}
        </Button>
    );
  }
}

AuthButton.propTypes = {
  onPress: PropTypes.func,
  source: PropTypes.number,
  title: PropTypes.string
};

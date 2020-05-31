import React from 'react';
import { TouchableHighlight, Image, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import { Button } from 'react-native-elements';
// export default class FeedBackButton extends React.Component {
//   render() {
//     return (
//       <TouchableHighlight underlayColor='rgba(73,182,77,1,0.9)' onPress={this.props.onPress}>
//         <View style={styles.container}>
//           <Text style={styles.text}>Send FeedBack</Text>
//         </View>
//       </TouchableHighlight>
//     );
//   }
// }

export default class FeedBackButton extends React.Component {
  render() {
    return (
      // <TouchableHighlight underlayColor='rgba(73,182,77,1,0.9)' onPress={this.props.onPress}>
      //   <View style={styles.container}>
      //     <Text style={styles.text}>Send FeedBack</Text>
      //   </View>
      // </TouchableHighlight>
      <Button
      title="Send FeedBack"
      type="solid"
      buttonStyle={styles.btn}
      />
    );
  }
}

FeedBackButton.propTypes = {
  onPress: PropTypes.func,
  source: PropTypes.number,
  title: PropTypes.string
};

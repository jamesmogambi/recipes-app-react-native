import React from 'react';
import {
  FlatList,
  Text,
  View,
  TouchableHighlight,
  Image
} from 'react-native';
import styles from './styles';
import { getMenu, getCategoryName } from '../../data/MockDataAPI';
import { connect } from 'react-redux';

export class MenuScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('title')
    };
  };

  constructor(props) {
    super(props);
  }

 
  onPressMenuItem = item => {
    // console.log(item);
    let title = item.title;
    this.props.navigation.navigate('MenuItem', { item,title});
  };

  renderMenu = ({ item }) => (
    <TouchableHighlight underlayColor='rgba(73,182,77,1,0.9)' onPress={() => this.onPressMenuItem(item)}>
      <View style={styles.container}>
        <Image style={styles.photo} source={{ uri: item.photo_url }} />
        <Text style={styles.title}>{item.title}</Text>
        {/* <Text style={styles.category}>{getCategoryName(item.categoryId)}</Text> */}
        {/* <Text style={styles.category}>{this.props.category}</Text> */}
        <Text style={styles.category}>{item.price}</Text>
      </View>
    </TouchableHighlight>
  );

  render() {
    const { navigation,menu } = this.props;
    const item = navigation.getParam('category');
    const category = item.name;
    // console.log(item);

    // const recipesArray = getMenu(item.id);

    return (
      <View>
        <FlatList
          vertical
          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={menu}
          renderItem={this.renderMenu}
          keyExtractor={item => `${item.recipeId}`}
        />
      </View>
    );
  }
}

const mapStateToProps = (state,props) => {
  const item = props.navigation.getParam('category');
  return {
     menu: getMenu(state.menu,item.id),
     category: item.name,
    }; 
};

export default connect(mapStateToProps)(MenuScreen);
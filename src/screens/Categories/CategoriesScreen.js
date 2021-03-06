import React from 'react';
import {
  FlatList,
  Text,
  View,
  Image,
  TouchableHighlight
} from 'react-native';
import styles from './styles';
import { categories } from '../../data/dataArrays';
import { getNumberOfRecipes } from '../../data/MockDataAPI';
import { connect } from 'react-redux';
import { startSetCategories } from '../../actions/categories';


export class CategoriesScreen extends React.Component {

  static navigationOptions = ({ navigation }) => ({
    title: 'Categories',
    
  });
  

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.startSetCategories();
  }
  
  onPressCategory = item => {
    const title = item.name;
    const category = item;
    this.props.navigation.navigate('Menu', { category, title });
  };

  renderCategory = ({ item }) => (
    <TouchableHighlight underlayColor='rgba(73,182,77,1,0.9)' onPress={() => this.onPressCategory(item)}>
      <View style={styles.categoriesItemContainer}>
        <Image style={styles.categoriesPhoto} source={{ uri: item.photo_url }} />
        <Text style={styles.categoriesName}>{item.name}</Text>
        <Text style={styles.categoriesInfo}>Available</Text>
        {/* <Text style={styles.categoriesInfo}>{getNumberOfRecipes(item.id)} recipes</Text> */}
      </View>
    </TouchableHighlight>
  );

  render() {
    return (
      <View>
        <FlatList
          data={this.props.categories}
          renderItem={this.renderCategory}
          keyExtractor={item => `${item.id}`}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return { categories: state.categories }; 
};
const mapDispatchToProps = (dispatch, props) => ({
  startSetCategories: () => dispatch(startSetCategories()),
});
export default connect(mapStateToProps,mapDispatchToProps)(CategoriesScreen);

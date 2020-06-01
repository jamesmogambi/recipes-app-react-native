import React from 'react';
import {
  FlatList,
  Text,
  View,
  Image,
  TouchableHighlight
} from 'react-native';
import styles from './styles';
import { ListItem, SearchBar } from 'react-native-elements';
import MenuImage from '../../components/MenuImage/MenuImage';
import {
  getCategoryName,
  getRecipesByRecipeName,
  getRecipesByCategoryName,
  getRecipesByIngredientName
} from '../../data/MockDataAPI';
import { connect } from 'react-redux';

export  class SearchScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    return {
      headerRight: (
        <MenuImage
          onPress={() => {
            navigation.openDrawer();
          }}
        />
      ),
      headerTitle: (
        <SearchBar
          containerStyle={{
            backgroundColor: 'transparent',
            borderBottomColor: 'transparent',
            borderTopColor: 'transparent',
            flex: 1
          }}
          inputContainerStyle={{
            backgroundColor: '#EDEDED'
          }}
          inputStyle={{
            backgroundColor: '#EDEDED',
            borderRadius: 10,
            color: 'black'
          }}
          searchIcond
          clearIcon
          //lightTheme
          round
          onChangeText={text => params.handleSearch(text)}
          //onClear={() => params.handleSearch('')}
          placeholder="Search"
          value={params.data}
        />
      )
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      value: '',
      data: []
    };
  }

  componentDidMount() {
    const { navigation } = this.props;
    navigation.setParams({
      handleSearch: this.handleSearch,
      data: this.getValue
    });
  }

  handleSearch = text => {
    const { navigation,menu,categories } = this.props;

    var recipeArray1 = getRecipesByRecipeName(menu,text);
    var recipeArray2 = getRecipesByCategoryName(categories,menu,text);
    // var recipeArray3 = getRecipesByIngredientName(text);
    var aux = recipeArray1.concat(recipeArray2);
    var recipeArray = [...new Set(aux)];
    if (text == '') {
      this.setState({
        value: text,
        data: []
      });
    } else {
      this.setState({
        value: text,
        data: recipeArray
      });
    }
  };

  getValue = () => {
    return this.state.value;
  };

  onPressMenuItem = item => {
    // this.props.navigation.navigate('Recipe', { item });

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
    // <TouchableHighlight underlayColor='rgba(73,182,77,1,0.9)' onPress={() => this.onPressRecipe(item)}>
    //   <View style={styles.container}>
    //     <Image style={styles.photo} source={{ uri: item.photo_url }} />
    //     <Text style={styles.title}>{item.title}</Text>
    //     <Text style={styles.category}>{getCategoryName(item.categoryId)}</Text>
    //   </View>
    // </TouchableHighlight>
  );

  render() {
    return (
      <View>
        <FlatList
          vertical
          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={this.state.data}
          renderItem={this.renderMenu}
          keyExtractor={item => `${item.recipeId}`}
        />
      </View>
    );
  }
}

const mapStateToProps = (state,props) => {
  // const item = props.navigation.getParam('category');
  return {
     menu: state.menu,
     categories: state.categories,
    }; 
};

export default connect(mapStateToProps)(SearchScreen);

// import React from 'react';
// import {
//   FlatList,
//   Text,
//   View,
//   Image,
//   TouchableHighlight
// } from 'react-native';
// import styles from './styles';
// import { ListItem, SearchBar } from 'react-native-elements';
// import MenuImage from '../../components/MenuImage/MenuImage';
// import {
//   getCategoryName,
//   getRecipesByRecipeName,
//   getRecipesByCategoryName,
//   getRecipesByIngredientName
// } from '../../data/MockDataAPI';

// export default class SearchScreen extends React.Component {
//   static navigationOptions = ({ navigation }) => {
//     const { params = {} } = navigation.state;
//     return {
//       headerRight: (
//         <MenuImage
//           onPress={() => {
//             navigation.openDrawer();
//           }}
//         />
//       ),
//       headerTitle: (
//         <SearchBar
//           containerStyle={{
//             backgroundColor: 'transparent',
//             borderBottomColor: 'transparent',
//             borderTopColor: 'transparent',
//             flex: 1
//           }}
//           inputContainerStyle={{
//             backgroundColor: '#EDEDED'
//           }}
//           inputStyle={{
//             backgroundColor: '#EDEDED',
//             borderRadius: 10,
//             color: 'black'
//           }}
//           searchIcond
//           clearIcon
//           //lightTheme
//           round
//           onChangeText={text => params.handleSearch(text)}
//           //onClear={() => params.handleSearch('')}
//           placeholder="Search"
//           value={params.data}
//         />
//       )
//     };
//   };

//   constructor(props) {
//     super(props);
//     this.state = {
//       value: '',
//       data: []
//     };
//   }

//   componentDidMount() {
//     const { navigation } = this.props;
//     navigation.setParams({
//       handleSearch: this.handleSearch,
//       data: this.getValue
//     });
//   }

//   handleSearch = text => {
//     var recipeArray1 = getRecipesByRecipeName(text);
//     var recipeArray2 = getRecipesByCategoryName(text);
//     var recipeArray3 = getRecipesByIngredientName(text);
//     var aux = recipeArray1.concat(recipeArray2);
//     var recipeArray = [...new Set(aux)];
//     if (text == '') {
//       this.setState({
//         value: text,
//         data: []
//       });
//     } else {
//       this.setState({
//         value: text,
//         data: recipeArray
//       });
//     }
//   };

//   getValue = () => {
//     return this.state.value;
//   };

//   onPressRecipe = item => {
//     this.props.navigation.navigate('Recipe', { item });
//   };

//   renderRecipes = ({ item }) => (
//     <TouchableHighlight underlayColor='rgba(73,182,77,1,0.9)' onPress={() => this.onPressRecipe(item)}>
//       <View style={styles.container}>
//         <Image style={styles.photo} source={{ uri: item.photo_url }} />
//         <Text style={styles.title}>{item.title}</Text>
//         <Text style={styles.category}>{getCategoryName(item.categoryId)}</Text>
//       </View>
//     </TouchableHighlight>
//   );

//   render() {
//     return (
//       <View>
//         <FlatList
//           vertical
//           showsVerticalScrollIndicator={false}
//           numColumns={2}
//           data={this.state.data}
//           renderItem={this.renderRecipes}
//           keyExtractor={item => `${item.recipeId}`}
//         />
//       </View>
//     );
//   }
// }

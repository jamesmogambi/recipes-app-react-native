import { StyleSheet } from 'react-native';
import { RecipeCard } from '../../AppStyles';

const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection: "column"
    // justifyContent:'center',
    // alignItems:'center'
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent:'center',

  },
  
  // container: RecipeCard.container,
  // photo: RecipeCard.photo,
  // title: RecipeCard.title,
  // category: RecipeCard.category
});

export default styles;

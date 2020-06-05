import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection: "column"
    // justifyContent:'center',
    // alignItems:'center'
  },
  card:{
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent:'center',

  },
  header:{
    fontSize:20,
    color: '#2cd18a'
  },
  forgotText:{
    fontSize:11,
    color: '#2cd18a'
  }
 
});

export default styles;

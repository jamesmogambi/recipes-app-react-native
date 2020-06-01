import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex:1,
       flexDirection: "column",
        backgroundColor:"#ffffff"
        
      },
      image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent:'center',
    
      },
      card:{
        alignItems: "center",
        justifyContent: "center",
      },
      logo: {
        width: 50,
        height: 50,
        resizeMode:"contain",
        marginTop: 40
    
      },
      title: {
        fontSize: 30,
        fontWeight: "bold",
        color: '#2cd18a',
        marginTop: 20,
        textAlign: "center",
        marginBottom: 50,
        marginLeft: 20,
        marginRight: 20
      },
      // borderRadius: {
      //   main: 25,
      //   small: 5
      // }
      loginContainer: {
        width: '70%',
        backgroundColor: '#2cd18a',
        borderRadius: 25,
        padding: 10,
        marginTop: 30
      },
      loginText: {
        color: '#ffffff'
      },
      signupContainer: {
        width: '70%',
        backgroundColor: '#ffffff',
        borderRadius: 25,
        padding: 8,
        borderWidth: 1,
        borderColor: '#2cd18a',
        marginTop: 15
      },
      signupText: {
        color: '#2cd18a'
      },
      spinner: {
        marginTop: 200
      }
});

export default styles;

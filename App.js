import { StatusBar } from 'expo-status-bar'; // this must be always imported 
import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

const App = () =>{
  return(
    <View style = {style.container}>
      <Text style = {style.txtHelloWorld}>Hello, world!</Text>
      <Text style = {style.txtName}>I'm Ger</Text>
      <Text style = {style.txtName}>I'm programming in class</Text>
    </View>
  );
}

const style = StyleSheet.create({
  container : {
    width : '100%',
    height : '100%',
    backgroundColor: '#5352ed',
    justifyContent : 'center',
    alignItems : 'center',
  },
  txtHelloWorld : {
    fontSize : 40,
    fontFamily : 'Helvetica',
    fontWeight : 'bold',
    color : '#fff'
  },
  txtName : {
    fontSize : 32,
    fontFamily : 'Helvetica',
    fontWeight : 'bold',
    color : '#fff'
  }
});

export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

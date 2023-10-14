import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, ImageComponent } from 'react-native';
//import Test from './components/test';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import CalculatorScreen from './screens/CalculatorScreen';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
        />
        <Drawer.Screen name="Profile" component={ProfileScreen} />
        <Drawer.Screen name="Calculator" component={CalculatorScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default App;
/*
export default function App() {
  return (
    <ScrollView>
      <View style={styles.container}>
      <Text>Hello</Text>
        <StatusBar style="auto" />
        <Image 
          source={ require('./assets/favicon.png') }
          style={ styles.image }
        />
        <Test />
      </View>
    </ScrollView>
  );
}
*/

const styles = StyleSheet.create({
  container: {
    top: 0, 
    marginTop: 50,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    margin: 50, 
    width:80, 
    height: 80, 
  }
});

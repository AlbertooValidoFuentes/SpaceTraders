import { StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import PantallaAutenticacion from './components/PantallaAutenticacion';

const Drawer = createDrawerNavigator()

export default function App() {

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='Autenticacion'>
        <Drawer.Screen name='Autenticacion' component={PantallaAutenticacion}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

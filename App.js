import { StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import PantallaAutenticacion from './components/PantallaAutenticacion';
import PantallaLogin from './components/PantallaLogin'
import PantallaRegister from './components/PantallaRegister';
import PantallaProfile from './components/PantallaProfile';
import PantallaLoans from './components/PantallaLoans';
import PantallaShips from './components/PantallaShips';

const Drawer = createDrawerNavigator()

export default function App() {

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='Autenticacion'>
        <Drawer.Screen name='Space Trader' component={PantallaAutenticacion}/>
        <Drawer.Screen name='Iniciar sesión' component={PantallaLogin}/>
        <Drawer.Screen name='Register' component={PantallaRegister}/>
        <Drawer.Screen name='Profile' component={PantallaProfile}/>
        <Drawer.Screen name='Loans' component={PantallaLoans}/>
        <Drawer.Screen name='Ships' component={PantallaShips}/>
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

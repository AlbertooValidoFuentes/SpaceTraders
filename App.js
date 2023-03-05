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
import * as SecureStorage from "expo-secure-store";
import { useState } from 'react';
import Logout from './components/Logout';

const Drawer = createDrawerNavigator()

export default function App() {
  const [login, setlogin] = useState(false)
  const [userToken, setUserToken] = useState("")

  const saveUserToken = async (value, action) => {
    await SecureStorage.setItemAsync('token', value);
    setlogin(action)
    setUserToken(value)
  }

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='Autenticacion'>
        {
          login ? (
            <>
              <Drawer.Screen name="Profile">{() => <PantallaProfile userToken={userToken} />}</Drawer.Screen>
              <Drawer.Screen name="Loans">{() => <PantallaLoans userToken={userToken} />}</Drawer.Screen>
              <Drawer.Screen name='Ships' component={PantallaShips} />
              <Drawer.Screen name="Logout">{() => <Logout saveUserToken={saveUserToken} />}</Drawer.Screen>
            </>
          ) : (
            <>
              <Drawer.Screen name="Iniciar sesion">{() => <PantallaLogin saveUserToken={saveUserToken} />}</Drawer.Screen>
              <Drawer.Screen name="Registrarse">{() => <PantallaRegister saveUserToken={saveUserToken} />}</Drawer.Screen>
            </>
          )
        }
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

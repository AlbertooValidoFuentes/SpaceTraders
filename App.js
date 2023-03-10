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
import { useEffect, useState } from 'react';
import Logout from './components/Logout';
import PantallaGoods from './components/PantallaGoods';

const Drawer = createDrawerNavigator()

export default function App() {
  const [login, setlogin] = useState(false)
  const [userToken, setUserToken] = useState("")

  const saveUserToken = async (value, action) => {
    await SecureStorage.setItemAsync('token', value);
    setlogin(action)
    setUserToken(value)
  }

  async function getValueFor() {
    const result = await SecureStorage.getItemAsync('token');
    if (result) {
      setUserToken(result)
      setlogin(true)
    }
  }

  useEffect(() => {
    getValueFor()
  })


  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='Autenticacion'>
        {
          login ? (
            <>
              <Drawer.Screen name="Profile">{() => <PantallaProfile userToken={userToken} />}</Drawer.Screen>
              <Drawer.Screen name="Loans">{() => <PantallaLoans userToken={userToken} />}</Drawer.Screen>
              <Drawer.Screen name='Ships' component={PantallaShips} />
              <Drawer.Screen name="Goods">{() => <PantallaGoods userToken={userToken} />}</Drawer.Screen>
              <Drawer.Screen name="Logout">{() => <Logout saveUserToken={saveUserToken} />}</Drawer.Screen>
            </>
          ) : (
            <>
              <Drawer.Screen name="Log in">{() => <PantallaLogin saveUserToken={saveUserToken} />}</Drawer.Screen>
              <Drawer.Screen name="Sign in">{() => <PantallaRegister saveUserToken={saveUserToken} />}</Drawer.Screen>
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

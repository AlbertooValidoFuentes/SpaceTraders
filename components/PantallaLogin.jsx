import { useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { TextInput } from "react-native-gesture-handler";


export default function PantallaLogin({ saveUserToken }) {

    const [userText, setUserText] = useState("")

    const handleLogin = () => {
        fetch(`https://api.spacetraders.io/my/account?token=${userText.token}`)
            .then((res) => res.json())
            .then((data) => {
                if (data.error) {
                    alert('The token is not correct!!')
                } else {
                    saveUserToken(userText.token, true)
                }
            })
            .catch((error) => console.log(error))
    }

    return (
        <View style={styles.container}>
            <Text style={styles.tokenText}>Please, introduce your token</Text>
            <TextInput placeholder="Introduce your token" style={styles.inputToken} onChangeText={(token) => setUserText({ token })} />
            <Pressable style={styles.button}>
                <Text style={styles.buttonText} onPress={handleLogin}>Login</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    tokenText: {
        fontSize: 25,
        marginBottom: 20
    },
    inputToken: {
        borderColor: 'black',
        borderWidth: 2,
        padding: 10,
        borderRadius: 10
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20

    },
    button: {
        padding: 15,
        width: 120,
        backgroundColor: 'black',
        marginBottom: 10,
        borderRadius: 20,
        marginTop: 20
    },
});
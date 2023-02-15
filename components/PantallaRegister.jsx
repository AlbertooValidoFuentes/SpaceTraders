import { View, Text, StyleSheet, Pressable } from "react-native";
import { TextInput } from "react-native-gesture-handler";

export default function PantallaRegister() {
    return (
        <View style={styles.container}>
            <Text style={styles.tokenText}>Please, select your NickName</Text>
            <TextInput placeholder="Introduce your nickname" style={styles.inputToken}/>
            <Pressable style={styles.button}>
                <Text style={styles.buttonText}>Register</Text>
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
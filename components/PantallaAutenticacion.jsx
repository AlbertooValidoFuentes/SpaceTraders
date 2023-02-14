import { View, Text, StyleSheet, Pressable } from "react-native";

export default function PantallaAutenticacion() {
    return (
        <View style={styles.container}>
            <Pressable style={styles.button}>
                <Text style={styles.buttonText}>Login</Text>
            </Pressable>
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
    button: {
        padding: 15,
        width: 120,
        backgroundColor: 'black',
        marginBottom: 10,
        borderRadius: 20

    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20

    }
});
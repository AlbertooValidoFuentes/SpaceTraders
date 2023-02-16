import { View, Text, StyleSheet, Pressable } from "react-native";


export default function PantallaLoans() {
    return (
        <View style={styles.container}>
            <View style={styles.userInfo}>
                <View style={styles.username}>
                    <Text style={styles.usernameText}>Available Loans</Text>
                </View>
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.creditsText}>249800 crd</Text>
                <Text style={styles.creditsText}>Rate: 40%</Text>
                <Text style={styles.creditsText}>Term: 2 days</Text>
                <Text style={styles.creditsText}>Type: Startup</Text>
                <Pressable style={styles.button}>
                    <Text style={styles.buttonText}>Take out</Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginRight: 20
    },
    userInfo: {
        marginTop: 20,
        flexDirection: 'row'
    },
    username: {
        justifyContent: 'center',
    },
    usernameText: {
        fontSize: 30
    },
    infoContainer: {
        width: '90%',
        backgroundColor: '#808080',
        marginTop: 20,
        borderRadius: 30,
        padding: 20
    },
    creditsText: {
        fontSize: 30,
        color: 'white'
    },
    ships: {
        flexDirection: 'row',

    },
    buildings: {
        flexDirection: 'row',
        marginTop: 20

    },
    shipsText: {
        marginLeft: 10,
        fontSize: 25,
        color: 'white'
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
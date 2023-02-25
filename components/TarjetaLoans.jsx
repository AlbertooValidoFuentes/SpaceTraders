import { useEffect } from "react";
import { View, Text, StyleSheet, Pressable, FlatList } from "react-native";
import { takeOutLoan } from "../service/spaceTraders";



export default function TarjetaLoans({credits, rate, term, type}) {

    const takeOut = (type) => {
        useEffect(() => {
            const fetchTakeOut = async () => {
            const response = await takeOutLoan(type)
            console.log(response);
            }
            fetchTakeOut()
        }, [])
    }

    return (
        <View style={styles.infoContainer}>
            <Text style={styles.creditsText}>{credits} crd</Text>
            <Text style={styles.creditsText}>Rate: {rate}%</Text>
            <Text style={styles.creditsText}>Term: {term} days</Text>
            <Text style={styles.creditsText}>Type: {type}</Text>
            <Pressable style={styles.button} onPress={takeOut}>
                <Text style={styles.buttonText}>Take out</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
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
        marginTop: 20,
    },
});
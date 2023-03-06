import { View, Text, StyleSheet, Pressable, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";


export default function TarjetaLoans({ credits, rate, term, type, userToken }) {
    const navigation = useNavigation();

    const handleTakeOut = () => {
        fetch(`https://api.spacetraders.io/my/loans?token=${userToken}&type=${type}`, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                Accept: "application/json",
            },
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.error) {
                    alert("Only one loan allowed at a time");
                }
                navigation.navigate("Profile");
            })
            .catch((err) => console.log(err));
    };

    return (
        <View style={styles.infoContainer}>
            <Text style={styles.creditsText}>{credits} crd</Text>
            <Text style={styles.creditsText}>Rate: {rate}%</Text>
            <Text style={styles.creditsText}>Term: {term} days</Text>
            <Text style={styles.creditsText}>Type: {type}</Text>
            <Pressable style={styles.button} onPress={handleTakeOut}>
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
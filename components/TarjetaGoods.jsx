import { View, Text, StyleSheet, Pressable, FlatList, Image, VirtualizedList } from "react-native";
import { useNavigation } from "@react-navigation/native";


export default function TarjetaGoods({ name, symbol, volume }) {
    const navigation = useNavigation();

    return (
        <View style={styles.infoContainer}>
            <View>
                <View style={styles.cargo}>
                    <View>
                        <Image source={require('../assets/caja.png')} style={{ width: 100, height: 100, marginRight: 20 }} />

                    </View>
                    <View>
                        <Text style={styles.cargoText}>Name: {name}</Text>
                        <Text style={styles.cargoText}>Symbol: {symbol}</Text>
                        <Text style={styles.cargoText}>volume: {volume}</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    infoContainer: {
        width: '90%',
        backgroundColor: '#808080',
        margin: 20,
        borderRadius: 30,
        padding: 20,
        justifyContent: 'center',
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
    cargo: {
        flexDirection: 'row',
        width: 200
    },
    cargoText: {
        fontSize: 18,
        color: 'white',
    }
});
import { View, Text, StyleSheet, Image } from "react-native";

export default function PantallaShips() {
    return (
        <View style={styles.container}>
            <View style={styles.userInfo}>
                <View style={styles.username}>
                    <Text style={styles.usernameText}>Available ships</Text>
                </View>
            </View>
            <View style={styles.infoContainer}>
                <View>
                    <View style={styles.ships}>
                        <Image source={require('../assets/Ship_1.png')} style={{ width: 100, height: 100, marginRight: 20 }} />
                        <View>
                            <Text style={styles.shipsText}>Type: GR-MK-I</Text>
                            <Text style={styles.shipsText}>Speed: 1</Text>
                            <Text style={styles.shipsText}>Weapons: 5</Text>
                            <Text style={styles.shipsText}>Cargo: 300</Text>
                        </View>
                    </View>
                </View>
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
        height: 200,
        backgroundColor: '#808080',
        marginTop: 20,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    creditsText: {
        fontSize: 30,
        color: 'white'
    },
    ships: {
        flexDirection: 'row',
        alignItems: 'center'

    },
    buildings: {
        flexDirection: 'row',
        marginTop: 20

    },
    shipsText: {
        marginLeft: 10,
        fontSize: 25,
        color: 'white'
    }

});
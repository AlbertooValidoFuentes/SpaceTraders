import { View, Text, StyleSheet, Image } from "react-native";
import { useEffect, useState } from 'react'
import { getUserProfile } from "../service/spaceTraders";

export default function PantallaProfile() {
    const [profile, setProfile] = useState({})

    useEffect(() => {
        const fetchUserAccount = async () => {
            const userProfile = await getUserProfile()
            setProfile(userProfile)
        }
        fetchUserAccount()
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.userInfo}>
                <View>
                    <Image source={require('../assets/profileImage.png')} style={styles.profileImage} />
                </View>
                <View style={styles.username}>
                    <Text style={styles.usernameText}>{profile.user.username}</Text>
                </View>
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.creditsText}>{profile.user.credits} credits</Text>
            </View>
            <View style={styles.infoContainer}>
                <View>
                    <View style={styles.ships}>
                        <Image source={require('../assets/Ship_1.png')} />
                        <Text style={styles.shipsText}>{profile.user.shipCount}</Text>
                    </View>
                    <View style={styles.buildings}>
                        <Image source={require('../assets/mainbase.png')} style={{width: 30, height: 30}} />
                        <Text style={styles.shipsText}>{profile.user.structureCount}</Text>
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
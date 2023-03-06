import { View, Text, StyleSheet, Image } from "react-native";
import { useEffect, useState } from 'react'

export default function PantallaProfile({userToken}) {
    const [profile, setProfile] = useState({}) 
    
    useEffect(() => {
        const fetchUserAccount = async () => {
            fetch(`https://api.spacetraders.io/my/account?token=${userToken}`)
                .then((res) => res.json())
                .then((data) => {
                    if (data.user) {
                        setProfile(data.user);
                    }
                })
                .catch((err) => console.log(err));
        }
        fetchUserAccount()
    }, [])

    console.log(profile);
    return (
        <View style={styles.container}>
            <View style={styles.userInfo}>
                <View>
                    <Image source={require('../assets/profileImage.png')} style={styles.profileImage} />
                </View>
                <View style={styles.username}>
                    <Text style={styles.usernameText}>{profile?.username}</Text>
                </View>
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.creditsText}>{profile?.credits} credits</Text>
            </View>
            <View style={styles.infoContainer}>
                <View>
                    <View style={styles.ships}>
                        <Image source={require('../assets/Ship_1.png')} />
                        <Text style={styles.shipsText}>{profile?.shipCount}</Text>
                    </View>
                    <View style={styles.buildings}>
                        <Image source={require('../assets/mainbase.png')} style={{width: 30, height: 30}} />
                        <Text style={styles.shipsText}>{profile?.structureCount}</Text>
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
import { View, Text, StyleSheet, FlatList } from "react-native";
import { useEffect, useState } from 'react'
import { getAvailableLoans } from "../service/spaceTraders";
import TarjetaLoans from "./TarjetaLoans";


export default function PantallaLoans({userToken}) {
    const [loans, setLoans] = useState({})

    useEffect(() => {
        const fetchLoans = async () => {
            fetch(`https://api.spacetraders.io/types/loans?token=${userToken}`)
            .then((res) => res.json())
            .then((data) => {
                setLoans(data);
            })
            .catch((err) => console.log(err));
        }
        fetchLoans()
    }, [])

    console.log(loans)

    return (
        <View style={styles.container}>
            <View style={styles.loanInfo}>
                    <Text style={styles.loanText}>Available Loans</Text>
            </View>
            <FlatList
                data={loans?.loans}
                renderItem={({ item }) => <TarjetaLoans credits={loans.loans[0]?.amount} rate={loans.loans[0]?.rate} 
                term={loans.loans[0]?.termInDays} type={loans.loans[0]?.type} userToken={userToken}/>}
                keyExtractor={loans.type} 
                style={styles.list}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    loanInfo: {
        marginTop: 20,
        flexDirection: 'row'
    },
    loanText: {
        fontSize: 30
    },
    list: {
        width: '90%'
    }
});
import { View, Text, StyleSheet, FlatList } from "react-native";
import { useEffect, useState } from 'react'
import { getAvailableLoans } from "../service/spaceTraders";
import TarjetaLoans from "./TarjetaLoans";


export default function PantallaLoans() {
    const [loans, setLoans] = useState({})

    useEffect(() => {
        const fetchLoans = async () => {
            const availableLoans = await getAvailableLoans()
            setLoans(availableLoans)
        }
        fetchLoans()
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.loanInfo}>
                    <Text style={styles.loanText}>Available Loans</Text>
            </View>
            <FlatList
                data={loans?.loans}
                renderItem={({ item }) => <TarjetaLoans credits={loans?.loans[0]?.amount} rate={loans.loans[0]?.rate} 
                term={loans.loans[0]?.termInDays} type={loans.loans[0]?.type}/>}
                keyExtractor={loans.loans?.type} 
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
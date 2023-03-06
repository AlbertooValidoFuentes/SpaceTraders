import { View, Text, StyleSheet, FlatList } from "react-native";
import { useEffect, useState } from "react";
import TarjetaGoods from "./TarjetaGoods";

export default function PantallaGoods({userToken}) {
    const [goods, setGoods] = useState()

    useEffect(() => {
        const fetchGoods = async () => {
            fetch(`https://api.spacetraders.io/types/goods?token=${userToken}`)
            .then((res) => res.json())
            .then((data) => {
                setGoods(data);
            })
            .catch((err) => console.log(err));
        }
        fetchGoods()
    }, [])

    console.log(goods)

    return (
        <FlatList
                data={goods?.goods}
                renderItem={({ item }) => <TarjetaGoods name={item.name} symbol={item.symbol} volume={item.volumePerUnit}/>}
            />
    ) 
}

const styles = StyleSheet.create({

})
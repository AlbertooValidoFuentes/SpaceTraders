import { View, Button, StyleSheet, Text } from "react-native";
import { useEffect } from "react";

const Logout = ({ saveUserToken }) => {
    useEffect(() => {
        saveUserToken("", false);
    }, []);

    return (
        <View>
            <Text>Logout</Text>
        </View>
    );
};

export default Logout;
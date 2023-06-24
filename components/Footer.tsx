import {Pressable, StyleSheet, View} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import {useNavigation} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();
export const Footer = (navigation) => {

    return (
        <View style={styles.footer}>
            <Pressable onPress={() => navigation.navigate('Home')}>
                <Ionicons size={30} name="home-outline"></Ionicons>
            </Pressable>
            <Pressable>
                <Ionicons size={30} name="list-outline"></Ionicons>
            </Pressable>
            <Pressable>
                <Ionicons size={30} name="star-outline"></Ionicons>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({

    footer: {
        backgroundColor: "#65a765",
        padding: 20,
        marginLeft: 60,
        marginRight: 60,
        marginBottom: 0,
        justifyContent: "space-between",
        display: "flex",
        flexDirection: "row",
    }
});

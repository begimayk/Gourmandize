import {
    FlatList,
    Image,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import React, {useContext, useState} from 'react';
import {Card} from '../components/Card';
import {useSelector} from "react-redux";
import {FavoritesRecipesState} from "../redux/reducers/favoritesSlice";




const ResultsScreen = ({navigation}: {navigation: any}) => {

    const recipes: any = useSelector((state: FavoritesRecipesState) => state);

    return (

        <ScrollView style={styles.scrollView}>

            <View style={styles.container}>
                {recipes.favorites?.data?.map(element => (
                    <Card key={element.id} recipe={element} navigation={navigation} />
                ))}
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems : "center",
        justifyContent : "space-between",
        marginTop: 32,
        alignContent: "center",
    },
    scrollView: {

    },
});



export default ResultsScreen;

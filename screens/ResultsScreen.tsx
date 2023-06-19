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
import {RecipesState} from "../redux/reducers/recipesSlice";




const ResultsScreen = ({navigation}: {navigation: any}) => {

    const recipes: any = useSelector((state: RecipesState) => state);

    return (

            <View>
            <ScrollView style={styles.scrollView}>

                <View style={styles.container}>
                {recipes.recipes?.data?.results?.map(element => (
                    <Card key={element.title} recipe={element} navigation={navigation} />
                ))}
                </View>

            </ScrollView>
                <Text>Go back</Text>
            </View>

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

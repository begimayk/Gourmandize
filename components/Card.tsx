import {
    View,
    StyleSheet,
    Image,
    FlatList,
    Text,
    Dimensions,
    Pressable, TouchableOpacity,
} from 'react-native';
import {useState, useRef} from 'react';
import {getRecipe, Recipe} from '../services/Types';
import {useAppDispatch} from "../redux/hooks";
import {useSelector} from "react-redux";
import {RecipeState, setRecipe} from "../redux/reducers/chosenRecipeSlice";
import {fetchIngredients} from "../redux/reducers/ingredientsSlice";



export function Card({recipe, navigation}: {recipe: Recipe, navigation}) {

    const dispatch = useAppDispatch();

    const click = async (recipe: Recipe) => {
        dispatch(setRecipe(recipe));
        dispatch(fetchIngredients(recipe.id));
    }
    return (

            <TouchableOpacity style={styles.cardContainer} onPress={() => {
                click(recipe)
                getRecipe(recipe.id)
                navigation.navigate("Recipe");
            }
            }>
                <Image style={styles.image} source={{uri: recipe.image}} />
                <Text style={styles.title}>{recipe.title}</Text>
            </TouchableOpacity>

    );
}

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor : "#fff",
        borderRadius: 20,
        borderWidth : 1,
        borderColor: "#C0C0C0",
        marginTop: 8,

        paddingRight: 18,
        paddingTop: 8,
        paddingBottom: 16,
        width: 320,
        marginBottom: 8,
        justifyContent : "center",
        alignItems: "flex-end",

    },
    title : {
        fontSize : 18,
        fontWeight : "400",
        marginTop: 6,
        color: "#568203",
        margin: 5,
        textAlign: "left"

    },
    image: {
        width: 280,
        margin: 2,
        height: 160,
        borderRadius: 20,
    },
});

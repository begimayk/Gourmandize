import React, {useState} from "react";
import {
    View,
    Text,
    SafeAreaView,
    Image,
    StyleSheet,
    ScrollView,
    Pressable,
    TouchableOpacity,
    Button
} from "react-native";
import {useSelector} from "react-redux";
import {RecipeState} from "../redux/reducers/chosenRecipeSlice";
import {IngredientsState} from "../redux/reducers/ingredientsSlice";
import { MaterialIcons } from '@expo/vector-icons';
import {useAppDispatch} from "../redux/hooks";
import {addRecipe, FavoritesRecipesState, removeRecipe} from "../redux/reducers/favoritesSlice";
import {isRecipePresent} from "../services/Types";


export const RecipeScreen = ({navigation}: {navigation: any}) => {

    const chosenRecipeTest: any = useSelector((state: RecipeState) => state);

    const ingredients: any = useSelector((state: IngredientsState) => state);

    const dispatch = useAppDispatch();
    const favorites: any = useSelector((state: FavoritesRecipesState) => state);

    console.log("favs?", favorites.favorites?.data);
    console.log("is recipe fav?",isRecipePresent(chosenRecipeTest.recipe?.data, favorites.favorites?.data))
    const [isFavorite, setFavorite] = useState(() => isRecipePresent(chosenRecipeTest.recipe?.data, favorites.favorites?.data));
    console.log(isFavorite)
    const toggleFavorite = () => {
        if(isFavorite){
            setFavorite(false)
            dispatch(removeRecipe(chosenRecipeTest.recipe?.data))
        }else{
            setFavorite(true);
            dispatch(addRecipe(chosenRecipeTest.recipe?.data))
        }
    }

    return (
        <SafeAreaView>
            <ScrollView>
            <View>
                <Image style={styles.image} source={{uri : chosenRecipeTest.recipe?.data?.image}}/>
                <Text style={styles.title}> {chosenRecipeTest.recipe?.data?.title}</Text>
            </View>
                <TouchableOpacity onPress={() => toggleFavorite()}>
                <MaterialIcons style={styles.favoriteIcon} name={isFavorite? 'star': 'star-border'}></MaterialIcons>
                </TouchableOpacity>
                <View style={styles.openFavs}><Button  title="Go to favorites"
                onPress={() => navigation.navigate('Favorites')}/></View>
            <View>
                <Text style={styles.header}> Ingredients you will need </Text>
                {ingredients?.ingredients?.data?.ingredients.map( i => (
                   <View key={i.name} style={styles.ingredientContainer}>
                       <Text  style={styles.ingredientName}>{i.name}    {i.amount.metric.value} {i.amount.metric.unit}</Text>
                   </View>
                ))}
            </View>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
                    <Text style={styles.buttonText}>Home</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    favoriteIcon: {
        alignSelf: "center",
        fontSize: 36,
        marginBottom: 0
    },
    ingredientContainer: {
        backgroundColor : "#FFF",
        borderRadius: 20,
        margin: 5,
    },
    ingredientName: {
        textAlign : "left",
        marginLeft: 30,
        padding: 5,
        fontSize: 16,
        fontWeight: "300",
    },
    header :{
        textAlign: "center",
        fontSize: 24,
        fontWeight: "200",
        marginBottom: 15,
    },
    image: {
        width: '100%',
        height: 160,
        borderRadius: 30,
        resizeMode : "cover"
    },
    title : {
        fontWeight : "bold",
        fontSize: 24,
        textAlign : "center",
        marginTop: 5,
        padding: 10,
    },
    button: {
        backgroundColor: '#AFE1AF',
        width: 180,
        alignItems: "center",
        alignSelf: "center",
        height: 50,
        borderRadius: 50,
        margin: 5,
        borderColor: "#40826D",
        borderWidth: 0.5,
        marginTop: 30
    },
    buttonText:{
        margin: 12,
        fontSize: 20,
        fontWeight: "400",
        color: "#40826D"
    },

})

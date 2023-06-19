import React, {useEffect, useLayoutEffect, useState} from 'react';
import {
    Button,
    Image,
    ImageBackground, Pressable,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput, TouchableOpacity,
    View
} from "react-native";
import {useNavigation} from "@react-navigation/native";
import SelectDropdown from 'react-native-select-dropdown';
import {useAppDispatch, useAppSelector} from "../redux/hooks";
import {fetchRecipes, RecipesState} from "../redux/reducers/recipesSlice";
import {useSelector} from "react-redux";
import {MaterialIcons} from "@expo/vector-icons";



export const HomeScreen = () => {

    const navigation = useNavigation();
    const dispatch = useAppDispatch();
    const recipes: any = useSelector((state: RecipesState) => state);

    const search =  (query,
        cuisine,
        diet) => {

        dispatch(fetchRecipes({query, cuisine, diet}));    }


    return (
        <SafeAreaView style={styles.background}>
            {/*First section*/}
            <View style={styles.firstSection}><Image style={styles.logo} source={require("../assets/icon.png")}/>
                <Text style={styles.gourmandize}>Gourmandize</Text>
                <TouchableOpacity style={styles.favorites} onPress={() => navigation.navigate('Favorites')}>
                    <Text style={styles.favoritesText}>
                        My favorites
                    </Text>
                    <MaterialIcons style={styles.star} name='star' size={18}></MaterialIcons>
                </TouchableOpacity>

            </View>
            <TextInputExample
                onSearch={(query, cuisine, diet) => {
                    search(query, cuisine, diet);
                    navigation.navigate('Results');
                    console.log("FROM HOME", recipes.recipes?.data?.results)
                }}
            />

        </SafeAreaView>
    )
}


const styles = StyleSheet.create(
    {
        background: {
            flex : 1,
        },
        favorites: {
            marginTop: 20,
            marginRight:  5,
            paddingRight: 5,
            backgroundColor: "#FFFFE0",
            borderRadius: 30,
            borderColor: "#FFD700",
            borderWidth: 1,
        },
        favoritesText: {
            fontSize: 16,
            margin: 10,
            marginBottom: 5,
            fontWeight: "300",
        },
        gourmandize : {
            fontWeight : "400",
            fontSize: 24,
            color: "#006241"
        },
        firstSection: {
            paddingLeft: 10,
            marginTop: 8,
            alignItems: "center",
            marginLeft : 10,
        },
        logo :{
            height : 125,
            width : 125,
        },
        container: {
            marginHorizontal: 40,
            marginTop: 30,
        },
        input: {
            backgroundColor: '#FFF',
            height: 40,
            margin: 14,
            padding: 5,
            borderRadius: 10,
            fontSize : 24,
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
        star: {
            color: "#FFD700",
            margin: 2,
            alignSelf: "center",
            marginBottom: 5
        },
        buttonText:{
            margin: 12,
            fontSize: 20,
            fontWeight: "400",
            color: "#40826D"
        },
        dropdown2BtnStyle: {
            width: '93%',
            alignContent : "center",
            height: 40,
            margin: 10,
            padding: 10,
            backgroundColor: '#FFF',
            borderRadius: 10,
        },
        dropdown2BtnTxtStyle: {
            color: '#C0C0C0',
            textAlign: 'left',
            fontSize: 20,
            marginLeft: 0
        },
        dropdown2DropdownStyle: {
            backgroundColor: '#FFF',
            borderBottomLeftRadius: 12,
            borderBottomRightRadius: 12,
        },
        dropdown2RowStyle: {backgroundColor: '#AFE1AF', borderBottomColor: '#C5C5C5'},
        dropdown2RowTxtStyle: {
            color: '#444',
            textAlign: 'center',
            fontWeight: '300',
        },
        title: {
            textAlign: 'center',
            marginVertical: 8,
        },
        fixToText: {
            flexDirection: 'row',
            justifyContent: 'space-between',
        },
        separator: {
            marginVertical: 8,
            borderBottomColor: '#737373',
            borderBottomWidth: StyleSheet.hairlineWidth,
        },
    }

)

const TextInputExample = (props) => {
    const [query, onChangeQuery] = React.useState('');
    const [cuisine, onChangeCuisine] = React.useState('');
    const [diet, onChangeDiet] = React.useState('');
    const diets = [
        'Gluten Free',
        'Ketogenic',
        'Vegetarian',
        'Lacto-Vegetarian',
        'Ovo-Vegetarian',
        'Vegan',
        'Pescetarian',
    ];



    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <TextInput
                    style={styles.input}
                    onChangeText={value => onChangeQuery(value)}
                    value={query}
                    placeholder="Dish"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={value => onChangeCuisine(value)}
                    value={cuisine}
                    placeholder="Cuisine"
                />
                <SelectDropdown
                    defaultButtonText={'Choose your diet'}
                    buttonStyle={styles.dropdown2BtnStyle}
                    buttonTextStyle={styles.dropdown2BtnTxtStyle}
                    dropdownIconPosition={'right'}
                    dropdownStyle={styles.dropdown2DropdownStyle}
                    rowStyle={styles.dropdown2RowStyle}
                    rowTextStyle={styles.dropdown2RowTxtStyle}
                    data={diets}
                    onSelect={(selectedItem, index) => {
                        onChangeDiet(selectedItem);
                        console.log(index);
                    }}
                />
                <View>
                    <TouchableOpacity style={styles.button} onPress={() => {
                        props.onSearch(query, cuisine, diet);

                    }}><Text style={styles.buttonText} > Search recipes</Text></TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

// async function search(
//     query,
//     cuisine,
//     diet
// ){
//     dispatch(fetchRecipes({query, cuisine, diet}));
//
//
//     const dispatch = useAppDispatch();
//     const {data, loading} = useAppSelector((state) => state.recipes);
//
//     useEffect(() => {
//         if(!data){
//             dispatch(fetchRecipes({query, cuisine, diet}));
//         }
//     })
//     //getRecipes(query, cuisine, diet).then(e => {
//       //  setRecipes(e.data.results)
//     //})
//     return {
//         data,
//         loading
//     }
// }

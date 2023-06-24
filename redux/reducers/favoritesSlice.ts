import {Recipe} from "../../services/Types";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";


export interface FavoritesRecipesState{
    data: Recipe[];
    empty: boolean;
}

const initialState: FavoritesRecipesState = {
    data: [],
    empty: true,
}

const favoritesSlice = createSlice( {
    name: "favorites",
    initialState,
    reducers: {
        addRecipe(state: FavoritesRecipesState,action: PayloadAction<Recipe>){
            state.empty = false;
            state.data.push(action.payload);
        },
        removeRecipe(state: FavoritesRecipesState, action: PayloadAction<Recipe>){
            if(state.data.length == 0){
                state.empty = true;
            }
            console.log((action.payload.title))
            state.data = state.data.filter(recipe => {
                recipe.title!=action.payload.title
            });
        },
    }
})

const {addRecipe, removeRecipe, isInFavorites} = favoritesSlice.actions

export {addRecipe, removeRecipe, isInFavorites };

export default favoritesSlice.reducer;

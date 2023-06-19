import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import axios from "axios";
import {Recipes} from "../../services/Types";

const URL = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=af2ea962f26f47f09195b2cb1f99ff67';


export interface RecipesState {
    loading : boolean,
    data : Recipes | null
}

const initialState: RecipesState = {
    loading : false,
    data : null
}

interface RecipeSearch{
    query: string,
    cuisine: string,
    diet : string
}
export const fetchRecipes = createAsyncThunk(
    'recipes/fetchData',
    async (recipesSearch:RecipeSearch) => {
        const response =  await axios.get<Recipes>(
            URL+`&query=${recipesSearch.query}&cuisine=${recipesSearch.cuisine}&diet=${recipesSearch.diet}`,
        );

        console.log(response.data);
        return response.data;
    }
)


const recipesSlice = createSlice({
    name: "recipes",
    initialState,
    reducers: {},
    extraReducers : (builder) => {
        builder
            .addCase(fetchRecipes.pending, (state: RecipesState) => {
                state.loading = true;
            })
            .addCase(fetchRecipes.fulfilled, (state: RecipesState, action: PayloadAction) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchRecipes.rejected, (state: RecipesState) => {
                state.loading = false;
            })

    }

})

export default recipesSlice.reducer;

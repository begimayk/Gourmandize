import {Ingredients, Recipes} from "../../services/Types";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import axios from "axios/index";


export interface IngredientsState {
    loading : boolean,
    data : Recipes | null
}

const initialState: IngredientsState = {
    loading : false,
    data : null
}

export const fetchIngredients = createAsyncThunk(
    "ingridients/fetchData",
    async (id: number)=> {
        const URL = `https://api.spoonacular.com/recipes/${id}/ingredientWidget.json?apiKey=af2ea962f26f47f09195b2cb1f99ff67`;
        const response =  await axios.get<Ingredients>(URL)
    return response.data;
    }
)

const ingredientsSlice = createSlice( {
    name: "recipes",
    initialState,
    reducers: {},
    extraReducers : (builder) => {
        builder
            .addCase(fetchIngredients.pending, (state: IngredientsState) => {
                state.loading = true;
        })
            .addCase(fetchIngredients.fulfilled, (state: IngredientsState, action: PayloadAction) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchIngredients.rejected, (state: IngredientsState, action: PayloadAction) => {
                state.loading = false;
            })
    }
    }
)

export default ingredientsSlice.reducer;

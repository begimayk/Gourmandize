import {Recipe} from "../../services/Types";
import { createSlice, PayloadAction} from "@reduxjs/toolkit";


export interface RecipeState {
    set : boolean
    data : Recipe | null
}

const initialState: RecipeState = {
    set : false,
    data : null
}


const chosenRecipeSlice = createSlice({
    name: "chosenRecipe",
    initialState,
    reducers: {
        setRecipe(state: RecipeState, action: PayloadAction<Recipe>){
            state.set = true;
            state.data = action.payload;
            console.log("from slice")
            console.log(action.payload)
        }
    }
})

export default chosenRecipeSlice.reducer;

const { setRecipe } = chosenRecipeSlice.actions
export { setRecipe }

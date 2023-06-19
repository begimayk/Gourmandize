import { configureStore } from '@reduxjs/toolkit'
import recipesReducer from '../redux/reducers/recipesSlice'
import chosenRecipeReducer from '../redux/reducers/chosenRecipeSlice'
import ingredientReducer from './reducers/ingredientsSlice'
import favoritesReducer from './reducers/favoritesSlice'

export const store = configureStore({
    reducer: {
        recipes : recipesReducer,
        recipe: chosenRecipeReducer,
        ingredients: ingredientReducer,
        favorites: favoritesReducer,
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

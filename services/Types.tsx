
import axios, {AxiosResponse} from 'axios';
import React, {createContext, useEffect, useState} from "react";
import { createSlice } from '@reduxjs/toolkit'
import {useDispatch, useSelector} from "react-redux";

export var recipes : Recipe[] ;
export const RecipesContext = createContext(recipes);


const { REACT_APP_API_URL } = process.env

const url = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=af2ea962f26f47f09195b2cb1f99ff67';



    export interface Recipe {
    id: number;
    title: string;
    image: string;
    imageType: string;
}

export interface Recipes extends AxiosResponse{
    results: Recipe[];
}

export interface Amount {
    value: number;
    unit: string;
}
export interface Ingredient {
    name: string;
    amount: Amount;
}

export interface Amount {
    metric : { value : number, unit: string}
}
export interface Ingredients  {
    ingredients: Ingredient[];
}

export async function getRecipe(id: number): Promise<axios.AxiosResponse<any>> {
    console.log(id);
    return axios.get (
        'https://api.spoonacular.com/recipes/' +
        id +
        '/ingredientWidget.json?apiKey=af2ea962f26f47f09195b2cb1f99ff67',
    );

}

export function isRecipePresent(recipe: Recipe,recipes: Recipe[]){
        let res = false;
        recipes.forEach((r) => {
            if(r.id==recipe.id) res = true
        })
    return res;
}



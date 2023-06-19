import { StatusBar } from 'expo-status-bar';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {HomeScreen} from "./screens/HomeScreen";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import React from "react";
import ResultsScreen from "./screens/ResultsScreen";
import {RecipeScreen} from "./screens/RecipeScreen";
import {Provider} from "react-redux";
import { store } from './redux/store'
import FavoritesScreen from "./screens/FavoritesScreen";
const Stack = createNativeStackNavigator();
export default function App() {
  return (
      <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator >
          <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{title: 'Welcome', headerShown: false}}
              style={styles.container}
          />
          <Stack.Screen name="Results"
                        component={ResultsScreen}
                        options={{title: 'Results', headerShown: false}}
                        style={styles.container}
          />
            <Stack.Screen name="Recipe"
                          component={RecipeScreen}
                          options={{title: 'Recipe', headerShown: false}}/>
          <Stack.Screen name="Favorites"
                        component={FavoritesScreen}
                        options={{title: 'Favorites', headerShown: false}}/>
        </Stack.Navigator>
      </NavigationContainer>
      </Provider>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#D0F0C0',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

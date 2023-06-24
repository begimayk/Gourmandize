
import {Pressable, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {HomeScreen} from "./screens/HomeScreen";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import React from "react";
import ResultsScreen from "./screens/ResultsScreen";
import {RecipeScreen} from "./screens/RecipeScreen";
import {Provider} from "react-redux";
import { store } from './redux/store'
import FavoritesScreen from "./screens/FavoritesScreen";
import {Footer} from "./components/Footer";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();
export default function App(navigation) {
  return (
      <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator initialRouteName="Home"
                       screenOptions={{
                         tabBarActiveTintColor: '#AFE1AF',
                       }}>
          <Tab.Screen
              name="Home"
              component={HomeScreen}
              options={{title: 'Welcome', headerShown: false, tabBarIcon: () => (
                    <Ionicons size={30} name="home-outline"/>
                )}}
              style={styles.container}

          />
          <Tab.Screen name="Results"
                        component={ResultsScreen}
                        options={{title: 'Recipes', headerShown: false, tabBarIcon: () => (
                              <Ionicons size={30} name="list-outline"/>
                          )
                        }}
                        style={styles.container}
          />
            <Tab.Screen name="Recipe"
                          component={RecipeScreen}
                          options={{title: 'Recipe', headerShown: false, tabBarItemStyle: {display: "none"},
                          }}

            />
          <Tab.Screen name="Favorites"
                        component={FavoritesScreen}
                        options={{title: 'Favorites', headerShown: false,
                          tabBarIcon: () => (
                              <Ionicons size={30} name="star-outline"/>
                          )
                        }}
          />
        </Tab.Navigator>

      </NavigationContainer>
      </Provider>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#C4B454',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    backgroundColor: "#FFF",
    padding: 20,
    marginLeft: 60,
    marginRight: 60,
    marginBottom: 20,
    justifyContent: "space-between",
    display: "flex",
    flexDirection: "row",
  },
  homeIcon: {
  }
});

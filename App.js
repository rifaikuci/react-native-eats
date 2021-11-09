import React, {useState} from "react";
import {View, Text, SafeAreaView, StyleSheet} from "react-native";
import Home from "./screens/Home";
import RestaurantDetail from "./screens/RestaurantDetail";
import RootNavigation from "./navigation";

export default function App() {
    return (
        <RootNavigation/>
    );
}

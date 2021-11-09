import {View, Text, StyleSheet, SafeAreaView, ScrollView} from "react-native";
import HeaderTabs from "../components/home/HeaderTabs";
import React, {useEffect, useState} from "react";
import SearchBar from "../components/home/SearchBar";
import Categories from "../components/home/Categories";
import RestaurantItem, {localRestaurants} from "../components/home/RestaurantItem";
import ButtomTabs from "../components/home/BottomTabs";
import {Divider} from "react-native-elements";

const YELP_API_KEY = "C81RRXLtK2QwoP0aVUTDD1QC7ECvwySxF-aEXNp6TGWCoXlptPANQWtsm_eyT99oJvxRERlJov-3ljya37Bvt13LSxYwdoIt403doR7hHZ1gizNs8dLOScggImiGYXYx";

const Home = ({navigation}) => {
    const [restaurantData, setRestauratData] = useState(localRestaurants)
    const [city, setCity] = useState("San Francisco")
    const [activeTab, setActiveTab] = useState("Delivery")


    const getRestaurantsFromYelp = () => {
        const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

        const apiOptions = {
            headers: {
                Authorization: `Bearer ${YELP_API_KEY}`,
            },
        };
        return fetch(yelpUrl, apiOptions)
            .then((res) => res.json())
            .then((json) => setRestauratData(json.businesses.filter((business) => business.transactions.includes(activeTab.toLowerCase())
                )
            ))
    };

    useEffect(() => {
        getRestaurantsFromYelp();
    }, [city, activeTab]);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.view}>
                <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab}/>
                <SearchBar handleCity={setCity}
                />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Categories/>
                <RestaurantItem navigation={navigation} restaurantData={restaurantData}/>
            </ScrollView>
            <Divider width={1} />
            <ButtomTabs />

        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: "#EEE",
        flex: 1
    },
    view: {
        backgroundColor: "white",
        padding: 15
    }
})


export default Home;

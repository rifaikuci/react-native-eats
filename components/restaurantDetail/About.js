import React from "react";
import {Image, Text, View} from "react-native";

export default function About(props) {

    const {name, image, price, reviews, rating, categories} = props.route.params;

    debugger;
    const formattedCategoris = categories.map((cat) => cat.title).join(" - ");
    const description = `${formattedCategoris} ${
        price ? " - " + price : ""
    } ~ ${rating} ^ (${reviews})`;

    return (
        <View>
            <RestaurantImage image={image}/>
            <RestaurantTitle name={name}/>
            <RestaurantDescription description={description}/>
        </View>
    )
}

const RestaurantImage = (props) => (
    <Image source={{uri: props.image}} style={{width: "100%", height: 150}}>

    </Image>
);

const RestaurantTitle = (props) => (
    <Text style={{
        fontSize: 20,
        fontWeight: "600",
        marginTop: 3,
        marginHorizontal: 15
    }}>
        {props.name}
    </Text>

);

const RestaurantDescription = (props) => (
    <Text style={{
        marginTop: 3,
        marginHorizontal: 15,
        fontWeight: "400",
        fontSize: 12.5,
        opacity: 0.7
    }}>
        {props.description}

    </Text>

)

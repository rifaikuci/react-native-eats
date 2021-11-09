import {View, TouchableOpacity, Text, StyleSheet} from "react-native";
import React, {useState} from "react";


const HeaderTabs = (props) => {

    return (
        <View style={styles.container}>
            <HeaderButton text="Delivery" btnColor={"black"} textColor={"white"}
                          activeTab={props.activeTab}
                          setActiveTab={props.setActiveTab}/>
            <HeaderButton text="Pickup" btnColor={"white"} textColor={"black"}
                          activeTab={props.activeTab}
                          setActiveTab={props.setActiveTab}/>
        </View>
    )
}

const HeaderButton = (props) => (
    <View>
        <TouchableOpacity style={styles.touchableOpacity(props)}
                          onPress={() => props.setActiveTab(props.text)}>
            <Text style={styles.text(props)}>{props.text}</Text>
        </TouchableOpacity>
    </View>
)

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignSelf: "center"
    },
    text: (props) => (
        {
            color: props.activeTab == props.text ? "white" : "black",
            fontSize: 15,
            fontWeight: "900"
        }
    ),

    touchableOpacity: (props) => (
        {
            backgroundColor: props.activeTab == props.text ? "black" : "white",
            paddingVertical: 6,
            paddingHorizontal: 16,
            borderRadius: 30
        }
    )


})

export default HeaderTabs

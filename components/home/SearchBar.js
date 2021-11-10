import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {GooglePlacesAutocomplete} from "react-native-google-places-autocomplete";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";

var location = "";
export default function SearchBar({handleCity}) {
    return (
        <View style={styles.container}>

            <GooglePlacesAutocomplete
                //   query={{key:"AIzaSyCh9R2Hc4IMho5THX2vXLkjKU28xmkXqaE", language:'tr'}}
                placeholder="Search"
                styles={{
                    textInput: {
                        backgroundColor: "#eee",
                        borderRadius: 20,
                        fontWeight: "700",
                        marginTop: 7
                    },
                    textInputContainer: {
                        backgroundColor: "#eee",
                        borderRadius: 50,
                        flexDirection: "row",
                        alignItems: "center",
                        marginRight: 10
                    }
                }}
                ref={ref => {
                    location = ref
                }}
                renderLeftButton={() => (
                    <View>
                        <Ionicons style={{marginLeft: 10}} name="location-sharp" size={24}/>
                    </View>
                )}

                // çalışmama nedenini görmek için kullanırız.  onFail={error => console.error(error)}

                renderRightButton={() => (
                    <TouchableOpacity activeOpacity={1} onPress={(data) => {
                        if (location && location.getAddressText()) {
                            handleCity(location.getAddressText())
                        } else {
                            handleCity("Fatih")
                        }
                    }}>
                        <View style={styles.renderRightButton}>

                            <AntDesign name={"clockcircle"} size={11} style={{marginRight: 8}}/>
                            <Text>
                                Search
                            </Text>
                        </View>
                    </TouchableOpacity>

                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 15, flexDirection: "row",
        zIndex: 10000
    },
    renderRightButton: {
        flexDirection: "row",
        marginRight: 8,
        backgroundColor: "white",
        padding: 9,
        borderRadius: 30,
        alignItems: "center"
    },


})

import React, {useState} from "react";
import {Modal, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {useSelector} from "react-redux";
import OrderItem from "./OrderItem";

export default function ViewCart() {

    const [modalVisible, setModalVisible] = useState(false);

    const {items, restaurantName} = useSelector((state) => state.cartReducer.selectedItems);


    const total = items.map((item) => Number(item.price.replace("$", "")))
        .reduce((prev, curr) => prev + curr, 0)

    const totalUSD = total.toLocaleString("en", {
        style: "currency", currency: "USD"
    });

    const checkoutModalContent = () => {
        return (
            <>
                <View style={stles.modalContainer}>
                    <View style={stles.modalCheckoutContainer}>
                        <Text style={stles.restaurantName}> {restaurantName}</Text>
                        {
                            items.map((item, index) => (
                                <OrderItem key={index} item={item}/>
                            ))
                        }
                        <View style={stles.subtotalContainer}>
                            <Text style={stles.subtotalText}>SubTotal</Text>
                            <Text>{totalUSD}</Text>
                        </View>
                        <View style={{flexDirection: "row", justifyContent: "center"}}>
                            <TouchableOpacity
                                style={{
                                    marginTop: 20,
                                    backgroundColor: "black",
                                    alignItems: "center",
                                    padding: 13,
                                    borderRadius: 30,
                                    width: 300,
                                    position: "relative"
                                }}
                                onPress={() => setModalVisible(false)}
                            >
                                <Text style={{color: "white", fontSize: 20}}>Checkout</Text>
                                <Text
                                    style={{position: "absolute", right: 20, color: "white", fontSize: 15, top: 17}}
                                >
                                    {total ? totalUSD : ""}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </>
        )
    }
    /*
            const addOrderToFireBase = () => {
                const db = firebase.firestore();
                db.collection("orders").add({
                    items: items,
                    restaurantName : restaurantName,
                    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                });
                setModalVisible(false);
            }
    */
    return (
        <>
            <Modal
                animationType={"slide"}
                visible={modalVisible}
                transparent={true}
                onRequestClose={() => setModalVisible(false)}>
                {checkoutModalContent()}
            </Modal>
            {total ? (
                <View style={{
                    flex: 1, alignItems: "center", flexDirection: "row", position: "absolute", bottom: 200, zIndex: 999
                }}>
                    <View
                        style={{flexDirection: "row", justifyContent: "center", width: "100%"}}>
                        <View>
                            <TouchableOpacity
                                style={{
                                    marginTop: 20,
                                    backgroundColor: 'black',
                                    flexDirection: "row",
                                    justifyContent: "flex-end",
                                    alignItems: 'center',
                                    padding: 15,
                                    borderRadius: 30,
                                    width: 300,
                                    position: "relative"
                                }}
                                onPress={()=> setModalVisible(true)}
                            >
                                <Text style={{color: "white", fontSize: 20, marginRight: 30}}>
                                    View Cart
                                </Text>
                                <Text style={{color: "white", fontSize: 20}}> {`$${totalUSD}`}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>) : (<></>
            )}</>
    )
}


const stles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: "flex-end",
        backgroundColor: "black",
        opacity: 0.7
    },
    modalCheckoutContainer: {
        backgroundColor: "white",
        padding: 16,
        height: 500,
        borderWidth: 1
    },
    restaurantName: {
        textAlign: "center",
        fontWeight: "600",
        fontSize: 18,
        marginBottom: 10
    },
    subtotalContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 15
    },
    subtotalText: {
        textAlign: "left",
        fontWeight: "600",
        fontSize: 15,
        marginBottom: 10
    }
})

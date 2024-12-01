import React, { useState } from "react";
import { TextInput, View, Text, Button, Alert } from "react-native";
import { datasource } from "./Data.js";

function Edit({ navigation, route }) {
    // access passed parameter from home screen
    const [pkm, setPkm] = useState(route.params.key);
    const [pkmId, setPkmId] = useState(route.params.id);

    return (
        <View style={{ margin: 20 }}>
            <Text style={{ paddingBottom: 5 }}>Name:</Text>
            <TextInput
                style={{ borderWidth: 1, marginBottom: 10 }}
                maxLength={15}
                onChangeText={(text) => setPkm(text)}
                value={pkm}
            />

            <Text style={{ paddingBottom: 5 }}>ID:</Text>
            <TextInput
                style={{ borderWidth: 1, marginBottom: 10 }}
                maxLength={3}
                onChangeText={(text) => setPkmId(text)}
                value={pkmId}
            />

            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                }}
            >
                <View style={{ flex: 1, margin: 10 }}>
                    <Button
                        title="Save"
                        onPress={() => {
                            // new temp variable with a default value of 2
                            let indexnum = 2;
                            if (route.params.type === "Fire") {
                                indexnum = 0;
                            } else if (route.params.type === "Water") {
                                indexnum = 1;
                            }
                            // change value of list item to the edited value
                            // access passed parameter from home screen
                            datasource[indexnum].data[route.params.index].key = pkm
                            datasource[indexnum].data[route.params.index].id = pkmId
                            // console.table(datasource);
                            navigation.navigate("Home");
                        }}
                    />
                </View>
                <View style={{ flex: 1, margin: 10 }}>
                    <Button
                        title="Delete"
                        onPress={() => {
                            let indexnum = 2;
                            if (route.params.type === "Fire") {
                                indexnum = 0;
                            } else if (route.params.type === "Water") {
                                indexnum = 1;
                            }

                            // confirmation alert
                            Alert.alert("Are you sure?", "", [
                                {
                                    text: "Yes",
                                    onPress: () => {
                                        // calls array method of splice() to remove item
                                        // splice() parameters --> position to start removing at and number of items to remove
                                        datasource[indexnum].data.splice(
                                            route.params.index,
                                            1,
                                        );
                                        navigation.navigate("Home");
                                    },
                                },
                                // closes the alert on click
                                { text: "No" },
                            ]);
                        }}
                    />
                </View>
            </View>
        </View>
    );
}

export default Edit;

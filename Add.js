import React, { useState } from "react";
import { TextInput, View, Text, Button } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import { datasource } from "./Data.js";

function Add({ navigation }) {
    const [pkm, setPkm] = useState("");
    const [pkmId, setPkmId] = useState("");
    const [pkmType, setPkmType] = useState("");

    return (
        <View style={{ margin: 20 }}>
            <Text style={{ paddingBottom: 5 }}>Name:</Text>
            <TextInput
                style={{ borderWidth: 1, marginBottom: 10 }}
                maxLength={15}
                onChangeText={(text) => setPkm(text)}
            />

            <Text style={{ paddingBottom: 5 }}>ID:</Text>
            <TextInput
                style={{ borderWidth: 1, marginBottom: 10 }}
                maxLength={3}
                onChangeText={(text) => setPkmId(text)}
            />

            <RNPickerSelect
                onValueChange={(value) => {
                    setPkmType(value);
                }}
                items={[
                    { label: "Fire", value: "Fire" },
                    { label: "Water", value: "Water" },
                    { label: "Ghost", value: "Ghost" },
                ]}
                value={pkmType}
            />

            <View style={{ marginTop: 10 }}>
                <Button
                    title="Submit"
                    onPress={() => {
                        // creates a new temp JSON object
                        let item = { key: pkm, id: pkmId };
                        let indexnum = 2;
                        // datasource[0] --> Fire, datasource[1] --> Water, datasource[2] --> Ghost
                        if (pkmType === "Fire") {
                            indexnum = 0;
                        } else if (pkmType === "Water") {
                            indexnum = 1;
                        }
                        // based on the valye of picker select, the new JSON obj gets added to the appropriate section of datasource
                        datasource[indexnum].data.push(item);
                        // navigate / redirect back to home screen
                        navigation.navigate("Home");
                    }}
                />
            </View>
        </View>
    );
}

export default Add;

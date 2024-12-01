import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    StatusBar,
    SectionList,
    Button,
    Image,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { datasource } from "./Data.js";

const styles = StyleSheet.create({
    opacityStyle: {
        borderWidth: 1,
        flexDirection: "row",
        padding: 15,
        backgroundColor: "#c8d3f566",
    },
    textStyle: {
        fontSize: 15,
        margin: 10,
        textAlign: "center",
        textAlignVertical: "center",
        flex: 1,
        fontWeight: "bold",
    },
    imageStyle: {
        width: 200,
        height: 200,
        resizeMode: "contain",
        alignSelf: "center",
        flex: 1,
    },
    headerText: {
        borderWidth: 1,
        fontSize: 17,
        textAlign: "center",
        fontWeight: "bold",
        fontVariant: "small-caps",
    },
});

const Home = ({ navigation }) => {
    const renderItem = ({ item, index, section }) => {
        return (
            <TouchableOpacity
                style={styles.opacityStyle}
                onPress={() =>
                    navigation.navigate("Edit", {
                        index: index,
                        type: section.type,
                        key: item.key,
                        id: item.id,
                    })
                }
            >
                <Text style={styles.textStyle}>{item.key}</Text>
                <Image
                    source={{
                        uri: `https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_${item.id}-2x.png`,
                    }}
                    style={styles.imageStyle}
                />
            </TouchableOpacity>
        );
    };

    return (
        <View style={{ margin: 20, marginBottom: 125 }}>
            <StatusBar />
            <View style={{marginBottom: 20}}>
                <Button
                    title="Add Pokemon"
                    onPress={() => navigation.navigate("Add")}
                />
            </View>
            <View>
                <SectionList
                    sections={datasource}
                    renderItem={renderItem}
                    renderSectionHeader={({
                        section: { type, bgColor, color, icon },
                    }) => (
                        <Text
                            style={[
                                styles.headerText,
                                { backgroundColor: bgColor, color: color },
                            ]}
                        >
                            <Icon name={icon} size={17} color={color} /> {type}
                        </Text>
                    )}
                />
            </View>
        </View>
    );
};

export default Home;

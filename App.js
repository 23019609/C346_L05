// ==================== EXERCISE 1 ====================
//
// import React from "react";
// import {
//     View,
//     Text,
//     FlatList,
//     StyleSheet,
//     TouchableOpacity,
//     StatusBar,
// } from "react-native";
//
// const datasource = [
//     { key: "a" },
//     { key: "b" },
//     { key: "c" },
//     { key: "d" },
//     { key: "e" },
//     { key: "f" },
//     { key: "g" },
//     { key: "h" },
//     { key: "i" },
//     { key: "j" },
//     { key: "k" },
//     { key: "l" },
//     { key: "m" },
//     { key: "n" },
//     { key: "o" },
//     { key: "p" },
//     { key: "q" },
//     { key: "r" },
//     { key: "s" },
//     { key: "t" },
//     { key: "u" },
//     { key: "v" },
//     { key: "w" },
//     { key: "x" },
//     { key: "y" },
//     { key: "z" },
// ];
//
// const styles = StyleSheet.create({
//     opacityStyle: {
//         borderWidth: 1,
//     },
//     textStyle: {
//         fontSize: 15,
//         margin: 10,
//         textAlign: "left",
//     },
// });
//
// const renderItem = ({ item }) => {
//     return (
//         <TouchableOpacity style={styles.opacityStyle}>
//             <Text style={styles.textStyle}>{item.key}</Text>
//         </TouchableOpacity>
//     );
// };
//
// const App = () => {
//     return (
//         <View style={{ marginBottom: 20 }}>
//             <StatusBar hidden={true} />
//             <FlatList data={datasource} renderItem={renderItem} />
//         </View>
//     );
// };
//
// export default App;

// ==================== EXERCISE 2 ====================
//
// import React from "react";
// import {
//     View,
//     Text,
//     FlatList,
//     StyleSheet,
//     TouchableOpacity,
//     StatusBar,
//     SectionList,
// } from "react-native";
//
// const datasource = [
//     {
//         data: [
//             { key: "a" },
//             { key: "e" },
//             { key: "i" },
//             { key: "o" },
//             { key: "u" },
//         ],
//         title: "Vowels",
//         bgColor: "skyblue",
//     },
//     {
//         data: [
//             { key: "b" },
//             { key: "c" },
//             { key: "d" },
//             { key: "f" },
//             { key: "g" },
//             { key: "h" },
//             { key: "j" },
//             { key: "k" },
//             { key: "l" },
//             { key: "m" },
//             { key: "n" },
//             { key: "p" },
//             { key: "q" },
//             { key: "r" },
//             { key: "s" },
//             { key: "t" },
//             { key: "v" },
//             { key: "w" },
//             { key: "x" },
//             { key: "y" },
//             { key: "z" },
//         ],
//         title: "Consonants",
//         bgColor: "khaki",
//     },
// ];
//
// const styles = StyleSheet.create({
//     opacityStyle: {
//         borderWidth: 1,
//     },
//     textStyle: {
//         fontSize: 15,
//         margin: 10,
//         textAlign: "left",
//     },
//     headerText: {
//         fontsize: 20,
//         margin: 10,
//         textAlign: "center",
//         fontWeight: "bold",
//     },
// });
//
// const renderItem = ({ item }) => {
//     return (
//         <TouchableOpacity style={styles.opacityStyle}>
//             <Text style={styles.textStyle}>{item.key}</Text>
//         </TouchableOpacity>
//     );
// };
//
// const App = () => {
//     return (
//         <View style={{ marginBottom: 50, margin: 10 }}>
//             <StatusBar hidden={true} />
//             <SectionList
//                 sections={datasource}
//                 renderItem={renderItem}
//                 renderSectionHeader={({ section: { title, bgColor } }) => (
//                     <Text
//                         style={[
//                             styles.headerText,
//                             { backgroundColor: bgColor },
//                         ]}
//                     >
//                         {title}
//                     </Text>
//                 )}
//             />
//         </View>
//     );
// };
//
// export default App;

// ==================== EXERCISE 3 ====================
//
// import React from "react";
// import {
//     View,
//     Text,
//     FlatList,
//     StyleSheet,
//     TouchableOpacity,
//     StatusBar,
//     SectionList,
//     Button,
//     Image,
// } from "react-native";
// import Icon from "react-native-vector-icons/MaterialCommunityIcons";
//
// const datasource = [
//     {
//         data: [
//             { key: "Vulpix", id: "37" },
//             { key: "Ninetales", id: "38" },
//         ],
//         title: "Fire",
//         bgColor: "#f8ae7dcc",
//         icon: "fire",
//         color: "#f45f38",
//     },
//     {
//         data: [
//             { key: "Psyduck", id: "54" },
//             { key: "Golduck", id: "55" },
//         ],
//         title: "Water",
//         bgColor: "#8fd8f8cc",
//         icon: "water",
//         color: "#2da4dd",
//     },
//     {
//         data: [
//             { key: "Gastly", id: "92" },
//             { key: "Haunter", id: "93" },
//             { key: "Gengar", id: "94" },
//         ],
//         title: "Ghost",
//         bgColor: "#b792d3cc",
//         icon: "ghost",
//         color: "#8c48a0",
//     },
// ];
//
// const styles = StyleSheet.create({
//     opacityStyle: {
//         borderWidth: 1,
//         flexDirection: "row",
//         padding: 15,
//         backgroundColor: "#c8d3f566",
//     },
//     textStyle: {
//         fontSize: 15,
//         margin: 10,
//         textAlign: "center",
//         textAlignVertical: "center",
//         flex: 1,
//         fontWeight: "bold",
//     },
//     imageStyle: {
//         width: 200,
//         height: 200,
//         resizeMode: "contain",
//         alignSelf: "center",
//         flex: 1,
//     },
//     headerText: {
//         borderWidth: 1,
//         fontSize: 17,
//         textAlign: "center",
//         fontWeight: "bold",
//         fontVariant: "small-caps",
//     },
// });
//
// const renderItem = ({ item }) => {
//     return (
//         <TouchableOpacity style={styles.opacityStyle}>
//             <Text style={styles.textStyle}>{item.key}</Text>
//             <Image
//                 source={{
//                     uri: `https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_${item.id}-2x.png`,
//                 }}
//                 style={styles.imageStyle}
//             />
//         </TouchableOpacity>
//     );
// };
//
// const App = () => {
//     return (
//         <View>
//             <View
//                 style={{
//                     margin: 20,
//                     marginTop: 50,
//                     paddingBottom: 20,
//                     borderBottomWidth: 1,
//                 }}
//             >
//                 <Button title="ADD POKEMON" />
//             </View>
//             <View
//                 style={{ marginLeft: 20, marginRight: 20, marginBottom: 290 }}
//             >
//                 <StatusBar hidden={true} />
//                 <SectionList
//                     sections={datasource}
//                     renderItem={renderItem}
//                     renderSectionHeader={({
//                         section: { title, bgColor, color, icon },
//                     }) => (
//                         <Text
//                             style={[
//                                 styles.headerText,
//                                 { backgroundColor: bgColor, color: color },
//                             ]}
//                         >
//                             <Icon name={icon} size={17} color={color} /> {title}
//                         </Text>
//                     )}
//                 />
//             </View>
//         </View>
//     );
// };
//
// export default App;

// ==================== EXERCISE 4 ====================

import React from "react";
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    TouchableOpacity,
    StatusBar,
    SectionList,
    Button,
    Image,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const styles = StyleSheet.create({
    opacityStyle: {
        display: "flex",
        flexDirection: "row",
        padding: 15,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#c8d3f566",
        borderWidth: 1,
    },
    detailsContainer: {
        display: "flex",
        flexDirection: "column",
        flex: 1,
        marginLeft: -20,
    },
    menuContainer: {
        flex: 0,
        justifyContent: "center",
    },
    textStyle: {
        marginTop: 5,
        fontSize: 15,
        textAlign: "center",
        fontWeight: "bold",
        color: "#2e2030b3",
    },
    imageStyle: {
        width: 200,
        height: 200,
        marginTop: 5,
        alignSelf: "center",
        resizeMode: "contain",
    },
    headerText: {
        fontSize: 17,
        fontWeight: "bold",
        fontVariant: "small-caps",
        borderWidth: 1,
        textAlign: "center",
    },
});

const datasource = [
    {
        data: [
            {
                key: "Parks and Recreation",
                year: "2009",
                id: "njnutwA0WPXZTv1IjQ6xhOkqAq6",
            },
            { key: "Arcane", year: "2021", id: "abf8tHznhSvl9BAElD2cQeRr7do" },
        ],
        title: "Watching",
        icon: "eye",
        bgColor: "#c7ceea",
        color: "#374076",
    },
    {
        data: [
            { key: "Uzumaki", year: "2024", id: "naBGhZqOdhLzPuXWbx1JdjWZvQy" },
            {
                key: "The Good Place",
                year: "2016",
                id: "6q39M22dSUQUQVkAY28TEWHqBD9",
            },
            {
                key: "No One Will Save You",
                year: "2023",
                id: "ehGIDAMaYy6Eg0o8ga0oqflDjqW",
            },
        ],
        title: "Completed",
        icon: "eye-check",
        bgColor: "#d1e3cc",
        color: "#3b692f",
    },
    {
        data: [
            {
                key: "Detachment",
                year: "2011",
                id: "lw1wlekuMMKxmYg7v01vB7Snkq6",
            },
            {
                key: "The Thing",
                year: "1982",
                id: "tzGY49kseSE9QAKk47uuDGwnSCu",
            },
            {
                key: "Murder on Middle Beach",
                year: "2020",
                id: "j1VQYGEK8GZgqgGT0RrHTjk8NpG",
            },
        ],
        title: "Plan to Watch",
        icon: "eye-plus",
        bgColor: "#f4eed6",
        color: "#7c7a5a",
    },
    {
        data: [
            {
                key: "Fear the Walking Dead",
                year: "2015",
                id: "jIqSBIgmzV1ocbzfBVcJPjrOTBg",
            },
            {
                key: "The Final Destination",
                year: "2009",
                id: "1R74JsK7cWxy5xQtnoQzm3pwBzw",
            },
        ],
        title: "Dropped",
        icon: "eye-off",
        bgColor: "#ffababcc",
        color: "#823636cc",
    },
];

const renderItem = ({ item }) => {
    return (
        <TouchableOpacity style={styles.opacityStyle}>
            <View style={styles.menuContainer}>
                <Icon name="menu" size={20} color="#a8b3e5" />
            </View>
            <View style={styles.detailsContainer}>
                <Image
                    source={{
                        uri: `https://image.tmdb.org/t/p/original/${item.id}.jpg`,
                    }}
                    style={styles.imageStyle}
                />
                <Text style={styles.textStyle}>
                    {item.key} ({item.year})
                </Text>
            </View>
        </TouchableOpacity>
    );
};

const App = () => {
    return (
        <View>
            <View
                style={{
                    margin: 20,
                    marginTop: 50,
                    paddingBottom: 20,
                    borderBottomWidth: 1,
                }}
            >
                <Text></Text>
                <Button title="SEARCH" color="#2c2f30" />
            </View>
            <View
                style={{ marginLeft: 20, marginRight: 20, marginBottom: 330 }}
            >
                <StatusBar hidden={true} />
                <SectionList
                    sections={datasource}
                    renderItem={renderItem}
                    renderSectionHeader={({
                        section: { title, icon, bgColor, color },
                    }) => (
                        <Text
                            style={[
                                styles.headerText,
                                { backgroundColor: bgColor, color: color },
                            ]}
                        >
                            <Icon name={icon} size={17} color={color} /> {title}
                        </Text>
                    )}
                />
            </View>
        </View>
    );
};

export default App;

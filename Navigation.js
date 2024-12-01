import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Home.js";
import Add from "./Add.js";
import Edit from "./Edit.js";

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                {/*home screen being at the top of the stack means that it will be the first screen to appear by default on app startup*/}
                {/*Stack.Screen components receive a prop called navigation*/}
                {/*Resources: https://reactnative.dev/docs/navigation#usage*/}
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Add" component={Add} />
                <Stack.Screen name="Edit" component={Edit} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;

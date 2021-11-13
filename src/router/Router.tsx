import * as React from "react";
import LoginScreen from "../screens/public/LoginScreen";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {useAppSelector} from "../hooks/useAppSelector";
import {LoginStatus} from "../redux/state/auth";
import DashboardScreen from "../screens/private/DashboardScreen";

export default function Router() {
    const Stack = createNativeStackNavigator();
    const loginStatus = useAppSelector(state => state.auth.status);

    return (
        <Stack.Navigator
            initialRouteName="Main"
            screenOptions={{
                headerShown: false,
                gestureEnabled: true,
            }}
        >
            {loginStatus === LoginStatus.LOGGED_IN && (
                <Stack.Screen name="Main" component={DashboardScreen} />
            )}
            {loginStatus === LoginStatus.NOT_LOGGED_IN && (
                <Stack.Screen name="Main" component={LoginScreen} />
            )}
        </Stack.Navigator>
    );
}
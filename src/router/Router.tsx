import * as React from "react";
import LoginScreen from "../screens/public/LoginScreen";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {useAppSelector} from "../hooks/useAppSelector";
import {LoginStatus} from "../redux/state/auth";
import DashboardScreen from "../screens/private/DashboardScreen";
import RegisterScreen from "../screens/public/RegisterScreen";
import ActivateAccountScreen from "../screens/public/ActivateAccountScreen";

export default function Router() {
    const Stack = createNativeStackNavigator();
    const loginStatus = useAppSelector(state => state.auth.status);

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                gestureEnabled: true,
            }}
        >
            {loginStatus === LoginStatus.LOGGED_IN && (
                <Stack.Screen name="Dashboard" component={DashboardScreen} />
            )}
            {loginStatus === LoginStatus.NOT_LOGGED_IN && (
                <>
                    <Stack.Screen name="Login" component={LoginScreen} />
                    <Stack.Screen name="Register" component={RegisterScreen} />
                    <Stack.Screen name="ActivateAccount" component={ActivateAccountScreen} />
                </>
            )}
        </Stack.Navigator>
    );
}
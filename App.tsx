import React from 'react';
import {NativeBaseProvider} from "native-base";
import {Provider} from "react-redux";
import {store} from "./src/redux/store";
import { NavigationContainer } from '@react-navigation/native';
import Router from "./src/router/Router";

export default function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <NativeBaseProvider>
                    <Router />
                </NativeBaseProvider>
            </NavigationContainer>
        </Provider>
    );
}

import React from 'react';
import {NativeBaseProvider} from "native-base";
import {Provider} from "react-redux";
import {store} from "./src/redux/store";
import {NavigationContainer} from '@react-navigation/native';
import Router from "./src/router/Router";
import {RootSiblingParent} from 'react-native-root-siblings';
import * as Linking from "expo-linking";

const prefix = Linking.createURL('/');

export default function App() {
    const linking = {
        prefixes: [prefix, 'https://stocks.woutercarabain.com', 'exps://stocks.woutercarabain.com'],
        config: {
            screens: {
                ActivateAccount: 'activate-account',
            }
        }
    };

    return (
        <Provider store={store}>
            <RootSiblingParent>
                <NavigationContainer linking={linking}>
                    <NativeBaseProvider>
                        <Router/>
                    </NativeBaseProvider>
                </NavigationContainer>
            </RootSiblingParent>
        </Provider>
    );
}

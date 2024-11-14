import React from 'react';
import { StyleSheet } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';

import { colors } from '../theme';
import { DataScreen, DictionaryScreen } from '../screens';
import { Data } from '../../interfaces';

export type DictionaryRouterParams = {
    Dictionary: undefined;
    Data: {
        title: string;
        list: Data[],
        listEsp: Data[],
    }
};

const Stack = createStackNavigator<DictionaryRouterParams>();


export const DictionaryNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                options={{ headerStyle: styles.headerStyle, headerShown: false }}
                name="Dictionary"
                component={ DictionaryScreen }
            />
            <Stack.Screen
                options={{ headerStyle: styles.headerStyle }}
                name="Data"
                component={ DataScreen }
            />
        </Stack.Navigator>
    );
};

const styles = StyleSheet.create({
    headerStyle: {
        backgroundColor: colors.background,
        elevation: 0,
    },
});

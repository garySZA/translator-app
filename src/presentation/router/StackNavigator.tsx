import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { DataScreen, LessonScreen, RoadMapScreen } from '../screens';
import { colors } from '../theme';
import { StyleSheet } from 'react-native';
import { Lesson } from '../../interfaces';

export type RootStackParams = {
    Home: undefined,
    Lesson: {
        lessonId: number,
        name: string,
        step: number,
        stepTitle: string,
        lesson: Lesson,
        lessonList: Lesson[]
    },
    Dictionary: undefined,
}

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () =>  {
    return (
        <Stack.Navigator
            screenOptions={{
                headerTintColor: colors.textPrimary,
                headerShown: false,
            }}
        >
            <Stack.Screen
                options={{ headerStyle: styles.headerStyle, headerTitleStyle: { color: colors.textPrimary } }}

                name="Home"
                component={ RoadMapScreen }
            />

            <Stack.Screen
                options={{ headerStyle: styles.headerStyle, headerTitleStyle: { color: colors.textPrimary } }}
                name="Lesson"
                component={ LessonScreen }
            />

            <Stack.Screen
                options={{ headerStyle: styles.headerStyle, headerTitleStyle: { color: colors.textPrimary } }}
                name="Dictionary"
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

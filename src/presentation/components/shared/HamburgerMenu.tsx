import React, { useEffect } from 'react';
import { Pressable, StyleSheet } from 'react-native';

import { DrawerActions, useNavigation } from '@react-navigation/native';

import { IonIcon } from './IonIcon';
import { colors } from '../../theme';

export const HamburgerMenu = () => {
    const navigator = useNavigation();

    useEffect(() => {
        navigator.setOptions({
            headerLeft: () => (
                <Pressable style={ styles.container } onPress={ () => navigator.dispatch( DrawerActions.toggleDrawer ) } >
                    <IonIcon name="manu-outline" color={ colors.primary } />
                </Pressable>
            ),
        });
    }, [ navigator ]);


    return <></>;
};

const styles = StyleSheet.create({
    container: {
        paddingLeft: 5,
    },
});

import React from 'react';
import { StyleSheet, View } from 'react-native';

import { dictionaryList } from '../../helpers';
import { PrimaryButton } from '../components/shared';
import { useNavigator } from '../../hooks';
import { DictionaryRouterParams } from '../router';

export const DictionaryScreen = () => {
    const { navigation } = useNavigator<DictionaryRouterParams>();

    return (
        <View style={ styles.container }>
            {
                dictionaryList.map(( element, index ) => (
                    <PrimaryButton
                        label={ element.title }
                        onPress={ () => navigation.navigate('Data', {list: element.list, listEsp: element.listEsp, title: element.title}) }
                        type="primary"
                        width="75%"
                        key={ index }
                    />
                ))
            }
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
        display: 'flex',
        alignItems: 'center',
    },
});

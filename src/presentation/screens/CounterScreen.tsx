import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FAB } from 'react-native-paper';

import { globalStyles } from '../theme';

export const CounterScreen = () => {
    const [counter, setCounter] = useState(10);

    return (
        <View style={ globalStyles.centerContainer }>
            <Text style={ styles.title }>Template App</Text>
            <Text style={ globalStyles.title }>{ counter }</Text>

            <FAB
                onPress={ () => setCounter( counter + 1 ) }
                onLongPress={ () => setCounter( 0 ) }
                style={ globalStyles.fab }
                icon="add-outline"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 50,
        color: 'tomato',
        fontWeight: 'bold',
        fontStyle: 'italic',
        marginBottom: 20,
    },
});

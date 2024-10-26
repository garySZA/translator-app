import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../theme';

interface Props {
    description: string;
}

export const RoadMapRowDescription = ({ description }: Props) => {
    return (
        <View style={ styles.descriptionContainer }>
            <Text style={ styles.textDescription }> { description } </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    descriptionContainer:{
        flexDirection: 'row',
        paddingRight: 50,
    },

    textDescription: {
        marginLeft: 10,
        color: colors.textSecondary,
    },
});

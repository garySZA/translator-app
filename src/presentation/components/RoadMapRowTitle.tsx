import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { colors } from '../theme';

interface Props {
    title: string;
}

export const RoadMapRowTitle = ({ title }: Props) => {
    return (
        <Text style={ styles.title }>{ title }</Text>
    );
};

const styles = StyleSheet.create({
    title:{
        color: colors.textPrimary,
        fontSize:16,
        fontWeight: 'bold',
    },
});

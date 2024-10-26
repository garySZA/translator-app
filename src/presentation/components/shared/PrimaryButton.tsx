import React from 'react';
import { Pressable, Text } from 'react-native';
import { globalStyles } from '../../theme';

interface Props {
    label: string;
    onPress: () => void;
    type: 'primary' | 'secondary' | 'tertiary';
}

export const PrimaryButton = ({ label, onPress, type }: Props) => {
    return (
        <Pressable
            style={[ globalStyles.button, globalStyles[`${ type }Button`] ]}
            onPress={ () => onPress() }
        >
            <Text style={ globalStyles.buttonText } >{ label }</Text>
        </Pressable>
    );
};

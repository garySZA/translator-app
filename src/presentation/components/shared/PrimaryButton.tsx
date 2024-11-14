import React from 'react';
import { Pressable, Text } from 'react-native';
import { globalStyles } from '../../theme';

interface Props {
    label: string;
    onPress: () => void;
    type: 'primary' | 'secondary' | 'tertiary';
    width?: '25%' | '50%' | '75%' | '100%' | 'auto';
}

export const PrimaryButton = ({ label, onPress, type, width = 'auto' }: Props) => {
    return (
        <Pressable
            style={[ globalStyles.button, globalStyles[`${ type }Button`], { width } ]}
            onPress={ () => onPress() }
        >
            <Text style={ type === 'tertiary' ? globalStyles.tertiaryButtonText : globalStyles.buttonText } >{ label }</Text>
        </Pressable>
    );
};

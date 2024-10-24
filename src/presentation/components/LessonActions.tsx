import React from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

interface Props {
    onSubmit: () => void;
    onHelp: () => void;
}

export const LessonActions = ({ onSubmit, onHelp }: Props) => {

    return (
        <>
            <Button
                mode="contained-tonal"
                textColor="#6A3DE8"
                onPress={ onSubmit }
            >
                Comprobar
            </Button>
            <Button
                mode="text"
                textColor="#6A3DE8"
                style={ styles.helpButton }
                onPress={ onHelp }
            >
                Ayuda
            </Button>
        </>
    );
};

const styles = StyleSheet.create({
    helpButton: {
        marginTop: 10,
    },
});

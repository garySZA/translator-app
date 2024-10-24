import React from 'react';
import { StyleSheet, ToastAndroid, View } from 'react-native';

import { LessonActions, LessonDescription, LessonOptions } from '../components';
import { lessonOneNumbers } from '../../helpers/data/index';
import { useStorage } from '../../hooks';
import { Text } from 'react-native-paper';


const lesson = lessonOneNumbers;

export const LessonScreen = () => {
    const { getData } = useStorage();

    const showToast = (message: string) => {
        ToastAndroid.showWithGravity(message, ToastAndroid.SHORT, ToastAndroid.TOP);
    };

    const onSubmit = async () => {
        const optionSelected = await getData('optionSelected');

        if( lesson.correctAnswer.id === +optionSelected! ){

            showToast('Muy Bien! respuesta correcta');
        } else {
            showToast('Error, respuesta incorrecta');
        }
    };

    const onHelp = () => {

        showToast(`Tal vez la respuesta sea ${ lesson.correctAnswer.label }`);
    };

    return (
        <View style={ styles.container }>
            <Text 
                variant="headlineSmall"
                style={ styles.lessonTitle }
            >
                Aprendiendo Números
            </Text>
            <View style={ styles.lessonDescription }>
                <LessonDescription
                    avatarLabel={ lesson.avatar }
                    lessonTitle={ lesson.title }
                />
            </View>
            <View>
                <LessonOptions optionsList={ lesson.options } />
            </View>
            <View style={ styles.lessonActions }>
                <LessonActions
                    onSubmit={ onSubmit }
                    onHelp={ onHelp }
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        rowGap: 40,

        backgroundColor: '#f5f5f5',
        padding: 20,
    },

    lessonDescription: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'flex-start',
    },

    lessonActions: {
        width: '80%',
    },

    lessonTitle: {
        color: '#6A3DE8',
        fontWeight: 'bold',
        fontStyle: 'italic',
    },
});

import React, { useEffect } from 'react';
import { StyleSheet, ToastAndroid, View } from 'react-native';

import { Text } from 'react-native-paper';
import { RouteProp, StackActions, useRoute } from '@react-navigation/native';

import { colors } from '../theme';
import { LessonActions, LessonDescription, LessonOptions } from '../components';
import { lessonsList } from '../../helpers/data';
import { RootStackParams } from '../router';
import { useNavigator, useStorage } from '../../hooks';
import { resetOptions } from '../../helpers';

export const LessonScreen = () => {
    const { getData, clearField } = useStorage();
    const { navigation } = useNavigator();
    const params = useRoute<RouteProp<RootStackParams, 'Lesson'>>().params;
    const lesson = params.lesson;

    // TODO: REVISAR

    useEffect(() => {
        lesson.options = resetOptions( lesson.options );
    }, [lesson, lesson.options]);


    useEffect(() => {
        navigation.setOptions({
            title: `${params.name} - ${ params.stepTitle }`,
        });
    }, [navigation, params.name, params.stepTitle]);


    const showToast = (message: string) => {
        ToastAndroid.showWithGravity(message, ToastAndroid.SHORT, ToastAndroid.TOP);
    };

    const onSubmit = async () => {
        const optionSelected = await getData('optionSelected');

        if( lesson.correctAnswer.id === +optionSelected! ){

            showToast('Muy Bien! respuesta correcta');
            clearField('optionSelected');

            if( params.step < 10 ) {
                setTimeout( () => {
                    navigation.navigate('Lesson',
                        {
                            lessonId: params.lessonId + 1,
                            name: params.name,
                            step: params.step + 1,
                            stepTitle: params.stepTitle,
                            lesson: lessonsList[params.lessonId + 1],
                        });
                }, 1700 );

            } else {
                onGoToHome();
            }

        } else {
            showToast('Error, respuesta incorrecta');
        }
    };

    const onHelp = () => {

        showToast(`Tal vez la respuesta sea ${ lesson.correctAnswer.label }`);
    };

    const onGoToHome = () => {
        navigation.dispatch( StackActions.popToTop() );
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
                    onGoToHome={ onGoToHome }
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

        backgroundColor: colors.secondaryBackground,
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
        color: colors.textPrimary,
        fontWeight: 'bold',
        fontStyle: 'italic',
    },
});

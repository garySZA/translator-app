import React from 'react';
import { StyleSheet } from 'react-native';
import { Avatar, Text } from 'react-native-paper';

interface Props {
    avatarLabel: string;
    lessonTitle: string;

}

export const LessonDescription = ({ avatarLabel, lessonTitle }: Props) => {
    return (
        <>
            <Avatar.Text
                size={ 90 }
                label={ avatarLabel }
                style={ styles.lessonAvatar }
            />
            <Text
                variant="titleLarge"
                style={ styles.lessonTitle }
            >
                { lessonTitle }
            </Text>
        </>
    );
};

const styles = StyleSheet.create({
    lessonAvatar: {
    },

    lessonTitle: {
        width: 100,
        backgroundColor: '#a286f0',
        color: '#fff',
        marginLeft: 10,
        textAlign: 'center',
        borderRadius: 5,
    },
});

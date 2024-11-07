import React from 'react';
import { StyleSheet } from 'react-native';
import { Avatar, Text } from 'react-native-paper';
import { colors, commonColors } from '../theme';

interface Props {
    avatarLabel: string;
    lessonTitle: string;

}

export const LessonDescription = ({ avatarLabel, lessonTitle }: Props) => {
    return (
        <>
            {
                avatarLabel === 'null'
                ? (
                    <Avatar.Icon
                        size={ 90 }
                        icon="help-outline"
                        style={ styles.lessonAvatar }
                        color={ commonColors.white }
                    />
                )
                : (
                    <Avatar.Text
                        size={ 90 }
                        label={ avatarLabel }
                        style={ styles.lessonAvatar }
                        color={ commonColors.white }
                    />
                )
            }
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
        backgroundColor: colors.primary,
    },

    lessonTitle: {
        padding: 10,
        backgroundColor: colors.tertiary,
        color: commonColors.white,
        marginLeft: 10,
        textAlign: 'center',
        borderRadius: 5,
    },
});

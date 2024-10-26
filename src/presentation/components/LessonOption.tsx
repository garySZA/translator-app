import React from 'react';
import { Chip } from 'react-native-paper';
import { colors, commonColors } from '../theme';
import { StyleSheet } from 'react-native';

interface Props {
    id: number;
    label: string;
    selected?: boolean;
    onSelected: (id: number, selected: boolean) => void;
}

export const LessonOption = ({ id, label, selected = false, onSelected }: Props) => {
    return (
        <Chip
            compact={true}
            mode="outlined"
            selectedColor={ selected ? commonColors.white : colors.textPrimary }
            style={ [styles.chip, selected && styles.selectedChip] }
            onPress={ () => onSelected(id, selected) }
            selected={ selected }
            showSelectedCheck={false}
            textStyle= { styles.text }
        >
            { label }
        </Chip>
    );
};

const styles = StyleSheet.create({
    chip: {
        backgroundColor: colors.secondaryBackground,
    },

    text: {
        fontSize: 15,
    },

    selectedChip: {
        backgroundColor: colors.primary,
        color: commonColors.white,
    },
});

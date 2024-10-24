import React from 'react';
import { Chip } from 'react-native-paper';

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
            mode={ selected ? 'flat' : 'outlined' }
            selectedColor="#6A3DE8"
            onPress={ () => onSelected(id, selected) }
            selected={ selected }
            showSelectedCheck={false}
            elevated={ selected ? true : false }
        >
            { label }
        </Chip>
    );
};

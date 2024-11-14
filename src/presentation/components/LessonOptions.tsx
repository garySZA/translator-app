import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { LessonOption } from './LessonOption';
import { Option } from '../../interfaces';
import { useStorage } from '../../hooks';

interface Props {
    optionsList: Option[];
}

export const LessonOptions = ({ optionsList }: Props) => {
    const [options, setOptions] = useState(optionsList);
    const { storeData } = useStorage();

    useEffect(() => {
        setOptions(optionsList);
    }, [optionsList]);


    const onSelected = (id: number, selected: boolean) => {

        const optionsUpdated = options;
        optionsUpdated.forEach(option => {
            if (option.id === id) {
                option.selected = !selected;

                storeData('optionSelected', option.id.toString());
            } else {
                option.selected = false;
            }
        });

        setOptions([...optionsUpdated!]);
    };

    return (
        <View style={ styles.container }>
            {
                options.map(( option, index ) => (
                    <LessonOption
                        id={ option.id }
                        label={ option.label }
                        selected={ option.selected }
                        onSelected={ onSelected }
                        key={ index }/>
                ))
            }
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 10,
        flexWrap: 'wrap',
        marginBottom: 20,
    },

    optionButton: {
        width: 100,
    },
});

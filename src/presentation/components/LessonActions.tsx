import React from 'react';
import { PrimaryButton } from './shared';

interface Props {
    onSubmit: () => void;
    onHelp: () => void;
    onGoToHome: () => void;
}

export const LessonActions = ({ onSubmit, onHelp, onGoToHome }: Props) => {

    return (
        <>
            <PrimaryButton
                label="Comprobar"
                onPress={ onSubmit }
                type="primary"
            />
            <PrimaryButton
                label="Ayuda"
                onPress={ onHelp }
                type="secondary"
            />
            <PrimaryButton
                label="Salir"
                onPress={ onGoToHome }
                type="tertiary"
            />
        </>
    );
};

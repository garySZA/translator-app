import { useEffect, useState } from 'react';
import { useNavigator } from './useNavigator';

export const useSetNavigatorOptions = () => {
    const [title, setTitle] = useState('');

    const { navigation } = useNavigator();

    useEffect(() => {
        navigation.setOptions({
            title,
        });

    }, [navigation, title]);

    const changeTitle = (newTitle: string) => {
        setTitle(newTitle);
    };

    return {
        changeTitle,
    };
};

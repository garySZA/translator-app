import { type NavigationProp, useNavigation } from '@react-navigation/native';

export const useNavigator = <T extends object>() => {
    const navigation = useNavigation<NavigationProp<T>>();

    return {
        //* Props
        //* Methods
        navigation,
    };
};

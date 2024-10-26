import { type NavigationProp, useNavigation } from '@react-navigation/native';
import { type RootStackParams } from '../presentation/router';

export const useNavigator = () => {
    const navigation = useNavigation<NavigationProp<RootStackParams>>();

    return {
        //* Props
        //* Methods
        navigation,
    };
};

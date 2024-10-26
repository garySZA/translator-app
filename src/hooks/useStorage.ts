import AsyncStorage from '@react-native-async-storage/async-storage';

export const useStorage = () => {

    const storeData = async ( key: string, value: string ) => {
        try {
            await AsyncStorage.setItem(key, value);
        } catch (error) {
            console.log(error);
        }
    };

    const getData = async ( key: string ) => {
        try {
            const value = await AsyncStorage.getItem( key );
            if( value !== null ) {
                return value;
            }
        } catch (error) {
            console.log(error);
        }
    };

    const clearField = async ( key: string ) => {
        await storeData(key, '');
    };

    return {
        //* Props
        //* Methods
        clearField,
        getData,
        storeData,
    };
};

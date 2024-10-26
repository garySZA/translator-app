import { Option } from '../interfaces/data';

export const resetOptions = ( options: Option[] ): Option[] => {
    return options.map((option: Option) => ({...option, selected: false }));
};

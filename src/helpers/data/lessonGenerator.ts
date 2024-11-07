import { Data, Lesson, Option } from '../../interfaces';

export const generateLesson = ( avatar: string, title: string, options: number[], idCorrectAnswer: number, data: Data[] ): Lesson => {
    const optionsList: Option[] = options.map( option => ({
        id: option, label: data[option].value, selected: false,
    }));

    return {
        avatar,
        title,
        options: optionsList,
        correctAnswer: {
            id: idCorrectAnswer,
            label: data[idCorrectAnswer].value,
            selected: true,
        },
        status: 'empty',
    };
};

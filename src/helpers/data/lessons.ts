import { Lesson, Numbers } from '../../interfaces';
import { numbers } from './numbers';

const lessonOneOptions: Numbers[] = [
    numbers[9],
    numbers[3],
    numbers[5],
    numbers[7],
    numbers[1],
    numbers[11],
];

export const lessonOneNumbers: Lesson = {
    avatar: '10',
    title: 'Diez',
    options: [
        {
            id: 9,
            label: lessonOneOptions[0].value,
            selected: false,
        },
        {
            id: 3,
            label: lessonOneOptions[1].value,
            selected: false,
        },
        {
            id: 5,
            label: lessonOneOptions[2].value,
            selected: false,
        },
        {
            id: 7,
            label: lessonOneOptions[3].value,
            selected: false,
        },
        {
            id: 1,
            label: lessonOneOptions[4].value,
            selected: false,
        },
        {
            id: 11,
            label: lessonOneOptions[5].value,
            selected: false,
        },
    ],
    correctAnswer: {
        id: 9,
        label: lessonOneOptions[0].value,
        selected: true,
    },
    status: 'empty',
};

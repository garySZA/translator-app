import { Lesson, Numbers } from '../../interfaces';
import { numbers, numbersSpanish } from './numbers';

const lessonOneOptions: Numbers[] = [
    numbers[9],
    numbers[3],
    numbers[5],
    numbers[7],
    numbers[1],
    numbers[2],
];

export const lessonOneNumbers: Lesson = {
    avatar: '10',
    title: 'Diez',
    options: [
        { id: 9, label: lessonOneOptions[0].value, selected: false },
        { id: 3, label: lessonOneOptions[1].value, selected: false },
        { id: 5, label: lessonOneOptions[2].value, selected: false },
        { id: 7, label: lessonOneOptions[3].value, selected: false },
        { id: 1, label: lessonOneOptions[4].value, selected: false },
        { id: 11, label: lessonOneOptions[5].value, selected: false },
    ],
    correctAnswer: {
        id: 9,
        label: lessonOneOptions[0].value,
        selected: true,
    },
    status: 'empty',
};

const lessonTwoOptions: Numbers[] = [
    numbers[0], // 0
    numbers[3], // 4
    numbers[6], // 6
    numbers[7], // 7
    numbers[8], // 8
    numbers[9], // 9
];

export const lessonTwoNumbers: Lesson = {
    avatar: '4',
    title: 'Cuatro',
    options: [
        { id: 0, label: lessonTwoOptions[0].value, selected: false },
        { id: 3, label: lessonTwoOptions[1].value, selected: false },
        { id: 6, label: lessonTwoOptions[2].value, selected: false },
        { id: 7, label: lessonTwoOptions[3].value, selected: false },
        { id: 8, label: lessonTwoOptions[4].value, selected: false },
        { id: 9, label: lessonTwoOptions[5].value, selected: false },
    ],
    correctAnswer: {
        id: 3,
        label: lessonTwoOptions[1].value,
        selected: true,
    },
    status: 'empty',
};

const lessonThreeOptions: Numbers[] = [
    numbers[0], // 0
    numbers[4], // 4
    numbers[6], // 6
    numbers[7], // 7
    numbers[8], // 8
    numbers[9], // 9
];

export const lessonThreeNumbers: Lesson = {
    avatar: '9',
    title: 'Nueve',
    options: [
        { id: 6, label: lessonThreeOptions[2].value, selected: false },
        { id: 0, label: lessonThreeOptions[0].value, selected: false },
        { id: 8, label: lessonThreeOptions[4].value, selected: false },
        { id: 4, label: lessonThreeOptions[1].value, selected: false },
        { id: 7, label: lessonThreeOptions[3].value, selected: false },
        { id: 9, label: lessonThreeOptions[5].value, selected: false },
    ],
    correctAnswer: {
        id: 8,
        label: lessonThreeOptions[5].value,
        selected: true,
    },
    status: 'empty',
};

const lessonFourOptions: Numbers[] = [
    numbers[0], // 0
    numbers[1], // 1
    numbers[4], // 4
    numbers[5], // 5
    numbers[7], // 7
    numbers[8], // 8
];

export const lessonFourNumbers: Lesson = {
    avatar: '5',
    title: 'Cinco',
    options: [
        { id: 0, label: lessonFourOptions[0].value, selected: false },
        { id: 1, label: lessonFourOptions[1].value, selected: false },
        { id: 4, label: lessonFourOptions[2].value, selected: false },
        { id: 5, label: lessonFourOptions[3].value, selected: false },
        { id: 7, label: lessonFourOptions[4].value, selected: false },
        { id: 8, label: lessonFourOptions[5].value, selected: false },
    ],
    correctAnswer: {
        id: 4,
        label: lessonFourOptions[2].value,
        selected: true,
    },
    status: 'empty',
};

const lessonFiveOptions: Numbers[] = [
    numbersSpanish[6], // 0
    numbersSpanish[1], // 1
    numbersSpanish[4], // 4
    numbersSpanish[3], // 5
    numbersSpanish[7], // 7
    numbersSpanish[8], // 8
];

export const lessonFiveNumbers: Lesson = {
    avatar: 'null',
    title: 'Qanchis',
    options: [
        { id: 6, label: lessonFiveOptions[0].value, selected: false },
        { id: 1, label: lessonFiveOptions[1].value, selected: false },
        { id: 4, label: lessonFiveOptions[2].value, selected: false },
        { id: 3, label: lessonFiveOptions[3].value, selected: false },
        { id: 7, label: lessonFiveOptions[4].value, selected: false },
        { id: 9, label: lessonFiveOptions[5].value, selected: false },
    ],
    correctAnswer: {
        id: 6,
        label: lessonFiveOptions[2].value,
        selected: true,
    },
    status: 'empty',
};

const lessonSixOptions: Numbers[] = [
    numbersSpanish[9], // 0
    numbersSpanish[1], // 1
    numbersSpanish[4], // 4
    numbersSpanish[6], // 5
    numbersSpanish[0], // 7
    numbersSpanish[8], // 8
];

export const lessonSixNumbers: Lesson = {
    avatar: 'null',
    title: 'Huk',
    options: [
        { id: 9, label: lessonSixOptions[0].value, selected: false },
        { id: 1, label: lessonSixOptions[1].value, selected: false },
        { id: 4, label: lessonSixOptions[2].value, selected: false },
        { id: 6, label: lessonSixOptions[3].value, selected: false },
        { id: 0, label: lessonSixOptions[4].value, selected: false },
        { id: 8, label: lessonSixOptions[5].value, selected: false },
    ],
    correctAnswer: {
        id: 0,
        label: lessonSixOptions[4].value,
        selected: true,
    },
    status: 'empty',
};

const lessonSevenOptions: Numbers[] = [
    numbersSpanish[0], // 0
    numbersSpanish[1], // 1
    numbersSpanish[2], // 4
    numbersSpanish[6], // 5
    numbersSpanish[7], // 7
    numbersSpanish[3], // 8
];

export const lessonSevenNumbers: Lesson = {
    avatar: 'null',
    title: 'Kimsa',
    options: [
        { id: 0, label: lessonSevenOptions[0].value, selected: false },
        { id: 1, label: lessonSevenOptions[1].value, selected: false },
        { id: 2, label: lessonSevenOptions[2].value, selected: false },
        { id: 6, label: lessonSevenOptions[3].value, selected: false },
        { id: 7, label: lessonSevenOptions[4].value, selected: false },
        { id: 3, label: lessonSevenOptions[5].value, selected: false },
    ],
    correctAnswer: {
        id: 2,
        label: lessonSevenOptions[2].value,
        selected: true,
    },
    status: 'empty',
};

const lessonEightOptions: Numbers[] = [
    numbers[3], // 0
    numbers[7], // 1
    numbers[2], // 4
    numbers[5], // 5
    numbers[9], // 7
    numbers[0], // 8
];

export const lessonEightNumbers: Lesson = {
    avatar: '8',
    title: 'Ocho',
    options: [
        { id: 3, label: lessonEightOptions[0].value, selected: false },
        { id: 7, label: lessonEightOptions[1].value, selected: false },
        { id: 2, label: lessonEightOptions[2].value, selected: false },
        { id: 5, label: lessonEightOptions[3].value, selected: false },
        { id: 9, label: lessonEightOptions[4].value, selected: false },
        { id: 0, label: lessonEightOptions[5].value, selected: false },
    ],
    correctAnswer: {
        id: 7,
        label: lessonEightOptions[2].value,
        selected: true,
    },
    status: 'empty',
};

const lessonNineOptions: Numbers[] = [
    numbersSpanish[9], // 0
    numbersSpanish[0], // 1
    numbersSpanish[7], // 4
    numbersSpanish[1], // 5
    numbersSpanish[8], // 7
    numbersSpanish[3], // 8
];

export const lessonNineNumbers: Lesson = {
    avatar: 'null',
    title: 'Iskay',
    options: [
        { id: 9, label: lessonNineOptions[0].value, selected: false },
        { id: 0, label: lessonNineOptions[1].value, selected: false },
        { id: 7, label: lessonNineOptions[2].value, selected: false },
        { id: 1, label: lessonNineOptions[3].value, selected: false },
        { id: 8, label: lessonNineOptions[4].value, selected: false },
        { id: 3, label: lessonNineOptions[5].value, selected: false },
    ],
    correctAnswer: {
        id: 1,
        label: lessonNineOptions[3].value,
        selected: true,
    },
    status: 'empty',
};

const lessonTenOptions: Numbers[] = [
    numbers[4], // 0
    numbers[0], // 1
    numbers[7], // 4
    numbers[1], // 5
    numbers[0], // 7
    numbers[5], // 8
];

export const lessonTenNumbers: Lesson = {
    avatar: '6',
    title: 'Seis',
    options: [
        { id: 4, label: lessonTenOptions[0].value, selected: false },
        { id: 0, label: lessonTenOptions[1].value, selected: false },
        { id: 7, label: lessonTenOptions[2].value, selected: false },
        { id: 1, label: lessonTenOptions[3].value, selected: false },
        { id: 0, label: lessonTenOptions[4].value, selected: false },
        { id: 5, label: lessonTenOptions[5].value, selected: false },
    ],
    correctAnswer: {
        id: 5,
        label: lessonTenOptions[5].value,
        selected: true,
    },
    status: 'empty',
};


export const lessonsList: Lesson[] = [
    lessonOneNumbers, // number 10
    lessonTwoNumbers, // number 4
    lessonThreeNumbers, // number 9
    lessonFourNumbers, // number 5
    lessonFiveNumbers, // number 7
    lessonSixNumbers, // number 1
    lessonSevenNumbers, // number 3
    lessonEightNumbers, // number 8
    lessonNineNumbers, // number 2
    lessonTenNumbers, // number 6
];

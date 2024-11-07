import { Lesson, Data } from '../../interfaces';
import { generateLesson } from './lessonGenerator';
import { numbers, numbersSpanish } from './numbers';

const lessonOneOptions: Data[] = [
    numbers[9],
    numbers[3],
    numbers[5],
    numbers[7],
    numbers[1],
    numbers[2],
];

const lessonOneNumbers: Lesson = {
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

const lessonTwoOptions: Data[] = [
    numbers[0], // 0
    numbers[3], // 4
    numbers[6], // 6
    numbers[7], // 7
    numbers[8], // 8
    numbers[9], // 9
];

const lessonTwoNumbers: Lesson = {
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

const lessonThreeOptions: Data[] = [
    numbers[0], // 0
    numbers[4], // 4
    numbers[6], // 6
    numbers[7], // 7
    numbers[8], // 8
    numbers[9], // 9
];

const lessonThreeNumbers: Lesson = {
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
        label: lessonThreeOptions[4].value,
        selected: true,
    },
    status: 'empty',
};

const lessonFourOptions: Data[] = [
    numbers[0], // 0
    numbers[1], // 1
    numbers[4], // 4
    numbers[5], // 5
    numbers[7], // 7
    numbers[8], // 8
];

const lessonFourNumbers: Lesson = {
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

const lessonFiveOptions: Data[] = [
    numbersSpanish[6], // 0
    numbersSpanish[1], // 1
    numbersSpanish[4], // 4
    numbersSpanish[3], // 5
    numbersSpanish[7], // 7
    numbersSpanish[8], // 8
];

const lessonFiveNumbers: Lesson = {
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
        label: lessonFiveOptions[0].value,
        selected: true,
    },
    status: 'empty',
};

const lessonSixOptions: Data[] = [
    numbersSpanish[9], // 0
    numbersSpanish[1], // 1
    numbersSpanish[4], // 4
    numbersSpanish[6], // 5
    numbersSpanish[0], // 7
    numbersSpanish[8], // 8
];

const lessonSixNumbers: Lesson = {
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

const lessonSevenOptions: Data[] = [
    numbersSpanish[0], // 0
    numbersSpanish[1], // 1
    numbersSpanish[2], // 4
    numbersSpanish[6], // 5
    numbersSpanish[7], // 7
    numbersSpanish[3], // 8
];

const lessonSevenNumbers: Lesson = {
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

const lessonEightOptions: Data[] = [
    numbers[3], // 0
    numbers[7], // 1
    numbers[2], // 4
    numbers[5], // 5
    numbers[9], // 7
    numbers[0], // 8
];

const lessonEightNumbers: Lesson = {
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
        label: lessonEightOptions[1].value,
        selected: true,
    },
    status: 'empty',
};

const lessonNineOptions: Data[] = [
    numbersSpanish[9], // 0
    numbersSpanish[0], // 1
    numbersSpanish[7], // 4
    numbersSpanish[1], // 5
    numbersSpanish[8], // 7
    numbersSpanish[3], // 8
];

const lessonNineNumbers: Lesson = {
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

const lessonTenOptions: Data[] = [
    numbers[4], // 0
    numbers[0], // 1
    numbers[7], // 4
    numbers[1], // 5
    numbers[0], // 7
    numbers[5], // 8
];

const lessonTenNumbers: Lesson = {
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


export const numbersLessonList: Lesson[] = [
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

const lessonOneNumbersMidLevel: Lesson = {
    avatar: '100',
    title: 'Cien',
    options: [
        { id: 99, label: numbers[99].value, selected: false },
        { id: 79, label: numbers[79].value, selected: false },
        { id: 59, label: numbers[59].value, selected: false },
        { id: 39, label: numbers[39].value, selected: false },
    ],
    correctAnswer: {
        id: 99,
        label: numbers[99].value,
        selected: true,
    },
    status: 'empty',
};

const lessonTwoNumbersMidLevel: Lesson = {
    avatar: '30',
    title: 'Treinta',
    options: [
        { id: 89, label: numbers[89].value, selected: false },
        { id: 79, label: numbers[79].value, selected: false },
        { id: 29, label: numbers[29].value, selected: false },
        { id: 59, label: numbers[59].value, selected: false },
    ],
    correctAnswer: {
        id: 29,
        label: numbers[29].value,
        selected: true,
    },
    status: 'empty',
};

const lessonThreeNumbersMidLevel: Lesson = {
    avatar: '70',
    title: 'Setenta',
    options: [
        { id: 69, label: numbers[69].value, selected: false },
        { id: 59, label: numbers[59].value, selected: false },
        { id: 49, label: numbers[49].value, selected: false },
        { id: 19, label: numbers[19].value, selected: false },
    ],
    correctAnswer: {
        id: 69,
        label: numbers[69].value,
        selected: true,
    },
    status: 'empty',
};

const lessonFourNumbersMidLevel: Lesson = {
    avatar: '50',
    title: 'Cincuenta',
    options: [
        { id: 49, label: numbers[49].value, selected: false },
        { id: 39, label: numbers[39].value, selected: false },
        { id: 29, label: numbers[29].value, selected: false },
        { id: 9, label: numbers[9].value, selected: false },
    ],
    correctAnswer: {
        id: 49,
        label: numbers[49].value,
        selected: true,
    },
    status: 'empty',
};

const lessonFiveNumbersMidLevel: Lesson = {
    avatar: '10',
    title: 'Diez',
    options: [
        { id: 9, label: numbers[9].value, selected: false },
        { id: 69, label: numbers[69].value, selected: false },
        { id: 59, label: numbers[59].value, selected: false },
        { id: 89, label: numbers[89].value, selected: false },
    ],
    correctAnswer: {
        id: 9,
        label: numbers[9].value,
        selected: true,
    },
    status: 'empty',
};

const lessonSixNumbersMidLevel: Lesson = {
    avatar: '60',
    title: 'Sesenta',
    options: [
        { id: 29, label: numbers[29].value, selected: false },
        { id: 69, label: numbers[69].value, selected: false },
        { id: 59, label: numbers[59].value, selected: false },
        { id: 89, label: numbers[89].value, selected: false },
    ],
    correctAnswer: {
        id: 59,
        label: numbers[59].value,
        selected: true,
    },
    status: 'empty',
};

const lessonSevenNumbersMidLevel: Lesson = {
    avatar: '20',
    title: 'Veinte',
    options: [
        { id: 49, label: numbers[49].value, selected: false },
        { id: 99, label: numbers[99].value, selected: false },
        { id: 9, label: numbers[9].value, selected: false },
        { id: 19, label: numbers[19].value, selected: false },
    ],
    correctAnswer: {
        id: 19,
        label: numbers[19].value,
        selected: true,
    },
    status: 'empty',
};

const lessonEightNumbersMidLevel: Lesson = {
    avatar: '80',
    title: 'Ochenta',
    options: [
        { id: 39, label: numbers[39].value, selected: false },
        { id: 79, label: numbers[79].value, selected: false },
        { id: 29, label: numbers[29].value, selected: false },
        { id: 59, label: numbers[59].value, selected: false },
    ],
    correctAnswer: {
        id: 79,
        label: numbers[79].value,
        selected: true,
    },
    status: 'empty',
};

const lessonNineNumbersMidLevel: Lesson = {
    avatar: '90',
    title: 'Noventa',
    options: [
        { id: 49, label: numbers[49].value, selected: false },
        { id: 89, label: numbers[89].value, selected: false },
        { id: 39, label: numbers[39].value, selected: false },
        { id: 69, label: numbers[69].value, selected: false },
    ],
    correctAnswer: {
        id: 89,
        label: numbers[89].value,
        selected: true,
    },
    status: 'empty',
};

const lessonTenNumbersMidLevel: Lesson = {
    avatar: '40',
    title: 'Cuarenta',
    options: [
        { id: 99, label: numbers[99].value, selected: false },
        { id: 39, label: numbers[39].value, selected: false },
        { id: 79, label: numbers[79].value, selected: false },
        { id: 69, label: numbers[69].value, selected: false },
    ],
    correctAnswer: {
        id: 39,
        label: numbers[39].value,
        selected: true,
    },
    status: 'empty',
};

export const numbersLessonMidLevel: Lesson[] = [
    lessonOneNumbersMidLevel, // number 100
    lessonTwoNumbersMidLevel, // number 30
    lessonThreeNumbersMidLevel, // number 70
    lessonFourNumbersMidLevel, // number 50
    lessonFiveNumbersMidLevel, // number 10
    lessonSixNumbersMidLevel, // number 60
    lessonSevenNumbersMidLevel, // number 20,
    lessonEightNumbersMidLevel, // number 80,
    lessonNineNumbersMidLevel, // number 90,
    lessonTenNumbersMidLevel, // number 40,
];

const lessonOneHighLevel: Lesson = generateLesson('25', 'Veinticinco', [3,83,40,50,22,24], 24, numbers );

const lessonTwoHighLevel: Lesson = generateLesson('35', 'Treinta y cinco', [18,88,45,34,27,29], 34, numbers );

const lessonThreeHighLevel: Lesson = generateLesson('45', 'Cuarenta y cinco', [21,82,44,35,28,30], 44, numbers );

const lessonFourHighLevel: Lesson = generateLesson('72', 'Setenta y dos', [71,87,46,36,31,33], 71, numbers );

const lessonFiveHighLevel: Lesson = generateLesson('19', 'Diecinueve', [18,4,49,20,46], 18, numbers);

export const numbersLessonHighLevel: Lesson[] = [
    lessonOneHighLevel, // 25
    lessonTwoHighLevel, // 35
    lessonThreeHighLevel, // 45
    lessonFourHighLevel, // 72
    lessonFiveHighLevel, // 19

];

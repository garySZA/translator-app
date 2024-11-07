import { Lesson } from '../../interfaces';
import { colors } from './colors';

const lessonOneColors: Lesson = {
    avatar: 'null',
    title: 'Blanco',
    options: [
        { id: 8, label: colors[8].value, selected: false },
        { id: 2, label: colors[2].value, selected: false },
        { id: 3, label: colors[3].value, selected: false },
        { id: 0, label: colors[0].value, selected: false },
    ],
    correctAnswer: {
        id: 0,
        label: colors[0].value,
        selected: true,
    },
    status: 'empty',
};

const lessonTwoColors: Lesson = {
    avatar: 'null',
    title: 'Negro',
    options: [
        { id: 5, label: colors[5].value, selected: false },
        { id: 1, label: colors[1].value, selected: false },
        { id: 3, label: colors[3].value, selected: false },
        { id: 7, label: colors[7].value, selected: false },
    ],
    correctAnswer: {
        id: 1,
        label: colors[1].value,
        selected: true,
    },
    status: 'empty',
};

const lessonThreeColors: Lesson = {
    avatar: 'null',
    title: 'Rojo',
    options: [
        { id: 5, label: colors[5].value, selected: false },
        { id: 9, label: colors[9].value, selected: false },
        { id: 3, label: colors[3].value, selected: false },
        { id: 2, label: colors[2].value, selected: false },
    ],
    correctAnswer: {
        id: 2,
        label: colors[2].value,
        selected: true,
    },
    status: 'empty',
};

const lessonFourColors: Lesson = {
    avatar: 'null',
    title: 'Amarillo',
    options: [
        { id: 0, label: colors[0].value, selected: false },
        { id: 5, label: colors[5].value, selected: false },
        { id: 3, label: colors[3].value, selected: false },
        { id: 9, label: colors[9].value, selected: false },
    ],
    correctAnswer: {
        id: 3,
        label: colors[3].value,
        selected: true,
    },
    status: 'empty',
};

const lessonFiveColors: Lesson = {
    avatar: 'null',
    title: 'Azul',
    options: [
        { id: 4, label: colors[4].value, selected: false },
        { id: 7, label: colors[7].value, selected: false },
        { id: 8, label: colors[8].value, selected: false },
        { id: 5, label: colors[5].value, selected: false },
    ],
    correctAnswer: {
        id: 4,
        label: colors[4].value,
        selected: true,
    },
    status: 'empty',
};
const lessonSixColors: Lesson = {
    avatar: 'null',
    title: 'Marrón',
    options: [
        { id: 9, label: colors[9].value, selected: false },
        { id: 5, label: colors[5].value, selected: false },
        { id: 0, label: colors[0].value, selected: false },
        { id: 3, label: colors[3].value, selected: false },
    ],
    correctAnswer: {
        id: 5,
        label: colors[5].value,
        selected: true,
    },
    status: 'empty',
};

const lessonSevenColors: Lesson = {
    avatar: 'null',
    title: 'Verde',
    options: [
        { id: 3, label: colors[3].value, selected: false },
        { id: 8, label: colors[8].value, selected: false },
        { id: 5, label: colors[5].value, selected: false },
        { id: 6, label: colors[6].value, selected: false },
    ],
    correctAnswer: {
        id: 6,
        label: colors[6].value,
        selected: true,
    },
    status: 'empty',
};

const lessonEightColors: Lesson = {
    avatar: 'null',
    title: 'Gris',
    options: [
        { id: 9, label: colors[9].value, selected: false },
        { id: 3, label: colors[3].value, selected: false },
        { id: 0, label: colors[0].value, selected: false },
        { id: 7, label: colors[7].value, selected: false },
    ],
    correctAnswer: {
        id: 7,
        label: colors[7].value,
        selected: true,
    },
    status: 'empty',
};

const lessonNineColors: Lesson = {
    avatar: 'null',
    title: 'Rosado',
    options: [
        { id: 0, label: colors[0].value, selected: false },
        { id: 3, label: colors[3].value, selected: false },
        { id: 8, label: colors[8].value, selected: false },
        { id: 7, label: colors[7].value, selected: false },
    ],
    correctAnswer: {
        id: 8,
        label: colors[8].value,
        selected: true,
    },
    status: 'empty',
};

const lessonTenColors: Lesson = {
    avatar: 'null',
    title: 'Morado',
    options: [
        { id: 9, label: colors[9].value, selected: false },
        { id: 3, label: colors[3].value, selected: false },
        { id: 8, label: colors[8].value, selected: false },
        { id: 1, label: colors[1].value, selected: false },
    ],
    correctAnswer: {
        id: 9,
        label: colors[9].value,
        selected: true,
    },
    status: 'empty',
};

export const colorsLessonList: Lesson[] = [
    lessonOneColors, // Blanco
    lessonTwoColors, // Negro
    lessonThreeColors, // Rojo
    lessonFourColors, // Amarillo
    lessonFiveColors, // Azul
    lessonSixColors, // Marrón
    lessonSevenColors, // Verde
    lessonEightColors, // Gris
    lessonNineColors, // Rosado
    lessonTenColors, // Morado
];

import { Lesson } from '../../interfaces';
import { foods } from './food';
import { generateLesson } from './lessonGenerator';

const lessonOne = generateLesson('null', 'Papa', [0,6,5,4,10,13], 0, foods);

const lessonTwo = generateLesson('null', 'Maíz', [10,3,1,7,8,5], 1, foods);

const lessonThree = generateLesson('null', 'Chicha', [1,9,10,3,5,4], 4, foods);

const lessonFour = generateLesson('null', 'Chuño', [5,10,2,6,13,7], 5, foods);

const lessonFive = generateLesson('null', 'Quinua', [6,10,8,3,5,0], 6, foods);

const lessonSix = generateLesson('null', 'Carne', [9,7,5,6,13,1], 7, foods);

const lessonSeven = generateLesson('null', 'Agua', [14,1,8,6,11,5], 8, foods);

const lessonEight = generateLesson('null', 'Dulce', [11,12,9,6,13,4], 9, foods);

const lessonNine = generateLesson('null', 'Calabaza', [2,13,4,6,10,12], 10, foods);

const lessonTen = generateLesson('null', 'Carne Deshidratada', [14,11,10,6,5,3], 11, foods);

const lessonEleven = generateLesson('null', 'Ají', [0,14,1,6,3,12], 12, foods);

const lessonTwelve = generateLesson('null', 'Granos Germinados', [5,2,1,6,7,13], 13, foods);

const lessonThirteen = generateLesson('null', 'Camote', [9,1,7,14,8,11], 14, foods);

const lessonFourteen = generateLesson('null', 'Pescado Seco', [7,10,13,6,3,2], 13, foods);

const lessonFifteen = generateLesson('null', 'Pan', [14,13,11,6,5,14], 14, foods);



export const foodsLesson: Lesson[] = [
    lessonOne, // Papa
    lessonTwo, // Maíz
    lessonThree, // Cuy
    lessonFour, // Trucha
    lessonFive, // Chicha
    lessonSix, // Chuño
    lessonSeven, // Quinua
    lessonEight, // Carne
    lessonNine, // Agua
    lessonTen, // Dulce
    lessonEleven, // Calabaza
    lessonTwelve, // Carne Deshidratada
    lessonThirteen, // Chile
    lessonFourteen, // Granos Germinados
    lessonFifteen, // Camote
];

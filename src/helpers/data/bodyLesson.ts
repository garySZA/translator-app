import { Lesson } from '../../interfaces';
import { body, bodyEsp } from './body';
import { generateLesson } from './lessonGenerator';

const lessonOne = generateLesson('C', 'Cabeza', [5,9,0,22], 0, body);

const lessonTwo = generateLesson('U', 'Uya', [15,20,23,1], 1, bodyEsp);

const lessonThree = generateLesson('C', 'Cabello', [2,11,13,16], 2, body);

const lessonFour = generateLesson('K', 'Kunka', [1,3,14,16], 3, bodyEsp);

const lessonFive = generateLesson('F', 'Frente', [0,10,4,19], 4, body);

const lessonSix = generateLesson('Ñ', 'Ñawi', [1,13,5,16], 5, bodyEsp);

const lessonSeven = generateLesson('N', 'Nariz', [6,3,14,16], 6, body);

const lessonEight = generateLesson('S', 'Simi', [7,1,9,11], 7, bodyEsp);

const lessonNine = generateLesson('O', 'Oreja', [8,10,19,15], 8, body);

const lessonTen = generateLesson('M', 'Maki', [9,10,18,15], 9, bodyEsp);

const lessonEleven = generateLesson('A', 'Abdomen', [10,11,22,20], 10, body);

const lessonTwelve = generateLesson('C', 'Chaki', [11,12,18,15], 11, bodyEsp);

const lessonThirteen = generateLesson('M', 'Mentón', [1,12,17,25], 12, body);

const lessonFourteen = generateLesson('S', 'Sunkha', [13,4,11,9], 13, bodyEsp);

const lessonFifteen = generateLesson('B', 'Bigote', [14,16,1,8], 14, body);

const lessonSixteen = generateLesson('Y', 'Yawar', [15,0,17,20], 15, bodyEsp);

const lessonSeventeen = generateLesson('T', 'Tullu', [16,18,23,12], 16, bodyEsp);

const lessonEighteen = generateLesson('Q', 'Qara', [17,0,16,20], 17, bodyEsp);

const lessonNineteen = generateLesson('Ñ', 'Ñosqon', [8,18,24,17], 18, bodyEsp);

const lessonTwenty = generateLesson('M', "Much'u", [15,0,19,20], 19, bodyEsp);

const lessonTwentyOne = generateLesson('D', 'Diente', [11,10,5,20], 20, body);

const lessonTwentyTwo = generateLesson('L', 'Lengua', [15,0,20,19], 21, body);

const lessonTwentyThree = generateLesson('S', 'Saliva', [4,6,22,2], 22, body);

const lessonTwentyFour = generateLesson('O', 'Ombligo', [23,16,1,8], 23, body);

const lessonTwentyFive = generateLesson('E', 'Espalda', [4,24,7,18], 24, body);

const lessonTwentySix = generateLesson('U', 'Uña', [14,0,25,17], 25, body);


export const bodyLessonPartOne: Lesson[] = [
    lessonOne, // Cabeza
    lessonTwo, // Cara
    lessonThree, // cabello
    lessonFour, // Cuello
    lessonFive, // Frente
    lessonSix, // Ojo
    lessonSeven, // Nariz
    lessonEight, // Boca
    lessonNine, // Oreja
    lessonTen, // Mano
    lessonEleven, // Abdomen
    lessonTwelve, // Pie
    lessonThirteen, // Mentón
    lessonFourteen, // Barba
    lessonFifteen, // Bigote

];

export const bodyLessonPartTwo: Lesson[] = [
    lessonSixteen, // Sangre
    lessonSeventeen, // Hueso
    lessonEighteen, // Piel
    lessonNineteen, // Cerebro
    lessonTwenty, // Nuca
    lessonTwentyOne, // Diente
    lessonTwentyTwo, // Lengua
    lessonTwentyThree, // Saliva
    lessonTwentyFour, // Ombligo
    lessonTwentyFive, // Espalda
    lessonTwentySix, // Uña
];

import { Lesson } from '../../interfaces';
import { householdItems } from './houseHoldItems';
import { generateLesson } from './lessonGenerator';

const lessonOne = generateLesson('null', 'Silla', [15,6,5,8,10,11,0], 0, householdItems);

const lessonTwo = generateLesson('null', 'Olla', [2,9,4,0,1,13], 1, householdItems);

const lessonThree = generateLesson('null', 'Cuchara', [3,15,14,10,2], 2, householdItems);

const lessonFour = generateLesson('null', 'Cocina (Fogón)', [4,5,3,12,13], 3, householdItems);

const lessonFive = generateLesson('null', 'Mesa', [15,13,14,12,4,9], 4, householdItems);

const lessonSix = generateLesson('null', 'Almohada', [6,1,10,11,5,0], 5, householdItems);

const lessonSeven = generateLesson('null', 'Botella', [7,8,1,15,6,11], 6, householdItems);

const lessonEight = generateLesson('null', 'Vaso', [8,10,7,12,18,16], 7, householdItems);

const lessonNine = generateLesson('null', 'Balde', [9,4,15,12,7,8], 8, householdItems);

const lessonTen = generateLesson('null', 'Canasta', [10,9,13,12,8,15], 9, householdItems);

const lessonEleven = generateLesson('null', 'Escoba', [11,15,14,10,4,13], 10, householdItems);

const lessonTwelve = generateLesson('null', 'Florero', [0,3,11,14,9,17], 11, householdItems);

const lessonThirteen = generateLesson('null', 'Techo', [13,12,7,11,4,16], 12, householdItems);

const lessonFourteen = generateLesson('null', 'Cama', [14,12,15,13,9,4], 13, householdItems);

const lessonFifteen = generateLesson('null', 'Estante', [15,18,12,13,17,14], 14, householdItems);

export const householdItemsLesson: Lesson[] = [
    lessonOne, // Silla
    lessonTwo, // Olla
    lessonThree, // Cuchara
    lessonFour, // Cocina (Fogón)
    lessonFive, // Mesa
    lessonSix, // Almohada
    lessonSeven, // Botella
    lessonEight, // Vaso
    lessonNine, // Balde
    lessonTen, // Canasta
    lessonEleven, // Escoba
    lessonTwelve, // Florero
    lessonThirteen, // Techo
    lessonFourteen, // Cama
    lessonFifteen, // Estante
];

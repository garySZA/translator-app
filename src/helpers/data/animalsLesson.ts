import { Lesson } from '../../interfaces';
import { domesticAnimals } from './animals';
import { generateLesson } from './lessonGenerator';

const lessonOne = generateLesson('null', 'Gato', [14,6,1,4], 1, domesticAnimals);

const lessonTwo = generateLesson('null', 'Perro', [0,13,7,9], 0, domesticAnimals);

const lessonThree = generateLesson('null', 'Oveja', [7,2,11,3], 2, domesticAnimals);

const lessonFour = generateLesson('null', 'Cerdo', [5,12,4,3], 3, domesticAnimals);

const lessonFive = generateLesson('null', 'Zorro', [4,5,14,2], 4, domesticAnimals);

const lessonSix = generateLesson('null', 'Vaca', [5,9,1,0], 5, domesticAnimals);

const lessonSeven = generateLesson('null', 'Cabra', [6,13,14,0], 6, domesticAnimals);

const lessonEight = generateLesson('null', 'Sapo', [7,0,14,1], 7, domesticAnimals);

const lessonNine = generateLesson('null', 'Conejo', [8,13,1,0], 8, domesticAnimals);

const lessonTen = generateLesson('null', 'Zorrillo', [6,1,0,9,13,10,5], 9, domesticAnimals);

const lessonEleven = generateLesson('null', 'Ganso', [10,9,7,14,8], 10, domesticAnimals);

const lessonTwelve = generateLesson('null', 'Pollito', [0, 11, 4,9,3,5], 11, domesticAnimals);

const lessonThirteen = generateLesson('null', 'Pavo', [12,14,7,1,0,3,6], 12, domesticAnimals);

const lessonFourteen = generateLesson('null', 'Burro', [13,14,0,1,7,9,6], 13, domesticAnimals);

const lessonFifteen = generateLesson('null', 'Caballo', [14,0,9,13,5,6,11], 14, domesticAnimals);

export const animalsLesson: Lesson[] = [
    lessonOne, // Gato
    lessonTwo, // Perro
    lessonThree, // Oveja
    lessonFour, // Cerdo
    lessonFive, // Zorro
    lessonSix, // Vaca
    lessonSeven, // Cabra
    lessonEight, // Sapo
    lessonNine, // Conejo
    lessonTen, // Zorrillo
    lessonEleven, // Ganso
    lessonTwelve, // Pollito
    lessonThirteen, // Pavo
    lessonFourteen, // Burro
    lessonFifteen, // Caballo
];

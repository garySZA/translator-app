import { Lesson } from '../../interfaces';
import { generateLesson } from './lessonGenerator';
import { pronouns, pronounsEsp } from './pronouns';

const lessonOne = generateLesson('Ñ', 'Ñuqa', [0,4,6], 0, pronounsEsp);

const lessonTwo = generateLesson('T', 'Qam', [1,5,2], 1, pronounsEsp);

const lessonThree = generateLesson('P', 'Él / Ella', [0,3,2], 2, pronouns);

const lessonFour = generateLesson('N', 'Nosotros inclusivo', [3,4,6], 3, pronouns);

const lessonFive = generateLesson('N', 'Nosotros exclusivo', [3,4,6], 4, pronouns);

const lessonSix = generateLesson('Q', 'Qamkuna', [5,6,1], 5, pronounsEsp);

const lessonSeven = generateLesson('P', 'Paukuna', [6,2,0], 6, pronounsEsp);

export const pronounsLesson: Lesson[] = [
    lessonOne, // Yo
    lessonTwo, // Tú
    lessonThree, // Él / Ella
    lessonFour, // Nosotros inclusivo
    lessonFive, // Nosotros exclusivo
    lessonSix, // Ustedes
    lessonSeven, // Ellos
];

import { RoadMap } from '../../interfaces';
import { colorsLessonList } from './colorsLesson';
import { numbersLessonHighLevel, numbersLessonList, numbersLessonMidLevel } from './numbersLesson';
import { animalsLesson } from './animalsLesson';
import { foodsLesson } from './foodsLessons';
import { householdItemsLesson } from './houseHoldItemsLesson';

export const roadMap = [
    {time: '09:00', title: 'Event 1', description: 'Event 1 Description'},
    {time: '10:45', title: 'Event 2', description: 'Event 2 Description'},
    {time: '12:00', title: 'Event 3', description: 'Event 3 Description'},
    {time: '14:00', title: 'Event 4', description: 'Event 4 Description'},
    {time: '16:30', title: 'Event 5', description: 'Event 5 Description'},
];

export const roadmapList: RoadMap[] = [
    {
        title: 'Reto 1 - Aprendiendo números',
        description: 'Dentro de esta sección podrás aprender los números entre 1 a 10',
        lessonList: numbersLessonList,
    },
    {
        title: 'Reto 2 - Más sobre números',
        description: 'Esta sección esta dedicada para que aprendas los números entre 10 a 100 pero de 10 en 10',
        lessonList: numbersLessonMidLevel,
    },
    {
        title: 'Reto 3 - Prueba sobre los números',
        description: 'Este reto esta compuesto por preguntas aleatorias de los retos anteriores',
        lessonList: numbersLessonHighLevel,
    },
    {
        title: 'Reto 4 - Conociendo algunos animales',
        description: 'Podrás conocer algunos de los animales domésticos',
        lessonList: animalsLesson,
    },
    {
        title: 'Reto 5 - Aprendiendo sobre los colores',
        description: 'Aquí podrás aprender los diferentes colores',
        lessonList: colorsLessonList,
    },
    {
        title: 'Reto 6 - Aprendiendo objetos del hogar',
        description: 'Podrás aprender de los objetos más comunes con los que cuentas en casa',
        lessonList: householdItemsLesson,
    },
    {
        title: 'Reto 7 - Aprendiendo sobre alimentos',
        description: 'Podrás aprender acerca de algunos de los alimentos mas importantes para los seres humanos',
        lessonList: foodsLesson,
    },
];

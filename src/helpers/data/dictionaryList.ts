import { domesticAnimals, domesticAnimalsEsp } from './animals';
import { body, bodyEsp } from './body';
import { colors, colorsEsp } from './colors';
import { foods, foodsEsp } from './food';
import { householdItems, householdItemsEsp } from './houseHoldItems';
import { numbers, numbersSpanish } from './numbers';
import { pronouns, pronounsEsp } from './pronouns';

export const dictionaryList = [
    {
        id: 1,
        title: 'Animales',
        list: domesticAnimals,
        listEsp: domesticAnimalsEsp,
    },
    {
        id: 2,
        title: 'Cuerpo Humano',
        list: body,
        listEsp: bodyEsp,
    },
    {
        id: 3,
        title: 'Números',
        list: numbers,
        listEsp: numbersSpanish,
    },
    {
        id: 4,
        title: 'Colores',
        list: colors,
        listEsp: colorsEsp,
    },
    {
        id: 5,
        title: 'Objetos del hogar',
        list: householdItems,
        listEsp: householdItemsEsp,
    },
    {
        id: 6,
        title: 'Alimentos',
        list: foods,
        listEsp: foodsEsp,
    },
    {
        id: 7,
        title: 'Pronombres',
        list: pronouns,
        listEsp: pronounsEsp,
    },
];

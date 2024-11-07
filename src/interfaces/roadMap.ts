import { Lesson } from './data';

export interface RoadMap {
    title: string;
    description: string;
    lessonList: Lesson[];
}

type statusLesson = 'completed' | 'in-progress' | 'empty';

export interface Data {
    key: string,
    value: string
}

export interface Option {
    id: number;
    label: string;
    selected: boolean;
}

export interface Data {}

export interface Lesson {
    avatar: string;
    title: string;
    options: Option[];
    correctAnswer: Option;
    status: statusLesson;
}


import { Exercise } from './Exercise';

interface WorkoutInterface {
    name: String;
    // date: Date;
    exercise: Exercise[];
}

export class Workout implements WorkoutInterface {
    //constructor(name = "", date = null, exercise = new Exercise());
    // constructor() {
    //     this.name = "";
    //     this.date = null;
    //     this.exercise = new Exercise();
    // }
    constructor(data: WorkoutInterface) {
        this.name = data.name;
        // this.date = data.date;
        this.exercise = data.exercise
    }
    exercise: Exercise[];
    name: String;
    // date: Date;
}
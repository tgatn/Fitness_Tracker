import { WorkoutSet } from "./WorkoutSet";


interface ExerciseInterface {
    name: String;
    workoutSet: WorkoutSet[];
}

export class Exercise implements ExerciseInterface {
    static workoutSet: any;
    constructor(data: ExerciseInterface) {
        this.name = data.name;
        this.workoutSet = data.workoutSet
    }
    workoutSet: WorkoutSet[];
    name: String;
}
interface SetInterface {
    restTime: number; // in seconds
    warmUp: boolean;
    repetition: number;
    weight: number; // in pounds
}

export class WorkoutSet implements SetInterface {

    //onstructor(restTime: number);
    
    constructor(data: SetInterface) {
        this.restTime = data.restTime;
        this.warmUp = data.warmUp;
        this.repetition = data.repetition;
        this.weight = data.weight;
    }
    
    restTime: number;
    warmUp: boolean;
    repetition: number;
    weight: number;
    
}
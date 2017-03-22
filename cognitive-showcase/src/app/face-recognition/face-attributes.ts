

import { Emotion } from "app/face-recognition/emotion";

export class FaceAttributes {

    constructor(
        public age:number,
        public gender:string,
        public smile:number,
        public glasses:string,
        public emotion:Emotion
    ){
        // nothing here yet
    }

}

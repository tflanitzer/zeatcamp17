

import { FaceAttributes } from "app/face-recognition/face-attributes";
import { FaceRectangle } from "app/face-recognition/face-rectangle";

export class Face {
    constructor(
        public faceId:string,
        public faceAttributes:FaceAttributes,
        public faceRectangle:FaceRectangle
    ) {
        // nothing here yet 
    }
}

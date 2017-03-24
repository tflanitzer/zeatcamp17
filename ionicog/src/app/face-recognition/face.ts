

import { FaceAttributes } from "./face-attributes";
import { FaceRectangle } from "./face-rectangle";

export class Face {
    constructor(
        public faceId:string,
        public faceAttributes:FaceAttributes,
        public faceRectangle:FaceRectangle
    ) {
        // nothing here yet 
    }
}

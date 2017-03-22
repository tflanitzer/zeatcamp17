class DetectedLanguage {
    constructor(public name: string, public score: number) {}
}

class TextAnalysis {
    constructor() {}

    public detectedLanguages: DetectedLanguage[];
    public keyPhrases: string[];
    public sentiment: number;
}

export { DetectedLanguage, TextAnalysis }
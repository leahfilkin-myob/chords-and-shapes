import getChordShape from "./getChordShape";
import type {ChordShape} from "../types/ChordShape";

export type ChordShapesResult = {
    shapes: ChordShape[];
    unrecognizedChords: string[];
};

const normalizeChordName = (chord: string): string => {
    if (chord.length === 0) return chord;
    
    const firstChar = chord[0]?.toUpperCase() ?? '';
    const rest = chord.slice(1).toLowerCase();
    
    return firstChar + rest;
};

export const getChordShapes = (chordString: string): ChordShapesResult => {
    const chordsList = chordString.trim().split(/\s+/).filter(chord => chord.length > 0);
    const shapes: ChordShape[] = [];
    const unrecognizedChords: string[] = [];
    
    const normalizedChords = chordsList.map(chord => normalizeChordName(chord));
    const uniqueChords = Array.from(new Set(normalizedChords));
    
    uniqueChords.forEach(normalizedChord => {
        const chordShapes = getChordShape(normalizedChord);
        if (chordShapes.length === 0) {
            if (!unrecognizedChords.includes(normalizedChord)) {
                unrecognizedChords.push(normalizedChord);
            }
        } else {
            shapes.push(...chordShapes);
        }
    });
    
    return { shapes, unrecognizedChords };
}

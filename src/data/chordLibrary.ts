import type { ChordLibrary } from "../types/ChordLibrary";

export const chordLibrary: ChordLibrary = {
    // Major Chords - Open Positions
    "C": {
        name: "C major",
        baseFret: 1,
        positions: [
            { finger: 1, fret: 1, string: 2 },
            { finger: 2, fret: 2, string: 4 },
            { finger: 3, fret: 3, string: 5 }
        ],
        mutedStrings: [6]
    },
    "D": {
        name: "D major",
        baseFret: 1,
        positions: [
            { finger: 1, fret: 2, string: 1 },
            { finger: 2, fret: 2, string: 3 },
            { finger: 3, fret: 3, string: 2 }
        ],
        mutedStrings: [5, 6]
    },
    "E": {
        name: "E major",
        baseFret: 1,
        positions: [
            { finger: 1, fret: 2, string: 5 },
            { finger: 2, fret: 2, string: 4 }
        ],
        mutedStrings: []
    },
    "F": {
        name: "F major",
        baseFret: 1,
        positions: [
            { finger: 1, fret: 1, string: 1 },
            { finger: 1, fret: 1, string: 2 },
            { finger: 2, fret: 2, string: 3 },
            { finger: 3, fret: 3, string: 4 },
            { finger: 4, fret: 3, string: 5 }
        ],
        mutedStrings: []
    },
    "G": {
        name: "G major",
        baseFret: 1,
        positions: [
            { finger: 1, fret: 2, string: 5 },
            { finger: 2, fret: 3, string: 1 },
            { finger: 3, fret: 3, string: 6 }
        ],
        mutedStrings: []
    },
    "A": {
        name: "A major",
        baseFret: 1,
        positions: [
            { finger: 1, fret: 2, string: 2 },
            { finger: 2, fret: 2, string: 3 },
            { finger: 3, fret: 2, string: 4 }
        ],
        mutedStrings: [6]
    },

    // Minor Chords - Open Positions
    "Am": {
        name: "A minor",
        baseFret: 1,
        positions: [
            { finger: 1, fret: 1, string: 2 },
            { finger: 2, fret: 2, string: 3 },
            { finger: 3, fret: 2, string: 4 }
        ],
        mutedStrings: [6]
    },
    "Dm": {
        name: "D minor",
        baseFret: 1,
        positions: [
            { finger: 1, fret: 1, string: 1 },
            { finger: 2, fret: 2, string: 3 },
            { finger: 3, fret: 3, string: 2 }
        ],
        mutedStrings: [5, 6]
    },
    "Em": {
        name: "E minor",
        baseFret: 1,
        positions: [
            { finger: 1, fret: 2, string: 5 },
            { finger: 2, fret: 2, string: 4 }
        ],
        mutedStrings: []
    },
    "Gm": {
        name: "G minor",
        baseFret: 3,
        positions: [
            { finger: 1, fret: 3, string: 1 },
            { finger: 1, fret: 3, string: 2 },
            { finger: 1, fret: 3, string: 3 },
            { finger: 1, fret: 3, string: 4 },
            { finger: 1, fret: 3, string: 5 },
            { finger: 1, fret: 3, string: 6 },
            { finger: 3, fret: 5, string: 4 },
            { finger: 4, fret: 5, string: 5 }
        ],
        mutedStrings: []
    },

    // Dominant 7th Chords
    "C7": {
        name: "C dominant 7th",
        baseFret: 1,
        positions: [
            { finger: 1, fret: 1, string: 2 },
            { finger: 2, fret: 2, string: 4 },
            { finger: 3, fret: 3, string: 3 },
            { finger: 4, fret: 3, string: 5 }
        ],
        mutedStrings: [6]
    },
    "D7": {
        name: "D dominant 7th",
        baseFret: 1,
        positions: [
            { finger: 1, fret: 1, string: 2 },
            { finger: 2, fret: 2, string: 1 },
            { finger: 3, fret: 2, string: 3 }
        ],
        mutedStrings: [5, 6]
    },
    "E7": {
        name: "E dominant 7th",
        baseFret: 1,
        positions: [
            { finger: 1, fret: 1, string: 3 },
            { finger: 2, fret: 2, string: 5 }
        ],
        mutedStrings: []
    },
    "F7": {
        name: "F dominant 7th",
        baseFret: 1,
        positions: [
            { finger: 1, fret: 1, string: 1 },
            { finger: 1, fret: 1, string: 2 },
            { finger: 2, fret: 2, string: 3 },
            { finger: 3, fret: 3, string: 4 },
            { finger: 4, fret: 3, string: 5 }
        ],
        mutedStrings: []
    },
    "G7": {
        name: "G dominant 7th",
        baseFret: 1,
        positions: [
            { finger: 1, fret: 1, string: 1 },
            { finger: 2, fret: 3, string: 6 }
        ],
        mutedStrings: []
    },
    "A7": {
        name: "A dominant 7th",
        baseFret: 1,
        positions: [
            { finger: 1, fret: 2, string: 2 },
            { finger: 2, fret: 2, string: 4 }
        ],
        mutedStrings: [6]
    },

    // Major 7th Chords
    "Cmaj7": {
        name: "C major 7th",
        baseFret: 1,
        positions: [
            { finger: 1, fret: 2, string: 4 },
            { finger: 2, fret: 3, string: 5 }
        ],
        mutedStrings: [6]
    },
    "Dmaj7": {
        name: "D major 7th",
        baseFret: 1,
        positions: [
            { finger: 1, fret: 2, string: 1 },
            { finger: 2, fret: 2, string: 3 }
        ],
        mutedStrings: [5, 6]
    },
    "Emaj7": {
        name: "E major 7th",
        baseFret: 1,
        positions: [
            { finger: 1, fret: 1, string: 3 },
            { finger: 2, fret: 2, string: 5 }
        ],
        mutedStrings: []
    },
    "Fmaj7": {
        name: "F major 7th",
        baseFret: 1,
        positions: [
            { finger: 1, fret: 1, string: 1 },
            { finger: 1, fret: 1, string: 2 },
            { finger: 2, fret: 2, string: 3 },
            { finger: 3, fret: 3, string: 4 }
        ],
        mutedStrings: [5, 6]
    },
    "Gmaj7": {
        name: "G major 7th",
        baseFret: 1,
        positions: [
            { finger: 1, fret: 2, string: 1 },
            { finger: 2, fret: 3, string: 6 }
        ],
        mutedStrings: []
    },
    "Amaj7": {
        name: "A major 7th",
        baseFret: 1,
        positions: [
            { finger: 1, fret: 2, string: 2 },
            { finger: 2, fret: 2, string: 3 }
        ],
        mutedStrings: [6]
    },

    // Minor 7th Chords
    "Am7": {
        name: "A minor 7th",
        baseFret: 1,
        positions: [
            { finger: 1, fret: 1, string: 2 },
            { finger: 2, fret: 2, string: 4 }
        ],
        mutedStrings: [6]
    },
    "Dm7": {
        name: "D minor 7th",
        baseFret: 1,
        positions: [
            { finger: 1, fret: 1, string: 1 },
            { finger: 2, fret: 2, string: 3 }
        ],
        mutedStrings: [5, 6]
    },
    "Em7": {
        name: "E minor 7th",
        baseFret: 1,
        positions: [
            { finger: 1, fret: 2, string: 5 }
        ],
        mutedStrings: []
    },
};

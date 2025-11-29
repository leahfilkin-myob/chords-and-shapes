import type { ChordLibrary } from "../types/ChordLibrary";

export const chordLibrary: ChordLibrary = {
    "C": {
        name: "C major",
        variations: [
            {
                id: "C_open",
                name: "C major (open)",
                baseFret: 1,
                positions: [
                    { finger: 1, fret: 1, string: 2 },
                    { finger: 2, fret: 2, string: 4 },
                    { finger: 3, fret: 3, string: 5 }
                ],
                mutedStrings: [6]
            }
        ]
    },
    "D": {
        name: "D major",
        variations: [
            {
                id: "D_open",
                name: "D major (open)",
                baseFret: 1,
                positions: [
                    { finger: 1, fret: 2, string: 3 },
                    { finger: 2, fret: 2, string: 1 },
                    { finger: 3, fret: 3, string: 2 }
                ],
                mutedStrings: [5, 6]
            }
        ]
    },
    "E": {
        name: "E major",
        variations: [
            {
                id: "E_open",
                name: "E major (open)",
                baseFret: 1,
                positions: [
                    { finger: 1, fret: 2, string: 5 },
                    { finger: 2, fret: 2, string: 4 }
                ],
                mutedStrings: []
            }
        ]
    },
    "F": {
        name: "F major",
        variations: [
            {
                id: "F_barre",
                name: "F major (barre)",
                baseFret: 1,
                positions: [
                    { finger: 1, fret: 1, string: 1 },
                    { finger: 1, fret: 1, string: 2 },
                    { finger: 2, fret: 2, string: 3 },
                    { finger: 3, fret: 3, string: 4 },
                    { finger: 4, fret: 3, string: 5 }
                ],
                mutedStrings: []
            }
        ]
    },
    "G": {
        name: "G major",
        variations: [
            {
                id: "G_open",
                name: "G major (open)",
                baseFret: 1,
                positions: [
                    { finger: 2, fret: 2, string: 1 },
                    { finger: 3, fret: 3, string: 0 },
                    { finger: 4, fret: 3, string: 5 }
                ],
                mutedStrings: []
            }
        ]
    },
    "A": {
        name: "A major",
        variations: [
            {
                id: "A_open",
                name: "A major (open)",
                baseFret: 1,
                positions: [
                    { finger: 1, fret: 2, string: 2 },
                    { finger: 2, fret: 2, string: 3 },
                    { finger: 3, fret: 2, string: 4 }
                ],
                mutedStrings: [6]
            }
        ]
    },

    "Am": {
        name: "A minor",
        variations: [
            {
                id: "Am_open",
                name: "A minor (open)",
                baseFret: 1,
                positions: [
                    { finger: 1, fret: 1, string: 2 },
                    { finger: 2, fret: 2, string: 3 },
                    { finger: 3, fret: 2, string: 4 }
                ],
                mutedStrings: [6]
            }
        ]
    },
    "Dm": {
        name: "D minor",
        variations: [
            {
                id: "Dm_open",
                name: "D minor (open)",
                baseFret: 1,
                positions: [
                    { finger: 1, fret: 1, string: 1 },
                    { finger: 2, fret: 2, string: 3 },
                    { finger: 3, fret: 3, string: 2 }
                ],
                mutedStrings: [5, 6]
            }
        ]
    },
    "Em": {
        name: "E minor",
        variations: [
            {
                id: "Em_open",
                name: "E minor (open)",
                baseFret: 1,
                positions: [
                    { finger: 1, fret: 2, string: 5 },
                    { finger: 2, fret: 2, string: 4 }
                ],
                mutedStrings: []
            }
        ]
    },
    "Gm": {
        name: "G minor",
        variations: [
            {
                id: "Gm_barre",
                name: "G minor (barre)",
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
            }
        ]
    },
    "Cm": {
        name: "C minor",
        variations: [
            {
                id: "Cm_open",
                name: "C minor (open)",
                baseFret: 1,
                positions: [
                    { finger: 1, fret: 1, string: 2 },
                    { finger: 2, fret: 1, string: 4 },
                    { finger: 3, fret: 3, string: 5 }
                ],
                mutedStrings: [6]
            },
            {
                id: "Cm_barre",
                name: "C minor (barre)",
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
            }
        ]
    },

    "C7": {
        name: "C dominant 7th",
        variations: [
            {
                id: "C7_open",
                name: "C dominant 7th (open)",
                baseFret: 1,
                positions: [
                    { finger: 1, fret: 1, string: 2 },
                    { finger: 2, fret: 2, string: 4 },
                    { finger: 3, fret: 3, string: 3 },
                    { finger: 4, fret: 3, string: 5 }
                ],
                mutedStrings: [6]
            }
        ]
    },
    "D7": {
        name: "D dominant 7th",
        variations: [
            {
                id: "D7_open",
                name: "D dominant 7th (open)",
                baseFret: 1,
                positions: [
                    { finger: 1, fret: 1, string: 2 },
                    { finger: 2, fret: 2, string: 1 },
                    { finger: 3, fret: 2, string: 3 }
                ],
                mutedStrings: [5, 6]
            }
        ]
    },
    "E7": {
        name: "E dominant 7th",
        variations: [
            {
                id: "E7_open",
                name: "E dominant 7th (open)",
                baseFret: 1,
                positions: [
                    { finger: 1, fret: 1, string: 3 },
                    { finger: 2, fret: 2, string: 5 }
                ],
                mutedStrings: []
            }
        ]
    },
    "F7": {
        name: "F dominant 7th",
        variations: [
            {
                id: "F7_barre",
                name: "F dominant 7th (barre)",
                baseFret: 1,
                positions: [
                    { finger: 1, fret: 1, string: 1 },
                    { finger: 1, fret: 1, string: 2 },
                    { finger: 2, fret: 2, string: 3 },
                    { finger: 3, fret: 3, string: 4 },
                    { finger: 4, fret: 3, string: 5 }
                ],
                mutedStrings: []
            }
        ]
    },
    "G7": {
        name: "G dominant 7th",
        variations: [
            {
                id: "G7_open",
                name: "G dominant 7th (open)",
                baseFret: 1,
                positions: [
                    { finger: 1, fret: 1, string: 1 },
                    { finger: 2, fret: 3, string: 6 }
                ],
                mutedStrings: []
            }
        ]
    },
    "A7": {
        name: "A dominant 7th",
        variations: [
            {
                id: "A7_open",
                name: "A dominant 7th (open)",
                baseFret: 1,
                positions: [
                    { finger: 1, fret: 2, string: 2 },
                    { finger: 2, fret: 2, string: 4 }
                ],
                mutedStrings: [6]
            }
        ]
    },

    "Cmaj7": {
        name: "C major 7th",
        variations: [
            {
                id: "Cmaj7_open",
                name: "C major 7th (open)",
                baseFret: 1,
                positions: [
                    { finger: 1, fret: 2, string: 4 },
                    { finger: 2, fret: 3, string: 5 }
                ],
                mutedStrings: [6]
            }
        ]
    },
    "Dmaj7": {
        name: "D major 7th",
        variations: [
            {
                id: "Dmaj7_open",
                name: "D major 7th (open)",
                baseFret: 1,
                positions: [
                    { finger: 1, fret: 2, string: 1 },
                    { finger: 2, fret: 2, string: 3 }
                ],
                mutedStrings: [5, 6]
            }
        ]
    },
    "Emaj7": {
        name: "E major 7th",
        variations: [
            {
                id: "Emaj7_open",
                name: "E major 7th (open)",
                baseFret: 1,
                positions: [
                    { finger: 1, fret: 1, string: 3 },
                    { finger: 2, fret: 2, string: 5 }
                ],
                mutedStrings: []
            }
        ]
    },
    "Fmaj7": {
        name: "F major 7th",
        variations: [
            {
                id: "Fmaj7_barre",
                name: "F major 7th (barre)",
                baseFret: 1,
                positions: [
                    { finger: 1, fret: 1, string: 1 },
                    { finger: 1, fret: 1, string: 2 },
                    { finger: 2, fret: 2, string: 3 },
                    { finger: 3, fret: 3, string: 4 }
                ],
                mutedStrings: [5, 6]
            }
        ]
    },
    "Gmaj7": {
        name: "G major 7th",
        variations: [
            {
                id: "Gmaj7_open",
                name: "G major 7th (open)",
                baseFret: 1,
                positions: [
                    { finger: 1, fret: 2, string: 1 },
                    { finger: 2, fret: 3, string: 6 }
                ],
                mutedStrings: []
            }
        ]
    },
    "Amaj7": {
        name: "A major 7th",
        variations: [
            {
                id: "Amaj7_open",
                name: "A major 7th (open)",
                baseFret: 1,
                positions: [
                    { finger: 1, fret: 2, string: 2 },
                    { finger: 2, fret: 2, string: 3 }
                ],
                mutedStrings: [6]
            }
        ]
    },

    "Am7": {
        name: "A minor 7th",
        variations: [
            {
                id: "Am7_open",
                name: "A minor 7th (open)",
                baseFret: 1,
                positions: [
                    { finger: 1, fret: 1, string: 2 },
                    { finger: 2, fret: 2, string: 4 }
                ],
                mutedStrings: [6]
            }
        ]
    },
    "Dm7": {
        name: "D minor 7th",
        variations: [
            {
                id: "Dm7_open",
                name: "D minor 7th (open)",
                baseFret: 1,
                positions: [
                    { finger: 1, fret: 1, string: 1 },
                    { finger: 2, fret: 2, string: 3 }
                ],
                mutedStrings: [5, 6]
            }
        ]
    },
    "Em7": {
        name: "E minor 7th",
        variations: [
            {
                id: "Em7_open",
                name: "E minor 7th (open)",
                baseFret: 1,
                positions: [
                    { finger: 1, fret: 2, string: 5 }
                ],
                mutedStrings: []
            }
        ]
    },
};

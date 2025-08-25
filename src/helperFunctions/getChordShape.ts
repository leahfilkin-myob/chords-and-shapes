import type {ChordShape} from "../types/ChordShape";
import {chordLibrary} from "../data/chordLibrary";
import type {FingerPosition} from "../types/FingerPosition";

export default function getChordShape(chordName: string): ChordShape {
    const chord = chordLibrary[chordName];
    if (!chord) {
        throw new Error(`Chord "${chordName}" not found in library`);
    }
    return chord;
}

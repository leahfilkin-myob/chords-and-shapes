import type {ChordShape} from "../types/ChordShape";
import {chordLibrary} from "../data/chordLibrary";

export default function getChordShape(chordName: string): ChordShape[] {
    const chordFamily = chordLibrary[chordName];
    if (!chordFamily) {
        return [];
    }
    return chordFamily.variations;
}

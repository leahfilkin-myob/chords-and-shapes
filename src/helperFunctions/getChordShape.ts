import type {ChordShape} from "../types/ChordShape";
import {chordLibrary} from "../data/chordLibrary";

export default function getChordShapes(chordName: string): ChordShape[] {
    return chordLibrary[chordName] || [];

}

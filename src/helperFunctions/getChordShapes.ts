import getChordShape from "./getChordShape";
import type {ChordShape} from "../types/ChordShape";

export const getChordShapes = (chordString: string) : ChordShape[] => {
    const chordsList = chordString.split(" ");
    return chordsList.map(chord => {
        return getChordShape(chord)
    })
}

import type { ChordShape } from "./ChordShape";

export type ChordLibrary = {
    [chordName: string]: ChordShape[];
};

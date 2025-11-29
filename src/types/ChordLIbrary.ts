import type { ChordShape } from "./ChordShape";

export type ChordVariation = ChordShape & {
    id: string;
};

export type ChordFamily = {
    name: string;
    variations: ChordVariation[];
};

export type ChordLibrary = Record<string, ChordFamily>;


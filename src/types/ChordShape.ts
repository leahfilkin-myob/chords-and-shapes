import type {FingerPosition} from "./FingerPosition";

export type ChordShape = {
    name: string;
    positions: FingerPosition[];
    mutedStrings?: number[];
    baseFret: number;
};

import type {FingerPosition} from "./FingerPosition";

export type ChordShape = {
    id: string;
    name: string;
    positions: FingerPosition[];
    mutedStrings?: number[];
    baseFret: number;
};

import type {ChordShape} from "../types/ChordShape";
import {ChordDiagramDrawer} from "../ChordDiagramDrawer";


export const ChordDiagram = ({ shape }: { shape: ChordShape }) => {
    const chordDiagramDrawer = new ChordDiagramDrawer(20, 6, 5);

    return chordDiagramDrawer.drawChordDiagram(shape);
}

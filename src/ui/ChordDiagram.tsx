import type {ChordShape} from "../types/ChordShape";
import {ChordDiagramDrawer} from "../ChordDiagramDrawer";

export const ChordDiagram = ({ shape }: { shape: ChordShape }) => {
    const chordDiagramDrawer = new ChordDiagramDrawer(20, 6, 5);

    return (
        <div style={{ margin: "5px", padding: "10px" }}>
            <div style={{ marginBottom: "10px" }}>
                <h3 style={{ margin: "0 0 5px 0" }}>{shape.name}</h3>
            </div>
            {chordDiagramDrawer.drawChordDiagram(shape)}
        </div>
    );
}

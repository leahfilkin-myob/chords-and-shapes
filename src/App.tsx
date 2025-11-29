import {useState} from "react";
import {getChordShapes} from "./helperFunctions/getChordShapes";
import type {ChordShape} from "./types/ChordShape";
import {ChordDiagram} from "./ui/ChordDiagram";

export default function App() {
    const [chordString, setChordString] = useState('');
    const [chordShapes, setChordShapes] = useState<ChordShape[]>([]);
    const [unrecognizedChords, setUnrecognizedChords] = useState<string[]>([]);
    
    const groupedChords = chordShapes.reduce((acc, shape) => {
        const baseChord = shape.id.split('_')[0] || shape.id;
        if (!acc[baseChord]) {
            acc[baseChord] = [];
        }
        acc[baseChord].push(shape);
        return acc;
    }, {} as Record<string, ChordShape[]>);

    return (
        <div style={{ padding: "20px" }}>
            <form onSubmit={(e) => {
                e.preventDefault();
                const result = getChordShapes(chordString);
                setChordShapes(result.shapes);
                setUnrecognizedChords(result.unrecognizedChords);
            }}>
                <input 
                    type="text" 
                    value={chordString} 
                    onChange={(e) => setChordString(e.target.value)}
                    placeholder="Enter chord names (e.g., Cm C D)"
                    style={{ padding: "10px", marginRight: "10px", width: "300px" }}
                />
                <button type="submit" style={{ padding: "10px 20px" }}>Get Chords</button>
            </form>
            
            {unrecognizedChords.length > 0 && (
                <div style={{ 
                    marginTop: "20px", 
                    padding: "10px", 
                    backgroundColor: "#ffebee", 
                    border: "1px solid #f44336", 
                    borderRadius: "4px",
                    color: "#c62828"
                }}>
                    <strong>Unrecognized chords:</strong> {unrecognizedChords.join(", ")}
                </div>
            )}
            
            <div style={{ marginTop: "20px", display: "flex", flexWrap: "wrap", gap: "0px" }}>
                {chordShapes.map((shape) => (
                    <ChordDiagram key={shape.id} shape={shape} />
                ))}
            </div>
        </div>
    )
}

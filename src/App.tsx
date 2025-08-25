import {useState} from "react";
import {getChordShapes} from "./helperFunctions/getChordShapes";
import type {ChordShape} from "./types/ChordShape";
import {ChordDiagram} from "./ui/ChordDiagram";
export default function App() {
    const [chordString, setChordString] = useState('');
    const [chordShapes, setChordShapes] = useState<ChordShape[]>([]);
    return (
        <div>
            <form onSubmit={(e) => {
                e.preventDefault();
                setChordShapes(getChordShapes(chordString));
            }}>
                <input type="text" value={chordString} onChange={(e) => setChordString(e.target.value)}/>
                <button type="submit">Get Chords</button>
            </form>
            <div>
                {chordShapes.map((shape, i) => <ChordDiagram key={i} shape={shape} />)}
            </div>
            </div>)
}

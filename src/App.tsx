import { ChordDiagram } from './ui/ChordDiagram';
import getChordShapes from "./helperFunctions/getChordShape";
export default function App() {
    const shapes = getChordShapes("C");
    return (
        <div>
            {shapes.map((shape, i) => (
                <ChordDiagram key={i} shape={shape} />
            ))}
        </div>
    );

}

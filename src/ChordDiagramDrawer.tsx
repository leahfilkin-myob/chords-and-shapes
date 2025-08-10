import type {ChordShape} from "./types/ChordShape";

export class ChordDiagramDrawer {
    spacing: number;
    stringCount: number;
    fretCount: number;

    constructor(spacing: number, stringCount: number, fretCount: number) {
        this.spacing = spacing;
        this.stringCount = stringCount;
        this.fretCount = fretCount;
    }

    drawStrings = () => {
        return Array.from({ length: this.stringCount }).map((_, i) => (
            <line
                key={`string-${i}`}
                x1={i * this.spacing}
                y1={0}
                x2={i * this.spacing}
                y2={this.spacing * (this.fretCount - 1)}
                stroke="black"
            />
        ));
    };

    drawFrets = () => {
        return Array.from({ length: this.fretCount }).map((_, i) => (
            <line
                key={`fret-${i}`}
                x1={0}
                y1={i * this.spacing}
                x2={this.spacing * (6 - 1)}
                y2={i * this.spacing}
                stroke="black"
            />
        ));
    }
    drawFingerPositions = ( shape: ChordShape )  => {
        return shape.positions.map(({ fret, string, finger }, i) => {
            {/* nothing to draw */}
            if (fret === 0) return null;
            return (
                <g key={`note-${i}`}>
                    {/* circle for the finger position */}
                    <circle
                        cx={string * this.spacing}
                        cy={(fret - shape.baseFret + 0.5) * this.spacing}
                        r={6}
                        fill="black"
                    />
                    {/* finger number inside the circle */}
                    {finger && (
                        <text
                            x={string * this.spacing}
                            y={(fret - shape.baseFret + 0.5) * this.spacing + 4}
                            fontSize={10}
                            textAnchor="middle"
                            fill="white"
                            fontWeight="bold"
                        >
                        {finger}
                        </text>
                    )}
                </g>
            );
        });
    }
    drawChordDiagram = (shape: ChordShape) => {
        return (
            <svg width={this.spacing * this.stringCount} height={this.spacing * this.fretCount}>
                {this.drawStrings()}
                {this.drawFrets()}
                {this.drawFingerPositions(shape)}
            </svg>
        );
    }
}

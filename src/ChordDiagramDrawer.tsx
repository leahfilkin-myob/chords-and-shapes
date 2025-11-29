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

    getStringDisplayIndex = (stringNumber: number): number => {
        return this.stringCount - stringNumber;
    }

    drawStrings = () => {
        const padding = 20;
        return Array.from({ length: this.stringCount }).map((_, i) => (
            <line
                key={`string-${i}`}
                x1={i * this.spacing + padding}
                y1={padding}
                x2={i * this.spacing + padding}
                y2={this.spacing * (this.fretCount - 1) + padding}
                stroke="black"
            />
        ));
    };

    drawFrets = () => {
        const padding = 20;
        return Array.from({ length: this.fretCount }).map((_, i) => (
            <line
                key={`fret-${i}`}
                x1={padding}
                y1={i * this.spacing + padding}
                x2={this.spacing * (this.stringCount - 1) + padding}
                y2={i * this.spacing + padding}
                stroke="black"
                strokeWidth={i === 0 ? 2 : 1}
            />
        ));
    }
    drawFingerPositions = ( shape: ChordShape )  => {
        const elements = [];
        const padding = 20;
        
        const barrePositions = shape.positions.filter(p => p.finger === 1);
        const firstBarre = barrePositions[0];
        const hasBarre = barrePositions.length > 1 && firstBarre && barrePositions.every(p => p.fret === firstBarre.fret);
        
        if (hasBarre && firstBarre) {
            const barreFret = firstBarre.fret;
            const barreStringIndices = barrePositions.map(p => this.getStringDisplayIndex(p.string));
            const minStringIndex = Math.min(...barreStringIndices);
            const maxStringIndex = Math.max(...barreStringIndices);
            elements.push(
                <rect
                    key="barre"
                    x={minStringIndex * this.spacing + padding}
                    y={(barreFret - shape.baseFret + 0.3) * this.spacing + padding}
                    width={this.spacing * (maxStringIndex - minStringIndex)}
                    height={this.spacing * 0.4}
                    fill="black"
                    rx={2}
                />
            );
        }
        
        shape.positions.forEach(({ fret, string, finger }, i) => {
            if (fret === 0) return;
            
            if (hasBarre && firstBarre && finger === 1 && fret === firstBarre.fret) return;
            
            const stringDisplayIndex = this.getStringDisplayIndex(string);
            
            elements.push(
                <g key={`note-${i}`}>
                    <circle
                        cx={stringDisplayIndex * this.spacing + padding}
                        cy={(fret - shape.baseFret + 0.5) * this.spacing + padding}
                        r={6}
                        fill="black"
                    />
                    {finger && (
                        <text
                            x={stringDisplayIndex * this.spacing + padding}
                            y={(fret - shape.baseFret + 0.5) * this.spacing + padding + 4}
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
        
        return elements;
    }
    drawMutedStrings = (shape: ChordShape) => {
        if (!shape.mutedStrings || shape.mutedStrings.length === 0) return null;
        const padding = 20;
        
        return shape.mutedStrings.map((string, i) => {
            const stringDisplayIndex = this.getStringDisplayIndex(string);
            return (
                <text
                    key={`muted-${i}`}
                    x={stringDisplayIndex * this.spacing + padding}
                    y={padding - 5}
                    fontSize={16}
                    textAnchor="middle"
                    fill="black"
                    fontWeight="bold"
                >
                    ×
                </text>
            );
        });
    }

    drawBaseFret = (shape: ChordShape) => {
        if (shape.baseFret > 1) {
            const padding = 20;
            return (
                <text
                    x={padding - 15}
                    y={padding - 5}
                    fontSize={12}
                    textAnchor="middle"
                    fill="black"
                    fontWeight="bold"
                >
                    {shape.baseFret}
                </text>
            );
        }
        return null;
    }

    drawChordDiagram = (shape: ChordShape) => {
        const padding = 20;
        return (
            <svg 
                width={this.spacing * this.stringCount + padding * 2} 
                height={this.spacing * this.fretCount + padding * 2}
            >
                {this.drawStrings()}
                {this.drawFrets()}
                {this.drawFingerPositions(shape)}
                {this.drawMutedStrings(shape)}
                {this.drawBaseFret(shape)}
            </svg>
        );
    }
}

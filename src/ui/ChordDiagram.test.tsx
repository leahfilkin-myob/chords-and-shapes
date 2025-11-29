import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ChordDiagram } from './ChordDiagram';
import type { ChordShape } from '../types/ChordShape';

describe('ChordDiagram', () => {
  const mockChordShape: ChordShape = {
    id: 'C_open',
    name: 'C major (open)',
    baseFret: 1,
    positions: [
      { finger: 1, fret: 1, string: 2 },
      { finger: 2, fret: 2, string: 4 },
      { finger: 3, fret: 3, string: 5 }
    ],
    mutedStrings: [6]
  };

  it('should render chord name', () => {
    render(<ChordDiagram shape={mockChordShape} />);
    expect(screen.getByText('C major (open)')).toBeInTheDocument();
  });

  it('should render SVG diagram', () => {
    const { container } = render(<ChordDiagram shape={mockChordShape} />);
    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
  });

  it('should render different chord names correctly', () => {
    const differentShape: ChordShape = {
      ...mockChordShape,
      id: 'Am_open',
      name: 'A minor (open)'
    };
    render(<ChordDiagram shape={differentShape} />);
    expect(screen.getByText('A minor (open)')).toBeInTheDocument();
  });
});



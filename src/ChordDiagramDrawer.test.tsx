import { describe, it, expect } from 'vitest';
import { ChordDiagramDrawer } from './ChordDiagramDrawer';
import type { ChordShape } from './types/ChordShape';
import React from 'react';

describe('ChordDiagramDrawer', () => {
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

  describe('constructor', () => {
    it('should initialize with correct spacing, stringCount, and fretCount', () => {
      const drawer = new ChordDiagramDrawer(20, 6, 5);
      expect(drawer.spacing).toBe(20);
      expect(drawer.stringCount).toBe(6);
      expect(drawer.fretCount).toBe(5);
    });
  });

  describe('getStringDisplayIndex', () => {
    it('should convert string 6 to index 0 (leftmost)', () => {
      const drawer = new ChordDiagramDrawer(20, 6, 5);
      expect(drawer.getStringDisplayIndex(6)).toBe(0);
    });

    it('should convert string 1 to index 5 (rightmost)', () => {
      const drawer = new ChordDiagramDrawer(20, 6, 5);
      expect(drawer.getStringDisplayIndex(1)).toBe(5);
    });

    it('should convert string 3 to index 3', () => {
      const drawer = new ChordDiagramDrawer(20, 6, 5);
      expect(drawer.getStringDisplayIndex(3)).toBe(3);
    });
  });

  describe('drawStrings', () => {
    it('should return correct number of string elements', () => {
      const drawer = new ChordDiagramDrawer(20, 6, 5);
      const strings = drawer.drawStrings();
      expect(strings).toHaveLength(6);
    });

    it('should create line elements with correct keys', () => {
      const drawer = new ChordDiagramDrawer(20, 6, 5);
      const strings = drawer.drawStrings();
      strings.forEach((string, i) => {
        expect(string.key).toBe(`string-${i}`);
      });
    });
  });

  describe('drawFrets', () => {
    it('should return correct number of fret elements', () => {
      const drawer = new ChordDiagramDrawer(20, 6, 5);
      const frets = drawer.drawFrets();
      expect(frets).toHaveLength(5);
    });

    it('should have thicker stroke for first fret', () => {
      const drawer = new ChordDiagramDrawer(20, 6, 5);
      const frets = drawer.drawFrets();
      expect(frets[0].props.strokeWidth).toBe(2);
      expect(frets[1].props.strokeWidth).toBe(1);
    });
  });

  describe('drawFingerPositions', () => {
    it('should return elements for all finger positions', () => {
      const drawer = new ChordDiagramDrawer(20, 6, 5);
      const positions = drawer.drawFingerPositions(mockChordShape);
      expect(positions.length).toBeGreaterThan(0);
    });

    it('should skip positions with fret 0', () => {
      const shapeWithOpen: ChordShape = {
        ...mockChordShape,
        positions: [
          { finger: 1, fret: 0, string: 1 },
          { finger: 2, fret: 2, string: 2 }
        ]
      };
      const drawer = new ChordDiagramDrawer(20, 6, 5);
      const positions = drawer.drawFingerPositions(shapeWithOpen);
      const hasFret0 = positions.some((p: any) => p.props?.cy && p.props.cy < 20);
      expect(hasFret0).toBe(false);
    });

    it('should handle barre chords', () => {
      const barreShape: ChordShape = {
        id: 'F_barre',
        name: 'F major (barre)',
        baseFret: 1,
        positions: [
          { finger: 1, fret: 1, string: 1 },
          { finger: 1, fret: 1, string: 2 },
          { finger: 2, fret: 2, string: 3 }
        ],
        mutedStrings: []
      };
      const drawer = new ChordDiagramDrawer(20, 6, 5);
      const positions = drawer.drawFingerPositions(barreShape);
      const hasBarre = positions.some((p: any) => p.key === 'barre');
      expect(hasBarre).toBe(true);
    });
  });

  describe('drawMutedStrings', () => {
    it('should return null when no muted strings', () => {
      const shapeNoMuted: ChordShape = {
        ...mockChordShape,
        mutedStrings: []
      };
      const drawer = new ChordDiagramDrawer(20, 6, 5);
      const result = drawer.drawMutedStrings(shapeNoMuted);
      expect(result).toBeNull();
    });

    it('should return null when mutedStrings is undefined', () => {
      const shapeNoMuted: ChordShape = {
        ...mockChordShape,
        mutedStrings: undefined
      };
      const drawer = new ChordDiagramDrawer(20, 6, 5);
      const result = drawer.drawMutedStrings(shapeNoMuted);
      expect(result).toBeNull();
    });

    it('should return muted string indicators', () => {
      const drawer = new ChordDiagramDrawer(20, 6, 5);
      const result = drawer.drawMutedStrings(mockChordShape);
      expect(result).not.toBeNull();
      if (result) {
        expect(result.length).toBe(1);
        expect(result[0].props.children).toBe('×');
      }
    });
  });

  describe('drawBaseFret', () => {
    it('should return null when baseFret is 1', () => {
      const drawer = new ChordDiagramDrawer(20, 6, 5);
      const result = drawer.drawBaseFret(mockChordShape);
      expect(result).toBeNull();
    });

    it('should return base fret number when baseFret > 1', () => {
      const shapeHighFret: ChordShape = {
        ...mockChordShape,
        baseFret: 5
      };
      const drawer = new ChordDiagramDrawer(20, 6, 5);
      const result = drawer.drawBaseFret(shapeHighFret);
      expect(result).not.toBeNull();
      if (result) {
        expect(result.props.children).toBe(5);
      }
    });
  });

  describe('drawChordDiagram', () => {
    it('should return an SVG element', () => {
      const drawer = new ChordDiagramDrawer(20, 6, 5);
      const diagram = drawer.drawChordDiagram(mockChordShape);
      expect(diagram.type).toBe('svg');
    });

    it('should have correct width and height', () => {
      const drawer = new ChordDiagramDrawer(20, 6, 5);
      const diagram = drawer.drawChordDiagram(mockChordShape);
      const expectedWidth = 20 * 6 + 40;
      const expectedHeight = 20 * 5 + 40;
      expect(diagram.props.width).toBe(expectedWidth);
      expect(diagram.props.height).toBe(expectedHeight);
    });
  });
});


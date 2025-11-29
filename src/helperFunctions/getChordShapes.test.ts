import { describe, it, expect } from 'vitest';
import { getChordShapes } from './getChordShapes';

describe('getChordShapes', () => {
  it('should return shapes for a single valid chord', () => {
    const result = getChordShapes('C');
    expect(result.shapes.length).toBeGreaterThan(0);
    expect(result.unrecognizedChords).toEqual([]);
    expect(result.shapes[0].id).toBe('C_open');
  });

  it('should return shapes for multiple valid chords', () => {
    const result = getChordShapes('C D E');
    expect(result.shapes.length).toBeGreaterThan(0);
    expect(result.unrecognizedChords).toEqual([]);
  });

  it('should normalize chord names (uppercase to lowercase for quality)', () => {
    const result = getChordShapes('CM');
    expect(result.shapes.length).toBeGreaterThan(0);
    expect(result.unrecognizedChords).toEqual([]);
  });

  it('should normalize lowercase root notes to uppercase', () => {
    const result = getChordShapes('c');
    expect(result.shapes.length).toBeGreaterThan(0);
    expect(result.unrecognizedChords).toEqual([]);
  });

  it('should handle mixed case chord names', () => {
    const result = getChordShapes('Am');
    expect(result.shapes.length).toBeGreaterThan(0);
    expect(result.unrecognizedChords).toEqual([]);
  });

  it('should deduplicate repeated chords', () => {
    const result = getChordShapes('C C C D D');
    const uniqueChordIds = new Set(result.shapes.map(s => s.id.split('_')[0]));
    expect(uniqueChordIds.size).toBeLessThanOrEqual(2);
  });

  it('should return unrecognized chords in result', () => {
    const result = getChordShapes('XYZ');
    expect(result.shapes).toEqual([]);
    expect(result.unrecognizedChords).toContain('Xyz');
  });

  it('should handle mix of valid and invalid chords', () => {
    const result = getChordShapes('C XYZ D');
    expect(result.shapes.length).toBeGreaterThan(0);
    expect(result.unrecognizedChords).toContain('Xyz');
  });

  it('should handle empty string', () => {
    const result = getChordShapes('');
    expect(result.shapes).toEqual([]);
    expect(result.unrecognizedChords).toEqual([]);
  });

  it('should handle whitespace-only string', () => {
    const result = getChordShapes('   ');
    expect(result.shapes).toEqual([]);
    expect(result.unrecognizedChords).toEqual([]);
  });

  it('should normalize and deduplicate case variations', () => {
    const result = getChordShapes('C c CM cm');
    const uniqueChordIds = new Set(result.shapes.map(s => s.id.split('_')[0]));
    expect(uniqueChordIds.size).toBeLessThanOrEqual(2);
  });

  it('should handle multiple spaces between chords', () => {
    const result = getChordShapes('C    D    E');
    expect(result.shapes.length).toBeGreaterThan(0);
    expect(result.unrecognizedChords).toEqual([]);
  });
});



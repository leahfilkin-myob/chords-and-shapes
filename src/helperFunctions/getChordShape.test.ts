import { describe, it, expect } from 'vitest';
import getChordShape from './getChordShape';

describe('getChordShape', () => {
  it('should return chord variations for a valid chord', () => {
    const result = getChordShape('C');
    expect(result).toBeDefined();
    expect(result.length).toBeGreaterThan(0);
    expect(result[0].id).toBe('C_open');
    expect(result[0].name).toBe('C major (open)');
  });

  it('should return chord variations for minor chords', () => {
    const result = getChordShape('Am');
    expect(result).toBeDefined();
    expect(result.length).toBeGreaterThan(0);
    expect(result[0].id).toBe('Am_open');
  });

  it('should return chord variations for 7th chords', () => {
    const result = getChordShape('C7');
    expect(result).toBeDefined();
    expect(result.length).toBeGreaterThan(0);
    expect(result[0].id).toBe('C7_open');
  });

  it('should return empty array for unrecognized chord', () => {
    const result = getChordShape('XYZ');
    expect(result).toEqual([]);
  });

  it('should return empty array for empty string', () => {
    const result = getChordShape('');
    expect(result).toEqual([]);
  });

  it('should return all variations for chords with multiple variations', () => {
    const result = getChordShape('Cm');
    expect(result.length).toBeGreaterThanOrEqual(1);
    const ids = result.map(r => r.id);
    expect(ids).toContain('Cm_open');
  });
});



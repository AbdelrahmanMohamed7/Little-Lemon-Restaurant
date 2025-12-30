import { expect, test } from "vitest";
import { updateTimes, intializeTimes } from './App';

test('initializeTimes returns a dynamic array of times from the API', () => {
    const initialValue = intializeTimes();

    // Check if it is an array
    expect(Array.isArray(initialValue)).toBe(true);

    // Check if the array has at least one time slot in it
    expect(initialValue.length).toBeGreaterThan(0);
});

test('updateTimes returns a dynamic array based on the dispatched date', () => {
    const currentState = [];
    const action = { type: 'UPDATE_TIMES', date: '2025-12-30' };

    const result = updateTimes(currentState, action);

    // Check if it returns an array (fetched from fetchAPI)
    expect(Array.isArray(result)).toBe(true);

    // Check if it is not empty
    expect(result.length).toBeGreaterThan(0);
});
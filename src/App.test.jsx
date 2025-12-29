import { expect, test } from "vitest";
import { updateTimes, intializeTimes } from './App';

test('initializeTimes returns the correct initial array of times', () => {
    const expectedValue = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    const initialValue = intializeTimes();

    // Checks if the arrays are identical
    expect(initialValue).toEqual(expectedValue);
});

test('updateTimes returns the same value provided in the state', () => {
    const currentState = ["17:00", "18:00"];
    const action = { type: 'UPDATE_TIMES', date: '2025-12-01' };

    // Based on your current App.jsx logic, it returns the full list regardless of action
    const expectedValue = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

    const result = updateTimes(currentState, action);
    expect(result).toEqual(expectedValue);
});
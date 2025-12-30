import { render, screen, fireEvent } from "@testing-library/react";
import { vi } from "vitest";
import BookingForm from "./BookingForm";

describe("BookingForm Validation", () => {
    const mockAvailableTimes = ["17:00", "18:00"];
    const mockDispatch = vi.fn();
    const mockSubmitForm = vi.fn();

    test("Step 1: should have correct HTML5 validation attributes applied", () => {
        render(
            <BookingForm
                availableTimes={mockAvailableTimes}
                dispatch={mockDispatch}
                submitForm={mockSubmitForm}
            />
        );

        const dateInput = screen.getByLabelText(/Choose date/i);
        const guestsInput = screen.getByLabelText(/Number of guests/i);

        // Validating HTML5 attributes
        expect(dateInput).toHaveAttribute("required");
        expect(guestsInput).toHaveAttribute("type", "number");
        expect(guestsInput).toHaveAttribute("min", "1");
        expect(guestsInput).toHaveAttribute("max", "10");
        expect(guestsInput).toHaveAttribute("required");
    });

    test("Step 2: submit button should be disabled when form is invalid (0 guests)", () => {
        render(
            <BookingForm
                availableTimes={mockAvailableTimes}
                dispatch={mockDispatch}
                submitForm={mockSubmitForm}
            />
        );

        const guestsInput = screen.getByLabelText(/Number of guests/i);
        const submitButton = screen.getByRole("button");

        // Set guests to 0 (Invalid)
        fireEvent.change(guestsInput, { target: { value: "0" } });

        // The button should be disabled via JS logic
        expect(submitButton).toBeDisabled();
    });

    test("Step 2: submit button should be enabled when form is valid", () => {
        render(
            <BookingForm
                availableTimes={mockAvailableTimes}
                dispatch={mockDispatch}
                submitForm={mockSubmitForm}
            />
        );

        const dateInput = screen.getByLabelText(/Choose date/i);
        const guestsInput = screen.getByLabelText(/Number of guests/i);
        const submitButton = screen.getByRole("button");

        // Fill in valid data
        fireEvent.change(dateInput, { target: { value: "2025-12-30" } });
        fireEvent.change(guestsInput, { target: { value: "4" } });

        // The button should now be enabled
        expect(submitButton).not.toBeDisabled();
    });

    test("Extra: changing date triggers the dispatch function", () => {
        render(
            <BookingForm
                availableTimes={mockAvailableTimes}
                dispatch={mockDispatch}
                submitForm={mockSubmitForm}
            />
        );

        const dateInput = screen.getByLabelText(/Choose date/i);
        fireEvent.change(dateInput, { target: { value: "2025-12-31" } });

        // Verifies the reducer is called to update times
        expect(mockDispatch).toHaveBeenCalled();
    });
});
import { render, screen } from "@testing-library/react";
import { expect, test, vi } from "vitest"; // Add this for Vite
import BookingForm from "./BookingForm.jsx";

test('Renders the BookingForm heading', () => {
    const mockAvailableTimes = ["17:00", "18:00"];
    const mockDispatch = vi.fn(); // Use vi.fn() instead of jest.fn() in Vite

    render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} />);

    const labelElement = screen.getByText("Choose date:");
    expect(labelElement).toBeInTheDocument();
});
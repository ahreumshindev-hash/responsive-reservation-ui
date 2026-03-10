import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

describe("BookingForm HTML5 validation", () => {
  const props = {
    availableTimes: ["17:00", "18:00", "19:00"],
    dispatch: jest.fn(),
    submitForm: jest.fn(),
  };

  test("date input has correct validation attributes", () => {
    render(<BookingForm {...props} />);
    const dateInput = screen.getByLabelText(/choose date/i);

    expect(dateInput).toBeRequired();
    expect(dateInput).toHaveAttribute("type", "date");
  });

  test("time select has required attribute", () => {
    render(<BookingForm {...props} />);
    const timeSelect = screen.getByLabelText(/choose time/i);

    expect(timeSelect).toBeRequired();
  });

  test("guests input has correct validation attributes", () => {
    render(<BookingForm {...props} />);
    const guestsInput = screen.getByLabelText(/number of guests/i);

    expect(guestsInput).toBeRequired();
    expect(guestsInput).toHaveAttribute("type", "number");
    expect(guestsInput).toHaveAttribute("min", "1");
    expect(guestsInput).toHaveAttribute("max", "10");
  });

  test("occasion select has required attribute", () => {
    render(<BookingForm {...props} />);
    const occasionSelect = screen.getByLabelText(/occasion/i);

    expect(occasionSelect).toBeRequired();
  });
});

test("submit button is disabled when form is invalid", () => {
  render(<BookingForm {...props} />);
  const submitButton = screen.getByDisplayValue(/make your reservation/i);

  expect(submitButton).toBeDisabled();
});

test("phone input is required", () => {
  render(<BookingForm {...mockProps} />);
  const phone = screen.getByLabelText(/phone/i);

  expect(phone).toBeRequired();
});

test("email input is optional", () => {
  render(<BookingForm {...mockProps} />);
  const email = screen.getByLabelText(/email/i);

  expect(email).not.toBeRequired();
});
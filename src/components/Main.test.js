import { initializeTimes, updateTimes } from "./Main";

beforeEach(() => {
  global.fetchAPI = jest.fn(() => ["17:00", "18:00", "19:00"]);
});

afterEach(() => {
  jest.clearAllMocks();
});

test("initializeTimes returns a non-empty array", () => {
  const result = initializeTimes();

  expect(Array.isArray(result)).toBe(true);
  expect(result.length).toBeGreaterThan(0);
  expect(global.fetchAPI).toHaveBeenCalled();
});

test("updateTimes returns available times for the selected date", () => {
  const state = ["17:00"]; 
  const action = { type: "dateChanged", date: "2026-03-05" }; 
  const result = updateTimes(state, action);

  expect(global.fetchAPI).toHaveBeenCalledWith(new Date("2026-03-05"));
  expect(result).toEqual(["17:00", "18:00", "19:00"]);
});
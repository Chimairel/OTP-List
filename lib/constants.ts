import { day1, day2 } from "./numbers";

export const DAYS = [
  { value: 1, label: "DAY 1" },
  { value: 2, label: "DAY 2" },
  { value: 3, label: "DAY 3" },
];

export const OFFSETS = new Map([
  [1, 0],
  [2, day1.length],
  [3, day1.length + day2.length],
]);

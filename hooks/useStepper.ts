
import { useState, useMemo, useCallback } from "react";
import { day1, day2, day3 } from "../lib/numbers";
import { OFFSETS } from "../lib/constants";

export const useStepper = () => {
  const [day, setDay] = useState<number>(1);
  const [index, setIndex] = useState<number>(0);

  const currentList = useMemo(() => {
    if (day === 1) return day1;
    if (day === 2) return day2;
    return day3;
  }, [day]);

  const totalNumbers = useMemo(() => day1.length + day2.length + day3.length, []);

  const getGlobalNumber = useCallback(() => {
    const offset = OFFSETS.get(day) ?? 0;
    return offset + index + 1;
  }, [day, index]);

  return { day, setDay, index, setIndex, currentList, totalNumbers, getGlobalNumber };
};

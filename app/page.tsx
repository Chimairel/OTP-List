"use client";
import { useState, useCallback, useEffect, useRef } from "react";
import { DAYS } from "../lib/constants";
import { useStepper } from "../hooks/useStepper";
import { Layout } from "../components/layout";

export default () => {
  const { day, setDay, index, setIndex, currentList, totalNumbers, getGlobalNumber } = useStepper();
  const [toast, setToast] = useState<boolean>(false);
  const [direction, setDirection] = useState<"up" | "down" | null>(null);
  const prevIndexRef = useRef(index);

  useEffect(() => {
    if (index > prevIndexRef.current) {
      setDirection("up");
    } else if (index < prevIndexRef.current) {
      setDirection("down");
    } else {
      setDirection(null);
    }
    prevIndexRef.current = index;
  }, [index]);

  const copyNumber = useCallback(async () => {
    await navigator.clipboard.writeText(currentList[index]);
    setToast(true);
    setTimeout(() => setToast(false), 2000);
  }, [currentList, index]);

  return (
    <Layout>
      {/* Copy Toast */}
      <div className={`fixed top-8 transform transition-all duration-500 z-50 flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 text-white shadow-xl ${
        toast ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"
      }`}>
        <span className="text-sm font-bold tracking-wide">Copied!</span>
      </div>

      {/* Main Card */}
      <div className="w-full max-w-sm bg-white dark:bg-slate-900 rounded-[2.5rem] p-6 shadow-2xl border border-slate-200 dark:border-slate-800 transition-all">
        
        <header className="text-center mb-6">
          <h2 className="text-xl font-black text-slate-800 dark:text-white tracking-tight uppercase">
            Viewer
          </h2>
          <div className="h-1 w-10 bg-blue-500 mx-auto mt-1.5 rounded-full"></div>
        </header>

        <div className="space-y-6">
          
          <div className="space-y-1">
            <label className="text-[9px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] ml-2">
              Batch
            </label>
            <select
              onChange={(e) => { setDay(Number(e.target.value)); setIndex(0); }}
              value={day}
              className="w-full p-3 rounded-xl bg-slate-100 dark:bg-slate-800/50 ring-1 ring-slate-200 dark:ring-slate-700 text-slate-700 dark:text-slate-200 font-semibold focus:ring-2 focus:ring-blue-500 outline-none transition-all cursor-pointer appearance-none text-sm"
            >
              {DAYS.map((day) => (
                <option key={day.value} value={day.value}>
                  {day.label}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-center gap-2 pt-2">
            <button
              onClick={() => setIndex(index - 1)}
              disabled={index === 0}
              className="flex items-center justify-center h-12 w-12 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 disabled:opacity-20 disabled:grayscale transition-all active:scale-90"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Phone Display */}
            <div className="flex-auto relative h-28 overflow-hidden bg-slate-50 dark:bg-slate-950 rounded-2xl border-2 border-slate-100 dark:border-slate-800 shadow-inner">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-blue-500 rounded-full text-[9px] font-black text-white uppercase tracking-tighter z-10 shadow-sm">
                Active Number
              </div>
              <div
                key={index}
                className={`w-full h-full font-mono font-bold text-center text-slate-900 dark:text-blue-400 group flex flex-col items-center justify-center gap-2 transition-all duration-300
                  ${direction === "up" ? "animate-slide-up-in" : ""}
                  ${direction === "down" ? "animate-slide-down-in" : ""}
                `}
              >
                <div className="text-sm opacity-40 -mb-2">
                  {index > 0 ? `${index}. ${currentList[index - 1]}` : ""}
                </div>
                <div className="flex items-center gap-2 text-2xl">
                  <span>{`${index + 1}. ${currentList[index]}`}</span>
                  <button onClick={copyNumber} className="p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 transition-all active:scale-90">
                    <svg fill="none" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-slate-500 dark:text-slate-400">
                      <path d="M14.5 13.5V5.41a1 1 0 0 0-.3-.7L9.8.29A1 1 0 0 0 9.08 0H1.5v13.5A2.5 2.5 0 0 0 4 16h8a2.5 2.5 0 0 0 2.5-2.5m-1.5 0v-7H8v-5H3v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1M9.5 5V2.12L12.38 5zM5.13 5h-.62v1.25h2.12V5zm-.62 3h7.12v1.25H4.5zm.62 3h-.62v1.25h7.12V11z" clipRule="evenodd" fill="currentColor" fillRule="evenodd"/>
                    </svg>
                  </button>
                </div>
                <div className="text-sm opacity-40 -mt-2">
                  {index < currentList.length - 1 ? `${index + 2}. ${currentList[index + 1]}` : ""}
                </div>
              </div>
            </div>

            <button
              onClick={() => setIndex(index + 1)}
              disabled={index === currentList.length - 1}
              className="flex items-center justify-center h-12 w-12 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 disabled:opacity-20 disabled:grayscale transition-all active:scale-90"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>


          {/* Progress & Stats */}
          <div className="flex flex-col items-center gap-2 pt-2">
            <div className="flex justify-between w-full text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              <span>Progress</span>
              <span className="text-blue-500 dark:text-blue-400">{index + 1} / {currentList.length}</span>
            </div>
            <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
              <div 
                className="bg-blue-500 h-full transition-all duration-500 ease-out" 
                style={{ width: `${((index + 1) / currentList.length) * 100}%` }}
              />
            </div>
            <div className="text-[9px] font-medium text-slate-400 mt-1">
              GLOBAL: <span className="text-slate-900 dark:text-slate-100 font-bold">{getGlobalNumber()}</span> <span className="opacity-50">/</span> {totalNumbers}
            </div>
          </div>


        </div>
      </div>
    </Layout>
  );
}
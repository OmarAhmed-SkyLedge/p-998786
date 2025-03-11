
"use client";
import * as React from "react";
import { TimePickerColumn } from "./time-picker-column";

export const TimePickerWheels = () => {
  // Generate all 52 weeks
  const weeks = Array.from({ length: 52 }, (_, i) => `${i + 1}`);
  const years = ["2022", "2023", "2024", "2025", "2026", "2027", "2028"];

  const [selectedWeek, setSelectedWeek] = React.useState("41");
  const [selectedYear, setSelectedYear] = React.useState("2025");

  return (
    <div
      className="bg-blend-luminosity backdrop-blur-[50px] bg-[rgba(32,32,32,0.75)] 
                 flex items-stretch gap-8 text-[22px] text-white font-normal 
                 whitespace-nowrap text-center px-[30px] py-6 rounded-[32px] 
                 border-[1.4px] border-solid border-[rgba(255,255,255,0.25)]
                 shadow-lg"
      role="group"
      aria-label="Time Picker"
    >
      <div className="flex flex-col items-center">
        <div className="text-2xl text-white mb-2">Week</div>
        <div className="relative w-[80px]">
          <TimePickerColumn
            values={weeks}
            activeIndex={weeks.indexOf(selectedWeek)}
            onValueChange={setSelectedWeek}
          />
        </div>
      </div>

      <div className="flex flex-col items-center">
        <div className="text-2xl text-white mb-2">Year</div>
        <div className="relative w-[80px]">
          <TimePickerColumn
            values={years}
            activeIndex={years.indexOf(selectedYear)}
            onValueChange={setSelectedYear}
          />
        </div>
      </div>
    </div>
  );
};

export default TimePickerWheels;

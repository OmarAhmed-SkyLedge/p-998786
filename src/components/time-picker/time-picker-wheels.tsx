"use client";
import * as React from "react";
import { TimePickerColumn } from "./time-picker-column";

export const TimePickerWheels = () => {
  const weeks = ["38", "39", "40", "41", "42", "43", "44"];
  const years = ["2022", "2023", "2024", "2025", "2026", "2027", "2028"];

  const [selectedWeek, setSelectedWeek] = React.useState("41");
  const [selectedYear, setSelectedYear] = React.useState("2025");

  return (
    <div
      className="bg-blend-luminosity backdrop-blur-[50px] bg-[rgba(128,128,128,0.30)] 
                 flex items-stretch gap-4 text-[22px] text-white font-normal 
                 whitespace-nowrap text-center px-[15px] py-4 rounded-[32px] 
                 border-[1.4px] border-solid border-[rgba(255,255,255,0.40)]"
      role="group"
      aria-label="Time Picker"
    >
      <div className="text-2xl text-white self-center">Week</div>

      <div className="relative">
        <TimePickerColumn
          values={weeks}
          activeIndex={weeks.indexOf(selectedWeek)}
          onValueChange={setSelectedWeek}
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/0a841bbd70e041929849d4763144f95b/f6e83570bb3523be7274609088bacbce1676eeaa29434aac1e9d6b884d3559e0?placeholderIfAbsent=true"
          alt=""
          aria-hidden="true"
          className="aspect-[0.31] object-contain w-16 fill-[linear-gradient(0deg,rgba(94,94,94,0.06)_0%,rgba(94,94,94,0.06)_100%),rgba(255,255,255,0.04)] absolute left-0 right-0 mx-auto"
          style={{ top: "50%", transform: "translateY(-50%)" }}
        />
      </div>

      <TimePickerColumn
        values={years}
        activeIndex={years.indexOf(selectedYear)}
        onValueChange={setSelectedYear}
      />
    </div>
  );
};

export default TimePickerWheels;

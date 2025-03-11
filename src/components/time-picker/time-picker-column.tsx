import * as React from "react";
import { cn } from "@/lib/utils";

interface TimePickerColumnProps {
  values: string[];
  activeIndex?: number;
  label?: string;
  onValueChange?: (value: string) => void;
}

export const TimePickerColumn: React.FC<TimePickerColumnProps> = ({
  values,
  activeIndex = 3,
  label,
  onValueChange,
}) => {
  return (
    <div className="flex flex-col items-stretch">
      {label && <div className="text-2xl text-white mb-2">{label}</div>}
      <div
        role="listbox"
        aria-label={label}
        className="flex flex-col items-stretch justify-center"
      >
        {values.map((value, index) => (
          <div
            key={value}
            role="option"
            aria-selected={index === activeIndex}
            onClick={() => onValueChange?.(value)}
            className={cn(
              "cursor-pointer transition-all duration-200",
              index === activeIndex ? "text-white text-[29px]" : "text-[22px]",
            )}
          >
            {value}
          </div>
        ))}
      </div>
    </div>
  );
};

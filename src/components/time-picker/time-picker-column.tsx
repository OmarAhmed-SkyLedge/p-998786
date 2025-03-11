
import * as React from "react";
import { cn } from "@/lib/utils";

interface TimePickerColumnProps {
  values: string[];
  activeIndex: number;
  label?: string;
  onValueChange: (value: string) => void;
}

export const TimePickerColumn: React.FC<TimePickerColumnProps> = ({
  values,
  activeIndex,
  label,
  onValueChange,
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = React.useState(false);
  const [startY, setStartY] = React.useState(0);
  const [scrollOffset, setScrollOffset] = React.useState(0);
  
  const itemHeight = 40; // Height of each item in pixels
  const visibleItems = 5; // Number of visible items
  
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartY(e.clientY);
  };
  
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    
    const delta = e.clientY - startY;
    setScrollOffset(delta);
    
    // If scrolled enough to change the selected item
    if (Math.abs(delta) > itemHeight / 2) {
      const direction = delta > 0 ? -1 : 1;
      const newIndex = Math.min(Math.max(0, activeIndex - direction), values.length - 1);
      
      if (newIndex !== activeIndex) {
        onValueChange(values[newIndex]);
        setStartY(e.clientY);
        setScrollOffset(0);
      }
    }
  };
  
  const handleMouseUp = () => {
    setIsDragging(false);
    setScrollOffset(0);
  };
  
  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const direction = e.deltaY > 0 ? 1 : -1;
    const newIndex = Math.min(Math.max(0, activeIndex + direction), values.length - 1);
    
    if (newIndex !== activeIndex) {
      onValueChange(values[newIndex]);
    }
  };

  React.useEffect(() => {
    // Add event listeners to handle mouse events outside the component
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mousemove", handleMouseMove as unknown as EventListener);
    
    return () => {
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mousemove", handleMouseMove as unknown as EventListener);
    };
  }, [isDragging, startY, activeIndex]);
  
  return (
    <div className="flex flex-col items-stretch relative h-[200px]">
      {/* Gradient fade at top */}
      <div className="absolute top-0 left-0 right-0 h-[60px] bg-gradient-to-b from-[rgba(32,32,32,0.9)] to-transparent z-10 pointer-events-none" />
      
      <div
        ref={containerRef}
        role="listbox"
        aria-label={label}
        className="flex flex-col items-center justify-center h-full overflow-hidden"
        onWheel={handleWheel}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        style={{ cursor: isDragging ? "grabbing" : "grab" }}
      >
        <div 
          className="flex flex-col items-center transition-transform"
          style={{ 
            transform: `translateY(${scrollOffset}px)`,
          }}
        >
          {values.map((value, index) => {
            const distance = Math.abs(index - activeIndex);
            const isActive = index === activeIndex;
            
            // Calculate position so active item is in the middle
            const position = (index - activeIndex) * itemHeight;
            const opacity = 1 - Math.min(1, distance * 0.3);
            const scale = isActive ? 1 : Math.max(0.7, 1 - distance * 0.1);
            
            return (
              <div
                key={value}
                role="option"
                aria-selected={isActive}
                onClick={() => onValueChange(value)}
                className={cn(
                  "cursor-pointer transition-all duration-150 flex items-center justify-center h-[40px] absolute",
                  isActive ? "text-white text-[29px] font-medium" : "text-[22px] text-white/60"
                )}
                style={{ 
                  opacity,
                  transform: `translateY(${position}px) scale(${scale})`,
                  top: "50%",
                  marginTop: "-20px", // Half of itemHeight
                }}
              >
                {value}
              </div>
            );
          })}
        </div>
      </div>
      
      {/* Gradient fade at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-[60px] bg-gradient-to-t from-[rgba(32,32,32,0.9)] to-transparent z-10 pointer-events-none" />
    </div>
  );
};

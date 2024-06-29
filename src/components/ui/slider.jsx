import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";

const Slider = React.forwardRef(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={`relative flex items-center w-[80%] ${className}`} // Changed w-full to w-[90%]
    {...props}>
    <SliderPrimitive.Track
      className="relative h-[2px] w-full bg-[#D9D9D9] rounded-full overflow-hidden">
      <SliderPrimitive.Range className="absolute h-full w-full bg-white" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb
      className="block h-3 w-3 bg-[#D9D9D9] rounded-full border-0 shadow-md focus:outline-none focus:ring-1 focus:ring-blue focus:ring-offset-2" />
  </SliderPrimitive.Root>
));

Slider.displayName = "Slider";

export { Slider };

"use client";

import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";

import { cn } from "@/lib/utils";

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    minStepsBetweenThumbs={3}
    className={cn(
      "relative flex w-full touch-none select-none items-center",
      className
    )}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-0.5 desk:h-1 w-full grow overflow-hidden rounded-full bg-grey-20">
      <SliderPrimitive.Range className="absolute h-1.5 bg-green-50" />
    </SliderPrimitive.Track>
    {props?.value && (
      <SliderPrimitive.Thumb className="block relative h-5 desk:h-8 w-5 desk:w-8 rounded-full border-4 desk:border-8  border-grey-30 bg-green-50 ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
        <span className="absolute top-4 desk:top-7 left-1/2 -translate-x-3/4">{`$${props?.value[0]}`}</span>
      </SliderPrimitive.Thumb>
    )}
    {props?.value && (
      <SliderPrimitive.Thumb className="block relative h-5 desk:h-8 w-5 desk:w-8 rounded-full border-4 desk:border-8 border-grey-30 bg-green-50 ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
        <span className="absolute top-4 desk:top-7 left-1/2 -translate-x-1">{`$${props?.value[1]}`}</span>
      </SliderPrimitive.Thumb>
    )}
  </SliderPrimitive.Root>
));
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };

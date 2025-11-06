import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-4 rounded-lg bg-popover border border-border shadow-xl", className)}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center mb-4 pb-3 border-b border-border/50",
        caption_label: "text-base font-bold text-foreground tracking-wide",
        nav: "space-x-1 flex items-center",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "h-8 w-8 bg-background/50 p-0 opacity-80 hover:opacity-100 hover:bg-primary/20 hover:border-primary/60 hover:scale-110 transition-all duration-300 shadow-sm hover:shadow-md"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex mb-3",
        head_cell:
          "text-muted-foreground rounded-md w-10 h-8 font-bold text-[0.75rem] uppercase tracking-wider flex items-center justify-center",
        row: "flex w-full mt-2 gap-1",
        cell: "h-11 w-11 text-center text-sm p-0 relative rounded-lg [&:has([aria-selected].day-range-end)]:rounded-r-lg [&:has([aria-selected].day-outside)]:bg-accent/30 [&:has([aria-selected])]:bg-accent/20 first:[&:has([aria-selected])]:rounded-l-lg last:[&:has([aria-selected])]:rounded-r-lg focus-within:relative focus-within:z-20",
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "h-11 w-11 p-0 font-medium aria-selected:opacity-100 rounded-lg transition-all duration-300 hover:bg-primary/15 hover:text-primary hover:scale-110 active:scale-95"
        ),
        day_range_end: "day-range-end",
        day_selected:
          "bg-gradient-to-br from-primary to-primary/80 text-primary-foreground hover:from-primary/90 hover:to-primary/70 hover:text-primary-foreground focus:from-primary focus:to-primary/80 focus:text-primary-foreground shadow-lg scale-110 font-bold ring-2 ring-primary/30 ring-offset-2 ring-offset-background",
        day_today: "bg-primary/15 text-primary font-bold border-2 border-primary/50 shadow-sm",
        day_outside:
          "day-outside text-muted-foreground opacity-30 aria-selected:bg-accent/30 aria-selected:text-muted-foreground aria-selected:opacity-40",
        day_disabled: "text-muted-foreground opacity-20 cursor-not-allowed hover:bg-transparent hover:scale-100",
        day_range_middle:
          "aria-selected:bg-gradient-to-r aria-selected:from-primary/20 aria-selected:via-primary/15 aria-selected:to-primary/20 aria-selected:text-primary-foreground",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: ({ ..._props }) => <ChevronLeft className="h-4 w-4" />,
        IconRight: ({ ..._props }) => <ChevronRight className="h-4 w-4" />,
      }}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";

export { Calendar };

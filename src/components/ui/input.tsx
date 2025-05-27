import * as React from "react"

import { cn } from "@/lib/utils"

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type = "text", ...props }, ref) => {
        return (
            <input
                type={type}
                className={cn(
                    "flex h-10 w-full rounded-xl border border-input bg-main dark:bg-alter px-3 py-2 text-sm",
                    "file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground",
                    "border-2 border-main dark:border-alter",
                    "placeholder:text-muted-foreground focus-visible:border-main-dark dark:focus-visible:border-alter-light",
                    "focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50",
                    className
                )}
                ref={ref}
                {...props}
            />
        )
    }
)
Input.displayName = "Input"

export { Input }

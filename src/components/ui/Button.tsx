import React, { forwardRef } from "react";
import { cva } from "class-variance-authority";
import {
  Button as BaseButton,
  ButtonProps as BaseButtonProps,
} from "@nextui-org/button";

interface ButtonProps extends Omit<BaseButtonProps, "variant"> {
  children: React.ReactNode;
  variant?: BaseButtonProps["variant"] | "outline";
  roundness?: "square" | "round" | "pill";
  isFullWidth?: boolean;
  isExternal?: boolean;
  isLoading?: boolean;
}

const Button = forwardRef<typeof BaseButton, ButtonProps>(
  (
    {
      children,
      isFullWidth,
      isExternal,
      isLoading,
      variant,
      size,
      isDisabled,
      as,
      roundness,
      className,
      ...props
    },
    ref: any
  ) => {
    const classNameList: string[] = [
      "cursor-pointer",
      "whitespace-nowrap",
      "rounded-full",
      "border",
      "border-transparent",
      "shadow-sm",
      "hover:bg-opacity-90",
      "capitalize",
      // "focus:outline-none",
      // "focus:ring-2",
      // "focus:ring-indigo-400",
      // "focus:ring-offset-2",
      // "focus:ring-offset-indigo-50",
      "font-semibold",
      "rounded-full",
      "inline-flex",
      "flex-shrink-0",
      "items-center",
      "justify-center",
      "transition-colors",
      "ease-in-out",
      "duration-500",
    ];

    if (isFullWidth) classNameList.push("w-full");

    // handle variants
    const ButtonVariants = cva(
      /* button base style */
      "h-fit text-white uppercase transition-colors duration-150",
      {
        variants: {
          /* button colors */
          intent: {
            solid: "bg-green-500 hover:bg-green-600",
            bordered: "bg-red-500 hover:bg-red-600",
            light: "bg-gray-500 hover:bg-gray-600",
            flat: "bg-[#9eafbf] hover:text-white",
            faded: "bg-[#9eafbf] hover:text-white",
            shadow: "bg-[#9eafbf] hover:text-white",
            ghost: "bg-[#9eafbf] hover:text-white",
            outline: "bg-[#9eafbf] hover:text-white",
          },

          /* button sizes */
          size: {
            sm: ["text-sm", "py-1", "px-2"],
            md: ["text-base", "py-2", "px-4"],
            lg: ["text-lg", "py-4", "px-8"],
          },

          /* button roundness */
          roundness: {
            square: "rounded-none",
            round: "rounded-md",
            pill: "rounded-full",
          },
        },

        // defaults
        defaultVariants: {
          intent: "solid",
          size: "md",
          roundness: "round",
        },
      }
    );

    if (isDisabled || isLoading) {
      classNameList.push("disabled", "opacity-50", "cursor-not-allowed");
    }

    const classes = classNameList.join(" ");

    const loaderClasses = `animate-spin rounded-full ${
      size === "sm" ? "h-3 w-3" : "h-5 w-5"
    }`;

    const Loading: React.FC = () => {
      return (
        <div
          role="status"
          className="inline-flex cursor-not-allowed rounded-md pr-3"
        >
          <svg
            className={loaderClasses}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        </div>
      );
    };
    const styledClasses = `${classes} ${ButtonVariants({
      intent: variant,
      size,
      roundness,
    })} ${className}`;
    const Element = as ? (
      React.createElement(
        as,
        {
          className: styledClasses,
          target: isExternal ? "_blank" : undefined,
          rel: isExternal ? "noopener noreferrer" : undefined,
          ref,
          ...props,
        },
        children
      )
    ) : (
      <BaseButton
        {...props}
        className={styledClasses}
        ref={ref}
        disabled={isDisabled}
        disableRipple
      >
        {isLoading && <Loading />}
        {children}
      </BaseButton>
    );

    return Element;
  }
);
Button.displayName = "Button";

export { Button };

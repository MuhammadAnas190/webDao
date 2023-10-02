import React, { forwardRef } from "react";
import { cva } from "class-variance-authority";

interface TypographyProps {
  children: React.ReactNode;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  type?: "primary" | "secondary" | "warning" | "danger" | "disabled";
  italic?: boolean;
  strong?: boolean;
  isDisabled?: boolean;
  className?: string;
  onClick?: () => void;
}

const Typography = ({
  children,
  className = "",
  as = "p",
  italic,
  strong,
  type,
  isDisabled,
  onClick,
  ...props
}: TypographyProps) => {
  const classNameList: string[] = [];

  if (italic) {
    classNameList.push("italic");
  }
  if (strong) {
    classNameList.push("font-bold");
  }

  // handle variants
  const TypographyVariants = cva(
    /* Typography base style */
    "h-fit",
    {
      variants: {
        /* Typography colors */
        intent: {
          primary: "text-white",
          secondary: "text-blue",
          warning: "text-yellow",
          danger: "text-red",
          disabled: "disabled opacity-50",
        },

        /* Typography sizes */
        as: {
          h1: ["text-5xl", "p-2"],
          h2: ["text-4xl", "p-2"],
          h3: ["text-3xl", "p-2"],
          h4: ["text-2xl", "p-2"],
          h5: ["text-1xl", "p-2"],
          h6: ["text-xl", "p-2"],
          p: ["text-base", "p-1"],
          span: ["text-sm", "p-1"],
        },
      },

      // defaults
      defaultVariants: {
        intent: "primary",
        as: "p",
      },
    }
  );

  const styledClasses = `${classNameList.join(" ")} ${TypographyVariants({
    intent: type,
    as,
  })} ${className}`;

  const Element = React.createElement(
    as,
    {
      className: styledClasses,
      onClick,
      ...props,
    },
    children
  );

  return Element;
};

Typography.displayName = "Typography";

export { Typography };

import {
  RadioGroup as BaseRadioGroup,
  Radio as BaseRadio,
  RadioGroupProps as BaseRadioGroupProps,
  RadioProps as BaseRadioProps,
} from "@nextui-org/radio";
import { cva } from "class-variance-authority";

interface RadioGroupProps extends BaseRadioGroupProps {
  type?: "card";
}
interface RadioProps extends BaseRadioProps {
  type?: "card";
}

const RadioGroup = ({ type, ...props }: RadioGroupProps) => {
  const RadioGroupVariants = cva(
    /* RadioGroup base style */
    "h-fit",
    {
      variants: {
        /* RadioGroup colors */
        intent: {
          card: "py-4 px-4",
        },
      },

      // defaults
      defaultVariants: {
        intent: "card",
      },
    }
  );
  return (
    <BaseRadioGroup
      classNames={{
        base: RadioGroupVariants({ intent: type }),
      }}
      {...props}
    />
  );
};

RadioGroup.displayName = "RadioGroup";

// eslint-disable-next-line react/display-name
RadioGroup.Radio = ({ type, ...props }: RadioProps) => {
  const RadioVariants = cva("", {
    variants: {
      intent: {
        card: [
          "inline-flex m-0 bg-content1 hover:bg-content2 items-center justify-between radio-button",
          "max-w-[300px] cursor-pointer rounded-lg gap-4 p-4 border-2 border-dashed",
          "data-[selected=true]:border-primary data-[selected=true]:border-solid",
        ],
      },
    },
  });

  return (
    <BaseRadio
      {...props}
      classNames={{
        base: RadioVariants({ intent: type }),
      }}
    />
  );
};

export { RadioGroup };

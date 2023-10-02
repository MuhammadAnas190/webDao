import { Button } from "@/components/ui/Button";
import { Typography } from "@/components/ui/Typography";
import { RadioGroup } from "@/components/ui/RadioGroup";
import { Circle } from "./Circle";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <Circle />
      <div className="absolute inset-0 flex flex-col items-center justify-center mx-auto max-w-5xl px-4">
        <Typography as="h3">Governance escape velocity</Typography>
        <Typography className="w-[440px] text-center my-4">
          Bespoke decision making and management solutions for equitable and
          efficient organizations and communities.
        </Typography>
        <Link href={"dao/new"}>
          <Button className="mt-4" variant="solid" radius="full" isFullWidth>
            Create a DAO
          </Button>
        </Link>
        <RadioGroup type="card" orientation="horizontal">
          <RadioGroup.Radio type="card" value="name1">
            Label
          </RadioGroup.Radio>
          <RadioGroup.Radio type="card" value="name2">
            Label
          </RadioGroup.Radio>
          <RadioGroup.Radio type="card" value="name3">
            Label
          </RadioGroup.Radio>
        </RadioGroup>
      </div>
    </>
  );
}

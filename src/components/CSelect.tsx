import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import * as React from "react";
import { ClassNameValue, twMerge } from "tailwind-merge";

type SelectValue = {
  value: string;
  lable: string;
};

interface ICSelectProps {
  placeholder?: string;
  options?: Array<any>;
  className?: ClassNameValue;
  onChange?: (params: any) => any;
}

const CSelect: React.FunctionComponent<ICSelectProps> = (
  { options, placeholder, className, onChange },
  props
) => {
  return (
    <Select onValueChange={onChange}>
      <SelectTrigger className={twMerge('w-full', className)}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {options?.map((v, i) => (
          <SelectItem key={v.value ?? `key-${i}`} value={v.value}>
            {v.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default CSelect;

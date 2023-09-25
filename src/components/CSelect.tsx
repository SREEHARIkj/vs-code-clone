import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import * as React from "react";

type SelectValue = {
  value: string;
  lable: string;
};

interface ICSelectProps {
  placeholder?: string;
  options?: Array<any>;
  className?: ClassDecorator;
  onChange?: (params: any) => any;
}

const CSelect: React.FunctionComponent<ICSelectProps> = (
  { options, placeholder, className, onChange },
  props
) => {
  return (
    <Select onValueChange={onChange}>
      <SelectTrigger className={`${className} w-full`}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {options?.map((v) => (
          <SelectItem value={v.value}>{v.label}</SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default CSelect;

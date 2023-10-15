import * as React from "react";
import { ClassNameValue, twMerge } from "tailwind-merge";

interface ITextProps {
  children: React.ReactNode | string;
  className?: ClassNameValue | string;
  onClick?: (...params: any) => any;
}

const Heading: React.FunctionComponent<ITextProps> = (
  { children, className, onClick },
  props
) => {
  return (
    <div
      className={twMerge(className, `cursor-pointer select-none`)}
      onClick={() => onClick?.()}
      {...props}
    >
      {children}
    </div>
  );
};

const Text: React.FunctionComponent<ITextProps> = (
  { children, className, onClick },
  props
) => {
  return (
    <div
      className={`${className} cursor-pointer select-none`}
      onClick={() => onClick?.()}
      {...props}
    >
      {children}
    </div>
  );
};

export { Text, Heading };

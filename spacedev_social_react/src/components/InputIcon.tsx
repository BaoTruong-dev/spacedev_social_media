/* eslint-disable react-refresh/only-export-components */
import { FC, forwardRef } from "react";

interface InputIconType {
  icon?: JSX.Element;
  type?: string;
  placeHolder?: string;
  className?: string;
  error?: string;
}

function InputIcon(
  {
    icon,
    type = "text",
    placeHolder,
    className,
    error,
    ...props
  }: InputIconType,
  ref: React.LegacyRef<HTMLInputElement> | undefined
) {
  return (
    <div>
      <div className="relative p-2.5 border gap-2  dark:border-slate-700 border-solid rounded text-center text-gray-900 dark:text-white flex items-center ">
        {icon}
        <input
          ref={ref}
          {...props}
          type={type}
          placeholder={placeHolder}
          className={`border-none outline-none ${className} w-full`}
        />
      </div>
      {error && <div className="text-sm text-red-500">{error}</div>}
    </div>
  );
}

export default forwardRef(InputIcon);

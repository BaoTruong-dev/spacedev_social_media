import { FC } from "react";
import { cn } from "../../utils";

export const Icon: FC<any> = ({transparent, className, ...props}) => {
  return (
    <div
      className={cn(
        "dark:text-white dark:hover:bg-slate-700 dark:bg-slate-800 text-gray-600 rounded-full w-8 h-8 flex items-center justify-center cursor-pointer hover:bg-gray-200 bg-gray-100",
        {'bg-transparent dark:bg-transparent': transparent},
        className,
      )}
      {...props}
    >
      {props.children}
    </div>
  );
};

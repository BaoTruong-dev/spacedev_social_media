import { FC } from "react";
import { cn } from "../utils";
export const Card: FC<{
  children?: any;
  title?: string;
  action?: any;
  className?: string;
}> = (props) => {
  return (
    <div className={cn("dark:bg-slate-900 bg-white rounded-lg px-3 py-4", props.className)}>
      {props.title && (
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-lg ">{props.title}</h2>
          {props.action}
        </div>
      )}
      {props.children}
    </div>
  );
};

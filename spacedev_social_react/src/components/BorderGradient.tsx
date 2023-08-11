import { FC } from "react";
import { cn } from "../utils";
export const BorderGradient: FC<any> = (props) => {
  return (
    <div className="bg-gradient-to-r from-purple-500  via-pink-500 to-blue-500 p-0.5 rounded-full">
      <div className={cn(props.className)}>{props.children}</div>
    </div>
  );
};

import { FC, useId } from "react";
import { cn } from "../utils";

export const Avatar: FC<{
  size?: number;
  border?: boolean;
  online?: boolean;
  showStatus?: boolean;
  url?: string;
}> = ({ size = 32, ...props }) => {
  const id = useId();
  return (
    <div
      className={cn("relative h-fit h-8 w-8 cursor-pointer rounded-full", {
        "shadow-[0_0_0_2px_white] dark:shadow-slate-950": props.border,
      })}
      style={{ width: size, height: size }}
    >
      <div className={cn("rounded-full overflow-hidden")}>
        <img
          alt=""
          className="w-full h-full"
          src={
            props.url
              ? props.url
              : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
          }
        />
      </div>
      {props.showStatus && (
        <span className="block w-2 h-2 rounded-full bg-green-500 absolute bottom-0 right-0 shadow-[0_0_0_2px_white] dark:shadow-slate-900"></span>
      )}
    </div>
  );
};

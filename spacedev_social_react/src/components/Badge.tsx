import { FC } from "react";

export const Badge: FC<{ count?: number; children?: any }> = ({ ...props }) => {
  return (
    <div className="relative">
      {props.children}
      {props.count && (
        <span className="absolute -top-2 -right-2 bg-red-600 text-white w-5 h-5 rounded-full flex items-center justify-center font-semibold text-small ">
          {props.count}
        </span>
      )}
    </div>
  );
};

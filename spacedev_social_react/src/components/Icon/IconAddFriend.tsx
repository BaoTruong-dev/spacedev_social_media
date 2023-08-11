import { FC } from "react";
import { Icon } from "./Icon";
import { cn } from "../../utils";

export const IconAddFriend: FC<{ disabled?: boolean }> = (props) => {
  return (
    <Icon className={cn("text-purple-500 bg-purple-50 hover:bg-purple-100", {
      '!text-gray-400 !bg-gray-100 pointer-events-none dark:!bg-transparent': props.disabled
    })}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-user-plus"
        width={17}
        height={17}
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
        <path d="M16 19h6" />
        <path d="M19 16v6" />
        <path d="M6 21v-2a4 4 0 0 1 4 -4h4" />
      </svg>
    </Icon>
  );
};

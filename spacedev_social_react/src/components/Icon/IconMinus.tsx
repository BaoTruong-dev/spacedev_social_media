import { FC } from "react";
import { Icon } from "./Icon";

export const ButtonIconMinus: FC<any> = (props) => {
    return <Icon {...props}>
        <IconMinus />
    </Icon>
}

export const IconMinus = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-minus"
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
      <path d="M5 12l14 0" />
    </svg>
  );
};

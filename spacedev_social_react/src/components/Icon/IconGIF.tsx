import { FC } from "react";
import { Icon } from "./Icon";
export const ButtoniconGIF: FC<any> = (props) => {
  return (
    <Icon {...props}>
      <IconGIF />
    </Icon>
  );
};

export const IconGIF = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-gif"
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
      <path d="M8 8h-3a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h3v-4h-1" />
      <path d="M12 8v8" />
      <path d="M16 16v-8h5" />
      <path d="M20 12h-4" />
    </svg>
  );
};

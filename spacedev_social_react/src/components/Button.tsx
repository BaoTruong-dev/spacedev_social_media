import { ConfigProvider, Spin } from "antd";
import { FC } from "react";
import { cn } from "../utils";

const typeClass = {
  default:
    "hover:bg-gray-200 dark:hover:bg-slate-700 text-gray-900  dark:bg-slate-800 dark:text-white bg-gray-100 hover:bg-gray-200",
  primary: "bg-primary bg-opacity-90 hover:bg-opacity-100 text-white",
  link: "",
  red: "bg-red-700 bg-opacity-90 hover:bg-opacity-100 text-white",
};

const sizeClass = {
  small: "text-xs px-2 leading-7 text-sm",
  default: "text-sm px-3 leading-9",
  large: "px-5 leading-12 text-lg",
};

export interface ButtonProps {
  children: any;
  className?: string;
  type?: "default" | "primary" | "link" | "red";
  disabled?: boolean;
  size?: "small" | "default" | "large";
  outline?: boolean;
  onClick?: () => void;
}

export const Button: FC<ButtonProps> = ({
  size = "default",
  type = "default",
  ...props
}) => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Spin: {
            colorPrimary: "white",
          },
        },
      }}
    >
      <button
        {...props}
        className={cn(
          "font-semibold rounded border-current border-solid cursor-pointer",
          props.className,
          sizeClass[size],
          typeClass[type],
          {
            "pointer-events-none opacity-50": props.disabled,
          }
        )}
      >
        <Spin spinning={Boolean(props.disabled)} className="mr-2" />
        {props.children}
      </button>
    </ConfigProvider>
  );
};

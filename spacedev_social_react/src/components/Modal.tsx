import { FC, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { IconClose } from "./Icon/IconClose";
import { cn } from "../utils";

export interface ModalProps {
  open?: boolean;
  onCancel?: () => void;
  children?: any;
  title?: any;
  overlayCloseable?: boolean;
  width?: number;
  hideIconClose?: boolean;
  className?: string;
}

export const Modal: FC<ModalProps> = ({ width, ...props }) => {
  const checkClickInsideRef = useRef(false);
  useEffect(() => {
    if (props.open) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [props.open]);

  if (!props.open) return null;

  return createPortal(
    <div
      onClick={(ev) => {
        if (props.overlayCloseable && !checkClickInsideRef.current) {
          props.onCancel?.();
        }
        checkClickInsideRef.current = false;
      }}
      className={
        "px-3 z-20 flex items-center justify-center bg-black !bg-opacity-60 fixed top-0 left-0 w-full h-full"
      }
    >
      <div
        className={cn(
          "bg-white rounded-lg text-gray-900 dark:bg-slate-900 dark:text-white overflow-hidden",
          props.className
        )}
        onClick={(ev) => {
          ev.stopPropagation();
          checkClickInsideRef.current = false;
        }}
        onMouseDown={() => (checkClickInsideRef.current = true)}
        style={{ width }}
      >
        <div className="relative">
          {props.title && (
            <h2 className="p-3 text-2xl font-bold text-center border-b border-gray-300 border-solid dark:border-slate-700">
              {props.title}
            </h2>
          )}
          {!props.hideIconClose && (
            <div className="absolute right-3 top-3">
              <IconClose
                onClick={props.onCancel}
                transparent
                className="!text-gray-700 dark:!text-slate-300 dark:hover:bg-gray-200 dark:hover:!bg-slate-700"
              />
            </div>
          )}
        </div>
        {props.children}
      </div>
    </div>,
    document.body
  );
};

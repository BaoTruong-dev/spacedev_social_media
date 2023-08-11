import { FC, startTransition, useEffect, useId, useRef, useState } from "react";
import { cn } from "../utils";
import { createPortal } from "react-dom";
import { IconArrow } from "./Icon/IconArrow";

const container = document.createElement("div");
interface Position {
  top?: number;
  left?: number;
  right?: number;
  bottom?: number;
}

export interface DropdownProps {
  children?: any;
  className?: string;
  content?: any;
  arrow?: boolean;
  placement?:
    | "top"
    | "bottom"
    | "left"
    | "right"
    | "topLeft"
    | "topRight"
    | "bottomLeft"
    | "bottomRight";
  getPopupContainer?: (parentNode: HTMLDivElement) => HTMLElement;
  popupClassName?: string;
  allowToggle?: boolean;
}

export const Dropdown: FC<DropdownProps> = ({
  arrow = false,
  placement = "bottomLeft",
  allowToggle = true,
  ...props
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [position, setPosition] = useState<Position>({
    top: -99999,
    left: -99999,
  });
  useEffect(() => {
    if (ref.current) {
      let container = props?.getPopupContainer?.(ref.current);

      let { top, left, height, right } =
        container?.getBoundingClientRect() ||
        ref.current.getBoundingClientRect();

      let pos: Position = {};
      if (placement === "bottomLeft") {
        pos = {
          top: top + height,
          left,
        };
      } else if (placement === "bottomRight") {
        pos = {
          top: top + height,
          right: window.innerWidth - right,
        };
      }

      if (!props.getPopupContainer && typeof pos.top !== "undefined") {
        pos.top += window.scrollY;
      }

      setPosition(pos);
    }

    if (open) {
      const event = () => {
        setOpen(false);
      };

      window.addEventListener("click", event);

      return () => {
        window.removeEventListener("click", event);
      };
    }
  }, [open, placement]);

  return (
    <>
      <div
        onClick={(ev) => {
          if (allowToggle) {
            startTransition(() => {
              setOpen(!open);
            });
          } else {
            if (open) {
              ev.stopPropagation();
            }

            startTransition(() => {
              setOpen(true);
            });
          }
        }}
        ref={ref}
        className={cn("flex gap-1 items-center", props.className)}
      >
        {props.children}
        {arrow && <IconArrow transparent />}
      </div>
      {open &&
        createPortal(
          <div
            onClick={(ev) => ev.stopPropagation()}
            style={{ ...position }}
            className={cn(
              "absolute p-2 dark:bg-slate-800 bg-white rounded-lg z-1 shadow-[5px_5px_15px_rgba(0,0,0,0.5)]",
              props.popupClassName
            )}
          >
            {props.content}
          </div>,
          props?.getPopupContainer?.(ref.current || container) || document.body
        )}
    </>
  );
};

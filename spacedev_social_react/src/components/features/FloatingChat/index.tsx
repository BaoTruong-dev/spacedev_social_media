import { FC, useState } from "react";
import { Avatar } from "../../Avatar";
import { Button } from "../../Button";
import { IconClose } from "../../Icon/IconClose";
import { ButtoniconEmotion } from "../../Icon/IconEmotion";
import { ButtoniconGIF } from "../../Icon/IconGIF";
import { ButtoniconMaximize, IconMaximize } from "../../Icon/IconMaximize";
import {
  ButtonIconThreeDotAction,
  IconThreeDotAction,
} from "../../Icon/IconThreeDotAction";
import { ButtonIconUploadImage } from "../../Icon/IconUploadImage";
import { cn } from "../../../utils";
import { Icon } from "../../Icon/Icon";
import { IconMinimize } from "../../Icon/IconMinimize";
import { ButtonIconMinus, IconMinus } from "../../Icon/IconMinus";
import { IconPlus } from "../../Icon/IconPlus";

export const FloatingChat = () => {
  return (
    <div className="fixed bottom-0 right-3 flex gap-3 items-end">
      <ChatScreen />
      <ChatScreen />
    </div>
  );
};

const fullScreenClass = "h-[600px] w-[550px]";
const isHideClass =
  "h-[49px] w-[200px] [&_.main]:hidden [&_.footer]:hidden cursor-pointer";

export const ChatScreen: FC = (props) => {
  const [value, setValue] = useState("");
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isHide, setIsHide] = useState(false);

  return (
    <div
      className={cn(
        "transition-all duration-200 rounded-b-none shadow-[0_4px_5px_rgba(0,0,0,.5)] flex flex-col border border-solid border-b-0 border-gray-300 bg-white dark:bg-slate-900 dark:border-slate-700 text-gray-900 dark:text-white h-[400px] w-[350px] rounded-lg overflow-hidden",
        {
          [fullScreenClass]: isFullScreen,
          [isHideClass]: isHide,
        }
      )}
    >
      <div
        onClick={() => setIsHide(false)}
        className="[&_.actions]:hover:opacity-100 flex gap-3 items-center p-2 border-b border-solid border-gray-300 dark:border-slate-700"
      >
        <Avatar />
        <h3 className="flex-1 font-bold text-sm">Katherine Jordan</h3>
        <div className="flex gap-0.5 items-center">
          <ButtonIconThreeDotAction transparent className="actions opacity-0" />
          <Icon transparent onClick={() => setIsFullScreen(!isFullScreen)}>
            {isFullScreen ? <IconMinimize /> : <IconMaximize />}
          </Icon>
          <Icon
            transparent
            onClick={(ev: any) => {
              ev.stopPropagation();
              setIsFullScreen(false);
              setIsHide(!isHide);
            }}
          >
            {isHide ? <IconPlus /> : <IconMinus />}
          </Icon>

          <IconClose size={17} transparent />
        </div>
      </div>
      <div className="flex-1 main">
        <div className="flex gap-2 items-center p-2">
          <Avatar size={50} />
          <div className="">
            <h3 className="font-bold text-sm">Hunter Gonzales</h3>
            <p className="text-sm text-black dark:text-white text-opacity-70">
              Lập trình viên
            </p>
          </div>
        </div>
        <div className="text-center text-sm my-4 text-white text-opacity-90">
          Thứ sáu, 11/05/2023
        </div>
        <div></div>
      </div>
      <div className="footer border-t border-solid border-gray-300 dark:border-slate-700 p-3">
        <div className="p-2 max-h-[150px] overflow-auto bg-gray-200 rounded dark:bg-slate-700">
          <div
            onInput={(ev) => {
              if (ev.currentTarget.innerHTML === "<br>") {
                ev.currentTarget.innerHTML = "";
              }
              setValue(ev.currentTarget.innerHTML);
            }}
            contentEditable
            placeholder="Write a message..."
            className="min-h-[50px] outline-none after:text-gray-500 dark:after:text-slate-400 after:empty:content-[attr(placeholder)]"
          ></div>
        </div>
      </div>
      <div className="flex items-center border-t dark:border-slate-700 border-gray-300 py-1 px-2">
        <div className="flex items-center">
          <ButtonIconUploadImage transparent />
          <ButtoniconGIF transparent />
          <ButtoniconEmotion transparent />
        </div>
        <div className="ml-auto flex items-center">
          <Button
            type={value ? "primary" : "default"}
            disabled={!value}
            className="rounded-full px-5"
            size="small"
          >
            Send
          </Button>
          <ButtonIconThreeDotAction transparent />
        </div>
      </div>
    </div>
  );
};

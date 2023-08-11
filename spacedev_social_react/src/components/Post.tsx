import { FC, useState } from "react";
import { Avatar } from "./Avatar";
import { IconBookmark } from "./Icon/IconBookmark";
import { IconComment } from "./Icon/IconComment";
import { ButtonIconHeart } from "./Icon/IconHeart";
import { IconShare } from "./Icon/IconShare";
import {
  ButtonIconThreeDotAction,
  IconThreeDotAction,
} from "./Icon/IconThreeDotAction";
import { Modal, ModalProps } from "./Modal";
import { Button } from "./Button";

export const Post = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <ModalDetail
        overlayCloseable
        open={open}
        onCancel={() => setOpen(false)}
      />
      <div className="rounded-lg bg-white pb-4 dark:bg-slate-900">
        <div className="flex items-center gap-2 p-4">
          <Avatar />
          <div className="flex-1 -mt-1">
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
              Lucas Nash
            </h4>
            <p className="text-gray-500 text-xs">New York City, NY</p>
          </div>
          <div>
            <ButtonIconThreeDotAction className="bg-transparent" />
          </div>
        </div>
        <div className="p-1 overflow-hidden flex items-center">
          <a
            className="w-full"
            href="#"
            onClick={(ev) => {
              ev.preventDefault();
              setOpen(true);
            }}
          >
            <img
              className="w-full h-full object-cover"
              src={`https://unsplash.it/1000/500?t=${Math.random()}`}
            />
          </a>
        </div>
        <div className="flex items-center justify-between p-3">
          <div className="flex gap-0.5 ">
            <ButtonIconHeart />
            <IconComment />
            <IconShare />
          </div>
          <div>
            <IconBookmark />
          </div>
        </div>
        <div className="flex px-5 gap-2 items-center">
          <div>
            <Avatar size={27} border/>
          </div>
          <div className="-ml-2">
            <Avatar size={27} border/>
          </div>
          <div className="-ml-2">
            <Avatar size={27} border/>
          </div>
          <p className="text-sm">
            Liked by <b>Sue Franklin</b> and <b>1,993 others</b>
          </p>
        </div>
        <p className="px-5 mt-4 text-sm">
          <b>Dean Atkins</b>
          We know the voices in our heads aren't real, but sometimes their ideas
          are just too good to ignore.
        </p>
      </div>
    </>
  );
};

const ModalDetail: FC<ModalProps> = (props) => {
  const [value, setValue] = useState("");
  return (
    <Modal {...props} className="w-full max-h-[500px] h-full max-w-[900px] m-3" hideIconClose>
      <div className="flex h-full">
        <div className="flex-1 w-1 bg-black items-center flex">
          <img
            className="object-contain"
            src={`https://unsplash.it/1000/500?t=${Math.random()}`}
          />
        </div>
        <div className="flex-1 w-1 flex flex-col">
          <div className="flex gap-2 p-3 border-b border-solid border-gray-300">
            <Avatar size={40} />
            <div className="flex flex-col flex-1">
              <h3 className="text-sm font-bold">Augusta Romero</h3>
              <time className="text-gray-500 text-xs">3 month ago</time>
            </div>
            <div className="flex">
              <ButtonIconHeart />
              <IconShare />
              <IconBookmark />
              <ButtonIconThreeDotAction transparent />
            </div>
          </div>
          <div className="flex-1">
            <div className="flex gap-3 p-3 items-center [&_.icon-action]:hover:opacity-100">
              <Avatar />
              <div className="flex-1">
                <h3 className="text-sm font-bold">Nelle Pena</h3>
                <div className="flex gap-2 text-xs">
                  <time className="">3 phút trước</time>
                  <a href="#" className="font-bold">
                    2 Like
                  </a>
                  <a href="#" className="font-bold">
                    Reply
                  </a>
                  <IconThreeDotAction className="ml-4 cursor-pointer icon-action opacity-0" />
                </div>
              </div>
              <ButtonIconHeart className="icon-action opacity-0" />
            </div>
            <div className="flex gap-3 p-3 [&_.icon-action]:hover:opacity-100">
              <Avatar />
              <div className="flex-1">
                <h3 className="text-sm font-bold">Nelle Pena</h3>
                <div className="flex gap-2 text-xs ">
                  <time className="">3 phút trước</time>
                  <a href="#" className="font-bold">
                    2 Like
                  </a>
                  <a href="#" className="font-bold">
                    Reply
                  </a>
                  <IconThreeDotAction className="ml-4 cursor-pointer icon-action opacity-0" />
                </div>
                <div className="text-gray-400 flex items-baseline gap-2 cursor-pointer text-xs font-bold mt-4 before:content-normal before:block before:w-8 before:h-[1px] before:bg-gray-400">
                  View replies (10)
                </div>
              </div>
              <ButtonIconHeart className="icon-action opacity-0" />
            </div>
          </div>
          <div className="">
            <div className="border-t border-solid border-gray-300 flex">
              <input
                value={value}
                onChange={(ev) => setValue(ev.target.value)}
                placeholder="Add a comment..."
                className="outline-0 text-sm px-2 py-3 flex-1 bg-transparent"
              />
              <Button
                type={value ? "primary" : "default"}
                disabled={!value}
                className="rounded-none !px-10"
              >
                Send
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

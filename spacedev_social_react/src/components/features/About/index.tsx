import { FC } from "react";
import { Modal, ModalProps } from "../../Modal";
import { Avatar } from "../../Avatar";
import { ButtonIconUser, IconUser } from "../../Icon/IconUser";
import { IconNotification } from "../../Icon/IconNotification";
import { IconApp } from "../../Icon/IconApp";
import { IconWorld } from "../../Icon/IconWorld";
import { ButtonIconCamera } from "../../Icon/IconCamera";

export const ModalAbout: FC<ModalProps> = (props) => {
  return (
    <Modal {...props} title="About">
      <div className="w-[900px] flex min-h-[700px]">
        <div className="bg-gray-50 w-[250px] dark:bg-slate-800 dark:bg-opacity-50">
          <h2 className="font-semibold text-sm p-3">Account</h2>
          <div className="px-3">
            <div className="flex gap-2 items-center">
              <Avatar />
              <div>
                <h3 className="text-sm font-bold ">Đặng Thuyền Vương</h3>
                <p className="text-xs text-gray-500">
                  dangthuyenvuong@gmail.com
                </p>
              </div>
            </div>
          </div>
          <div className="px-0.5 flex flex-col gap-0.5 mt-3">
            <a
              href="#"
              className="flex gap-2 items-center hover:bg-black hover:bg-opacity-10 py-1 rounded px-2.5"
            >
              <IconUser />
              <span className="text-sm">My account</span>
            </a>
            <a
              href="#"
              className="flex gap-2 items-center hover:bg-black hover:bg-opacity-10 py-1 rounded px-2.5"
            >
              <IconNotification />
              <span className="text-sm">My notifications & settings</span>
            </a>
            <a
              href="#"
              className="flex gap-2 items-center hover:bg-black hover:bg-opacity-10 py-1 rounded px-2.5"
            >
              <IconApp />
              <span className="text-sm">My connections</span>
            </a>
            <a
              href="#"
              className="flex gap-2 items-center hover:bg-black hover:bg-opacity-10 py-1 rounded px-2.5"
            >
              <IconWorld />
              <span className="text-sm">Language & region</span>
            </a>
          </div>
        </div>
        <div className="flex-1 px-10">
          <h2 className="font-bold py-5 border-b border-solid border-gray-300 dark:border-slate-700">
            My Account
          </h2>
          <div className="flex gap-4 mt-3">
            <div className="relative">
              <Avatar size={70} />
              <div className="absolute -right-1 -bottom-1">
                <ButtonIconCamera />
              </div>
            </div>
            <div className="flex gap-2 flex-col">
              Họ và tên
              <input
                type="text"
                placeholder="Họ và tên"
                value="Đặng Thuyền Vương"
                className="outline-none bg-gray-100 px-2 rounded border border-solid border-gray-300 text-sm py-1 w-60 dark:bg-slate-800 dark:border-slate-700"
              />
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

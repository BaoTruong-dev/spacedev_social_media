import { FC, useEffect, useRef, useState } from "react";
import { Avatar } from "./Avatar";
import { Modal, ModalProps } from "./Modal";
import { Button } from "./Button";
import { Dropdown } from "./Dropdown";
import { IconArrow } from "./Icon/IconArrow";

export const NewPost = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <ModalCreate open={open} onCancel={() => setOpen(false)} width={608}/>
      <div className="bg-white rounded-lg px-3 py-4 flex gap-4 dark:bg-slate-900">
        <Avatar />
        <div className="flex-1">
          <div className="bg-gray-100 rounded-full overflow-hidden dark:bg-slate-800">
            <input
              className="cursor-pointer dark:hover:bg-white hover:!bg-opacity-10 hover:bg-black bg-transparent outline-none text-sm px-3 leading-8 w-full"
              placeholder="Tell your friends about your thoughts..."
              onFocus={() => setOpen(true)}
            />
          </div>
          <div className="flex flex-wrap gap-2 mt-2">
            <div onClick={() => setOpen(true)} className="whitespace-nowrap flex bg-gray-100 rounded-full text-sm text-gray-900 items-center gap-2 px-2 py-1 cursor-pointer hover:bg-gray-200 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700">
              <div className="text-emerald-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-photo"
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
                  <path d="M15 8h.01" />
                  <path d="M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12z" />
                  <path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5" />
                  <path d="M14 14l1 -1c.928 -.893 2.072 -.893 3 0l3 3" />
                </svg>
              </div>
              Photo/video
            </div>
            <div onClick={() => setOpen(true)} className="whitespace-nowrap flex bg-gray-100 rounded-full text-sm text-gray-900 items-center gap-2 px-2 py-1 cursor-pointer hover:bg-gray-200 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700">
              <div className="text-orange-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-list"
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
                  <path d="M9 6l11 0" />
                  <path d="M9 12l11 0" />
                  <path d="M9 18l11 0" />
                  <path d="M5 6l0 .01" />
                  <path d="M5 12l0 .01" />
                  <path d="M5 18l0 .01" />
                </svg>
              </div>
              Poll
            </div>
            <div onClick={() => setOpen(true)} className="whitespace-nowrap flex bg-gray-100 rounded-full text-sm text-gray-900 items-center gap-2 px-2 py-1 cursor-pointer hover:bg-gray-200 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700">
              <div className="text-blue-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-calendar-due"
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
                  <path d="M4 5m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                  <path d="M16 3v4" />
                  <path d="M8 3v4" />
                  <path d="M4 11h16" />
                  <path d="M12 16m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                </svg>
              </div>
              Schedule
            </div>
            <div onClick={() => setOpen(true)} className="whitespace-nowrap flex bg-gray-100 rounded-full text-sm text-gray-900 items-center gap-2 px-2 py-1 cursor-pointer hover:bg-gray-200 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700">
              <div className="text-red-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-brand-zoom"
                  width={14}
                  height={14}
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M17.011 9.385v5.128l3.989 3.487v-12z" />
                  <path d="M3.887 6h10.08c1.468 0 3.033 1.203 3.033 2.803v8.196a.991 .991 0 0 1 -.975 1h-10.373c-1.667 0 -2.652 -1.5 -2.652 -3l.01 -8a.882 .882 0 0 1 .208 -.71a.841 .841 0 0 1 .67 -.287z" />
                </svg>
              </div>
              Live video
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const ModalCreate: FC<ModalProps> = (props) => {
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const [value, setValue] = useState('')
  useEffect(() => {
    if (props.open) {
      inputRef.current?.focus()
    }
  }, [props.open]);
  return (
    <Modal {...props} title="Tạo bài post">
      <div className="p-3">
        <div className="flex gap-3">
          <Avatar size={40} />
          <div>
            <h3 className="font-bold">Charles Schwartz</h3>
            <Dropdown
              getPopupContainer={(parentNode) => parentNode}
              content={
                <div className="w-[200px]">
                  <div className="text-gray-900 text-opacity-80 p-2 cursor-pointer rounded hover:bg-black hover:bg-opacity-10 text-sm dark:text-gray-300 hover:text-opacity-100 dark:hover:text-white">
                    Công khai
                  </div>
                  <div className="text-gray-900 text-opacity-80 p-2 cursor-pointer rounded hover:bg-black hover:bg-opacity-10 text-sm dark:text-gray-300 hover:text-opacity-100 dark:hover:text-white">
                    Chỉ mình tôi
                  </div>
                  <div className="text-gray-900 text-opacity-80 p-2 cursor-pointer rounded hover:bg-black hover:bg-opacity-10 text-sm dark:text-gray-300 hover:text-opacity-100 dark:hover:text-white">
                    Chỉ bạn bè tôi
                  </div>
                  <div className="text-gray-900 text-opacity-80 p-2 cursor-pointer rounded hover:bg-black hover:bg-opacity-10 text-sm dark:text-gray-300 hover:text-opacity-100 dark:hover:text-white">
                    Ẩn danh
                  </div>
                </div>
              }
            >
              <Button size="small" className="flex gap-1 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-eye"
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
                  <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                  <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />
                </svg>
                Only me{" "}
                <IconArrow transparent className="!w-3 h-fit !p-0 h-3 !bg-transparent" />
              </Button>
            </Dropdown>
          </div>
        </div>
        <div>
          <textarea
            ref={inputRef}
            placeholder="Bạn đang muốn nói điều gì với những người bạn quan tâm...."
            className="text-xl bg-transparent outline-none w-full resize-none placeholder:text-xl mt-3"
            name=""
            id=""
            rows={10}
            spellCheck={false}
            value={value}
            onChange={(ev) => setValue(ev.target.value)}
          ></textarea>
        </div>
        <div>
          <Button className="w-full" disabled={!value} type={value ? 'primary' : 'default'}>Post</Button>
        </div>
      </div>
    </Modal>
  );
};

import React from "react";
import { Avatar } from "./Avatar";
import { BorderGradient } from "./BorderGradient";

export const Story = () => {
  return (
    <div className="dark:bg-slate-900 bg-white rounded-lg p-3 gap-3 snap-x snap-mandatory overflow-x-auto w-full flex">
      <div className="flex flex-col items-center relative cursor-pointer snap-always snap-center gap-1">
        <div className="dark:border-slate-700 flex items-center flex-col rounded-full border border-solid border-gray-300 p-0.5">
          <Avatar size={40} />
          <span className="w-3 h-3 flex items-center justify-center absolute bottom-5 right-0 bg-purple-600 text-white rounded-full shadow-[0_0_0_2px_white]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-plus"
              width={11}
              height={11}
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 5l0 14" />
              <path d="M5 12l14 0" />
            </svg>
          </span>
        </div>
        <p className="text-gray-900 text-small font-semibold whitespace-nowrap dark:text-white">
          Your story
        </p>
      </div>
      <div className="flex flex-col items-center relative cursor-pointer snap-always snap-center gap-1">
        <BorderGradient>
          <div className="p-0.5 bg-white rounded-full dark:bg-slate-900">
            <Avatar size={40} />
          </div>
        </BorderGradient>
        <p className="text-gray-900 text-small font-semibold whitespace-nowrap dark:text-white">
          Briggs
        </p>
      </div>
      <div className="flex flex-col items-center relative cursor-pointer snap-always snap-center gap-1">
        <BorderGradient>
          <div className="p-0.5 bg-white rounded-full dark:bg-slate-900">
            <Avatar size={40} />
          </div>
        </BorderGradient>
        <p className="text-gray-900 text-small font-semibold whitespace-nowrap dark:text-white">
          Lina
        </p>
      </div>
      <div className="flex flex-col items-center relative cursor-pointer snap-always snap-center gap-1">
        <BorderGradient>
          <div className="p-0.5 bg-white rounded-full dark:bg-slate-900">
            <Avatar size={40} />
          </div>
        </BorderGradient>
        <p className="text-gray-900 text-small font-semibold whitespace-nowrap dark:text-white">
          Georgie
        </p>
      </div>
      <div className="flex flex-col items-center relative cursor-pointer snap-always snap-center gap-1">
        <BorderGradient>
          <div className="p-0.5 bg-white rounded-full dark:bg-slate-900">
            <Avatar size={40} />
          </div>
        </BorderGradient>
        <p className="text-gray-900 text-small font-semibold whitespace-nowrap dark:text-white">
          Carolyn
        </p>
      </div>
      <div className="flex flex-col items-center relative cursor-pointer snap-always snap-center gap-1">
        <BorderGradient>
          <div className="p-0.5 bg-white rounded-full dark:bg-slate-900">
            <Avatar size={40} />
          </div>
        </BorderGradient>
        <p className="text-gray-900 text-small font-semibold whitespace-nowrap dark:text-white">
          Moody
        </p>
      </div>
      <div className="flex flex-col items-center relative cursor-pointer snap-always snap-center gap-1">
        <BorderGradient>
          <div className="p-0.5 bg-white rounded-full dark:bg-slate-900">
            <Avatar size={40} />
          </div>
        </BorderGradient>
        <p className="text-gray-900 text-small font-semibold whitespace-nowrap dark:text-white">
          Randy
        </p>
      </div>
      <div className="flex flex-col items-center relative cursor-pointer snap-always snap-center gap-1">
        <BorderGradient>
          <div className="p-0.5 bg-white rounded-full dark:bg-slate-900">
            <Avatar size={40} />
          </div>
        </BorderGradient>
        <p className="text-gray-900 text-small font-semibold whitespace-nowrap dark:text-white">
          McGee
        </p>
      </div>
      <div className="flex flex-col items-center relative cursor-pointer snap-always snap-center gap-1">
        <BorderGradient>
          <div className="p-0.5 bg-white rounded-full dark:bg-slate-900">
            <Avatar size={40} />
          </div>
        </BorderGradient>
        <p className="text-gray-900 text-small font-semibold whitespace-nowrap dark:text-white">
          Clarence
        </p>
      </div>
      <div className="flex flex-col items-center relative cursor-pointer snap-always snap-center gap-1">
        <BorderGradient>
          <div className="p-0.5 bg-white rounded-full dark:bg-slate-900">
            <Avatar size={40} />
          </div>
        </BorderGradient>
        <p className="text-gray-900 text-small font-semibold whitespace-nowrap dark:text-white">
          Ray
        </p>
      </div>
    </div>
  );
};

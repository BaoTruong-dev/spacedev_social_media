import { Link } from "react-router-dom";
import { Avatar } from "./Avatar";
import { Badge } from "./Badge";
import { Card } from "./Card";
import { Icon } from "./Icon/Icon";
import { PATH } from "../constants/path";

export const Message = () => {
  return (
    <Card
      title="Messages"
      action={
        <Link to={PATH.Messenger} className="text-gray-400 font-semibold text-xs">
          See all
        </Link>
      }
      className="h-[calc(100vh-130px)] flex flex-col"
    >
      <div className="flex flex-col flex-1 h-1">
        <div className="dark:bg-slate-800 flex mt-4 bg-gray-100 rounded-full items-center gap-2 px-2 text-gray-600 h-7">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-search"
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
              <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
              <path d="M21 21l-6 -6" />
            </svg>
          </span>

          <input
            placeholder="Search messages...."
            className="text-xs flex-1 placeholder:text-xs outline-none bg-transparent"
          />
        </div>
        <div className="flex justify-between items-baseline">
          <div className="flex mt-3 gap-3">
            <a
              href="#"
              className="dark:text-white dark:border-white text-sm font-semibold text-gray-900 border-b-2 border-solid border-gray-900 pb-1"
            >
              Private
            </a>
            <a href="#" className="text-sm font-semibold text-gray-500">
              Group
            </a>
          </div>
          <div>
            <a
              href="#"
              className="dark:text-purple-400 text-purple-800 text-xs font-semibold"
            >
              Request (2)
            </a>
          </div>
        </div>
        <div className="mt-4 flex flex-col gap-4 h-full overflow-auto pt-2">
          <div className="flex flex-col gap-4">
            <div className="flex gap-2 items-center">
              <Badge count={9}>
                <Avatar />
              </Badge>
              <div className="flex-1 ">
                <h4 className="text-xs font-bold text-gray-900 dark:text-white">
                  Lola Hines
                </h4>
                <p className="text-xs text-gray-500">Active 30m ago</p>
              </div>
            </div>
            <div className="flex gap-2 items-center ">
              <Avatar />
              <div className="flex-1">
                <h4 className="text-xs font-bold text-gray-900 dark:text-white">
                  Lola Hines
                </h4>
                <p className="text-xs text-gray-500">Active 30m ago</p>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <Avatar />
              <div className="flex-1 ">
                <h4 className="text-xs font-bold text-gray-900 dark:text-white">
                  Lola Hines
                </h4>
                <p className="text-xs text-gray-500">Active 30m ago</p>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <Avatar />
              <div className="flex-1 ">
                <h4 className="text-xs font-bold text-gray-900 dark:text-white">
                  Lola Hines
                </h4>
                <p className="text-xs text-gray-500">Active 30m ago</p>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <Avatar />
              <div className="flex-1 ">
                <h4 className="text-xs font-bold text-gray-900 dark:text-white">
                  Lola Hines
                </h4>
                <p className="text-xs text-gray-500">Active 30m ago</p>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <Avatar />
              <div className="flex-1 ">
                <h4 className="text-xs font-bold text-gray-900 dark:text-white">
                  Lola Hines
                </h4>
                <p className="text-xs text-gray-500">Active 30m ago</p>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <Avatar />
              <div className="flex-1 ">
                <h4 className="text-xs font-bold text-gray-900 dark:text-white">
                  Lola Hines
                </h4>
                <p className="text-xs text-gray-500">Active 30m ago</p>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <Avatar />
              <div className="flex-1 ">
                <h4 className="text-xs font-bold text-gray-900 dark:text-white">
                  Lola Hines
                </h4>
                <p className="text-xs text-gray-500">Active 30m ago</p>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <Avatar />
              <div className="flex-1 ">
                <h4 className="text-xs font-bold text-gray-900 dark:text-white">
                  Lola Hines
                </h4>
                <p className="text-xs text-gray-500">Active 30m ago</p>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <Avatar />
              <div className="flex-1 ">
                <h4 className="text-xs font-bold text-gray-900 dark:text-white">
                  Lola Hines
                </h4>
                <p className="text-xs text-gray-500">Active 30m ago</p>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <Avatar />
              <div className="flex-1 ">
                <h4 className="text-xs font-bold text-gray-900 dark:text-white">
                  Lola Hines
                </h4>
                <p className="text-xs text-gray-500">Active 30m ago</p>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <Avatar />
              <div className="flex-1 ">
                <h4 className="text-xs font-bold text-gray-900 dark:text-white">
                  Lola Hines
                </h4>
                <p className="text-xs text-gray-500">Active 30m ago</p>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <Avatar />
              <div className="flex-1 ">
                <h4 className="text-xs font-bold text-gray-900 dark:text-white">
                  Lola Hines
                </h4>
                <p className="text-xs text-gray-500">Active 30m ago</p>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <Avatar />
              <div className="flex-1 ">
                <h4 className="text-xs font-bold text-gray-900 dark:text-white">
                  Lola Hines
                </h4>
                <p className="text-xs text-gray-500">Active 30m ago</p>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <Avatar />
              <div className="flex-1 ">
                <h4 className="text-xs font-bold text-gray-900 dark:text-white">
                  Lola Hines
                </h4>
                <p className="text-xs text-gray-500">Active 30m ago</p>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <Avatar />
              <div className="flex-1 ">
                <h4 className="text-xs font-bold text-gray-900 dark:text-white">
                  Lola Hines
                </h4>
                <p className="text-xs text-gray-500">Active 30m ago</p>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <Avatar />
              <div className="flex-1 ">
                <h4 className="text-xs font-bold text-gray-900 dark:text-white">
                  Lola Hines
                </h4>
                <p className="text-xs text-gray-500">Active 30m ago</p>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <Avatar />
              <div className="flex-1 ">
                <h4 className="text-xs font-bold text-gray-900 dark:text-white">
                  Lola Hines
                </h4>
                <p className="text-xs text-gray-500">Active 30m ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

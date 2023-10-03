import { useState } from "react";
import { Link } from "react-router-dom";
import { PATH } from "../constants/path";
import { setGlobalState, useGlobalState } from "../store/queryClient";
import { useAuth } from "./AuthProvider";
import { Avatar } from "./Avatar";
import { Badge } from "./Badge";
import { Button } from "./Button";
import { Card } from "./Card";
import { useMode } from "./DarkModeProvider";
import { Dropdown } from "./Dropdown";
import { GeneralInfo } from "./GeneralInfo";
import { Icon } from "./Icon/Icon";
import { ButtonIconApplication } from "./Icon/IconApplication";
import { IconClose } from "./Icon/IconClose";
import { IconFeedback } from "./Icon/IconFeedback";
import { IconLogout } from "./Icon/IconLogout";
import { IconSetting } from "./Icon/IconSetting";
import { ButtonIconThreeDotAction } from "./Icon/IconThreeDotAction";
import { ModalLogin } from "./ModalLogin";
import { Switch } from "./Switch";

export const Header = () => {
  const { mode, toggleMode } = useMode();
  const openLogin = useGlobalState("LOGIN_MODAL");

  const { user, logout } = useAuth();
  return (
    <>
      <ModalLogin
        open={openLogin}
        onCancel={() => setGlobalState("LOGIN_MODAL", false)}
      />
      <header className="sticky top-0 z-10 flex px-4 bg-white border-b border-solid dark:bg-slate-900 h-header border-slate-300 dark:border-slate-700">
        <div className="flex items-center w-full gap-4">
          <div className="w-sidebar">
            <Link
              to={PATH.Home}
              className="flex items-center gap-1 text-2xl font-bold dark:text-white text-slate-800"
            >
              {/* Fucin<span className="text-black px-1 ml-1 leading-8 inline-flex items-center rounded bg-[#ea8f1c]">srule</span> */}
              <img
                alt=""
                src="https://spacedev.vn/images/LOGO-image-full.svg"
                className="w-[25px]"
              />
              Fucinsrule
            </Link>
          </div>
          <Dropdown
            className="relative flex-1 mx-auto max-w-main-content"
            allowToggle={false}
            content={
              <Card
                title="Recent searches"
                className="dark:!bg-slate-800"
                action={
                  <a
                    href="#"
                    className="dark:hover:bg-slate-700 text-blue-500 hover:bg-gray-100 rounded px-3 py-0.5"
                  >
                    See all
                  </a>
                }
              >
                <div className="mt-3">
                  <div className="flex items-center gap-3 p-2 -ml-2 rounded cursor-pointer hover:bg-black hover:bg-opacity-20">
                    <Avatar />
                    <p className="flex-1 font-semibold">Loretta Copeland</p>
                    <IconClose size={17} transparent />
                  </div>
                  <div className="flex items-center gap-3 p-2 -ml-2 rounded cursor-pointer hover:bg-black hover:bg-opacity-20">
                    <Avatar />
                    <p className="flex-1 font-semibold">Gussie Mack</p>
                    <IconClose size={17} transparent />
                  </div>
                  <div className="flex items-center gap-3 p-2 -ml-2 rounded cursor-pointer hover:bg-black hover:bg-opacity-20">
                    <Avatar />
                    <p className="flex-1 font-semibold">Bernice Underwood</p>
                    <IconClose size={17} transparent />
                  </div>
                  <div className="flex items-center gap-3 p-2 -ml-2 rounded cursor-pointer hover:bg-black hover:bg-opacity-20">
                    <Avatar />
                    <p className="flex-1 font-semibold">Maggie Jenkins</p>
                    <IconClose size={17} transparent />
                  </div>
                  <div className="flex items-center gap-3 p-2 -ml-2 rounded cursor-pointer hover:bg-black hover:bg-opacity-20">
                    <Avatar />
                    <p className="flex-1 font-semibold">Flora Larson</p>
                    <IconClose size={17} transparent />
                  </div>
                  <div className="flex items-center gap-3 p-2 -ml-2 rounded cursor-pointer hover:bg-black hover:bg-opacity-20">
                    <Avatar />
                    <p className="flex-1 font-semibold">Agnes Chambers</p>
                    <IconClose size={17} transparent />
                  </div>
                </div>
              </Card>
            }
            popupClassName="max-w-full w-full !left-0"
            arrow={false}
            getPopupContainer={(parentNode) => parentNode}
          >
            <div className="flex items-center flex-1 gap-2 px-2 text-gray-600 bg-gray-100 rounded-full dark:bg-slate-800 h-7">
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

              <input
                placeholder="Search for everything...."
                className="flex-1 text-black bg-transparent outline-none placeholder:text-sm dark:text-white"
              />
            </div>
          </Dropdown>
          <div className="flex gap-3 w-sidebar justify-end h-full items-center [&>*]:h-full">
            {user ? (
              <>
                <div className="flex items-center">
                  <ButtonIconApplication />
                </div>
                <div className="flex items-center">
                  <Dropdown
                    getPopupContainer={(parentNode) => parentNode}
                    content={
                      <div className="w-[400px]  max-h-[calc(100vh-100px)] overflow-auto">
                        <Card
                          title="Notifications"
                          action={
                            <a
                              href="#"
                              className="dark:hover:bg-slate-700 text-blue-500 hover:bg-gray-100 rounded px-3 py-0.5"
                            >
                              See all
                            </a>
                          }
                          className="dark:!bg-slate-800"
                        >
                          <div className="flex-1 max-h-full mt-3">
                            <a
                              href="#"
                              className="[&:hover_.icon-action]:opacity-100 dark:text-white text-black rounded-lg flex gap-4 items-center hover:bg-black hover:bg-opacity-25 p-2 -ml-2"
                            >
                              <Avatar size={40} />
                              <div className="flex flex-col flex-1">
                                <p className="text-sm">
                                  <span className="font-semibold">
                                    Mark Ortega
                                  </span>
                                  &nbsp; Đã nhắc đến bạn trong một bài viết
                                </p>
                                <time className="text-sm text-blue-400">
                                  4 hours ago
                                </time>
                              </div>
                              <div className="flex items-center gap-1">
                                <div className="opacity-0 icon-action">
                                  <ButtonIconThreeDotAction />
                                </div>
                                <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                              </div>
                            </a>
                            <a
                              href="#"
                              className="flex items-center gap-4 p-2 -ml-2 text-gray-500 rounded-lg hover:bg-black hover:bg-opacity-30"
                            >
                              <Avatar size={40} />
                              <div className="flex flex-col">
                                <p className="text-sm">
                                  <span className="font-semibold">
                                    Mark Ortega
                                  </span>
                                  &nbsp; Đã nhắc đến bạn trong một bài viết
                                </p>
                                <time className="text-sm text-gray-600 dark:text-gray-700">
                                  4 hours ago
                                </time>
                              </div>
                            </a>
                            <a
                              href="#"
                              className="flex items-center gap-4 p-2 -ml-2 text-gray-500 rounded-lg hover:bg-black hover:bg-opacity-30"
                            >
                              <Avatar size={40} />
                              <div className="flex flex-col">
                                <p className="text-sm">
                                  <span className="font-semibold">
                                    Mark Ortega
                                  </span>
                                  &nbsp; Đã nhắc đến bạn trong một bài viết
                                </p>
                                <time className="text-sm text-gray-600 dark:text-gray-700">
                                  4 hours ago
                                </time>
                              </div>
                            </a>
                            <a
                              href="#"
                              className="flex items-center gap-4 p-2 -ml-2 text-gray-500 rounded-lg hover:bg-black hover:bg-opacity-30"
                            >
                              <Avatar size={40} />
                              <div className="flex flex-col">
                                <p className="text-sm">
                                  <span className="font-semibold">
                                    Mark Ortega
                                  </span>
                                  &nbsp; Đã nhắc đến bạn trong một bài viết
                                </p>
                                <time className="text-sm text-gray-600 dark:text-gray-700">
                                  4 hours ago
                                </time>
                              </div>
                            </a>
                            <a
                              href="#"
                              className="flex items-center gap-4 p-2 -ml-2 text-gray-500 rounded-lg hover:bg-black hover:bg-opacity-30"
                            >
                              <Avatar size={40} />
                              <div className="flex flex-col">
                                <p className="text-sm">
                                  <span className="font-semibold">
                                    Mark Ortega
                                  </span>
                                  &nbsp; Đã nhắc đến bạn trong một bài viết
                                </p>
                                <time className="text-sm text-gray-600 dark:text-gray-700">
                                  4 hours ago
                                </time>
                              </div>
                            </a>
                            <a
                              href="#"
                              className="flex items-center gap-4 p-2 -ml-2 text-gray-500 rounded-lg hover:bg-black hover:bg-opacity-30"
                            >
                              <Avatar size={40} />
                              <div className="flex flex-col">
                                <p className="text-sm">
                                  <span className="font-semibold">
                                    Mark Ortega
                                  </span>
                                  &nbsp; Đã nhắc đến bạn trong một bài viết
                                </p>
                                <time className="text-sm text-gray-600 dark:text-gray-700">
                                  4 hours ago
                                </time>
                              </div>
                            </a>
                            <a
                              href="#"
                              className="flex items-center gap-4 p-2 -ml-2 text-gray-500 rounded-lg hover:bg-black hover:bg-opacity-30"
                            >
                              <Avatar size={40} />
                              <div className="flex flex-col">
                                <p className="text-sm">
                                  <span className="font-semibold">
                                    Mark Ortega
                                  </span>
                                  &nbsp; Đã nhắc đến bạn trong một bài viết
                                </p>
                                <time className="text-sm text-gray-600 dark:text-gray-700">
                                  4 hours ago
                                </time>
                              </div>
                            </a>
                            <a
                              href="#"
                              className="flex items-center gap-4 p-2 -ml-2 text-gray-500 rounded-lg hover:bg-black hover:bg-opacity-30"
                            >
                              <Avatar size={40} />
                              <div className="flex flex-col">
                                <p className="text-sm">
                                  <span className="font-semibold">
                                    Mark Ortega
                                  </span>
                                  &nbsp; Đã nhắc đến bạn trong một bài viết
                                </p>
                                <time className="text-sm text-gray-600 dark:text-gray-700">
                                  4 hours ago
                                </time>
                              </div>
                            </a>
                            <a
                              href="#"
                              className="flex items-center gap-4 p-2 -ml-2 text-gray-500 rounded-lg hover:bg-black hover:bg-opacity-30"
                            >
                              <Avatar size={40} />
                              <div className="flex flex-col">
                                <p className="text-sm">
                                  <span className="font-semibold">
                                    Mark Ortega
                                  </span>
                                  &nbsp; Đã nhắc đến bạn trong một bài viết
                                </p>
                                <time className="text-sm text-gray-600 dark:text-gray-700">
                                  4 hours ago
                                </time>
                              </div>
                            </a>
                            <a
                              href="#"
                              className="flex items-center gap-4 p-2 -ml-2 text-gray-500 rounded-lg hover:bg-black hover:bg-opacity-30"
                            >
                              <Avatar size={40} />
                              <div className="flex flex-col">
                                <p className="text-sm">
                                  <span className="font-semibold">
                                    Mark Ortega
                                  </span>
                                  &nbsp; Đã nhắc đến bạn trong một bài viết
                                </p>
                                <time className="text-sm text-gray-600 dark:text-gray-700">
                                  4 hours ago
                                </time>
                              </div>
                            </a>
                            <a
                              href="#"
                              className="flex items-center gap-4 p-2 -ml-2 text-gray-500 rounded-lg hover:bg-black hover:bg-opacity-30"
                            >
                              <Avatar size={40} />
                              <div className="flex flex-col">
                                <p className="text-sm">
                                  <span className="font-semibold">
                                    Mark Ortega
                                  </span>
                                  &nbsp; Đã nhắc đến bạn trong một bài viết
                                </p>
                                <time className="text-sm text-gray-600 dark:text-gray-700">
                                  4 hours ago
                                </time>
                              </div>
                            </a>
                            <a
                              href="#"
                              className="flex items-center gap-4 p-2 -ml-2 text-gray-500 rounded-lg hover:bg-black hover:bg-opacity-30"
                            >
                              <Avatar size={40} />
                              <div className="flex flex-col">
                                <p className="text-sm">
                                  <span className="font-semibold">
                                    Mark Ortega
                                  </span>
                                  &nbsp; Đã nhắc đến bạn trong một bài viết
                                </p>
                                <time className="text-sm text-gray-600 dark:text-gray-700">
                                  4 hours ago
                                </time>
                              </div>
                            </a>
                            <a
                              href="#"
                              className="flex items-center gap-4 p-2 -ml-2 text-gray-500 rounded-lg hover:bg-black hover:bg-opacity-30"
                            >
                              <Avatar size={40} />
                              <div className="flex flex-col">
                                <p className="text-sm">
                                  <span className="font-semibold">
                                    Mark Ortega
                                  </span>
                                  &nbsp; Đã nhắc đến bạn trong một bài viết
                                </p>
                                <time className="text-sm text-gray-600 dark:text-gray-700">
                                  4 hours ago
                                </time>
                              </div>
                            </a>
                            <a
                              href="#"
                              className="flex items-center gap-4 p-2 -ml-2 text-gray-500 rounded-lg hover:bg-black hover:bg-opacity-30"
                            >
                              <Avatar size={40} />
                              <div className="flex flex-col">
                                <p className="text-sm">
                                  <span className="font-semibold">
                                    Mark Ortega
                                  </span>
                                  &nbsp; Đã nhắc đến bạn trong một bài viết
                                </p>
                                <time className="text-sm text-gray-600 dark:text-gray-700">
                                  4 hours ago
                                </time>
                              </div>
                            </a>
                            <a
                              href="#"
                              className="flex items-center gap-4 p-2 -ml-2 text-gray-500 rounded-lg hover:bg-black hover:bg-opacity-30"
                            >
                              <Avatar size={40} />
                              <div className="flex flex-col">
                                <p className="text-sm">
                                  <span className="font-semibold">
                                    Mark Ortega
                                  </span>
                                  &nbsp; Đã nhắc đến bạn trong một bài viết
                                </p>
                                <time className="text-sm text-gray-600 dark:text-gray-700">
                                  4 hours ago
                                </time>
                              </div>
                            </a>
                            <a
                              href="#"
                              className="flex items-center gap-4 p-2 -ml-2 text-gray-500 rounded-lg hover:bg-black hover:bg-opacity-30"
                            >
                              <Avatar size={40} />
                              <div className="flex flex-col">
                                <p className="text-sm">
                                  <span className="font-semibold">
                                    Mark Ortega
                                  </span>
                                  &nbsp; Đã nhắc đến bạn trong một bài viết
                                </p>
                                <time className="text-sm text-gray-600 dark:text-gray-700">
                                  4 hours ago
                                </time>
                              </div>
                            </a>
                            <a
                              href="#"
                              className="flex items-center gap-4 p-2 -ml-2 text-gray-500 rounded-lg hover:bg-black hover:bg-opacity-30"
                            >
                              <Avatar size={40} />
                              <div className="flex flex-col">
                                <p className="text-sm">
                                  <span className="font-semibold">
                                    Mark Ortega
                                  </span>
                                  &nbsp; Đã nhắc đến bạn trong một bài viết
                                </p>
                                <time className="text-sm text-gray-600 dark:text-gray-700">
                                  4 hours ago
                                </time>
                              </div>
                            </a>
                          </div>
                        </Card>
                      </div>
                    }
                    arrow={false}
                    placement="bottomRight"
                  >
                    <Badge count={10}>
                      <Icon>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-bell-ringing"
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
                          <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                          <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
                          <path d="M21 6.727a11.05 11.05 0 0 0 -2.794 -3.727" />
                          <path d="M3 6.727a11.05 11.05 0 0 1 2.792 -3.727" />
                        </svg>
                      </Icon>
                    </Badge>
                  </Dropdown>
                </div>
                <Dropdown
                  getPopupContainer={(parentNode) => parentNode}
                  placement="bottomRight"
                  content={
                    <div className="w-[300px]">
                      <Link
                        to={PATH.Profile}
                        className="flex items-center gap-3 px-3 py-2 pb-3 text-gray-900 border-b border-gray-300 border-solid rounded dark:text-white dark:border-slate-700 hover:bg-black hover:bg-opacity-20"
                      >
                        <Avatar />
                        <h3 className="text-lg font-semibold">
                          Đặng Thuyền Vương
                        </h3>
                      </Link>
                      <div className="mt-3">
                        <a
                          onClick={(ev) => {
                            ev.preventDefault();
                            toggleMode();
                          }}
                          href="#"
                          className="flex items-center gap-3 px-2 py-2 font-semibold text-gray-900 rounded hover:bg-black hover:bg-opacity-20 dark:text-white"
                        >
                          <Icon className="dark:bg-slate-700">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="icon icon-tabler icon-tabler-moon"
                              width={17}
                              height={17}
                              viewBox="0 0 24 24"
                              strokeWidth={2}
                              stroke="currentColor"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                              />
                              <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
                            </svg>
                          </Icon>
                          <p className="flex-1">Dark mode</p>
                          <Switch checked={mode === "dark"} />
                        </a>

                        <a
                          href=""
                          className="flex items-center gap-3 px-2 py-2 font-semibold text-gray-900 rounded hover:bg-black hover:bg-opacity-20 dark:text-white"
                        >
                          <IconFeedback />
                          <p>Để lại góp ý</p>
                        </a>
                        <a
                          href=""
                          className="flex items-center gap-3 px-2 py-2 font-semibold text-gray-900 rounded hover:bg-black hover:bg-opacity-20 dark:text-white"
                        >
                          <IconSetting />
                          <p>Cài đặt</p>
                        </a>
                        <a
                          href=""
                          className="flex items-center gap-3 px-2 py-2 font-semibold text-gray-900 rounded hover:bg-black hover:bg-opacity-20 dark:text-white"
                          onClick={(ev) => {
                            ev.preventDefault();
                            logout();
                          }}
                        >
                          <IconLogout />
                          <p>Đăng xuất</p>
                        </a>
                        <GeneralInfo />
                      </div>
                    </div>
                  }
                >
                  <div className="relative flex items-center">
                    <Avatar />
                    <Icon className="absolute !w-3 !h-3 right-0 -bottom-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-chevron-down"
                        width={10}
                        height={10}
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M6 9l6 6l6 -6" />
                      </svg>
                    </Icon>
                  </div>
                </Dropdown>
              </>
            ) : (
              <div className="flex items-center gap-3">
                <Button
                  type="red"
                  onClick={() => setGlobalState("LOGIN_MODAL", true)}
                >
                  Sign up
                </Button>
                <Dropdown
                  getPopupContainer={(parentNode) => parentNode}
                  placement="bottomRight"
                  content={
                    <div className="w-[300px]">
                      <div className="mt-3">
                        <a
                          onClick={(ev) => {
                            ev.preventDefault();
                            toggleMode();
                          }}
                          href="#"
                          className="flex items-center gap-3 px-2 py-2 font-semibold text-gray-900 rounded hover:bg-black hover:bg-opacity-20 dark:text-white"
                        >
                          <Icon className="dark:bg-slate-700">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="icon icon-tabler icon-tabler-moon"
                              width={17}
                              height={17}
                              viewBox="0 0 24 24"
                              strokeWidth={2}
                              stroke="currentColor"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                              />
                              <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
                            </svg>
                          </Icon>
                          <p className="flex-1">Dark mode</p>
                          <Switch checked={mode === "dark"} />
                        </a>

                        <a
                          href=""
                          className="flex items-center gap-3 px-2 py-2 font-semibold text-gray-900 rounded hover:bg-black hover:bg-opacity-20 dark:text-white"
                        >
                          <IconFeedback />
                          <p>Để lại góp ý</p>
                        </a>
                        <a
                          href=""
                          className="flex items-center gap-3 px-2 py-2 font-semibold text-gray-900 rounded hover:bg-black hover:bg-opacity-20 dark:text-white"
                        >
                          <IconSetting />
                          <p>Cài đặt</p>
                        </a>
                        <GeneralInfo />
                      </div>
                    </div>
                  }
                >
                  <div className="relative flex items-center">
                    <ButtonIconThreeDotAction />
                  </div>
                </Dropdown>
              </div>
            )}
          </div>
        </div>
      </header>
    </>
  );
};

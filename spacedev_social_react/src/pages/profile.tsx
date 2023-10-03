import { useState } from "react";
import { Avatar } from "../components/Avatar";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { Dropdown } from "../components/Dropdown";
import { Icon } from "../components/Icon/Icon";
import { ButtonIconThreeDotAction } from "../components/Icon/IconThreeDotAction";
import { ModalFriends } from "../components/ModalFriends";
import { NewPost } from "../components/NewPost";
import { Post } from "../components/Post";
import { ButtonIconCamera } from "../components/Icon/IconCamera";
import { ModalAbout } from "../components/features/About";
import { Link } from "react-router-dom";

export const Profile = () => {
  const [open, setOpen] = useState(false);
  const [openAbout, setOpenAbout] = useState(false);
  return (
    <>
      <ModalFriends open={open} onCancel={() => setOpen(false)} />
      <ModalAbout open={openAbout} onCancel={() => setOpenAbout(false)} />
      <div>
        <div className="bg-white dark:bg-slate-900">
          <div className="relative">
            <div>
              <img alt="" src="https://unsplash.it/2000/700" />
            </div>
            <div className="container relative mx-auto">
              <div className="cursor-pointer hover:bg-opacity-60 absolute bottom-2 right-2 bg-black rounded bg-opacity-50 text-white  text-sm flex items-center px-2 py-0.5 drop-shadow-2xl shadow-white">
                <ButtonIconCamera
                  transparent
                  className="text-white hover:bg-transparent"
                />
                Thay đổi ảnh bìa
              </div>
            </div>
          </div>
          <div className="container mx-auto px-4">
            <div className="flex gap-6 -mt-8 pb-8 border-b border-solid border-gray-300 px-4 dark:border-slate-700">
              <div className="relative shadow-[0_0_0_3px] shadow-white rounded-full dark:shadow-slate-900">
                <Avatar size={180} />
                <Icon className="absolute bottom-1 right-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-camera"
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
                    <path d="M5 7h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2" />
                    <path d="M9 13a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                  </svg>
                </Icon>
              </div>
              <div className="mt-auto">
                <h1 className="text-3xl font-bold">
                  Vương Đặng Thuyền <span className="font-normal">(Nar)</span>
                </h1>
                <p className="text-gray-600 font-semibold">543 Friends</p>
                <div className="flex [&>*]:-ml-1 [&>*]:shadow-[0_0_0_2px] [&>*]:shadow-gray-200 [&>*]:rounded-full dark:[&>*]:shadow-slate-900 mt-2">
                  <Avatar />
                  <Avatar />
                  <Avatar />
                  <Avatar />
                  <Avatar />
                  <Avatar />
                  <Avatar />
                  <Avatar />
                  <Avatar />
                </div>
              </div>
            </div>
          </div>

          <div className="container mx-auto flex px-4 pt-1 items-center">
            <div className="flex">
              <a
                href="#"
                className="flex items-center pb-4 font-bold text-blue-500 border-b-2 border-solid border-blue-500 px-3 pt-4"
              >
                Posts
              </a>
              <a
                href="#"
                className="flex items-center dark:border-slate-900 dark:hover:bg-slate-800 pb-4 text-gray-700 dark:text-gray-400 px-3 border-b-2 border-solid border-white hover:bg-gray-100 rounded pt-4"
                onClick={(ev) => {
                  ev.preventDefault();
                  setOpenAbout(true);
                }}
              >
                Tài khoản
              </a>
              <a
                onClick={(ev) => {
                  ev.preventDefault();
                  setOpen(true);
                }}
                href="#"
                className="flex items-center dark:border-slate-900 dark:hover:bg-slate-800 pb-4 text-gray-700 dark:text-gray-400 px-3 border-b-2 border-solid border-white hover:bg-gray-100 rounded pt-4"
              >
                Friends
              </a>
              <a
                href="#"
                className="flex items-center dark:border-slate-900 dark:hover:bg-slate-800 pb-4 text-gray-700 dark:text-gray-400 px-3 border-b-2 border-solid border-white hover:bg-gray-100 rounded pt-4"
              >
                Photos
              </a>
              <Dropdown
                arrow
                content={
                  <div className="w-[200px]">
                    <div className="p-2 text-sm text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-slate-700 cursor-pointer rounded">
                      Followers
                    </div>
                    <div className="p-2 text-sm text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-slate-700 cursor-pointer rounded">
                      Manage sections
                    </div>
                  </div>
                }
                className="dark:border-slate-900 dark:hover:bg-slate-800 pb-4 text-gray-700 dark:text-gray-400 px-3 border-b-2 border-solid border-white hover:bg-gray-100 rounded pt-4 cursor-pointer"
              >
                Xem thêm
              </Dropdown>
            </div>
            <div className="ml-auto">
              <ButtonIconThreeDotAction />
            </div>
          </div>
        </div>
        <div className="container mx-auto p-4 flex gap-4">
          <div className="relative flex">
            <div className="flex flex-col gap-4 w-[400px] sticky bottom-6 self-end">
              <Card title="Intro">
                <p className="text-center mt-2 mb-2">
                  There's no victory without sacrifice
                </p>
                <Button className="w-full">Edit bio</Button>
              </Card>
              <Card
                title="Photos"
                action={
                  <a
                    href="#"
                    className="dark:hover:bg-slate-800 text-blue-500 hover:bg-gray-100 rounded px-3 py-0.5"
                  >
                    See all photos
                  </a>
                }
              >
                <div className="mt-3 gap-3 grid grid-cols-3 flex-wrap">
                  {[...new Array(9)].map((_, i) => (
                    <Link key={i} to="#" className="">
                      <div className="rounded-lg flex-1 overflow-hidden aspect-square">
                        <img
                          alt=""
                          className="object-cover w-full h-full"
                          src={`https://unsplash.it/150/150?t=${Math.random()}`}
                        />
                      </div>
                    </Link>
                  ))}
                </div>
              </Card>
              <Card
                title="Friends"
                className="pb-6"
                action={
                  <a
                    href="#"
                    className="dark:hover:bg-slate-800 text-blue-500 hover:bg-gray-100 rounded px-3 py-0.5"
                  >
                    See all friends
                  </a>
                }
              >
                <p className="text-gray-600 dark:text-gray-400">
                  41 mutual friends
                </p>
                <div className="mt-3 gap-3 grid grid-cols-3 flex-wrap">
                  <a href="#" className="">
                    <div className="rounded-lg flex-1 overflow-hidden aspect-square">
                      <img
                        alt=""
                        className="object-cover w-full h-full"
                        src={`https://unsplash.it/150/150?t=${Math.random()}`}
                      />
                    </div>
                    <p className="mt-1 text-sm font-semibold text-gray-900 dark:text-white">
                      Ronald Peters
                    </p>
                  </a>
                  <a href="#" className="">
                    <div className="rounded-lg flex-1 overflow-hidden aspect-square">
                      <img
                        alt=""
                        className="object-cover w-full h-full"
                        src={`https://unsplash.it/150/150?t=${Math.random()}`}
                      />
                    </div>
                    <p className="mt-1 text-sm font-semibold text-gray-900 dark:text-white">
                      Mitchell Watkins
                    </p>
                  </a>
                  <a href="#" className="">
                    <div className="rounded-lg flex-1 overflow-hidden aspect-square">
                      <img
                        alt=""
                        className="object-cover w-full h-full"
                        src={`https://unsplash.it/150/150?t=${Math.random()}`}
                      />
                    </div>
                    <p className="mt-1 text-sm font-semibold text-gray-900 dark:text-white">
                      Cynthia Love
                    </p>
                  </a>
                  <a href="#" className="">
                    <div className="rounded-lg flex-1 overflow-hidden aspect-square">
                      <img
                        alt=""
                        className="object-cover w-full h-full"
                        src={`https://unsplash.it/150/150?t=${Math.random()}`}
                      />
                    </div>
                    <p className="mt-1 text-sm font-semibold text-gray-900 dark:text-white">
                      Todd Smith
                    </p>
                  </a>
                  <a href="#" className="">
                    <div className="rounded-lg flex-1 overflow-hidden aspect-square">
                      <img
                        alt=""
                        className="object-cover w-full h-full"
                        src={`https://unsplash.it/150/150?t=${Math.random()}`}
                      />
                    </div>
                    <p className="mt-1 text-sm font-semibold text-gray-900 dark:text-white">
                      Mabel Cannon
                    </p>
                  </a>
                  <a href="#" className="">
                    <div className="rounded-lg flex-1 overflow-hidden aspect-square">
                      <img
                        alt=""
                        className="object-cover w-full h-full"
                        src={`https://unsplash.it/150/150?t=${Math.random()}`}
                      />
                    </div>
                    <p className="mt-1 text-sm font-semibold text-gray-900 dark:text-white">
                      Lora Ruiz
                    </p>
                  </a>
                  <a href="#" className="">
                    <div className="rounded-lg flex-1 overflow-hidden aspect-square">
                      <img
                        alt=""
                        className="object-cover w-full h-full"
                        src={`https://unsplash.it/150/150?t=${Math.random()}`}
                      />
                    </div>
                    <p className="mt-1 text-sm font-semibold text-gray-900 dark:text-white">
                      Lilly Sims
                    </p>
                  </a>
                  <a href="#" className="">
                    <div className="rounded-lg flex-1 overflow-hidden aspect-square">
                      <img
                        alt=""
                        className="object-cover w-full h-full"
                        src={`https://unsplash.it/150/150?t=${Math.random()}`}
                      />
                    </div>
                    <p className="mt-1 text-sm font-semibold text-gray-900 dark:text-white">
                      Jerry Warren
                    </p>
                  </a>
                  <a href="#" className="">
                    <div className="rounded-lg flex-1 overflow-hidden aspect-square">
                      <img
                        alt=""
                        className="object-cover w-full h-full"
                        src={`https://unsplash.it/150/150?t=${Math.random()}`}
                      />
                    </div>
                    <p className="mt-1 text-sm font-semibold text-gray-900 dark:text-white">
                      Noah Bryan
                    </p>
                  </a>
                </div>
              </Card>
            </div>
          </div>

          <div className="flex-1 rounded-lg flex gap-4 flex-col">
            <NewPost />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
          </div>
        </div>
      </div>
    </>
  );
};

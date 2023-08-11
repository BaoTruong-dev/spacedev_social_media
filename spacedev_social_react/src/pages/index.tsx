import { Activity } from "../components/Activity";
import { useAuth } from "../components/AuthProvider";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { GeneralInfo } from "../components/GeneralInfo";
import { Message } from "../components/Message";
import { NewPost } from "../components/NewPost";
import { Post } from "../components/Post";
import { Story } from "../components/Story";
import { SuggestedForYou } from "../components/SuggestedForYou";

export const Home = () => {
  const { user } = useAuth();
  return (
    <div className="px-4 flex w-full gap-4 mt-4">
      <div className="w-sidebar flex gap-4 flex-col">
        {user ? (
          <>
            <Activity />
            <SuggestedForYou />
            <Card
              title="Explore"
              action={
                <a href="#" className="text-gray-400 font-semibold text-xs">
                  See all
                </a>
              }
            >
              <div className="flex gap-2 mt-4 flex-wrap">
                <a
                  href="#"
                  className="leading-6 hover:bg-gray-200 bg-gray-100 rounded-full px-4 text-xs font-semibold text-gray-900 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700"
                >
                  #Product
                </a>
                <a
                  href="#"
                  className="leading-6 hover:bg-gray-200 bg-gray-100 rounded-full px-4 text-xs font-semibold text-gray-900 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700"
                >
                  #Website
                </a>
                <a
                  href="#"
                  className="leading-6 hover:bg-gray-200 bg-gray-100 rounded-full px-4 text-xs font-semibold text-gray-900 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700"
                >
                  #Spacedev.vn
                </a>
                <a
                  href="#"
                  className="leading-6 hover:bg-gray-200 bg-gray-100 rounded-full px-4 text-xs font-semibold text-gray-900 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700"
                >
                  #Reactjs
                </a>
                <a
                  href="#"
                  className="leading-6 hover:bg-gray-200 bg-gray-100 rounded-full px-4 text-xs font-semibold text-gray-900 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700"
                >
                  #Nodejs
                </a>
                <a
                  href="#"
                  className="leading-6 hover:bg-gray-200 bg-gray-100 rounded-full px-4 text-xs font-semibold text-gray-900 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700"
                >
                  #PHP
                </a>
                <a
                  href="#"
                  className="leading-6 hover:bg-gray-200 bg-gray-100 rounded-full px-4 text-xs font-semibold text-gray-900 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700"
                >
                  #AWS
                </a>
                <a
                  href="#"
                  className="leading-6 hover:bg-gray-200 bg-gray-100 rounded-full px-4 text-xs font-semibold text-gray-900 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700"
                >
                  #Python
                </a>
                <a
                  href="#"
                  className="leading-6 hover:bg-gray-200 bg-gray-100 rounded-full px-4 text-xs font-semibold text-gray-900 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700"
                >
                  #Go
                </a>
              </div>
            </Card>
          </>
        ) : (
          <>
            <div className="px-2">
              <p className="text-sm">Đăng nhập để thực hiện các hành động như like, comment, chia sẻ,...</p>
              <Button size="large" type="red" className="w-full mt-3">Đăng nhập</Button>
            </div>
          </>
        )}

        <GeneralInfo />
      </div>
      <div className="flex-1 w-1 pb-4 ">
        <div className="max-w-main-content mx-auto flex flex-col gap-4">
          {user && (
            <>
              <Story />
              <NewPost />
            </>
          )}

          <Post />
          <Post />
          <Post />
        </div>
      </div>
      <div className="w-sidebar flex gap-4 flex-col sticky self-end bottom-16">
        {user && <Message />}
      </div>
    </div>
  );
};

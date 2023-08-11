import { Avatar } from "./Avatar";
import { Card } from "./Card";
import { IconAddFriend } from "./Icon/IconAddFriend";

export const Activity = () => {
  return (
    <Card
      title="Activity"
      action={
        <a href="#" className="text-gray-400 font-semibold text-xs">
          See all
        </a>
      }
    >
      <p className="font-semibold text-sm mt-2 mb-2">Stories About You</p>
      <div className="flex gap-2 items-center">
        <Avatar />
        <div className="">
          <p className="text-sm font-semibold">Mentions</p>
          <p className="text-xs text-gray-400 -mt-1">2 stories mention you</p>
        </div>
      </div>
      <p className="font-semibold text-sm mt-2 mb-2">New</p>
      <div className="flex flex-col gap-4">
        <div className="flex gap-2 items-center">
          <Avatar />
          <div className="flex-1 ">
            <p className="text-xs">
              <b>Jordan</b> started following you
              <span className="text-gray-400">1m</span>
            </p>
          </div>
          <IconAddFriend />
        </div>
        <div className="flex gap-2 items-center">
          <Avatar />
          <div className="flex-1 ">
            <p className="text-xs">
              <b>Jordan Ball</b> liked your photo{" "}
              <span className="text-gray-400">3m</span>
            </p>
          </div>
          <div className="rounded overflow-hidden w-8 h-8">
            <img className="w-full h-full" src="https://unsplash.it/50/50" />
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <Avatar />
          <div className="flex-1 ">
            <p className="text-xs">
              <b>Jordan</b> started following you
              <span className="text-gray-400">1m</span>
            </p>
          </div>
          <IconAddFriend />
        </div>
        <div className="flex gap-2 items-center">
          <Avatar />
          <div className="flex-1 ">
            <p className="text-xs">
              <b>Jordan Ball</b> liked your photo{" "}
              <span className="text-gray-400">3m</span>
            </p>
          </div>
          <div className="rounded overflow-hidden w-8 h-8">
            <img
              className="w-full h-full"
              src="https://unsplash.it/50/50?t=2"
            />
          </div>
        </div>
      </div>
    </Card>
  );
};

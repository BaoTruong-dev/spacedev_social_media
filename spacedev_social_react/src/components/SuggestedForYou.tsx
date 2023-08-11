import { Avatar } from "./Avatar";
import { Card } from "./Card";
import { IconAddFriend } from "./Icon/IconAddFriend";

export const SuggestedForYou = () => {
  return (
    <Card
      title="Suggested For You"
      action={
        <a href="#" className="text-gray-400 font-semibold text-xs">
          See all
        </a>
      }
    >
      <div className="mt-4 flex flex-col gap-4">
        <div className="flex gap-2 items-center">
          <Avatar />
          <div className="flex-1 ">
            <h4 className="text-xs font-bold text-gray-900 dark:text-white">Lola Hines</h4>
            <p className="text-xs text-gray-500">Recenfly</p>
          </div>
          <IconAddFriend disabled />
        </div>
        <div className="flex gap-2 items-center">
          <Avatar />
          <div className="flex-1 ">
            <h4 className="text-xs font-bold text-gray-900 dark:text-white">Lola Hines</h4>
            <p className="text-xs text-gray-500">Suggested for you</p>
          </div>
          <IconAddFriend />
        </div>
        <div className="flex gap-2 items-center">
          <Avatar />
          <div className="flex-1 ">
            <h4 className="text-xs font-bold text-gray-900 dark:text-white">Lola Hines</h4>
            <p className="text-xs text-gray-500">Following you</p>
          </div>
          <IconAddFriend />
        </div>
        <div className="flex gap-2 items-center">
          <Avatar />
          <div className="flex-1 ">
            <h4 className="text-xs font-bold text-gray-900 dark:text-white">Lola Hines</h4>
            <p className="text-xs text-gray-500">Following you</p>
          </div>
          <IconAddFriend />
        </div>
        <div className="flex gap-2 items-center">
          <Avatar />
          <div className="flex-1 ">
            <h4 className="text-xs font-bold text-gray-900 dark:text-white">Lola Hines</h4>
            <p className="text-xs text-gray-500">Following you</p>
          </div>
          <IconAddFriend />
        </div>
      </div>
    </Card>
  );
};

import { FC } from "react";
import { Avatar } from "./Avatar";
import { BorderGradient } from "./BorderGradient";
import { Button } from "./Button";
import { Modal } from "./Modal";

export const ModalFriends: FC<{ open?: boolean; onCancel?: () => void }> = (
  props
) => {
  return (
    <Modal title="Friends" onCancel={props.onCancel} open={props.open} width={500}>
      <div className="px-3 flex flex-col gap-3 py-3 max-h-[400px] overflow-auto">
        <div className="flex gap-2 items-center">
          <BorderGradient>
            <div className="border-2 border-solid border-white rounded-full">
              <Avatar size={40} />
            </div>
          </BorderGradient>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
              Bertie Chapman
            </h3>
            <p className="text-xs text-gray-500">Shawn Flowers</p>
          </div>
          <Button className="ml-auto">Remove</Button>
        </div>
        <div className="flex gap-2 items-center">
          <BorderGradient>
            <div className="border-2 border-solid border-white rounded-full">
              <Avatar size={40} />
            </div>
          </BorderGradient>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
              Bertie Chapman
            </h3>
            <p className="text-xs text-gray-500">Shawn Flowers</p>
          </div>
          <Button className="ml-auto">Remove</Button>
        </div>
        <div className="flex gap-2 items-center">
          <BorderGradient>
            <div className="border-2 border-solid border-white rounded-full">
              <Avatar size={40} />
            </div>
          </BorderGradient>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
              Bertie Chapman
            </h3>
            <p className="text-xs text-gray-500">Shawn Flowers</p>
          </div>
          <Button className="ml-auto">Remove</Button>
        </div>
        <div className="flex gap-2 items-center">
          <BorderGradient>
            <div className="border-2 border-solid border-white rounded-full">
              <Avatar size={40} />
            </div>
          </BorderGradient>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
              Bertie Chapman
            </h3>
            <p className="text-xs text-gray-500">Shawn Flowers</p>
          </div>
          <Button className="ml-auto">Remove</Button>
        </div>
        <div className="flex gap-2 items-center">
          <BorderGradient>
            <div className="border-2 border-solid border-white rounded-full">
              <Avatar size={40} />
            </div>
          </BorderGradient>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
              Bertie Chapman
            </h3>
            <p className="text-xs text-gray-500">Shawn Flowers</p>
          </div>
          <Button className="ml-auto">Remove</Button>
        </div>
        <div className="flex gap-2 items-center">
          <BorderGradient>
            <div className="border-2 border-solid border-white rounded-full">
              <Avatar size={40} />
            </div>
          </BorderGradient>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
              Bertie Chapman
            </h3>
            <p className="text-xs text-gray-500">Shawn Flowers</p>
          </div>
          <Button className="ml-auto">Remove</Button>
        </div>
        <div className="flex gap-2 items-center">
          <BorderGradient>
            <div className="border-2 border-solid border-white rounded-full">
              <Avatar size={40} />
            </div>
          </BorderGradient>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
              Bertie Chapman
            </h3>
            <p className="text-xs text-gray-500">Shawn Flowers</p>
          </div>
          <Button className="ml-auto">Remove</Button>
        </div>
        <div className="flex gap-2 items-center">
          <BorderGradient>
            <div className="border-2 border-solid border-white rounded-full">
              <Avatar size={40} />
            </div>
          </BorderGradient>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
              Bertie Chapman
            </h3>
            <p className="text-xs text-gray-500">Shawn Flowers</p>
          </div>
          <Button className="ml-auto">Remove</Button>
        </div>
        <div className="flex gap-2 items-center">
          <BorderGradient>
            <div className="border-2 border-solid border-white rounded-full">
              <Avatar size={40} />
            </div>
          </BorderGradient>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
              Bertie Chapman
            </h3>
            <p className="text-xs text-gray-500">Shawn Flowers</p>
          </div>
          <Button className="ml-auto">Remove</Button>
        </div>
      </div>
    </Modal>
  );
};

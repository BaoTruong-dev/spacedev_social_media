import { FC } from "react";
import { Modal } from "./Modal";
import { Button } from "./Button";

export const Popconfirm: FC<{
  onOk?: () => void;
  onCancel?: () => void;
  title?: any;
}> = (props) => {

  return (
    <Modal open onCancel={props.onCancel} overlayCloseable>
      <div className="px-5 py-3">
        <h2 className="text-3xl font-semibold max-w-[400px] text-center px-8 pt-5">{props.title}</h2>
        <div className="flex gap-5 mt-5 justify-center">
          <Button size="large" className="flex-1" onClick={props.onCancel}>
            Hủy bỏ
          </Button>
          <Button type="red" size="large" className="flex-1" onClick={props.onOk}>
            Đồng ý
          </Button>
        </div>
      </div>
    </Modal>
  );
};

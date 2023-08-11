import ReactDOM from "react-dom/client";
import { Popconfirm } from "../components/Popconfirm";

const container = document.createElement("div");
document.body.appendChild(container);

export const Modal = {
  confirm: (props: {
    title?: string;
    onOk?: () => void;
    onCancel?: () => void;
  }) => {
    let ui = ReactDOM.createRoot(container);
    ui.render(
      <Popconfirm
        title={props.title}
        onOk={() => {
          props.onOk?.();
          ui.unmount();
        }}
        onCancel={() => {
          props.onCancel?.();
          ui.unmount();
        }}
      />
    );
  },
};

import { FC } from "react";
import { Modal, ModalProps } from "./Modal";
import { IconQR } from "./Icon/IconQR";
import { ButtonIconUser } from "./Icon/IconUser";
import { IconFacebook } from "./Icon/IconFacebook";
import { IconInstagram } from "./Icon/IconInstagram";
import { IconTwitter } from "./Icon/IconTwitter";
import { useAuth } from "./AuthProvider";

export const ModalLogin: FC<ModalProps> = ({ ...props }) => {
  const { login } = useAuth();
  return (
    <Modal {...props} title="Log in to Facinsrule">
      <div className="flex flex-col pt-10 pb-10 px-10 gap-3">
        <a
          onClick={(ev) => {
            ev.preventDefault()
            login({password: 'asdfasdf', username: 'asdfasdf'})
            props.onCancel?.()
          }}
          href="#"
          className="relative p-2.5 hover:bg-gray-100 border dark:hover:bg-slate-800 dark:border-slate-700 border-solid rounded text-center text-gray-900 dark:text-white font-bold flex items-center justify-center"
        >
          <IconQR
            transparent
            className="text-gray-900 dark:text-white absolute left-1"
          />
          Use QR Code
        </a>
        <a
          href="#"
          className="relative p-2.5 hover:bg-gray-100 border dark:hover:bg-slate-800 dark:border-slate-700 border-solid rounded text-center text-gray-900 dark:text-white font-bold flex items-center justify-center"
        >
          <ButtonIconUser
            transparent
            className="text-gray-900 dark:text-white absolute left-1"
          />
          Use phone / email / username
        </a>
        <a
          href="#"
          className="relative p-2.5 hover:bg-gray-100 border dark:hover:bg-slate-800 dark:border-slate-700 border-solid rounded text-center text-gray-900 dark:text-white font-bold flex items-center justify-center"
        >
          <IconFacebook
            transparent
            className="text-gray-900 dark:text-white absolute left-1"
          />
          Continue with Facebook
        </a>
        <a
          href="#"
          className="relative p-2.5 hover:bg-gray-100 border dark:hover:bg-slate-800 dark:border-slate-700 border-solid rounded text-center text-gray-900 dark:text-white font-bold flex items-center justify-center"
        >
          <IconInstagram
            transparent
            className="text-gray-900 dark:text-white absolute left-1"
          />
          Continue with Instagram
        </a>
        <a
          href="#"
          className="relative p-2.5 hover:bg-gray-100 border dark:hover:bg-slate-800 dark:border-slate-700 border-solid rounded text-center text-gray-900 dark:text-white font-bold flex items-center justify-center"
        >
          <IconTwitter
            transparent
            className="text-gray-900 dark:text-white absolute left-1"
          />
          Continue with Twitter
        </a>
        {/* <a
          href="#"
          className="relative p-2.5 hover:bg-gray-100 border dark:hover:bg-slate-800 dark:border-slate-700 border-solid rounded text-center text-gray-900 dark:text-white font-bold flex items-center justify-center"
        >
          <IconQR transparent className="text-gray-900 dark:text-white absolute left-1" />
          Continue with LINE
        </a>
        <a
          href="#"
          className="relative p-2.5 hover:bg-gray-100 border dark:hover:bg-slate-800 dark:border-slate-700 border-solid rounded text-center text-gray-900 dark:text-white font-bold flex items-center justify-center"
        >
          <IconQR transparent className="text-gray-900 dark:text-white absolute left-1" />
          Continue with KakaoTalk
        </a>
        <a
          href="#"
          className="relative p-2.5 hover:bg-gray-100 border dark:hover:bg-slate-800 dark:border-slate-700 border-solid rounded text-center text-gray-900 dark:text-white font-bold flex items-center justify-center"
        >
          <IconQR transparent className="text-gray-900 dark:text-white absolute left-1" />
          Continue with Apple
        </a>
        <a
          href="#"
          className="relative p-2.5 hover:bg-gray-100 border dark:hover:bg-slate-800 dark:border-slate-700 border-solid rounded text-center text-gray-900 dark:text-white font-bold flex items-center justify-center"
        >
          <IconQR transparent className="text-gray-900 dark:text-white absolute left-1" />
          Continue with KakaoTalk
        </a> */}
      </div>
      <p className="px-10 pb-5 text-gray-400 text-xs text-center hover:[&_a]:underline [&_a]:text-gray-800">
        By continuing, you agree to TikTok’s{" "}
        <a href="#" className="dark:text-white">
          Terms of Service
        </a>{" "}
        and confirm that you have read TikTok’s{" "}
        <a href="#" className="dark:text-white">
          Privacy Policy
        </a>
      </p>
      <div className="py-4 text-center px-3 text-gray-900 border-t border-solid border-gray-300 dark:text-white dark:border-slate-700">
        Don't have an account?{" "}
        <a href="#" className="font-bold hover:underline text-red-500">
          Sign up
        </a>
      </div>
    </Modal>
  );
};

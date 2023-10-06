import { yupResolver } from "@hookform/resolvers/yup";
import { message } from "antd";
import { FC, useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useMutation } from "react-query";
import * as yup from "yup";
import { userSchema } from "../schema/user.schema";
import authService from "../services/auth.service";
import { setGlobalState } from "../store/queryClient";
import { createStorage } from "../utils/createStorage";
import { Button } from "./Button";
import IconPassword from "./Icon/IconPassword";
import { IconUser } from "./Icon/IconUser";
import InputIcon from "./InputIcon";
import { Modal, ModalProps } from "./Modal";

const userLoginSchema = userSchema.omit(["name"]);
export type LoginInPutType = yup.InferType<typeof userLoginSchema>;

const ModalSignIn: FC<ModalProps> = (props) => {
  const { mutate, isLoading } = useMutation({
    mutationFn: authService.login,
    onSuccess: (response) => {
      message.success(response.data.message);
      props.onCancel?.();
      setGlobalState("LOGIN_MODAL", false);
      createStorage('isLogin').set(true)
    },
    onError: (error: string) => {
      message.error(error);
    },
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginInPutType>({
    mode: "onChange",
    resolver: yupResolver(userLoginSchema),
  });
  const onSubmit: SubmitHandler<LoginInPutType> = (data) => {
    mutate(data);
  };
  useEffect(() => {
    reset();
  }, [props.open, reset]);
  return (
    <Modal {...props}>
      <div onClick={(e) => e}></div>
      <form
        className="w-[420px] px-4 py-8 flex flex-col gap-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <InputIcon
          icon={<IconUser />}
          placeHolder="Your email"
          error={errors.email?.message}
          {...register("email")}
        />
        <InputIcon
          {...register("password")}
          error={errors.password?.message}
          icon={<IconPassword />}
          placeHolder="Your password"
          type="password"
        />
        <div className="flex justify-end">
          <div
            className="text-sm text-blue-500 text-semibold cursor-pointer"
            onClick={() => {
              props.onOpenForgot?.();
              props.onCancel?.();
            }}
          >
            Forgot password?
          </div>
        </div>
        <Button disabled={isLoading} type="primary" className="mt-4">
          Login
        </Button>
      </form>
    </Modal>
  );
};

export default ModalSignIn;

import { yupResolver } from "@hookform/resolvers/yup";
import { message } from "antd";
import { FC, useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useMutation } from "react-query";
import * as yup from "yup";
import { userSchema } from "../schema/user.schema";
import authService from "../services/auth.service";
import { setGlobalState } from "../store/queryClient";
import { Button } from "./Button";
import IconPassword from "./Icon/IconPassword";
import { IconUser } from "./Icon/IconUser";
import InputIcon from "./InputIcon";
import { Modal, ModalProps } from "./Modal";
export type RegisterInPutType = yup.InferType<typeof userSchema>;

const ModalSignUp: FC<ModalProps> = (props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RegisterInPutType>({
    mode: "onChange",
    resolver: yupResolver(userSchema),
  });
  const { mutate, isLoading } = useMutation({
    mutationFn: authService.register,
    onSuccess: (response) => {
      message.success(response.data.message);
      props.onCancel?.();
    },
    onError: (error: string) => {
      message.error(error);
    },
  });
  const onSubmit: SubmitHandler<RegisterInPutType> = (data) => {
    mutate(data);
  };
  useEffect(() => {
    reset();
  }, [props.open, reset]);
  return (
    <Modal {...props}>
      <form
        className="w-[420px] px-4 py-8 flex flex-col gap-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <InputIcon
          icon={<IconUser />}
          placeHolder="Your name"
          error={errors.name?.message}
          {...register("name")}
        />
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
        <Button type="primary" className="mt-4" disabled={isLoading}>
          Register
        </Button>
      </form>
    </Modal>
  );
};

export default ModalSignUp;

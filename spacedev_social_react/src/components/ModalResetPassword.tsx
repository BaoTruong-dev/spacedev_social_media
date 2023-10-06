import { yupResolver } from "@hookform/resolvers/yup";
import { message } from "antd";
import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { useLocation } from "react-router-dom";
import * as yup from "yup";
import { userResetPasswordSchema } from "../schema/user.schema";
import authService from "../services/auth.service";
import { Button } from "./Button";
import IconPassword from "./Icon/IconPassword";
import InputIcon from "./InputIcon";
import { Modal, ModalProps } from "./Modal";
import queryString from "query-string";
export type ResetPasswordType = yup.InferType<typeof userResetPasswordSchema>;
export const ModalResetPassword: FC<ModalProps> = (props) => {
  const { search } = useLocation();
  const query = queryString.parse(search) as {
    email: string;
    password_code: string;
  };

  const { mutate, isLoading } = useMutation({
    mutationFn: authService.reset,
    onSuccess: (response) => {
      message.success(response.data.message);
      props.onCancel?.();
    },
    onError: (error: string) => {
      message.error(error);
    },
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetPasswordType>({
    mode: "onChange",
    resolver: yupResolver(userResetPasswordSchema),
  });
  const onSubmit: SubmitHandler<ResetPasswordType> = (data) => {
    const { password } = data;
    const { email, password_code } = query;
    mutate({
      password,
      email,
      password_code,
    });
  };

  return (
    <Modal {...props}>
      <form
        className="w-[420px] px-4 py-8 flex flex-col gap-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <InputIcon
          {...register("password")}
          icon={<IconPassword />}
          type="password"
          placeHolder="Your new password"
          error={errors.password?.message}
        />
        <InputIcon
          {...register("confirmPassword")}
          icon={<IconPassword />}
          type="password"
          placeHolder="Your confirm new password"
          error={errors.confirmPassword?.message}
        />
        <Button disabled={isLoading} type="primary" className="mt-4">
          Submit
        </Button>
      </form>
    </Modal>
  );
};

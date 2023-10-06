import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "./Button";
import { IconUser } from "./Icon/IconUser";
import InputIcon from "./InputIcon";
import { Modal, ModalProps } from "./Modal";
import * as yup from "yup";
import { userSchema } from "../schema/user.schema";
import { yupResolver } from "@hookform/resolvers/yup";
import authService from "../services/auth.service";
import { useMutation } from "react-query";
import { message } from "antd";

const userForgotPasswordSchema = userSchema.omit(["name", "password"]);
export type ForgotPasswordType = yup.InferType<typeof userForgotPasswordSchema>;
export const ModalForgotPassword: FC<ModalProps> = (props) => {
  const { mutate, isLoading } = useMutation({
    mutationFn: authService.forgot,
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
  } = useForm<ForgotPasswordType>({
    mode: "onChange",
    resolver: yupResolver(userForgotPasswordSchema),
  });
  const onSubmit: SubmitHandler<ForgotPasswordType> = (data) => {
    mutate(data);
  };

  return (
    <Modal {...props}>
      <form
        className="w-[420px] px-4 py-8 flex flex-col gap-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <InputIcon
          {...register("email")}
          icon={<IconUser />}
          placeHolder="Your email"
          error={errors.email?.message}
        />
        <Button disabled={isLoading} type="primary" className="mt-4">
          Submit
        </Button>
      </form>
    </Modal>
  );
};

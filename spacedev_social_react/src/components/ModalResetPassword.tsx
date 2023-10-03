import { yupResolver } from "@hookform/resolvers/yup";
import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { userResetPasswordSchema } from "../schema/user.schema";
import { Button } from "./Button";
import IconPassword from "./Icon/IconPassword";
import InputIcon from "./InputIcon";
import { Modal, ModalProps } from "./Modal";
type forgotPasswordType = yup.InferType<typeof userResetPasswordSchema>;
export const ModalResetPassword: FC<ModalProps> = (props) => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<forgotPasswordType>({
    mode: "onChange",
    resolver: yupResolver(userResetPasswordSchema),
  });
  const onSubmit: SubmitHandler<forgotPasswordType> = (data) => {
    console.log(data, "data");
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
        <Button type="primary" className="mt-4">
          Submit
        </Button>
      </form>
    </Modal>
  );
};

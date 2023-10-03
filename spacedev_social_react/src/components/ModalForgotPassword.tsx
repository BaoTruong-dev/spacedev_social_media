import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "./Button";
import { IconUser } from "./Icon/IconUser";
import InputIcon from "./InputIcon";
import { Modal, ModalProps } from "./Modal";
import * as yup from "yup";
import { userSchema } from "../schema/user.schema";
import { yupResolver } from "@hookform/resolvers/yup";

const userForgotPasswordSchema = userSchema.omit(["name", "password"]);
type forgotPasswordType = yup.InferType<typeof userForgotPasswordSchema>;
export const ModalForgotPassword: FC<ModalProps> = (props) => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<forgotPasswordType>({
    mode: "onChange",
    resolver: yupResolver(userForgotPasswordSchema),
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
          {...register("email")}
          icon={<IconUser />}
          placeHolder="Your email"
          error={errors.email?.message}
        />
        <Button type="primary" className="mt-4">
          Submit
        </Button>
      </form>
    </Modal>
  );
};

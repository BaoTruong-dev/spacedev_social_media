import { yupResolver } from "@hookform/resolvers/yup";
import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { userSchema } from "../schema/user.schema";
import { Button } from "./Button";
import IconPassword from "./Icon/IconPassword";
import { IconUser } from "./Icon/IconUser";
import InputIcon from "./InputIcon";
import { Modal, ModalProps } from "./Modal";

const userLoginSchema = userSchema.omit(["name"]);
type LoginInPutType = yup.InferType<typeof userLoginSchema>;

const ModalSignIn: FC<ModalProps> = (props) => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<LoginInPutType>({
    mode: "onChange",
    resolver: yupResolver(userLoginSchema),
  });
  const onSubmit: SubmitHandler<LoginInPutType> = (data) => {
    console.log(data, "data");
  };

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
        <Button type="primary" className="mt-4">
          Login
        </Button>
      </form>
    </Modal>
  );
};

export default ModalSignIn;

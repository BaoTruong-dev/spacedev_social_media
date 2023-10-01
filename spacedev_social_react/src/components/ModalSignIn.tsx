import { FC } from "react";
import { Modal, ModalProps } from "./Modal";
import { IconUser } from "./Icon/IconUser";
import InputIcon from "./InputIcon";
import IconPassword from "./Icon/IconPassword";
import { Button } from "./Button";
import { SubmitHandler, useForm } from "react-hook-form";

interface LoginInPutType {
  email: string;
  password: string;
}

const ModalSignIn: FC<ModalProps> = (props) => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<LoginInPutType>({ mode: "onChange" });
  const onSubmit: SubmitHandler<LoginInPutType> = (data) => {
    console.log(data, "data");
  };
  console.log(errors, "error");
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
          {...register("email", {
            required: "This field is mandatory",
            pattern: {
              // eslint-disable-next-line no-useless-escape
              value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
              message: "Email format is invalid",
            },
          })}
        />
        <InputIcon
          {...register("password", {
            required: "This field is mandatory",
          })}
          error={errors.password?.message}
          icon={<IconPassword />}
          placeHolder="Your password"
          type="password"
        />
        <Button type="primary" className="mt-4">
          Login
        </Button>
      </form>
    </Modal>
  );
};

export default ModalSignIn;

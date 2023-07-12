import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";
import LogoComponent from "../../components/LogoComponent";

import { useForm, SubmitHandler } from "react-hook-form";
import { useLocation } from "react-router-dom";

interface IFormInput {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

type field =
  | "firstName"
  | "lastName"
  | "password"
  | "confirmPassword"
  | "email";

const formFields = [
  {
    name: "firstName",
    label: "First Name",
    icon: "",
  },
  {
    name: "lastName",
    label: "Last Name",
    icon: "",
  },
  {
    name: "email",
    label: "Email",
    icon: "",
  },
  {
    name: "password",
    label: "Password",
    icon: "",
  },
  {
    name: "confirmPassword",
    label: "Confirm Password",
    icon: "",
    type: "password",
  },
];

function SignUpPage() {
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  };

  const { pathname } = useLocation();
  const currentUser = pathname.split("/")[2];
  //return
  return (
    <Card className="min-w-[315px] w-full md:max-w-lg">
      <LogoComponent />
      <span className="flex place-content-center">
        <h3 className="logo-clipped max-w-md my-6">Create an Account</h3>
      </span>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 capitalize">
        {formFields.map(({ name, label, type }) => (
          <div key={name}>
            <div className="mb-2 block ">
              <Label htmlFor={name}>{label}</Label>
            </div>
            <TextInput
              className="placeholder:capitalize"
              type={type || name || "text"}
              id={"firstName"}
              placeholder={`${currentUser} ${label}`}
              {...register(name as field)}
            />
          </div>
        ))}

        <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember" className="cursor-pointer">
            Remember me
          </Label>
        </div>
        <Button
          gradientDuoTone={"greenToBlue"}
          className="w-full"
          type="submit"
        >
          Submit
        </Button>
      </form>
    </Card>
  );
}

export default SignUpPage;

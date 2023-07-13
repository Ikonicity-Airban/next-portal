import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";
import LogoComponent from "../../components/LogoComponent";

import { useForm, SubmitHandler } from "react-hook-form";
import { Link, useLocation } from "react-router-dom";

import axios from "axios";
import { Types } from "../../api/reducer";
import { ILoginResponse } from "../../api/@types";
import { useContext } from "react";
import { AppContext } from "../../api/context";

interface IFormInput {
  email: string;
  password: string;
}

type field = "email" | "password";

const formFields = [
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
];
function LoginPage() {
  const { register, handleSubmit } = useForm<IFormInput>();
  // const navigate

  const { dispatch } = useContext(AppContext);
  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    try {
      const { data: user } = await axios.post<ILoginResponse>(
        "http://localhost:6986/api/v1/login",
        data
      );

      dispatch({
        type: Types.login,
        payload: user,
      });
    } catch (error) {
      console.log(error);
    }
    // finally {

    // }
  };

  const { pathname } = useLocation();
  const currentUser = pathname.split("/")[3];
  //return
  return (
    <Card className="min-w-[260px] max-w-sm w-full">
      <span className="flex place-content-center">
        <h3 className="logo-clipped max-w-md">Login Form</h3>
      </span>
      <LogoComponent />
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {formFields.map(({ name, label }) => (
          <div key={name}>
            <div className="mb-2 block ">
              <Label htmlFor={name}>{label}</Label>
            </div>
            <TextInput
              className="placeholder:capitalize"
              type={name}
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
      <Button gradientDuoTone={"greenToBlue"} className="w-full" type="submit">
        <Link to="/dashboard">dashboard</Link>
      </Button>
    </Card>
  );
}

export default LoginPage;

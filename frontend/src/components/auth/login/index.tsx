import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";
import LogoComponent from "../../LogoComponent";

import { useForm, SubmitHandler } from "react-hook-form";
import { Link, useLocation } from "react-router-dom";

import axios from "axios";
import { Types } from "../../../api/reducer";
import { ILoginResponse } from "../../../api/@types";
import { useContext } from "react";
import { AppContext } from "../../../api/context";

interface IFormInput {
  email: string;
  password: string;
}

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
    <Card className="smallScreens:min-w-[320px] ">
      <span className="flex place-content-center">
        <h3 className="logo-clipped max-w-md">Login Form</h3>
      </span>
      <LogoComponent />
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="email1"
              value={
                currentUser == "student" ? "Student Email" : "Instructor Email"
              }
            />
          </div>
          <TextInput
            id="email1"
            placeholder="name@flowbite.com"
            required
            type="email"
            {...register("email")}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1" value="Your password" />
          </div>
          <TextInput
            id="password1"
            required
            type="password"
            {...register("password")}
          />
        </div>
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

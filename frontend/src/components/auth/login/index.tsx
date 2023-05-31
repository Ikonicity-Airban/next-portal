import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";
import LogoComponent from "../../LogoComponent";

import { useForm, SubmitHandler } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKey } from "@fortawesome/free-solid-svg-icons";

interface IFormInput {
  email: string;
  password: string;
}

function LoginPage() {
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  //return
  return (
    <main className="flex flex-col place-content-center space-y-5">
      <Card className="smallScreens:min-w-[300px] ">
        <span className="flex place-content-center">
          <h3 className="logo-clipped max-w-md">Login Form</h3>
        </span>
        <LogoComponent />
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1" value="Your email" />
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
      </Card>
      <Card>
        <h5 className="text-center space-y-4">Already have an account</h5>
        <div className="text-gray-600 flex space-x-4">
          <FontAwesomeIcon icon={faKey}></FontAwesomeIcon>
        </div>
      </Card>
    </main>
  );
}

export default LoginPage;

import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";
import LogoComponent from "../../LogoComponent";

import { useForm, SubmitHandler } from "react-hook-form";
import { useLocation } from "react-router-dom";

interface IFormInput {
  firstName: string;
  lastName: string;
  age: number;
  email: string;
  password: string;
  sex: string;
}

function SignUpPage() {
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  };

  const { pathname } = useLocation();
  const currentUser = pathname.split("/")[3];
  //return
  return (
    <Card className="smallScreens:min-w-[315px]">
      <span className="flex place-content-center">
        <h3 className="logo-clipped max-w-md">Sign Up Form</h3>
      </span>
      <LogoComponent />
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="email"
              value={
                currentUser == "student" ? "Student Email" : "Instructor Email"
              }
            />
          </div>
          <TextInput
            id="email"
            placeholder="name@flowbite.com"
            required
            type="email"
            {...register("email")}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="email"
              value={
                currentUser == "student" ? "Student Email" : "Instructor Email"
              }
            />
          </div>
          <TextInput
            id="email"
            placeholder="name@flowbite.com"
            required
            type="email"
            {...register("email")}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="email"
              value={
                currentUser == "student" ? "Student Email" : "Instructor Email"
              }
            />
          </div>
          <TextInput
            id="email"
            placeholder="name@flowbite.com"
            required
            type="email"
            {...register("email")}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="email"
              value={
                currentUser == "student" ? "Student Email" : "Instructor Email"
              }
            />
          </div>
          <TextInput
            id="email"
            placeholder="name@flowbite.com"
            required
            type="email"
            {...register("email")}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="email"
              value={
                currentUser == "student" ? "Student Email" : "Instructor Email"
              }
            />
          </div>
          <TextInput
            id="email"
            placeholder="name@flowbite.com"
            required
            type="email"
            {...register("email")}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password" value="Your password" />
          </div>
          <TextInput
            id="password"
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
  );
}

export default SignUpPage;

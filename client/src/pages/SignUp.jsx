import { Button, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center">
        {/* left */}
        <div className="mb-5 flex-1">
          <Link to="/" className="   font-bold dark:text-white text-4xl">
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
              Shoeb's
            </span>
            Blog
          </Link>
          <p className="text-sm mt-5">
            Blog web App by Shoeb.You can sign up with your email and password.
          </p>
        </div>

        {/* right */}
        <div className="flex-1">
          <form className="flex flex-col gap-4 ">
            <div className="">
              {/* <label value=" Username" /> */}
              <TextInput
                type="text"
                placeholder="Username"
                id="username"
                // className="mb-5"
              />
            </div>
            <div>
              {/* <label value=" email" /> */}
              <TextInput
                type="text"
                placeholder="Email"
                id="email"
                // className="mb-5"
              />
            </div>
            <div>
              {/* <label value=" Password"/> */}
              <TextInput
                type="text"
                placeholder="Password"
                id="password"
                // className="mb-5"
              />
            </div>
            <Button gradientDuoTone="purpleToPink" type="submit">
              Sign Up
            </Button>
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Have an Account ?</span>
            <Link to="/sign-in" className="text-blue-500">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignUp;

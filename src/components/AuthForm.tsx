import { Mail, UserRound } from "lucide-react";
import TextInput from "./TextInput";
import PasswordInput from "./PasswordInput";
import { useEffect, useState } from "react";
import type { AuthSchema } from "../lib/validation/authSchema";
import { authSchema } from "../lib/validation/authSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm, type SubmitHandler } from "react-hook-form";

const AuthForm = () => {
  const [signState, setSignState] = useState<"Sign In" | "Sign Up">("Sign In");

  const methods = useForm<AuthSchema>({
    resolver: zodResolver(authSchema),
    defaultValues: {
      signState: "Sign In",
    },
  });

  const {
    handleSubmit,
    setValue,
    formState: { isSubmitting },
  } = methods;

  useEffect(() => {
    setValue("signState", signState);
  }, [signState, setValue]);

  const onSubmit: SubmitHandler<AuthSchema> = (data) => {
    console.log(data);
  };

  return (
    <div className="flex items-center justify-center px-5 mx-auto w-full">
      <div className="bg-white shadow-[0_0_45px_0_rgba(0,0,0,0.05)] rounded-3xl max-w-md w-full px-8 py-5">
        <div className="flex items-center justify-center gap-2 mb-2">
          <img src="/icons/logo.svg" alt="logo" className="h-10 w-10" />
          <h2 className="text-3xl text-blue-700">RetinaCare</h2>
        </div>

        <div className="text-center mb-2">
          <h3 className="text-xl text-gray-800 font-medium">
            {signState === "Sign Up"
              ? "Create your Account"
              : "Log into your Account"}
          </h3>
          <p className="text-gray-500">Let's get started</p>
        </div>
        <FormProvider {...methods}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="w-full space-y-2"
          >
            {signState === "Sign Up" ? (
              <TextInput
                label="Full name"
                name="fullname"
                icon={<UserRound size={18} />}
              />
            ) : null}

            <TextInput
              label="E-mail"
              name="email"
              type="email"
              icon={<Mail size={18} />}
            />

            <PasswordInput label="Password" name="password" />

            {signState === "Sign Up" ? (
              <PasswordInput label="Confirm Password" name="confirmPassword" />
            ) : null}

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full cursor-pointer mt-5 text-white text-lg font-semibold bg-blue-700 py-2 rounded-xl hover:bg-blue-600 
                disabled:bg-blue-400 disabled:cursor-not-allowed
              `}
            >
              {signState}
            </button>
            <button
              type="button"
              className="flex items-center cursor-pointer justify-center w-full bg-gray-100 py-1 rounded-xl hover:bg-gray-200 transition-all "
            >
              <img src="/icons/google.svg" alt="google logo" />
              <span>Continue with google</span>
            </button>
            <p className="text-center text-sm text-gray-500">
              Already have an acount?{" "}
              {signState === "Sign In" ? (
                <span
                  onClick={() => {
                    setSignState("Sign Up");
                  }}
                  className="text-blue-700 hover:underline cursor-pointer"
                >
                  Sign Up
                </span>
              ) : (
                <span
                  onClick={() => {
                    setSignState("Sign In");
                  }}
                  className="text-blue-700 hover:underline cursor-pointer"
                >
                  Sign In
                </span>
              )}
            </p>
          </form>
        </FormProvider>
      </div>
    </div>
  );
};

export default AuthForm;

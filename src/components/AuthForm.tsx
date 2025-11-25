import { Mail, UserRound } from "lucide-react";
import TextInput from "./TextInput";
import PasswordInput from "./PasswordInput";
import { useEffect, useState } from "react";
import type { AuthSchema } from "../lib/validation/authSchema";
import { authSchema } from "../lib/validation/authSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm, type SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router";
import api from "../lib/config/api";
import { AxiosError } from "axios";
import { toast } from "react-toastify";

const AuthForm = () => {
  const [signState, setSignState] = useState<"Sign In" | "Sign Up">("Sign In");
  const navigate = useNavigate();
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

  const onSubmit: SubmitHandler<AuthSchema> = async (data) => {
    try {
      if (signState === "Sign Up") {
        // Sign Up
        const response = await api.post("/auth/signup", {
          fullname: data.fullname,
          email: data.email,
          password: data.password,
        });

        toast.success(response.data.message || "Sign up successful!");
        setSignState("Sign In");
        return;
      } else {
        // Sign In
        const response = await api.post("/auth/signin", {
          email: data.email,
          password: data.password,
        });

        toast.success(response.data.message || "Sign in successful");
        const { accessToken, refreshToken } = response.data.data.auth;
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);
        navigate("/predictor");
      }
    } catch (err) {
      if (err instanceof AxiosError) {
        const message = err.response?.data?.message;
        toast.error(message || "Something went wrong");
        console.error("Auth error:", message || err.message);
      } else {
        toast.error("Unexpected error occurred");
        console.error(err);
      }
    }
  };
  return (
    <div className="flex items-center justify-center px-5 mx-auto w-full">
      <div className="bg-white rounded-3xl max-w-md w-full px-8 py-6">
        <div className="flex items-center justify-center gap-2">
          <h2 className="text-3xl text-blue-700 tracking-tight font-semibold">
            RetinaCare
          </h2>
        </div>

        <div className="text-center mb-4">
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
            className="w-full space-y-3"
          >
            {signState === "Sign Up" ? (
              <TextInput
                label="Full name"
                name="fullname"
                icon={<UserRound size={20} />}
              />
            ) : null}

            <TextInput
              label="E-mail"
              name="email"
              type="email"
              icon={<Mail size={20} />}
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
            {signState === "Sign In" ? (
              <p className="text-center text-sm text-gray-500">
                Don't have an account?{" "}
                <span
                  onClick={() => {
                    setSignState("Sign Up");
                  }}
                  className="text-blue-700 hover:underline cursor-pointer"
                >
                  Sign Up
                </span>
              </p>
            ) : (
              <p className="text-center text-sm text-gray-500">
                Already have an account?
                <span
                  onClick={() => {
                    setSignState("Sign In");
                  }}
                  className="text-blue-700 hover:underline cursor-pointer"
                >
                  Sign In
                </span>
              </p>
            )}
          </form>
        </FormProvider>
      </div>
    </div>
  );
};

export default AuthForm;

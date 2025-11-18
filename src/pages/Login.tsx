import AuthForm from "../components/AuthForm";
import AuthSlideshow from "../components/AuthSlideshow";

const Login = () => {
  return (
    <div className="w-full h-dvh">
      <div className="grid md:grid-cols-2 w-full h-full">
        <AuthForm />
        <AuthSlideshow />
      </div>
    </div>
  );
};

export default Login;

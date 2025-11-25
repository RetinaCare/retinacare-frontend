import { type FC, useState } from "react";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { useFormContext } from "react-hook-form";

interface PasswordInputProps {
  label: string;
  name: string;
}

const PasswordInput: FC<PasswordInputProps> = ({ label, name }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <label htmlFor={name} className="text-sm font-medium text-gray-700">
        {label}{" "}
      </label>
      <div className="relative focus-within:ring-2 focus-within:ring-gray-200 border-2  border-gray-300 rounded-xl">
        <input
          type={visible ? "text" : "password"}
          {...register(name)}
          className="outline-0 text-gray-500 rounded-xl py-2 px-2 w-full bg-transparent"
        />
        <button
          type="button"
          onClick={() => setVisible((p) => !p)}
          className="absolute cursor-pointer right-2.5 top-1/2 -translate-y-1/2 text-gray-500"
        >
          {visible ? <EyeOffIcon size={18} /> : <EyeIcon size={18} />}
        </button>
      </div>
      {errors[name] && (
        <p className="text-red-500 text-xs">
          {String(errors[name]?.message ?? "")}
        </p>
      )}
    </div>
  );
};

export default PasswordInput;

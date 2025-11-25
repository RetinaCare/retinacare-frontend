import { type FC } from "react";
import { useFormContext } from "react-hook-form";

interface TextInputProps {
  label: string;
  name: string;
  type?: string;
  icon?: React.ReactNode;
  error?: string;
}

const TextInput: FC<TextInputProps> = ({
  label,
  name,
  type = "text",
  icon,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div>
      <label htmlFor={name} className="text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="relative focus-within:ring-2 focus-within:ring-gray-200 border-2 border-gray-300 rounded-xl">
        <input
          type={type}
          id={name}
          {...register(name)}
          className="outline-0 text-gray-500 bg-transparent rounded-xl py-2 px-2 w-full"
        />
        {icon && (
          <span className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-500">
            {icon}
          </span>
        )}
      </div>
      {errors[name] && (
        <p className="text-red-500 text-xs">
          {String(errors[name]?.message ?? "")}
        </p>
      )}
    </div>
  );
};

export default TextInput;

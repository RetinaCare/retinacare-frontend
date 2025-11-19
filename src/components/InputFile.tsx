import { Upload } from "lucide-react";
import { useState } from "react";
import { useFormContext } from "react-hook-form";

interface FileUploadProps {
  name: string;
  onFileSelect: (files: FileList | null) => void;
}

const InputFile: React.FC<FileUploadProps> = ({ name, onFileSelect }) => {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const {
    formState: { errors },
  } = useFormContext();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files[0]) {
      setPreviewUrl(URL.createObjectURL(files[0]));
      onFileSelect(files);
    }
  };

  return (
    <div className="space-y-2">
      <label className="block text-[13px] font-medium text-gray-600">
        Fundus Image
      </label>

      <div className="relative group">
        <input
          name="name"
          type="file"
          accept="image/png, image/jpeg"
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
          onChange={handleChange}
        />

        <div
          className={`border-2 border-dashed rounded-xl p-8 text-center transition-all
          ${
            errors[name]
              ? "border-red-300 bg-red-50"
              : "border-gray-300 hover:border-gray-400 hover:bg-gray-50"
          }
          bg-slate-50 h-64 flex flex-col items-center justify-center overflow-hidden relative`}
        >
          {previewUrl ? (
            <img
              src={previewUrl}
              alt="Preview"
              className="absolute inset-0 w-full h-full object-cover rounded-lg"
            />
          ) : (
            <>
              <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center mb-3 text-blue-500">
                <Upload size={24} />
              </div>
              <p className="text-sm font-medium text-gray-700">
                Click or drag to upload
              </p>
              <p className="text-xs text-gray-400 mt-1">
                JPG or PNG (Max 10MB)
              </p>
            </>
          )}
        </div>

        {/* RHF Error message */}
        {errors[name] && (
          <p className="text-red-500 text-xs mt-1">
            {String(errors[name]?.message ?? "")}
          </p>
        )}
      </div>
    </div>
  );
};

export default InputFile;

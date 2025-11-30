import { useState } from "react";
import { FormProvider, useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LogOut } from "lucide-react";
import {
  predictionSchema,
  type PredictionFormInput,
  type PredictionFormData,
  type PredictionResult,
} from "../lib/validation/predictionSchema";
import InputFile from "../components/InputFile";
import TextInput from "../components/TextInput";
import PredictorResult from "../components/PredictionResult";
import ChatBox from "../components/ChatBox";
import { useNavigate } from "react-router";
import api from "../lib/config/api";
import { AxiosError } from "axios";
import { toast } from "react-toastify";

const Predictor = () => {
  const [result, setResult] = useState<PredictionResult | null>(null);
  const navigate = useNavigate();
  const methods = useForm<PredictionFormInput>({
    resolver: zodResolver(predictionSchema),
    mode: "onSubmit",
  });
  const {
    handleSubmit,
    setValue,
    formState: { isSubmitting },
  } = methods;

  const handleLogOut = () => navigate("/");
  const onSubmit: SubmitHandler<PredictionFormData> = async (data) => {
    console.log("Sending to AI:", data);
    try {
      const formData = new FormData();
      formData.append("hba1cLevelPercentage", data.hbA1c.toString());
      formData.append("durationInYears", data.duration.toString());
      formData.append("bloodPressureInMmHg", data.systolicBp.toString());

      if (data.image && data.image.length > 0) {
        formData.append("image", data.image[0]);
      }
      const response = await api.post("/predict", formData);
      const apiData = response.data.data;
      console.log(apiData);

      setResult({
        severity: apiData.riskScore,
        confidence: apiData.confidenceScore,
        recommendation: apiData.recommendation,
      });

      toast.success("Prediction completed!");
    } catch (err) {
      if (err instanceof AxiosError) {
        toast.error(err.response?.data?.message || "Prediction failed");
        console.error("Predict error:", err.response?.data?.message);
      } else {
        toast.error("Unexpected error occurred");
        console.error(err);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col  text-gray-800">
      <header className="bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center shadow-sm sticky top-0 z-10">
        <div className="flex items-center gap-2">
          <span className="text-3xl font-semibold tracking-tight text-blue-700">
            RetinaCare
          </span>
        </div>
        <button
          onClick={handleLogOut}
          className="text-sm font-medium text-blue-500 hover:text-blue-600 transition-colors flex items-center gap-1"
        >
          Sign Out <LogOut size={16} />
        </button>
      </header>
      <main className="flex-1 max-w-6xl w-full mx-auto p-4 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Input form */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8 h-fit">
          <h2 className="text-xl text-gray-600 font-medium mb-6 pb-2 border-b border-gray-200">
            Patient Data
          </h2>
          <FormProvider {...methods}>
            <form
              onSubmit={handleSubmit(
                onSubmit as SubmitHandler<PredictionFormInput>
              )}
              className="space-y-5"
            >
              <InputFile
                name="image"
                onFileSelect={(files) =>
                  setValue("image", files as FileList, { shouldValidate: true })
                }
              />

              <div className="space-y-4">
                <TextInput label="HbA1c Level (%)" name="hbA1c" type="number" />
                <TextInput
                  label="Duration of Diabetes (years)"
                  type="number"
                  name="duration"
                />
                <TextInput
                  label="Systolic BP (mmHg)"
                  type="number"
                  name="systolicBp"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-700 hover:bg-blue-600 text-white font-semibold py-3 rounded-xl transition-all shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center gap-2"
              >
                {isSubmitting ? "Processing..." : "Analyze & Predict Risk"}
              </button>
            </form>
          </FormProvider>
        </div>

        {/* RIGHT: Results */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8 flex flex-col h-full">
          <h2 className="text-xl font-medium text-gray-600 mb-6 pb-2 border-b border-gray-200">
            Analysis Report
          </h2>
          <PredictorResult result={result} />
        </div>
      </main>

      {/* Floating Chat */}
      <ChatBox />
    </div>
  );
};

export default Predictor;

import { Activity, AlertTriangle } from "lucide-react";
import { type PredictionResult } from "../lib/validation/predictionSchema";

interface ResultDisplayProps {
  result: PredictionResult | null;
}

const PredictorResult: React.FC<ResultDisplayProps> = ({ result }) => {
  if (!result) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center text-center text-gray-400 h-full min-h-[400px]">
        <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-4">
          <Activity size={32} className="text-gray-300" />
        </div>
        <p className="text-lg font-medium text-gray-800">
          No prediction generated yet
        </p>
        <p className="text-sm max-w-xs mt-2 text-gray-500">
          Complete the patient form and upload an image to receive AI-assisted
          analysis.
        </p>
      </div>
    );
  }

  const isConfident = result.confidence > 50;

  return (
    <div
      className={`flex-1 transform transition-all duration-700 ease-out ${
        result ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <div className="text-center mb-8 mt-4">
        <span
          className={`text-6xl font-bold tracking-tighter ${
            isConfident ? "text-rose-500" : "text-emerald-500"
          }`}
        >
          {(result.confidence * 100).toFixed(2)}%
        </span>
        <p className="text-gray-500 font-medium mt-2">Confidence</p>
      </div>
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="h-2 bg-gray-100 rounded-full overflow-hidden relative">
          <div
            className={`h-full rounded-full transition-all duration-1000 ease-out ${
              isConfident ? "bg-rose-500" : "bg-emerald-500"
            }`}
            style={{ width: `${(result.confidence * 100).toFixed(2)}%` }}
          />
        </div>
      </div>

      <div className="grid  gap-4 mb-8">
        <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 text-center">
          <p className=" text-gray-500 uppercase font-bold tracking-wider mb-1">
            Severity
          </p>
          <p className="font-bold text-gray-800">{result.severity}</p>
        </div>
      </div>

      <div className="p-4 rounded-xl border-l-4 bg-gray-50 border-gray-500 text-gray-700">
        <div className="flex gap-3">
          <AlertTriangle size={30} className="shrink-0" />
          <div>
            <p className="font-bold  mb-1">Recommendation</p>
            <p className=" text-gray-800 opacity-90">{result.recommendation}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PredictorResult;

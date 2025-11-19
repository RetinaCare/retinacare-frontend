import { z } from "zod";

export const predictionSchema = z.object({
  hbA1c: z.preprocess((val) => Number(val), z.number().min(0).max(20)),
  duration: z.preprocess((val) => Number(val), z.number().min(0)),
  systolicBp: z.preprocess((val) => Number(val), z.number().min(50).max(300)),
  image: z
    .instanceof(FileList)
    .refine((files) => files.length === 1, "Retinal image is required.")
    .refine((files) => files[0].size <= 10_000_000, "Max file size is 10MB.")
    .refine(
      (files) => ["image/png", "image/jpeg"].includes(files[0].type),
      "Only PNG or JPEG images are allowed."
    ),
});

// 1. INPUT TYPE: The raw data RHF receives (strings for numbers, any for FileList)
export type PredictionFormInput = z.input<typeof predictionSchema>;

// 2. OUTPUT TYPE: The clean, validated data used in onSubmit
export type PredictionFormData = z.infer<typeof predictionSchema>;
export interface PredictionResult {
  riskScore: number;
  severity: string;
  confidence: number;
  recommendation: string;
}

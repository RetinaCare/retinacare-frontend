import { z } from "zod";

export const predictionSchema = z.object({
  hbA1c: z.preprocess(
    (val) => Number(val),
    z
      .number()
      .min(4, "HbA1c must be at least 4%")
      .max(11, "HbA1c cannot exceed 11%")
  ),
  duration: z.preprocess(
    (val) => Number(val),
    z.number().min(1, "it must be atleast 1 year")
  ),
  systolicBp: z.preprocess(
    (val) => Number(val),
    z
      .number()
      .min(70, "Systolic BP must be ≥ 70 mmHg")
      .max(250, "Systolic BP must be ≤ 250 mmHg")
  ),
  image: z
    .custom<FileList>((val) => val instanceof FileList, {
      message: "Please upload a retinal image.",
    })
    .refine((files) => files.length === 1, {
      message: "Retinal image is required.",
    })
    .refine((files) => files[0].size <= 10_000_000, {
      message: "Max file size is 10MB.",
    })
    .refine((files) => ["image/png", "image/jpeg"].includes(files[0].type), {
      message: "Only PNG or JPEG images are allowed.",
    }),
});

export type PredictionFormInput = z.input<typeof predictionSchema>;

export type PredictionFormData = z.infer<typeof predictionSchema>;
export interface PredictionResult {
  severity: string;
  confidence: number;
  recommendation: string;
}

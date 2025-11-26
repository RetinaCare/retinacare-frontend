import { z } from "zod";

export const predictionSchema = z.object({
  hbA1c: z.preprocess((val) => Number(val), z.number().min(4).max(11)),
  duration: z.preprocess((val) => Number(val), z.number().min(1)),
  systolicBp: z.preprocess((val) => Number(val), z.number().min(70).max(250)),
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

// 1. INPUT TYPE: The raw data RHF receives (strings for numbers, any for FileList)
export type PredictionFormInput = z.input<typeof predictionSchema>;

// 2. OUTPUT TYPE: The clean, validated data used in onSubmit
export type PredictionFormData = z.infer<typeof predictionSchema>;
export interface PredictionResult {
  severity: string;
  confidence: number;
  recommendation: string;
}

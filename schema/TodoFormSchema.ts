import z from "zod";

export const TodoFormSchema = z.object({
  title: z.string().min(3, { message: "Title must be at least 3 characters." }),
  description: z
    .string()
    .max(100, { message: "Description must be at most 100 characters." })
    .optional(),
  completed: z.boolean(),
});

export type TodoFormValue = z.infer<typeof TodoFormSchema>;

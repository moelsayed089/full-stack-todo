"use server";
import { TodoFormValue } from "@/schema/TodoFormSchema";
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";

const prisma = new PrismaClient();

export const getTodoListAction = async () => {
  const todos = await prisma.todo.findMany({ orderBy: { createdAt: "desc" } });
  return todos;
};
export const createTodoAction = async (data: TodoFormValue) => {
  const todo = await prisma.todo.create({
    data: {
      title: data.title,
      description: data.description,
      completed: data.completed,
    },
  });
  revalidatePath("/");
  return todo;
};
export const updateTodoAction = async () => {};

export const deleteTodoAction = async (id: string) => {
  await prisma.todo.delete({
    where: {
      id: id,
    },
  });
  revalidatePath("/");
};

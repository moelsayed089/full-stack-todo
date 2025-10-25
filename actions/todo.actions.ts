"use server";
import { TodoFormValue } from "@/schema/TodoFormSchema";
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";

const prisma = new PrismaClient();

export const getUserTodoListAction = async (userId: string | null) => {
  const todos = await prisma.todo.findMany({
    where: {
      user_id: userId as string,
    },
    orderBy: { createdAt: "desc" },
  });
  return todos;
};
export const createTodoAction = async (
  data: TodoFormValue,
  userId: string | null
) => {
  const todo = await prisma.todo.create({
    data: {
      title: data.title,
      description: data.description,
      completed: data.completed,
      user_id: userId as string,
    },
  });
  revalidatePath("/");
  return todo;
};
export const updateTodoAction = async (id: string, data: TodoFormValue) => {
  await prisma.todo.update({
    where: {
      id: id,
    },
    data: {
      title: data.title,
      description: data.description,
      completed: data.completed,
    },
  });
  revalidatePath("/");
};

export const deleteTodoAction = async (id: string) => {
  await prisma.todo.delete({
    where: {
      id: id,
    },
  });
  revalidatePath("/");
};

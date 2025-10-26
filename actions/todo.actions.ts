"use server";

import { TodoFormValue } from "@/schema/TodoFormSchema";
import { prisma } from "@/lib/db";
import { revalidatePath } from "next/cache";

export const getUserTodoListAction = async (userId: string | null) => {
  if (!userId) {
    console.log("No userId provided to getUserTodoListAction");
    return [];
  }

  try {
    const todos = await prisma.todo.findMany({
      where: {
        user_id: userId,
      },
      orderBy: { createdAt: "desc" },
    });

    return todos;
  } catch (error) {
    console.error("Error fetching todos:", error);
    return [];
  }
};

export const createTodoAction = async (
  data: TodoFormValue,
  userId: string | null
) => {
  if (!userId) {
    throw new Error("User ID is required to create a todo");
  }

  try {
    const todo = await prisma.todo.create({
      data: {
        title: data.title,
        description: data.description,
        completed: data.completed,
        user_id: userId,
      },
    });

    revalidatePath("/");
    return todo;
  } catch (error) {
    console.error("Error creating todo:", error);
    throw new Error("Failed to create todo");
  }
};

export const updateTodoAction = async (id: string, data: TodoFormValue) => {
  try {
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
  } catch (error) {
    console.error("Error updating todo:", error);
    throw new Error("Failed to update todo");
  }
};

export const deleteTodoAction = async (id: string) => {
  try {
    await prisma.todo.delete({
      where: {
        id: id,
      },
    });

    revalidatePath("/");
  } catch (error) {
    console.error("Error deleting todo:", error);
    throw new Error("Failed to delete todo");
  }
};

import type { Metadata } from "next";
import { getUserTodoListAction } from "@/actions/todo.actions";
import AddTodoForm from "@/components/AddTodoForm";
import TodoTable from "@/components/TodoTable";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Todo App | Manage Your Tasks Easily",
  description:
    "A simple and interactive Todo App built with Next.js. Add, edit, and delete your daily tasks to stay organized.",
  openGraph: {
    title: "Todo App | Manage Your Tasks Easily",
    description:
      "Organize your daily tasks with this simple Todo App. Built using Next.js and Clerk authentication.",
    url: "https://fullstack-nextjs-todo-dev-mohamed.vercel.app/coverTodo.png",
    siteName: "Todo App",
    images: [
      {
        url: "https://fullstack-nextjs-todo-dev-mohamed.vercel.app/coverTodo.png",
        width: 1200,
        height: 630,
        alt: "Preview of Todo App",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Todo App | Manage Your Tasks Easily",
    description:
      "A clean and intuitive Todo App that helps you stay productive every day.",
    images: [
      "https://fullstack-nextjs-todo-dev-mohamed.vercel.app/coverTodo.png",
    ],
  },
  alternates: {
    canonical: "https://fullstack-nextjs-todo-dev-mohamed.vercel.app",
  },
};
async function Home() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const todos = await getUserTodoListAction(userId);

  return (
    <div className="container mt-10">
      <h1 className="text-2xl font-medium text-center mb-5">
        Welcome to Todo App 🚀
      </h1>
      <div className="mb-4">
        <AddTodoForm userId={userId} />
      </div>
      <TodoTable todos={todos} />
    </div>
  );
}

export default Home;

import { getUserTodoListAction } from "@/actions/todo.actions";
import AddTodoForm from "@/components/AddTodoForm";
import TodoTable from "@/components/TodoTable";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

async function Home() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const todos = await getUserTodoListAction(userId);

  return (
    <div className="container mt-24">
      <h1 className="text-3xl font-bold text-center">
        Welcome to Todo App 🚀 {userId}
      </h1>
      <div className="mb-4">
        <AddTodoForm userId={userId} />
      </div>
      <TodoTable todos={todos} />
    </div>
  );
}

export default Home;

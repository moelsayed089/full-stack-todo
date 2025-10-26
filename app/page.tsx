import { getUserTodoListAction } from "@/actions/todo.actions";
import AddTodoForm from "@/components/AddTodoForm";
import TodoTable from "@/components/TodoTable";
import { auth } from "@clerk/nextjs/server";

async function Home() {
  const { userId } = await auth();

  if (!userId) {
    return (
      <div className="container mt-24">
        <h1 className="text-3xl font-bold text-center">
          Please sign in to access your todos
        </h1>
      </div>
    );
  }

  const todos = await getUserTodoListAction(userId);

  return (
    <div className="container mt-24">
      <h1 className="text-3xl font-bold text-center">Welcome to Todo App</h1>
      <div className="mb-4">
        <AddTodoForm userId={userId} />
      </div>
      <TodoTable todos={todos} />
    </div>
  );
}

export default Home;

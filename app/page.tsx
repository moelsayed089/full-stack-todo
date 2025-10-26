import { getUserTodoListAction } from "@/actions/todo.actions";
import AddTodoForm from "@/components/AddTodoForm";
import TodoTable from "@/components/TodoTable";
import { auth } from "@clerk/nextjs/server";
async function Home() {
  const { userId } = await auth();
  const todo = await getUserTodoListAction(userId);
  return (
    <div className="container mt-24 ">
      <div className="mb-4">
        <AddTodoForm userId={userId} />
      </div>
      <TodoTable todos={todo} />
    </div>
  );
}

export default Home;

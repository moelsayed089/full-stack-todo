import { getTodoListAction } from "@/actions/todo.actions";
import AddTodoForm from "@/components/AddTodoForm";
import TodoTable from "@/components/TodoTable";
import { auth } from "@clerk/nextjs/server";

async function Home() {
  const todo = await getTodoListAction();
  const userid = auth();
  console.log(userid);
  return (
    <div className="container mt-24 ">
      <div className="mb-4">
        <AddTodoForm />
      </div>

      <TodoTable todos={todo} />
    </div>
  );
}

export default Home;

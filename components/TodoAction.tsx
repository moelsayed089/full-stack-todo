"use client";
import DeleteTodoDialog from "./DeletTodoDialog";
import EditTodoForm from "./EditTodoForm";
import { ITodo } from "@/interface/todo";

const TodoAction = ({ todos }: { todos: ITodo }) => {
  return (
    <div className="flex items-center space-x-3 justify-end">
      <EditTodoForm todos={todos} />
      <DeleteTodoDialog id={todos.id} />
    </div>
  );
};

export default TodoAction;

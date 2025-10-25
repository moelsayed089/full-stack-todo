"use client";
import { Trash } from "lucide-react";
import { Button } from "./ui/button";
import Spinner from "./Loader";
import { deleteTodoAction } from "@/actions/todo.actions";
import { useState } from "react";
import EditTodoForm from "./EditTodoForm";
import { ITodo } from "@/interface/todo";

const TodoAction = ({ todos }: { todos: ITodo }) => {
  const [isLoading, setIsLoading] = useState(false);
  const onDelete = async (id: string) => {
    setIsLoading(true);
    await deleteTodoAction(id);
    setIsLoading(false);
  };
  return (
    <div className="flex items-center space-x-3 justify-end ">
      <EditTodoForm todos={todos} />
      <Button
        size={"icon"}
        variant={"destructive"}
        onClick={() => onDelete(todos.id)}
      >
        {isLoading ? <Spinner /> : <Trash size={16} />}
      </Button>
    </div>
  );
};

export default TodoAction;

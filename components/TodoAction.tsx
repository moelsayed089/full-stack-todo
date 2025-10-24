"use client";
import { Pen, Trash } from "lucide-react";
import { Button } from "./ui/button";
import Spinner from "./Loader";
import { deleteTodoAction } from "@/actions/todo.actions";
import { useState } from "react";

const TodoAction = ({ id }: { id: string }) => {
  const [isLoading, setIsLoading] = useState(false);
  const onDelete = async (id: string) => {
    setIsLoading(true);
    await deleteTodoAction(id);
    setIsLoading(false);
  };
  return (
    <div className="flex items-center space-x-3 justify-end ">
      <Button size={"icon"}>
        <Pen size={16} />
      </Button>
      <Button
        size={"icon"}
        variant={"destructive"}
        onClick={() => onDelete(id)}
      >
        {isLoading ? <Spinner /> : <Trash size={16} />}
      </Button>
    </div>
  );
};

export default TodoAction;

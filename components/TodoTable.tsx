"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "./ui/button";
import { Pen, Trash } from "lucide-react";
import { ITodo } from "@/interface/todo";
import { Badge } from "./ui/badge";
import { deleteTodoAction } from "@/actions/todo.actions";
import { useState } from "react";
import Spinner from "./Loader";

function TodoTable({ todos }: { todos: ITodo[] }) {
  const [isLoading, setIsLoading] = useState(false);
  const onDelete = async (id: string) => {
    setIsLoading(true);
    await deleteTodoAction(id);
    setIsLoading(false);
  };
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Title</TableHead>
          <TableHead>Completed</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {todos.map((todoItem) => (
          <TableRow key={todoItem.id}>
            <TableCell className="font-medium">{todoItem.id}</TableCell>
            <TableCell>{todoItem.title}</TableCell>
            <TableCell>
              {todoItem.completed ? (
                <Badge variant="default">Completed</Badge>
              ) : (
                <Badge variant="destructive">UnCompleted</Badge>
              )}
            </TableCell>
            <TableCell>
              <div className="flex items-center space-x-3 justify-end ">
                <Button size={"icon"}>
                  <Pen size={16} />
                </Button>
                <Button
                  size={"icon"}
                  variant={"destructive"}
                  onClick={() => onDelete(todoItem.id)}
                >
                  {isLoading ? <Spinner /> : <Trash size={16} />}
                </Button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
export default TodoTable;

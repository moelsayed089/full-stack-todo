import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { ITodo } from "@/interface/todo";
import { Badge } from "./ui/badge";
import TodoAction from "./TodoAction";

function TodoTable({ todos }: { todos: ITodo[] }) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Title</TableHead>
          <TableHead>Completed</TableHead>
          <TableHead className="text-right">Created At</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {todos.map((todoItem) => (
          <TableRow key={todoItem?.id}>
            <TableCell className="font-medium">{todoItem?.id}</TableCell>
            <TableCell>{todoItem?.title}</TableCell>
            <TableCell>
              {todoItem?.completed ? (
                <Badge variant="default">Completed</Badge>
              ) : (
                <Badge variant="destructive">UnCompleted</Badge>
              )}
            </TableCell>
            <TableCell className="text-right">
              {todoItem?.createdAt.toLocaleDateString()}
            </TableCell>
            <TableCell>
              <TodoAction todos={todoItem} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={4}>Total</TableCell>
          <TableCell className="text-right">
            {!todos?.length ? 0 : todos?.length}
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
export default TodoTable;

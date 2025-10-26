"use client";
import { Button } from "@/components/ui/button";
import { Pen } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DialogClose } from "@radix-ui/react-dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { TodoFormSchema, TodoFormValue } from "@/schema/TodoFormSchema";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "./ui/label";
import { useState } from "react";
import Spinner from "./Loader";
import { ITodo } from "@/interface/todo";
import { updateTodoAction } from "@/actions/todo.actions";
import { toast } from "sonner";

const EditTodoForm = ({ todos }: { todos: ITodo }) => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const form = useForm<TodoFormValue>({
    resolver: zodResolver(TodoFormSchema),
    defaultValues: {
      title: todos.title,
      description: todos.description as string,
      completed: todos.completed,
    },
  });

  const onSubmit = async (data: TodoFormValue) => {
    setLoading(true);
    try {
      await updateTodoAction(todos.id, data);
      toast("✅ Todo updated successfully", {
        duration: 4000,
      });
    } catch (error) {
      console.log("Failed to update todo:", error);
      toast("❌ Failed to update todo", {
        duration: 4000,
      });
    }

    setLoading(false);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <Pen size={16} />
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Todo</DialogTitle>
          <DialogDescription>
            Make changes to your todo item here. Click save when you&apos;re
            done.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 ">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Todo title" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Todo description"
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="completed"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="flex items-center  space-x-2 mb-3">
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        className="hover:cursor-pointer"
                      />
                      <Label>Completed</Label>
                    </div>
                  </FormControl>

                  <FormMessage />

                  <FormDescription>
                    Your to-do will be marked as UnCompleted by default unless
                    you check this
                  </FormDescription>
                </FormItem>
              )}
            />

            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline" type="button">
                  Cancel
                </Button>
              </DialogClose>
              <Button type="submit">
                {loading ? (
                  <>
                    <Spinner />
                    Updated
                  </>
                ) : (
                  "Update Todo"
                )}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default EditTodoForm;

export interface ITodo {
  title: string;
  description: string | null;
  completed: boolean;
  id: string;
  user_id: string | null;
  createdAt: Date;
}

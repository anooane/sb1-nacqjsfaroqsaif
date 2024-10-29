export interface Todo {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  category?: string;
  dueDate?: Date;
  tags?: string[];
  createdAt: Date;
}

export interface TodoCategory {
  id: string;
  name: string;
  color: string;
}
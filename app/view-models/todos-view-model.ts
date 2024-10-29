import { Observable, ObservableArray } from '@nativescript/core';
import { Todo } from '../models/todo.model';

export class TodosViewModel extends Observable {
  private _todos: ObservableArray<Todo>;
  private _darkMode: boolean;

  constructor() {
    super();
    this._todos = new ObservableArray<Todo>();
    this._darkMode = false;
    this.loadInitialData();
  }

  get todos(): ObservableArray<Todo> {
    return this._todos;
  }

  get darkMode(): boolean {
    return this._darkMode;
  }

  set darkMode(value: boolean) {
    if (this._darkMode !== value) {
      this._darkMode = value;
      this.notifyPropertyChange('darkMode', value);
    }
  }

  addTodo(title: string, description?: string, category?: string) {
    const todo: Todo = {
      id: Date.now().toString(),
      title,
      description,
      category,
      completed: false,
      createdAt: new Date(),
    };
    this._todos.unshift(todo);
  }

  toggleTodoComplete(id: string) {
    const todoIndex = this._todos.findIndex(todo => todo.id === id);
    if (todoIndex !== -1) {
      const todo = this._todos.getItem(todoIndex);
      todo.completed = !todo.completed;
      this._todos.setItem(todoIndex, todo);
    }
  }

  deleteTodo(id: string) {
    const todoIndex = this._todos.findIndex(todo => todo.id === id);
    if (todoIndex !== -1) {
      this._todos.splice(todoIndex, 1);
    }
  }

  private loadInitialData() {
    // Add sample data
    this.addTodo('مهمة جديدة', 'وصف المهمة', 'شخصي');
    this.addTodo('التسوق', 'شراء البقالة', 'منزل');
  }
}
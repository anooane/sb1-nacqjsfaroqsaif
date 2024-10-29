import { EventData, Page, ShowModalOptions } from '@nativescript/core';
import { TodosViewModel } from './view-models/todos-view-model';

let viewModel: TodosViewModel;

export function navigatingTo(args: EventData) {
  const page = <Page>args.object;
  
  if (!viewModel) {
    viewModel = new TodosViewModel();
  }
  
  page.bindingContext = viewModel;
}

export function showAddTodoDialog() {
  const options: ShowModalOptions = {
    context: {},
    closeCallback: (title: string, description: string) => {
      if (title) {
        viewModel.addTodo(title, description);
      }
    },
    fullscreen: true
  };
  
  const page = <Page>viewModel.page;
  page.showModal('modals/add-todo/add-todo-page', options);
}
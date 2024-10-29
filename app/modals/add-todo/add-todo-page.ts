import { EventData, Page, ShownModallyData } from '@nativescript/core';
import { AddTodoViewModel } from './add-todo-view-model';

let closeCallback: Function;

export function onShownModally(args: ShownModallyData) {
  const page = <Page>args.object;
  closeCallback = args.closeCallback;
  
  page.bindingContext = new AddTodoViewModel(closeCallback);
}
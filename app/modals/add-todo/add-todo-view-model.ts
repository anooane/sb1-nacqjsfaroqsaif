import { Observable } from '@nativescript/core';

export class AddTodoViewModel extends Observable {
  private _title: string = '';
  private _description: string = '';
  private _closeCallback: Function;

  constructor(closeCallback: Function) {
    super();
    this._closeCallback = closeCallback;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    if (this._title !== value) {
      this._title = value;
      this.notifyPropertyChange('title', value);
    }
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    if (this._description !== value) {
      this._description = value;
      this.notifyPropertyChange('description', value);
    }
  }

  save() {
    if (this._title.trim()) {
      this._closeCallback(this._title.trim(), this._description.trim());
    }
  }

  close() {
    this._closeCallback();
  }
}
import { computed, observable } from 'mobx-angular';
import { Injectable } from '@angular/core';
import { makeObservable } from 'mobx';

@Injectable({
  providedIn: 'root',
})
export default class UserDataStore {
  @observable public firstName?: string;
  @observable public lastName?: string;
  @observable public email?: string;

  constructor() {
    makeObservable(this);
  }

  @computed get fullName() {
    return `${this.firstName ?? ''} ${this.lastName ?? ''}`;
  }
}

import { Injectable } from '@angular/core';

@Injectable()
export class HeaderService {
  private title: string;

  constructor() {}

  setTitle(value: string) {
    this.title = value;
  }
  getTitle() {
    return this.title;
  }
}

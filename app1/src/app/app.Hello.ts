import { Component } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}</h1>`,
})
export class Hello  { name = 'To Angular'; }

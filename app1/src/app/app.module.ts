import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Hello }  from './app.Hello';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ Hello ],
  bootstrap:    [ Hello ]
})
export class AppModule { }

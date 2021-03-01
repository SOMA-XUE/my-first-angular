/*
 * @Author: your name
 * @Date: 2021-03-01 16:02:12
 * @LastEditTime: 2021-03-01 18:09:02
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \my-first-angular\src\app\app.module.ts
 */
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

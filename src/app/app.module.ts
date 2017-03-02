import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { VertragComponent } from './vertrag/vertrag.component';
import { TarifierungComponent } from './tarifierung/tarifierung.component';
import { VnComponent } from './vn/vn.component';



@NgModule({
  declarations: [
    AppComponent,
    VertragComponent,
    TarifierungComponent,
    VnComponent   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

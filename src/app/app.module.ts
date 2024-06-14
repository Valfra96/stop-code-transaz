import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TransListComponent } from './components/trans-list/trans-list.component';
import { TransItemComponent } from './components/trans-item/trans-item.component';

@NgModule({
  declarations: [
    AppComponent,
    TransListComponent,
    TransItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

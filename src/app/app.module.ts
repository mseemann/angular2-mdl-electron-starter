import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MdlModule } from 'angular2-mdl';

@NgModule({
  imports: [
    HttpModule,
    AppRoutingModule,
    MdlModule
  ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ],
})
export class AppModule { }

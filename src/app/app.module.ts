import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import {ProductComponent} from './product/product.component';
import { AddFormComponent} from './product/addform.component';

// import { JasperComponent } from './new.component';
// import { OrillaComponent } from './second.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    AddFormComponent
    // JasperComponent,
    // OrillaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

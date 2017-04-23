import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SingleDemoComponent } from './single-demo/single-demo.component';
import { SelectModule } from 'ng2-select';
import { MultipleDemoComponent } from './multiple-demo/multiple-demo.component';
import { ChildrenDemoComponent } from './children-demo/children-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    SingleDemoComponent,
    MultipleDemoComponent,
    ChildrenDemoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

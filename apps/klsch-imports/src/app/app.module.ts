import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { MyButtonComponent } from './my-button/my-button.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    MyButtonComponent,
    ToolbarComponent,
    Page1Component,
    Page2Component
  ],
  imports: [
    BrowserModule,
    NxModule.forRoot(),
    FontAwesomeModule,
    RouterModule.forRoot([
      {
        path: 'first',
        component: Page1Component
      },
      {
        path: 'second',
        component: Page2Component
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

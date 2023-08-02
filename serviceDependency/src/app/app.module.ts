import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularComponent } from './angular/angular.component';
import { JavascriptComponent } from './javascript/javascript.component';
// import { UserDetailComponent } from './user-detail/user-detail.component';
// import { AllUserComponent } from './all-user/all-user.component';

@NgModule({
  declarations: [
    AppComponent,
    AngularComponent,
    JavascriptComponent,
    // UserDetailComponent,
    // AllUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

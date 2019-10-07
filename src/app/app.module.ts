import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SpendingsModule } from './spendings/spendings.module';
import { Routes, RouterModule } from '@angular/router';
import { SpendingListComponent } from './spendings/spending-list/spending-list.component';
import { AddSpendingComponent } from './spendings/add-spending/add-spending.component';
import { HeaderComponent } from './layout/header/header.component';
import { AuthModule } from './auth/auth.module';
import { LoginComponent } from './auth/login/login.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { RegisterComponent } from './auth/register/register.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: "", component: SpendingListComponent },
  { path: "add", component: AddSpendingComponent, canActivate: [AuthGuard] },
  { path: "addSpending", redirectTo: "add"},
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "forgotpassword", component: ForgotPasswordComponent },
  { path: "**", redirectTo: "" }, /* IN THE END */
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    SpendingsModule,
    AuthModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LiberadoComponent } from './liberado/liberado.component';
import { ProtegidoComponent } from './protegido/protegido.component';


const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'protegido', component: ProtegidoComponent, canActivate: [AuthGuard] },
  { path: 'liberado', component: LiberadoComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LiberadoComponent,
    ProtegidoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

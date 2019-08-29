import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DetailComponent } from './detail/detail.component';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { AddContactComponent } from './components/add-contact/add-contact.component';
import { HttpClientModule } from "@angular/common/http"



const appRoutes: Routes = [
  { path: '', redirectTo: 'add-contact', pathMatch: 'full' },
  { path: 'add-contact', loadChildren: '../app/components/add-contact/add-contact.module#AddContactModule' },
  { path: 'edit-contact/:id', loadChildren: '../app/components/add-contact/add-contact.module#AddContactModule' },
  { path: 'contact-list', component: ListComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    DetailComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

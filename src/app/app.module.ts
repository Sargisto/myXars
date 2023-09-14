import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { TableItemsComponent } from './table-items/table-items.component';
import { AuthGuardAdmin } from './login/auth.guard';

const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'tableItems', canActivate: [AuthGuardAdmin], component: TableItemsComponent },
  // {
  //   path: 'main',
  //   component: MainComponent,
  //   children: [
  //     { path: 'Urls', component: UrlsCompComponent },
  //     { path: 'Parsers', component: ParsersCompComponent },
  //     { path: 'Keyword', component: KeywordCompComponent },
  //     { path: 'NotificationEmail', component: NotificationEmailComponent },
  //     { path: 'WhiteList', component: WhiteListComponent },

  //   ]
  // },
  { path: '**', component: LoginComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TableItemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [AuthGuardAdmin],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GestionMockService } from './mock/gestion.mock.service';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GestionComponent } from './gestion/gestion.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DepenseService } from './service/depense/depense.service';
import { SidebarComponent } from './sidebar/sidebar.component';
@NgModule({
  declarations: [
    AppComponent,
    GestionComponent,
    SidebarComponent,
    NavbarComponent,
    ContentComponent,
    DashboardComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,HttpClientModule
  ],
  providers: [GestionMockService, DepenseService],
  bootstrap: [AppComponent]
})
export class AppModule { }

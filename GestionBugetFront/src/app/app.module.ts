import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GestionMockService } from './mock/gestion.mock.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GestionComponent } from './gestion/gestion.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContentComponent } from './content/content.component';
@NgModule({
  declarations: [
    AppComponent,
    GestionComponent,
    SidebarComponent,
    NavbarComponent,
    ContentComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [GestionMockService],
  bootstrap: [AppComponent]
})
export class AppModule { }

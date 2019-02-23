import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/commons/navbar/navbar.component';
import { HomeComponent } from './components/views/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/views/about/about.component';
import { ProjectsComponent } from './components/views/projects/projects.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    AboutComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

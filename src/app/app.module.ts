import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowseComponent } from './browse/browse.component';
import { SoftwareComponent } from './software/software.component';
import { HelpComponent } from './help/help.component';
import { DeveloperComponent } from './developer/developer.component';
import { TutorialComponent } from './tutorial/tutorial.component';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    BrowseComponent,
    SoftwareComponent,
    HelpComponent,
    DeveloperComponent,
    TutorialComponent,
    SearchComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

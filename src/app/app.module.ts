import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowseComponent } from './browse/browse.component';
import { SoftwareComponent } from './software/software.component';
import { HelpComponent } from './help/help.component';
import { DeveloperComponent } from './developer/developer.component';
import { TutorialComponent } from './tutorial/tutorial.component';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './category/category.component';
import { AlphabetComponent } from './alphabet/alphabet.component';
import { TypeComponent } from './type/type.component';

@NgModule({
  declarations: [
    AppComponent,
    BrowseComponent,
    SoftwareComponent,
    HelpComponent,
    DeveloperComponent,
    TutorialComponent,
    SearchComponent,
    HomeComponent,
    CategoryComponent,
    AlphabetComponent,
    TypeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

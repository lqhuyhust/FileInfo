import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowseComponent } from './components/browse/browse.component';
import { SoftwareComponent } from './components/software/software.component';
import { HelpComponent } from './components/help/help.component';
import { DeveloperComponent } from './components/developer/developer.component';
import { TutorialComponent } from './components/tutorial/tutorial.component';
import { SearchComponent } from './components/search/search.component';
import { HomeComponent } from './components/home/home.component';
import { CategoryComponent } from './components/category/category.component';
import { AlphabetComponent } from './components/alphabet/alphabet.component';
import { TypeComponent } from './components/type/type.component';
import { ComponentsComponent } from './components/components.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';


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
    TypeComponent,
    ComponentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

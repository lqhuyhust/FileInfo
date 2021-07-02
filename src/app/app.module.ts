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
import { SoftGroupComponent } from './components/software/soft-group/soft-group.component';
import { SoftDetailComponent } from './components/software/soft-detail/soft-detail.component';
import { SoftBrowseComponent } from './components/software/soft-browse/soft-browse.component';
import { SoftCategoryComponent } from './components/software/soft-category/soft-category.component';
import { SoftListComponent } from './components/software/soft-list/soft-list.component';
import { SoftAlphabetComponent } from './components/software/soft-alphabet/soft-alphabet.component';


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
    ComponentsComponent,
    SoftGroupComponent,
    SoftDetailComponent,
    SoftBrowseComponent,
    SoftCategoryComponent,
    SoftListComponent,
    SoftAlphabetComponent
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

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: 'tutorial', component: TutorialComponent },
  { path: 'developer', component: DeveloperComponent },
  { path: 'help', component: HelpComponent },
  { path: 'browse', component: BrowseComponent },
  { path: 'software', component: SoftwareComponent },
  { path: 'filetypes/:id', component: CategoryComponent },
  { path: 'list/:id', component: AlphabetComponent },
  { path: 'extension/:id', component: TypeComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

const routes: Routes = [
  {
    path: '', component: ComponentsComponent, children: [
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
    ]
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

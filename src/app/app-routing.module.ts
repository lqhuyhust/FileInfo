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
import { SoftGroupComponent } from './components/software/soft-group/soft-group.component';
import { SoftDetailComponent } from './components/software/soft-detail/soft-detail.component';
import { SoftBrowseComponent } from './components/software/soft-browse/soft-browse.component';
import { SoftCategoryComponent } from './components/software/soft-category/soft-category.component';
import { SoftListComponent } from './components/software/soft-list/soft-list.component';
import { SoftAlphabetComponent } from './components/software/soft-alphabet/soft-alphabet.component';

const routes: Routes = [
  {
    path: '', component: ComponentsComponent, children: [
      { path: '', component: HomeComponent },
      { path: 'search', component: SearchComponent },
      { path: 'tutorial', component: TutorialComponent },
      { path: 'developer', component: DeveloperComponent },
      { path: 'help', component: HelpComponent },
      { path: 'browse', component: BrowseComponent },
      {
        path: 'software', component: SoftwareComponent, children: [
          { path: '', component: SoftListComponent },
          { path: 'browse', component: SoftBrowseComponent },
          { path: 'category/:id', component: SoftCategoryComponent },
          { path: 'list/:id', component: SoftAlphabetComponent },
          { path: 'group/:id', component: SoftGroupComponent },
          { path: ':id', component: SoftDetailComponent }
        ]
      },
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

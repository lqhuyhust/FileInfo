import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowseComponent } from './browse/browse.component';
import { SoftwareComponent } from './software/software.component';
import { HelpComponent } from './help/help.component';
import { DeveloperComponent } from './developer/developer.component';
import { TutorialComponent } from './tutorial/tutorial.component';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

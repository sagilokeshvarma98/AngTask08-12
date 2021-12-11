import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectDataComponent } from './components/project-data/project-data.component';
import { ViewProjectComponent } from './components/view-project/view-project.component';

const routes: Routes = [{
  path:"",
  component: ProjectDataComponent
},
{
  path:"view-project/:id",
  component: ViewProjectComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

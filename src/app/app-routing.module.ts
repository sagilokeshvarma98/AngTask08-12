import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProjectDataComponent } from './components/project-data/project-data.component';
import { ViewProjectComponent } from './components/view-project/view-project.component';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  {
    path: "",
    component: LoginComponent
  },
  {
    path: "login",
    redirectTo: "",
    pathMatch: "full"
  },
  {
    path: "home",
    component: HomeComponent,
    canActivate: [LoginGuard],
    children: [
      {
        path: "",
        component: ProjectDataComponent
      },
      {
        path: "view-project/:id",
        component: ViewProjectComponent
      },
      {
        path: "error",
        component: ErrorPageComponent
      }
    ]
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
